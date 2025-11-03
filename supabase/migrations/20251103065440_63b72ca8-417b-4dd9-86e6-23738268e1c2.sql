-- Drop existing storage policies for gallery bucket if they exist
drop policy if exists "Public can view gallery images" on storage.objects;
drop policy if exists "Admins can upload gallery images" on storage.objects;
drop policy if exists "Admins can update gallery images" on storage.objects;
drop policy if exists "Admins can delete gallery images" on storage.objects;

-- View policy (read) for everyone
create policy "Public can view gallery images"
  on storage.objects for select
  using (bucket_id = 'gallery');

-- Insert policy for admins
create policy "Admins can upload gallery images"
  on storage.objects for insert to authenticated
  with check (
    bucket_id = 'gallery' and exists (
      select 1 from public.admin_users au
      where au.user_id = auth.uid() and au.role = 'admin'
    )
  );

-- Update policy for admins
create policy "Admins can update gallery images"
  on storage.objects for update to authenticated
  using (
    bucket_id = 'gallery' and exists (
      select 1 from public.admin_users au
      where au.user_id = auth.uid() and au.role = 'admin'
    )
  );

-- Delete policy for admins
create policy "Admins can delete gallery images"
  on storage.objects for delete to authenticated
  using (
    bucket_id = 'gallery' and exists (
      select 1 from public.admin_users au
      where au.user_id = auth.uid() and au.role = 'admin'
    )
  );