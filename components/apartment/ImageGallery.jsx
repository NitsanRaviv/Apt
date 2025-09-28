import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

import salonAImage from "../../Images/salon1.png";
import salonBImage from "../../Images/salon2.png";
import salonCImage from "../../Images/salon3.png";
import salonDImage from "../../Images/salon4.png";
import salonEImage from "../../Images/salon5.png";
import salonFImage from "../../Images/salon6.png";
import kitAImage from "../../Images/kit1.png";
import kitBImage from "../../Images/kit2.png";
import kitCImage from "../../Images/kit3.png";
import balconyImage from "../../Images/balcony.png";
import roomAImage from "../../Images/room1.png";
import shellImage from "../../Images/shell.png";
import sunsetImage from "../../Images/sunset.png";
import toiletAImage from "../../Images/toilet1.png";
import wallImage from "../../Images/wall.png";

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    {
      url: salonAImage.src,
      title: "סלון"
    },
    {
      url: salonBImage.src,
      title: "סלון"
    },
    {
      url: salonFImage.src,
      title: "סלון"
    },
    {
      url: salonEImage.src,
      title: "פינת אוכל"
    },
    {
      url: kitBImage.src,
      title: "מטבח"
    },
    {
      url: kitCImage.src,
      title: "מטבח"
    },
    {
      url: roomAImage.src,
      title: "חדר ילדים"
    },
    {
      url: toiletAImage.src,
      title: "אמבטיה"
    },
    {
      url: salonDImage.src,
      title: "סלון"
    },
    {
      url: balconyImage.src,
      title: "מרפסת"
    },
    {
      url: sunsetImage.src,
      title: "שקיעה"
    },
    {
      url: shellImage.src,
      title: "שקיעה"
    },

    {
      url: wallImage.src,
      title: "שקיעה"
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