-- Create storage bucket for gallery photos
INSERT INTO storage.buckets (id, name, public) VALUES ('gallery', 'gallery', true);

-- Create gallery_photos table
CREATE TABLE public.gallery_photos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT NOT NULL,
  uploaded_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  is_featured BOOLEAN DEFAULT false
);

-- Enable RLS
ALTER TABLE public.gallery_photos ENABLE ROW LEVEL SECURITY;

-- Create policies for gallery photos
CREATE POLICY "Anyone can view gallery photos" 
ON public.gallery_photos 
FOR SELECT 
USING (true);

CREATE POLICY "Admin users can insert gallery photos" 
ON public.gallery_photos 
FOR INSERT 
WITH CHECK (
  EXISTS (
    SELECT 1 FROM auth.users 
    WHERE auth.users.id = auth.uid() 
    AND auth.users.email = 'Admin@saranshsewatrust.com'
  )
);

CREATE POLICY "Admin users can update gallery photos" 
ON public.gallery_photos 
FOR UPDATE 
USING (
  EXISTS (
    SELECT 1 FROM auth.users 
    WHERE auth.users.id = auth.uid() 
    AND auth.users.email = 'Admin@saranshsewatrust.com'
  )
);

CREATE POLICY "Admin users can delete gallery photos" 
ON public.gallery_photos 
FOR DELETE 
USING (
  EXISTS (
    SELECT 1 FROM auth.users 
    WHERE auth.users.id = auth.uid() 
    AND auth.users.email = 'Admin@saranshsewatrust.com'
  )
);

-- Create storage policies for gallery bucket
CREATE POLICY "Anyone can view gallery images" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'gallery');

CREATE POLICY "Admin can upload gallery images" 
ON storage.objects 
FOR INSERT 
WITH CHECK (
  bucket_id = 'gallery' AND 
  EXISTS (
    SELECT 1 FROM auth.users 
    WHERE auth.users.id = auth.uid() 
    AND auth.users.email = 'Admin@saranshsewatrust.com'
  )
);

CREATE POLICY "Admin can update gallery images" 
ON storage.objects 
FOR UPDATE 
USING (
  bucket_id = 'gallery' AND 
  EXISTS (
    SELECT 1 FROM auth.users 
    WHERE auth.users.id = auth.uid() 
    AND auth.users.email = 'Admin@saranshsewatrust.com'
  )
);

CREATE POLICY "Admin can delete gallery images" 
ON storage.objects 
FOR DELETE 
USING (
  bucket_id = 'gallery' AND 
  EXISTS (
    SELECT 1 FROM auth.users 
    WHERE auth.users.id = auth.uid() 
    AND auth.users.email = 'Admin@saranshsewatrust.com'
  )
);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_gallery_photos_updated_at
BEFORE UPDATE ON public.gallery_photos
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();