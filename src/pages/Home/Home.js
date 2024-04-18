// ./src/pages/Home/Home.js
import React, { useContext, useEffect } from "react";
import { LanguageContext } from "../../LanguageContext";

const Home = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const languageNames = {
    chinese: "中文",
    english: "英文",
    korea: "韓文",
  };

  // 每次組件渲染完，都會先檢查本地儲存空間裡有無存放language
  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      setLanguage(JSON.parse(storedLanguage));
    }
  }, []);

  // 當語言更改時，更新本地儲存空間的language
  useEffect(() => {
    if (language) {
      localStorage.setItem("language", JSON.stringify(language)); // 將選擇的語言狀態儲存到本地儲存空間
    }
  }, [language]);

  const handleSelect = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div>
      <label htmlFor="language">請選擇語言 : </label>
      <select
        name="language"
        id="language"
        onChange={handleSelect}
        value={language}
        required
      >
        <option value="" disabled>
          請選擇語言
        </option>
        <option value="chinese">中文</option>
        <option value="english">英文</option>
        <option value="korea">韓文</option>
      </select>
      <p>當前的語言: {languageNames[language]}</p>
    </div>
  );
};

export default Home;
