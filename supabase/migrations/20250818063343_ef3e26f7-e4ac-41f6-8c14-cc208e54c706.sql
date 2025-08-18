-- Update admin email and create admin user directly
-- First, update the admin email in gallery_photos policies
DROP POLICY IF EXISTS "Admin users can delete gallery photos" ON public.gallery_photos;
DROP POLICY IF EXISTS "Admin users can insert gallery photos" ON public.gallery_photos;
DROP POLICY IF EXISTS "Admin users can update gallery photos" ON public.gallery_photos;

-- Create new policies with updated admin email
CREATE POLICY "Admin users can delete gallery photos" 
ON public.gallery_photos 
FOR DELETE 
USING (EXISTS (
  SELECT 1 FROM auth.users 
  WHERE users.id = auth.uid() 
  AND users.email = 'Saranshsewatrust@gmail.com'
));

CREATE POLICY "Admin users can insert gallery photos" 
ON public.gallery_photos 
FOR INSERT 
WITH CHECK (EXISTS (
  SELECT 1 FROM auth.users 
  WHERE users.id = auth.uid() 
  AND users.email = 'Saranshsewatrust@gmail.com'
));

CREATE POLICY "Admin users can update gallery photos" 
ON public.gallery_photos 
FOR UPDATE 
USING (EXISTS (
  SELECT 1 FROM auth.users 
  WHERE users.id = auth.uid() 
  AND users.email = 'Saranshsewatrust@gmail.com'
));

-- Update the create_admin_user function
DROP FUNCTION IF EXISTS public.create_admin_user();

CREATE OR REPLACE FUNCTION public.create_admin_user()
RETURNS TEXT
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  -- This function should be called manually by the admin
  -- The actual user creation should be done through the Supabase Auth API
  
  RETURN 'Admin user should be created through Supabase Auth with email: Saranshsewatrust@gmail.com and password: Sahil@6767';
END;
$$;