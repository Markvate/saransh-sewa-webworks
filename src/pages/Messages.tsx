import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { MessageCircle, Mail, Clock, User, Phone } from 'lucide-react';
import { useAnalytics } from '@/hooks/useAnalytics';

interface Message {
  id: string;
  created_at: string;
  updated_at: string;
  sender_name: string;
  sender_email: string;
  recipient_email?: string;
  phone?: string;
  subject: string;
  content: string;
  status: string;
  message_type: string;
  is_admin_reply: boolean;
}

const MessagesPage = () => {
  const { user, isAdmin } = useAuth();
  const { toast } = useToast();
  const { trackPageView } = useAnalytics();
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [replyContent, setReplyContent] = useState('');
  const [sending, setSending] = useState(false);

  useEffect(() => {
    trackPageView('/messages');
    if (isAdmin) {
      fetchMessages();
    } else {
      setLoading(false);
    }
  }, [isAdmin]);

  const fetchMessages = async () => {
    try {
      const { data, error } = await supabase
        .from('messages')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setMessages(data || []);
    } catch (error) {
      console.error('Error fetching messages:', error);
      toast({
        title: "Error",
        description: "Failed to fetch messages",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const markAsRead = async (messageId: string) => {
    try {
      const { error } = await supabase
        .from('messages')
        .update({ status: 'read' })
        .eq('id', messageId);

      if (error) throw error;
      
      setMessages(prev => 
        prev.map(msg => 
          msg.id === messageId ? { ...msg, status: 'read' } : msg
        )
      );
    } catch (error) {
      console.error('Error marking message as read:', error);
    }
  };

  const handleReply = async () => {
    if (!selectedMessage || !replyContent.trim()) return;

    setSending(true);
    try {
      // Insert reply as new message
      const { error: messageError } = await supabase
        .from('messages')
        .insert({
          sender_name: 'Saransh Sewa Trust Admin',
          sender_email: 'admin@saranshsewatrust.com',
          recipient_email: selectedMessage.sender_email,
          subject: `Re: ${selectedMessage.subject}`,
          content: replyContent,
          message_type: 'reply',
          status: 'read',
          is_admin_reply: true
        });

      if (messageError) throw messageError;

      // Update original message status
      const { error: updateError } = await supabase
        .from('messages')
        .update({ status: 'replied' })
        .eq('id', selectedMessage.id);

      if (updateError) throw updateError;

      toast({
        title: "Reply Sent",
        description: "Your reply has been recorded successfully"
      });

      setReplyContent('');
      setSelectedMessage(null);
      fetchMessages();
    } catch (error) {
      console.error('Error sending reply:', error);
      toast({
        title: "Error",
        description: "Failed to send reply",
        variant: "destructive"
      });
    } finally {
      setSending(false);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center pt-20">
          <Card className="w-96">
            <CardHeader>
              <CardTitle className="text-center">Access Denied</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p>Please sign in to access messages.</p>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center pt-20">
          <Card className="w-96">
            <CardHeader>
              <CardTitle className="text-center">Admin Access Required</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p>You need admin privileges to access messages.</p>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 pt-20 px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold flex items-center gap-2">
              <MessageCircle className="h-8 w-8 text-primary" />
              Messages & Communications
            </h1>
            <p className="text-muted-foreground mt-2">
              Manage and respond to messages from website visitors
            </p>
          </div>

          {loading ? (
            <div className="text-center py-8">Loading messages...</div>
          ) : (
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Messages List */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Inbox ({messages.length})</h2>
                {messages.length === 0 ? (
                  <Card>
                    <CardContent className="text-center py-8">
                      <Mail className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">No messages yet</p>
                    </CardContent>
                  </Card>
                ) : (
                  messages.map((message) => (
                    <Card 
                      key={message.id}
                      className={`cursor-pointer transition-colors ${
                        selectedMessage?.id === message.id ? 'border-primary' : ''
                      } ${message.status === 'unread' ? 'bg-blue-50/50' : ''}`}
                      onClick={() => {
                        setSelectedMessage(message);
                        if (message.status === 'unread') {
                          markAsRead(message.id);
                        }
                      }}
                    >
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <User className="h-4 w-4" />
                              <span className="font-medium">{message.sender_name}</span>
                              <Badge variant={
                                message.status === 'unread' ? 'default' :
                                message.status === 'replied' ? 'secondary' : 'outline'
                              }>
                                {message.status}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{message.sender_email}</p>
                            {message.phone && (
                              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <Phone className="h-3 w-3" />
                                {message.phone}
                              </div>
                            )}
                          </div>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            {new Date(message.created_at).toLocaleDateString()}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <h3 className="font-medium mb-2">{message.subject}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-3">
                          {message.content}
                        </p>
                      </CardContent>
                    </Card>
                  ))
                )}
              </div>

              {/* Message Detail & Reply */}
              <div className="space-y-4">
                {selectedMessage ? (
                  <>
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                          Message Details
                          <Badge variant={
                            selectedMessage.status === 'unread' ? 'default' :
                            selectedMessage.status === 'replied' ? 'secondary' : 'outline'
                          }>
                            {selectedMessage.status}
                          </Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <strong>From:</strong> {selectedMessage.sender_name} ({selectedMessage.sender_email})
                        </div>
                        {selectedMessage.phone && (
                          <div>
                            <strong>Phone:</strong> {selectedMessage.phone}
                          </div>
                        )}
                        <div>
                          <strong>Subject:</strong> {selectedMessage.subject}
                        </div>
                        <div>
                          <strong>Date:</strong> {new Date(selectedMessage.created_at).toLocaleString()}
                        </div>
                        <div>
                          <strong>Type:</strong> {selectedMessage.message_type}
                        </div>
                        <div>
                          <strong>Message:</strong>
                          <p className="mt-2 p-3 bg-muted rounded-md whitespace-pre-wrap">
                            {selectedMessage.content}
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    {selectedMessage.status !== 'replied' && (
                      <Card>
                        <CardHeader>
                          <CardTitle>Send Reply</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <Textarea
                            placeholder="Type your reply here..."
                            value={replyContent}
                            onChange={(e) => setReplyContent(e.target.value)}
                            rows={6}
                          />
                          <Button 
                            onClick={handleReply}
                            disabled={!replyContent.trim() || sending}
                            className="w-full"
                          >
                            {sending ? 'Sending...' : 'Send Reply'}
                          </Button>
                        </CardContent>
                      </Card>
                    )}
                  </>
                ) : (
                  <Card>
                    <CardContent className="text-center py-16">
                      <Mail className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">
                        Select a message to view details and reply
                      </p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MessagesPage;