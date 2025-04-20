import React, { useEffect, useState } from "react";
import "./SalatReminder.css"; // هنضيف التنسيقات هنا
import { useLanguage } from "@/hooks/use-language";

const SalatReminder = () => {
  const {t} = useLanguage()
  const [visible, setVisible] = useState(false);

  const showPopup = () => {
    setVisible(true);
    setTimeout(() => setVisible(false), 50000); // يختفي بعد 7 ثواني
  };

  const closePopup = () => {
    setVisible(false);
  };

  useEffect(() => {
    showPopup(); // أول مرة

    const interval = setInterval(() => {
      showPopup();
    }, 60000); 

    return () => clearInterval(interval);
  }, []);

  return (
    visible && (
      <div className="salat-popup">
        <span className="popup-close" onClick={closePopup}>×</span>
        {t("🤲 صلِّ على النبي ﷺ")}
      </div>
    )
  );
};

export default SalatReminder;
