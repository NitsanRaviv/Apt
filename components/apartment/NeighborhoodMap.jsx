import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function NeighborhoodMap() {
  return (
    <Card className="overflow-hidden shadow-2xl">
      <CardContent className="p-0">
        <div className="relative h-96 lg:h-[500px]">
          <iframe
            src="https://maps.google.com/maps?q=%D7%90%D7%9C%D7%99%D7%94%D7%95%20%D7%94%D7%A0%D7%91%D7%99%D7%90%2046%20%D7%A8%D7%90%D7%A9%20%D7%94%D7%A2%D7%99%D7%9F&t=&z=16&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="מפת מיקום הדירה"
          ></iframe>
        </div>
      </CardContent>
    </Card>
  );
}