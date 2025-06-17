
-- Add your user account as an admin user
-- First, let's insert your user ID into the admin_users table
-- Your user ID from the auth logs is: 2e1f7ac0-18d9-4eb0-8397-376cd8e409e4

INSERT INTO public.admin_users (user_id, role) 
VALUES ('2e1f7ac0-18d9-4eb0-8397-376cd8e409e4', 'admin')
ON CONFLICT (user_id) DO NOTHING;
