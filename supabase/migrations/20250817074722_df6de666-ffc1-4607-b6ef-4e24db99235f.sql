-- Remove the public SELECT policy that exposes admin credentials
DROP POLICY IF EXISTS "Allow admin authentication" ON public.simple_admin_auth;

-- Create a secure RLS policy that only allows admin users to view admin_users table
CREATE POLICY "Only authenticated admins can view admin users" 
ON public.admin_users 
FOR SELECT 
USING (auth.uid() = user_id);

-- Create a security definer function to safely check admin credentials
CREATE OR REPLACE FUNCTION public.authenticate_admin(
  username_input TEXT,
  password_input TEXT
) RETURNS BOOLEAN AS $$
DECLARE
  is_valid BOOLEAN := FALSE;
BEGIN
  -- Check credentials in simple_admin_auth table
  SELECT EXISTS(
    SELECT 1 
    FROM public.simple_admin_auth 
    WHERE username = username_input 
    AND password = password_input 
    AND is_active = true
  ) INTO is_valid;
  
  RETURN is_valid;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create a new RLS policy that prevents direct access to simple_admin_auth
CREATE POLICY "No direct access to admin auth table" 
ON public.simple_admin_auth 
FOR ALL 
USING (false);

-- Grant execute permission on the function to authenticated users only
GRANT EXECUTE ON FUNCTION public.authenticate_admin(TEXT, TEXT) TO authenticated;