-- Remove the public access policy for membership applications
DROP POLICY IF EXISTS "Anyone can view membership applications" ON public.membership_applications;

-- Add admin-only access policy for viewing membership applications
CREATE POLICY "Admin users can view membership applications" 
ON public.membership_applications 
FOR SELECT 
USING (EXISTS (
  SELECT 1 FROM admin_users 
  WHERE admin_users.user_id = auth.uid()
));

-- Add admin-only access policy for updating membership applications (for status management)
CREATE POLICY "Admin users can update membership applications" 
ON public.membership_applications 
FOR UPDATE 
USING (EXISTS (
  SELECT 1 FROM admin_users 
  WHERE admin_users.user_id = auth.uid()
));