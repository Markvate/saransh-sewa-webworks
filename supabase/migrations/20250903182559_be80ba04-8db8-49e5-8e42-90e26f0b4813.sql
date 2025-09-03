-- Create RLS policies for gallery_photos table

-- Allow everyone to view gallery photos
CREATE POLICY "Anyone can view gallery photos" 
ON gallery_photos 
FOR SELECT 
USING (true);

-- Allow admin users to insert gallery photos
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

-- Allow admin users to update gallery photos
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

-- Allow admin users to delete gallery photos
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