-- Insert admin user credentials into auth.users table
-- Note: This is typically done through Supabase dashboard or via API call
-- For now, we'll create a function that can be called to set up the admin

-- Create a function to handle admin signup
CREATE OR REPLACE FUNCTION public.create_admin_user()
RETURNS TEXT
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  -- This function should be called manually by the admin
  -- It will create the admin user with the specified email
  -- The actual user creation should be done through the Supabase Auth API
  
  RETURN 'Admin user should be created through Supabase Auth with email: Admin@saranshsewatrust.com and password: Sahil@6767';
END;
$$;