-- Drop existing incorrect policies and create correct ones
DROP POLICY IF EXISTS "Admin users can insert gallery photos" ON gallery_photos;
DROP POLICY IF EXISTS "Admin users can update gallery photos" ON gallery_photos;
DROP POLICY IF EXISTS "Admin users can delete gallery photos" ON gallery_photos;

-- Create correct policies using admin_users table
CREATE POLICY "Admin users can insert gallery photos" 
ON gallery_photos 
FOR INSERT 
WITH CHECK (
  EXISTS (
    SELECT 1 FROM admin_users 
    WHERE user_id = auth.uid() 
    AND role = 'admin'
  )
);

CREATE POLICY "Admin users can update gallery photos" 
ON gallery_photos 
FOR UPDATE 
USING (
  EXISTS (
    SELECT 1 FROM admin_users 
    WHERE user_id = auth.uid() 
    AND role = 'admin'
  )
);

CREATE POLICY "Admin users can delete gallery photos" 
ON gallery_photos 
FOR DELETE 
USING (
  EXISTS (
    SELECT 1 FROM admin_users 
    WHERE user_id = auth.uid() 
    AND role = 'admin'
  )
);