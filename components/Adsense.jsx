import React, { useEffect } from "react";

export default function Adsense() {
  const loadAds = () => {
    try {
      if (typeof window !== "undefined") {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (error) {
      console.log("adsense error", error.message);
    }
  };

  useEffect(() => {
    loadAds();
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-6469406013541860"
      data-ad-slot="9815451008"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
}

