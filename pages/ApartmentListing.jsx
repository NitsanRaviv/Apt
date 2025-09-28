
import React, { useState, useEffect } from "react";
import { Phone, MessageCircle, Mail, MapPin, Check, ChevronDown, ChevronUp, ArrowUp, Eye, Users, Clock, Download, Share2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import mainImage from "../Images/mainImg.png";
import planImage from "../Images/planImg.png";



import StickyNavigation from "../components/apartment/StickyNavigation";
import ImageGallery from "../components/apartment/ImageGallery";
import FAQSection from "../components/apartment/FAQSection";
import NeighborhoodMap from "../components/apartment/NeighborhoodMap";

export default function ApartmentListing() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentProgress = window.pageYOffset;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setScrollProgress((currentProgress / scrollHeight) * 100);
      }
      setShowBackToTop(currentProgress > 500);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickFacts = [
    { icon: "🏠", text: "5 חדרים" },
    { icon: "🏢", text: "קומה: 4/8 עם מעלית" },
    { icon: "📐", text: "שטח: 146 מ״ר" },
    { icon: "🌅", text: "מרפסת: 12 מ״ר" },
    { icon: "🚗", text: "2 חניות בטאבו" },
    { icon: "📦", text: "מחסן: 8 מ״ר" }
  ];

  const highlights = [
    "תכנון חלוקה פונקציונלי עם סלון רחב ומטבח פתוח",
    "שלושה חדרי שירותים ושני חדרי רחצה",
    "חדר שינה הורים עם מקלחת ושירותים", 
    "מרפסת שמש שפונה לדרום-מערב",
    "מערכות מיזוג ותאורה חדשות",
    "בניין עם מעלית ולובי מטופח"
  ];

  const nearbyPlaces = [
    { name: "פארק הגבעה / כספיון", distance: "0 דק׳ הליכה", icon: "🏞️" },
    { name: "פארק המרכזי", distance: "2 דק׳ הליכה", icon: "🌳" },
    { name: "תחנת אוטובוס", distance: "2 דק׳ הליכה", icon: "🚌" },
    { name: "בית כנסת שבטי ישראל", distance: "2 דק׳ הליכה", icon: "🕍" },
    { name: "בית ספר תגלית וגני ילדים", distance: "1 דק׳ הליכה", icon: "🏫" },
    { name: "מרכז מסחרי צים  אורבן (בהקמה)", distance: "9 דק׳ הליכה", icon: "🛍️" },
    { name: "עגלת קפה שורשים", distance: "8 דק׳ הליכה", icon: "☕" },
  ];

  return (
    <div className="min-h-screen bg-slate-50" dir="rtl" lang="he">
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-green-500 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      <StickyNavigation />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(${mainImage.src})`,
          }}
        />

       
        <div className="absolute inset-0 bg-slate-900/40 z-10" />
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="space-y-8">
            {/* Social Proof Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 text-sm">
              <Eye className="w-4 h-4" />
              <span>24 אנשים התעניינו השבוע</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            ✨ בית שבו הנפש מוצאת מנוחה (ללא תיווך) ✨ 
            </h1>
            
            <h2 className="text-xl md:text-2xl lg:text-3xl text-slate-200 max-w-4xl mx-auto leading-relaxed">
              מיקום מצוין, בניין מטופח, ומרפסת עם נוף לשקיעות שמכניסות שלווה ואוויר לריאות
            </h2>

            {/* Quick Facts */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {quickFacts.map((fact, index) => (
                <Badge key={index} className="bg-white/10 backdrop-blur-md text-white border-white/20 text-base px-4 py-2 inline-flex items-center justify-center gap-2">
                  <span className="leading-none">{fact.icon}</span>
                  {fact.text}
                </Badge>
              ))}
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold text-lg px-8 py-4 rounded-xl backdrop-blur-md transition-all duration-300"
              >
                <Phone className="w-5 h-5 ml-2" />
                שיחת טלפון 
              </Button>
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white font-semibold text-lg px-8 py-4 rounded-xl shadow-2xl transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 ml-2" />
                ווטסאפ
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Apartment Details */}
      <section id="details" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">פרטי הדירה</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <p className="text-xl text-slate-600 leading-relaxed">
              דירת 5 חדרים מרווחת, בתכנון חכם ונוח למשפחות. סלון גדול עם יציאה ישירה למרפסת שמש הפונה לנוף פתוח, מטבח עם שטח עבודה ואחסון רחב. לדירה חללים מתוכננים היטב שמאפשרים זרימת אוויר ואור טבעי בזכות כיווני דרום־מערב. שילוב מושלם של פרקטיות יומיומית עם תחושת מרחב ונוחות.              </p>

              <div className="space-y-4">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full p-1 mt-1">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed">{highlight}</p>
                  </div>
                ))}
              </div>

              {/* Pricing with Anchoring */}
              <Card className="p-8 bg-slate-50 border-2 border-slate-200">
                <div className="text-center space-y-4">
                  <h3 className="text-3xl font-bold text-slate-900">מחיר מבוקש: ₪2,700,000</h3>
                </div>
              </Card>
            </div>

            <div className="lg:order-first">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1053&q=80"
                alt="תמונה לדוגמה — פינת ישיבה בסלון"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section id="gallery" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">גלריית תמונות</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>
          <ImageGallery />
        </div>
      </section>

      {/* Floor Plan */}
      <section id="floorplan" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">שרטוט הדירה</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-12"></div>
          
          <div className="max-w-4xl mx-auto">
            <img
              src={planImage.src}
              alt="שרטוט הדירה להמחשה"
              className="w-full rounded-2xl shadow-2xl mb-8"
            />
          </div>
        </div>
      </section>

      {/* Neighborhood */}
      <section id="neighborhood" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">השכונה והסביבה</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            שכונת הנביאים, מציעה שילוב מושלם של שקט עירוני עם נגישות מלאה לכל מה שחשוב. בשכונה מתוכננות ומיושמות טיילות ברחבי הפארקים שמאפשרות גישה מהירה לקניון העתידי, קרית החינוך, עגלת הקפה וכל מה שמעניין בעיר.
            הבנייה הנמוכה מעניקה נוף פתוח, והפארקים הרבים בשכונה הופכים אותה לאטרקטיבית במיוחד עבור משפחות צעירות עם ילדים.            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {nearbyPlaces.map((place, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">{place.icon}</div>
                <h3 className="font-semibold text-slate-900 mb-2">{place.name}</h3>
                <p className="text-blue-600 font-medium">{place.distance}</p>
              </Card>
            ))}
          </div>

          <NeighborhoodMap />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">שאלות נפוצות</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <FAQSection />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">יצירת קשר</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            
            {/* Ethical Urgency */}
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full mb-6">
              <Clock className="w-4 h-4" />
              <span>חלונות הסיור לשבוע הקרוב מתמלאים במהירה — שריינו זמן שמתאים לכם</span>
            </div>
          </div>
          
          {/* Alternative Contact Methods */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12">
            <Button variant="outline" size="lg" className="max-w-xs w-auto sm:flex-1">
              <Phone className="w-5 h-5 ml-2" />
              התקשרו עכשיו
            </Button>
            <Button variant="outline" size="lg" className="max-w-xs w-auto sm:flex-1 bg-green-50 border-green-200 text-green-700 hover:bg-green-100">
              <MessageCircle className="w-5 h-5 ml-2" />
              ווטסאפ
            </Button>
            <Button variant="outline" size="lg" className="max-w-xs w-auto sm:flex-1">
              <Mail className="w-5 h-5 ml-2" />
              אימייל
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 text-center md:text-right">
            <div>
              <h3 className="font-bold text-xl mb-4">פרטי יצירת קשר</h3>
              <p className="text-slate-300">אליהו הנביא 46, ראש העין</p>
              <p className="text-slate-300">טלפון: 0506920046</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4">שתפו</h3>
              <div className="flex justify-center md:justify-start gap-4">
                <Button variant="ghost" size="sm" className="text-white hover:bg-slate-800">
                  <MessageCircle className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-white hover:bg-slate-800">
                  <Mail className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-white hover:bg-slate-800">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 z-40 bg-blue-600 hover:bg-blue-700 rounded-full p-3 shadow-2xl transition-all duration-300"
          size="icon"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}
    </div>
  );
}
