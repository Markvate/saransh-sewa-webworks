
-- Create a table for membership applications
CREATE TABLE public.membership_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  address TEXT NOT NULL,
  occupation TEXT,
  motivation TEXT NOT NULL,
  volunteer_areas TEXT[] NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add Row Level Security (RLS) - making it public for now since this is for membership applications
ALTER TABLE public.membership_applications ENABLE ROW LEVEL SECURITY;

-- Create policy that allows anyone to INSERT membership applications
CREATE POLICY "Anyone can submit membership applications" 
  ON public.membership_applications 
  FOR INSERT 
  WITH CHECK (true);

-- Create policy that allows anyone to SELECT membership applications (you can restrict this later)
CREATE POLICY "Anyone can view membership applications" 
  ON public.membership_applications 
  FOR SELECT 
  USING (true);
