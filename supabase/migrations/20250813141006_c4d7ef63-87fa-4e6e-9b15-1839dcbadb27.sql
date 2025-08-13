-- Create messages table for internal messaging
CREATE TABLE public.messages (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    sender_email TEXT NOT NULL,
    sender_name TEXT NOT NULL,
    recipient_email TEXT,
    subject TEXT NOT NULL,
    content TEXT NOT NULL,
    message_type TEXT NOT NULL DEFAULT 'contact', -- 'contact', 'inquiry', 'support'
    status TEXT NOT NULL DEFAULT 'unread', -- 'unread', 'read', 'replied'
    phone TEXT,
    is_admin_reply BOOLEAN NOT NULL DEFAULT false
);

-- Create email logs table for tracking sent emails
CREATE TABLE public.email_logs (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    recipient_email TEXT NOT NULL,
    recipient_name TEXT,
    subject TEXT NOT NULL,
    content TEXT NOT NULL,
    email_type TEXT NOT NULL, -- 'welcome', 'notification', 'reply'
    status TEXT NOT NULL DEFAULT 'pending', -- 'pending', 'sent', 'failed'
    error_message TEXT,
    sent_at TIMESTAMP WITH TIME ZONE,
    sent_by UUID REFERENCES auth.users(id)
);

-- Enable Row Level Security
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.email_logs ENABLE ROW LEVEL SECURITY;

-- Create policies for messages
CREATE POLICY "Admin users can view all messages" 
ON public.messages 
FOR SELECT 
USING (EXISTS (
    SELECT 1 FROM admin_users 
    WHERE admin_users.user_id = auth.uid()
));

CREATE POLICY "Anyone can submit messages" 
ON public.messages 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Admin users can update messages" 
ON public.messages 
FOR UPDATE 
USING (EXISTS (
    SELECT 1 FROM admin_users 
    WHERE admin_users.user_id = auth.uid()
));

-- Create policies for email logs
CREATE POLICY "Admin users can view email logs" 
ON public.email_logs 
FOR SELECT 
USING (EXISTS (
    SELECT 1 FROM admin_users 
    WHERE admin_users.user_id = auth.uid()
));

CREATE POLICY "Admin users can insert email logs" 
ON public.email_logs 
FOR INSERT 
WITH CHECK (EXISTS (
    SELECT 1 FROM admin_users 
    WHERE admin_users.user_id = auth.uid()
));

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates on messages
CREATE TRIGGER update_messages_updated_at
    BEFORE UPDATE ON public.messages
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

-- Create indexes for better performance
CREATE INDEX idx_messages_status ON public.messages(status);
CREATE INDEX idx_messages_type ON public.messages(message_type);
CREATE INDEX idx_messages_created_at ON public.messages(created_at DESC);
CREATE INDEX idx_email_logs_status ON public.email_logs(status);
CREATE INDEX idx_email_logs_created_at ON public.email_logs(created_at DESC);