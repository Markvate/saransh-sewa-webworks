import { useState, useEffect } from 'react';
import { Camera, Upload, X, Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface GalleryPhoto {
  id: string;
  title: string;
  description: string | null;
  image_url: string;
  created_at: string;
  is_featured: boolean;
}

const Gallery = () => {
  const [photos, setPhotos] = useState<GalleryPhoto[]>([]);
  const [photosLoading, setPhotosLoading] = useState(true);
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { user, session, loading, isAdmin } = useAuth();
  
  // Enhanced debug logging
  console.log('Gallery Debug - Auth State:', { 
    userEmail: user?.email, 
    userId: user?.id,
    sessionExists: !!session,
    isLoading: loading,
    isAdmin, 
    userExists: !!user 
  });

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    try {
      const { data, error } = await supabase
        .from('gallery_photos')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPhotos(data || []);
    } catch (error) {
      console.error('Error fetching photos:', error);
      toast.error('Failed to load gallery photos');
    } finally {
      setPhotosLoading(false);
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const uploadPhoto = async () => {
    if (!selectedFile || !title.trim()) {
      toast.error('Please select a file and enter a title');
      return;
    }

    setUploading(true);
    try {
      // Upload to storage
      const fileExt = selectedFile.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const { error: uploadError } = await supabase.storage
        .from('gallery')
        .upload(fileName, selectedFile);

      if (uploadError) throw uploadError;

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('gallery')
        .getPublicUrl(fileName);

      // Save to database
      const { error: dbError } = await supabase
        .from('gallery_photos')
        .insert({
          title: title.trim(),
          description: description.trim() || null,
          image_url: publicUrl,
        });

      if (dbError) throw dbError;

      toast.success('Photo uploaded successfully!');
      setUploadDialogOpen(false);
      setTitle('');
      setDescription('');
      setSelectedFile(null);
      fetchPhotos();
    } catch (error) {
      console.error('Error uploading photo:', error);
      toast.error('Failed to upload photo');
    } finally {
      setUploading(false);
    }
  };

  const deletePhoto = async (photo: GalleryPhoto) => {
    if (!isAdmin) return;

    try {
      // Delete from storage
      const fileName = photo.image_url.split('/').pop();
      if (fileName) {
        await supabase.storage
          .from('gallery')
          .remove([fileName]);
      }

      // Delete from database
      const { error } = await supabase
        .from('gallery_photos')
        .delete()
        .eq('id', photo.id);

      if (error) throw error;

      toast.success('Photo deleted successfully!');
      fetchPhotos();
    } catch (error) {
      console.error('Error deleting photo:', error);
      toast.error('Failed to delete photo');
    }
  };

  if (loading) {
    return (
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading gallery...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Camera className="h-8 w-8 text-orange-500" />
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-900">
              फोटो गैलरी
            </h2>
          </div>
          <h3 className="text-3xl md:text-4xl font-poppins font-semibold text-orange-500 mb-4">
            Our <span className="text-orange-500">Photo Gallery</span>
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            हमारे कार्यों और समुदायिक सेवा की झलकियां • Glimpses of our work and community service
          </p>
          
          {/* Admin Upload Button */}
          {isAdmin && (
            <div className="mt-8">
              <Dialog open={uploadDialogOpen} onOpenChange={setUploadDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Photo
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>Upload New Photo</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Title *</label>
                      <Input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter photo title"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Description</label>
                      <Textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter photo description (optional)"
                        rows={3}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Photo *</label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleFileSelect}
                          className="hidden"
                          id="photo-upload"
                        />
                        <label htmlFor="photo-upload" className="cursor-pointer">
                          <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-sm text-gray-600">
                            {selectedFile ? selectedFile.name : 'Click to select photo'}
                          </p>
                        </label>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button
                        onClick={uploadPhoto}
                        disabled={uploading || !selectedFile || !title.trim()}
                        className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                      >
                        {uploading ? 'Uploading...' : 'Upload Photo'}
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => setUploadDialogOpen(false)}
                        disabled={uploading}
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          )}
        </div>

        {/* Photos Grid */}
        {photos.length === 0 ? (
          <div className="text-center py-12">
            <Camera className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <p className="text-xl text-gray-500">No photos in gallery yet</p>
            {isAdmin && (
              <p className="text-gray-400 mt-2">Upload the first photo to get started!</p>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {photos.map((photo, index) => (
              <Card 
                key={photo.id}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={photo.image_url}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  {/* Admin Delete Button */}
                  {isAdmin && (
                    <button
                      onClick={() => deletePhoto(photo)}
                      className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  )}
                  
                  {/* Featured Badge */}
                  {photo.is_featured && (
                    <div className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </div>
                  )}
                  
                  {/* Overlay with title and description */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h4 className="font-semibold text-lg mb-1">{photo.title}</h4>
                      {photo.description && (
                        <p className="text-sm opacity-90 line-clamp-2">{photo.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;