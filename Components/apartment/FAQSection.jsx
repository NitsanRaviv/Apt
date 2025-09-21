import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "מה מצב הרישום והטאבו?",
      answer: "הדירה רשומה בטאבו על שם המוכר. כל המסמכים הרלוונטיים יסופקו לפי דרישה, כולל תעודת זכות, אישור חובות ומסמכי וועד הבית."
    },
    {
      question: "מה כוללים התשלומים החודשיים?",
      answer: "התשלומים החודשיים כוללים דמי ועד בית (כ-₪450), ארנונה (כ-₪800), ואגרת מים (כ-₪150). הסכומים המדויקים ישתנו בהתאם לחיוב העירייה ולצריכה בפועל."
    },
    {
      question: "האם ניתן לקבוע סיור בסופי שבוע?",
      answer: "כן, אנחנו זמינים לסיורים גם בסופי השבוע. אנא צרו קשר מראש כדי לתאם מועד שנוח לכולם."
    },
    {
      question: "האם המחיר גמיש?",
      answer: "המחיר נקבע בהתאם לשוק המקומי ולמצב הדירה. נשמח לשיחה ולבדיקת אפשרויות, במיוחד עבור קונים רציניים."
    },
    {
      question: "מה מצב החניה במיקום?",
      answer: "הדירה כוללת חניה צמודה בחניון הבניין. בנוסף, ישנה חניה רחוב נוחה לאורחים באזור."
    },
    {
      question: "האם יש מחסן?",
      answer: "כן, הדירה מגיעה עם מחסן של כ-4 מ״ר במרתף הבניין, נוח לאחסון חפצים ואופניים."
    }
  ];

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <Card key={index} className="overflow-hidden">
          <button
            onClick={() => toggleQuestion(index)}
            className="w-full p-6 text-right flex justify-between items-center hover:bg-slate-50 transition-colors duration-200"
          >
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-slate-900 leading-tight">
                {faq.question}
              </h3>
            </div>
            <div className="mr-4 flex-shrink-0">
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-blue-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-slate-400" />
              )}
            </div>
          </button>
          
          {openIndex === index && (
            <CardContent className="pt-0 pb-6 px-6">
              <div className="border-t border-slate-100 pt-4">
                <p className="text-slate-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </CardContent>
          )}
        </Card>
      ))}
    </div>
  );
}