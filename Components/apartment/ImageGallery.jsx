import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "תמונה לדוגמה — הסלון",
      title: "הסלון"
    },
    {
      url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "תמונה לדוגמה — המטבח",
      title: "המטבח"
    },
    {
      url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "תמונה לדוגמה — חדר השינה הראשי",
      title: "חדר השינה הראשי"
    },
    {
      url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "תמונה לדוגמה — המרפסת",
      title: "המרפסת"
    },
    {
      url: "https://images.unsplash.com/photo-1604709177225-055f99402ea3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "תמונה לדוגמה — חדר רחצה",
      title: "חדר רחצה"
    },
    {
      url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "תמונה לדוגמה — חדר ילדים",
      title: "חדר ילדים"
    },
    {
      url: "https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "תמונה לדוגמה — כניסה לבניין",
      title: "כניסה לבניין"
    },
    {
      url: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "תמונה לדוגמה — פינת עבודה",
      title: "פינת עבודה"
    }
  ];

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setSelectedImage(galleryImages[index]);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    let newIndex;
    if (direction === 'next') {
      newIndex = (currentImageIndex + 1) % galleryImages.length;
    } else {
      newIndex = currentImageIndex === 0 ? galleryImages.length - 1 : currentImageIndex - 1;
    }
    setCurrentImageIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryImages.map((image, index) => (
          <Card 
            key={index}
            className="overflow-hidden cursor-pointer group hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            onClick={() => openLightbox(index)}
          >
            <div className="aspect-square relative">
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-all duration-300 flex items-end">
                <div className="w-full p-4 bg-gradient-to-t from-slate-900/60 to-transparent">
                  <p className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {image.title}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={selectedImage !== null} onOpenChange={() => closeLightbox()}>
        <DialogContent className="max-w-4xl w-full p-0 bg-slate-900">
          {selectedImage && (
            <div className="relative">
              <img
                src={selectedImage.url}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              
              {/* Navigation Buttons */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-slate-900/50 text-white hover:bg-slate-900/70"
                onClick={() => navigateImage('prev')}
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-slate-900/50 text-white hover:bg-slate-900/70"
                onClick={() => navigateImage('next')}
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-6">
                <h3 className="text-white text-xl font-semibold">
                  {selectedImage.title}
                </h3>
                <p className="text-slate-300 text-sm">
                  {currentImageIndex + 1} מתוך {galleryImages.length}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}