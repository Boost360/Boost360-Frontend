import React from "react";
import Dialog from '@mui/material/Dialog';
import './LanguageDialog.css'


/**
 * This component provides a language change dialog.
 * @Author Zach
 * @Date 2021/10/5 1:59 NZT
 */

const LanguageDialog = ({ open, handleClose }) => {
  const [currentLang, setCurrentLang] = React.useState("EN")

  /**
   * 
   * @param {String} lang  "EN" = English  "CH" = Chinese "KR" = Korean
   */
  const handleChangeLang = (lang) => {
    setCurrentLang(lang)

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
          Please choose the language you wish to switch to
        </div>
        <div className="languageSet">
          <a className={currentLang === "EN" ? "languageSet-currentLabel" : "languageSet-label"} onClick={()=>{handleChangeLang("EN")}}>
            English
          </a>
          <p />
          <a className={currentLang === "KR" ? "languageSet-currentLabel" : "languageSet-label"} onClick={()=>{handleChangeLang("KR")}}>
            한국어</a>
          <p />
          <a className={currentLang === "CH" ? "languageSet-currentLabel" : "languageSet-label"} onClick={()=>{handleChangeLang("CH")}}>
            中文</a>
        </div>
        <div className="langDialog-Buttongroup">
          <div className="langDialog-Button" onClick={handleClose}>
            <a className="langDialog-Button-text">Cancel</a>
          </div>
          <div className="langDialog-Button blue" onClick={handleClose}>
            <a className="langDialog-Button-text">Change</a>
          </div>
        </div>

      </div>

    </Dialog >

  );

}




export default LanguageDialog