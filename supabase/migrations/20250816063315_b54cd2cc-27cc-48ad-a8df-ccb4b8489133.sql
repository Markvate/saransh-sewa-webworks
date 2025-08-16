-- Create a simple admin login system without foreign key constraints
-- Just store credentials that can be used to access admin features

CREATE TABLE IF NOT EXISTS simple_admin_auth (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  username TEXT UNIQUE NOT NULL DEFAULT 'admin',
  password TEXT NOT NULL DEFAULT 'admin123',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Insert default admin credentials
INSERT INTO simple_admin_auth (username, password)
VALUES ('admin', 'admin123')
ON CONFLICT (username) DO NOTHING;

-- Enable RLS
ALTER TABLE simple_admin_auth ENABLE ROW LEVEL SECURITY;

-- Allow reading for authentication
CREATE POLICY "Allow admin authentication"
ON simple_admin_auth FOR SELECT
USING (true);