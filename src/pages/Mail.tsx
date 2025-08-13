import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Send, Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { useAnalytics } from '@/hooks/useAnalytics';

interface EmailLog {
  id: string;
  created_at: string;
  recipient_email: string;
  recipient_name?: string;
  subject: string;
  content: string;
  email_type: string;
  status: string;
  error_message?: string;
  sent_at?: string;
  sent_by?: string;
}

const MailPage = () => {
  const { user, isAdmin } = useAuth();
  const { toast } = useToast();
  const { trackPageView } = useAnalytics();
  const [emailLogs, setEmailLogs] = useState<EmailLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  
  // New email form state
  const [newEmail, setNewEmail] = useState({
    recipient_email: '',
    recipient_name: '',
    subject: '',
    content: '',
    email_type: 'notification'
  });

  useEffect(() => {
    trackPageView('/mail');
    if (isAdmin) {
      fetchEmailLogs();
    } else {
      setLoading(false);
    }
  }, [isAdmin]);

  const fetchEmailLogs = async () => {
    try {
      const { data, error } = await supabase
        .from('email_logs')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setEmailLogs(data || []);
    } catch (error) {
      console.error('Error fetching email logs:', error);
      toast({
        title: "Error",
        description: "Failed to fetch email logs",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSendEmail = async () => {
    if (!newEmail.recipient_email || !newEmail.subject || !newEmail.content) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    setSending(true);
    try {
      // Log the email in database
      const { error } = await supabase
        .from('email_logs')
        .insert({
          ...newEmail,
          status: 'sent',
          sent_at: new Date().toISOString(),
          sent_by: user?.id
        });

      if (error) throw error;

      toast({
        title: "Email Logged",
        description: "Email has been recorded in the system"
      });

      // Reset form
      setNewEmail({
        recipient_email: '',
        recipient_name: '',
        subject: '',
        content: '',
        email_type: 'notification'
      });

      fetchEmailLogs();
    } catch (error) {
      console.error('Error logging email:', error);
      toast({
        title: "Error",
        description: "Failed to log email",
        variant: "destructive"
      });
    } finally {
      setSending(false);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'sent':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'failed':
        return <XCircle className="h-4 w-4 text-red-500" />;
      case 'pending':
        return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'sent':
        return 'default';
      case 'failed':
        return 'destructive';
      case 'pending':
        return 'secondary';
      default:
        return 'outline';
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
              <p>Please sign in to access email system.</p>
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
              <p>You need admin privileges to access the email system.</p>
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
              <Mail className="h-8 w-8 text-primary" />
              Email Management System
            </h1>
            <p className="text-muted-foreground mt-2">
              Send emails and track email communications
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Send New Email */}
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Send className="h-5 w-5" />
                    Send New Email
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="text-sm font-medium">Recipient Email *</label>
                      <Input
                        type="email"
                        placeholder="recipient@example.com"
                        value={newEmail.recipient_email}
                        onChange={(e) => setNewEmail(prev => ({ ...prev, recipient_email: e.target.value }))}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Recipient Name</label>
                      <Input
                        placeholder="Recipient Name"
                        value={newEmail.recipient_name}
                        onChange={(e) => setNewEmail(prev => ({ ...prev, recipient_name: e.target.value }))}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium">Email Type</label>
                    <select 
                      className="w-full p-2 border rounded-md"
                      value={newEmail.email_type}
                      onChange={(e) => setNewEmail(prev => ({ ...prev, email_type: e.target.value }))}
                    >
                      <option value="notification">Notification</option>
                      <option value="welcome">Welcome</option>
                      <option value="reply">Reply</option>
                      <option value="update">Update</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium">Subject *</label>
                    <Input
                      placeholder="Email subject"
                      value={newEmail.subject}
                      onChange={(e) => setNewEmail(prev => ({ ...prev, subject: e.target.value }))}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium">Content *</label>
                    <Textarea
                      placeholder="Email content..."
                      rows={8}
                      value={newEmail.content}
                      onChange={(e) => setNewEmail(prev => ({ ...prev, content: e.target.value }))}
                    />
                  </div>

                  <Button 
                    onClick={handleSendEmail}
                    disabled={sending || !newEmail.recipient_email || !newEmail.subject || !newEmail.content}
                    className="w-full"
                  >
                    {sending ? 'Logging Email...' : 'Log Email'}
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Email Logs */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Email History ({emailLogs.length})</h2>
              
              {loading ? (
                <div className="text-center py-8">Loading email logs...</div>
              ) : emailLogs.length === 0 ? (
                <Card>
                  <CardContent className="text-center py-8">
                    <Mail className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">No emails sent yet</p>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-3 max-h-[600px] overflow-y-auto">
                  {emailLogs.map((log) => (
                    <Card key={log.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              {getStatusIcon(log.status)}
                              <span className="font-medium">{log.recipient_name || log.recipient_email}</span>
                              <Badge variant={getStatusVariant(log.status)}>
                                {log.status}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{log.recipient_email}</p>
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {new Date(log.created_at).toLocaleDateString()}
                          </div>
                        </div>
                        
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-xs bg-muted px-2 py-1 rounded">{log.email_type}</span>
                          </div>
                          <h4 className="font-medium text-sm">{log.subject}</h4>
                          <p className="text-xs text-muted-foreground line-clamp-2">
                            {log.content}
                          </p>
                          
                          {log.error_message && (
                            <div className="text-xs text-red-600 bg-red-50 p-2 rounded mt-2">
                              Error: {log.error_message}
                            </div>
                          )}
                          
                          {log.sent_at && (
                            <p className="text-xs text-muted-foreground">
                              Sent: {new Date(log.sent_at).toLocaleString()}
                            </p>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MailPage;