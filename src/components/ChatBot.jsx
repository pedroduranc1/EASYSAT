import React, { useEffect } from "react";
import logo from "../assets/logoNav.webp";

export const ChatBot = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && !window.CRISP_WEBSITE_ID) {
      window.CRISP_WEBSITE_ID = "52efb7e5-c367-4d50-a485-af46d00961f4";

      (function () {
        var d = document;
        var s = d.createElement("script");
        s.src = "https://client.crisp.chat/l.js";
        s.async = 1;
        d.getElementsByTagName("head")[0].appendChild(s);
      })();
      let iconElement = document.querySelector(
        ".crisp-client .cc-tlyw .cc-kxkl .cc-nsge .cc-imbb"
      );
      if (iconElement) {
        iconElement.innerHTML = `<div><img src="${logo}" /></div>`;
      }
    }
  }, []);

  return null;
};
