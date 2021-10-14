import React from "react";
import Dialog from '@mui/material/Dialog';
import './LanguageDialog.css'
import { useTranslation } from "react-i18next";

/**
 * This component provides a language change dialog.
 * @Author Zach
 * @Date 2021/10/5 1:59 NZT
 */

const LanguageDialog = ({ open, handleClose }) => {
  const [currentLang, setCurrentLang] = React.useState("en")
  const { t, i18n } = useTranslation();

  /**
   * 
   * @param {String} lang  "EN" = English  "CH" = Chinese "KR" = Korean
   */
  const handleChangeLang = (lang) => {
    setCurrentLang(lang)
  }

  const onLanguageHandle = () => {
    handleClose()
    i18n.changeLanguage(currentLang)
    
  }


  return (

    <Dialog
      fullWidth={true}
      maxWidth='sm'
      open={open}
      onClose={handleClose}
    >
      <div className="langDialog">
        <div className="langDialog-text">
          {t("language.info")}
        </div>
        <div className="languageSet">
          <a className={currentLang === "en" ? "languageSet-currentLabel" : "languageSet-label"} onClick={() => { handleChangeLang("en") }}>
            English
          </a>
          <p />
          <a className={currentLang === "kr" ? "languageSet-currentLabel" : "languageSet-label"} onClick={() => { handleChangeLang("kr") }}>
            한국어</a>
          <p />
          <a className={currentLang === "ch" ? "languageSet-currentLabel" : "languageSet-label"} onClick={() => { handleChangeLang("ch") }}>
            中文</a>
        </div>
        <div className="langDialog-Buttongroup">
          <div className="langDialog-Button" onClick={handleClose}>
            <a className="langDialog-Button-text">{t("language.cancel")}</a>
          </div>
          <div className="langDialog-Button blue" onClick={onLanguageHandle}>
            <a className="langDialog-Button-text">{t("language.change")}</a>
          </div>
        </div>

      </div>

    </Dialog >

  );

}




export default LanguageDialog