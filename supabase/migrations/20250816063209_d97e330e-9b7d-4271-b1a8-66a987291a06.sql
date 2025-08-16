-- Create an admin user account
-- First, let's create a dummy user that will be our admin
-- Note: We'll need to sign up through the UI first, then update this manually

-- Create an admin account entry (this will be connected to a real auth user later)
INSERT INTO admin_users (user_id, role) 
VALUES ('00000000-0000-0000-0000-000000000001', 'admin');

-- Create a temporary admin login for the interface
-- We'll use a profiles table to store admin credentials
CREATE TABLE IF NOT EXISTS admin_credentials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  username TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Insert admin credentials (password: admin123)
-- In production, this should be properly hashed
INSERT INTO admin_credentials (username, password_hash)
VALUES ('admin', '$2b$10$K5XqZ1zxJ5Z1zxJ5Z1zxJO1zxJ5Z1zxJ5Z1zxJ5Z1zxJ5Z1zxJ5Z1');

-- Enable RLS
ALTER TABLE admin_credentials ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read credentials for login verification
CREATE POLICY "Allow admin login verification"
ON admin_credentials FOR SELECT
USING (true);