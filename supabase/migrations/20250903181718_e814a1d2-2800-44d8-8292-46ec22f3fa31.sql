-- Insert the admin user into admin_users table
INSERT INTO admin_users (user_id, role) 
VALUES ('3e9ea490-6454-4a39-8f2b-84cd0f176307', 'admin')
ON CONFLICT (user_id) DO NOTHING;