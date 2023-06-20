import React from 'react'
import './Maintenance.css'
import { useTranslation } from 'react-i18next';

function Maintenance() {
  const { t, i18n } = useTranslation();
  const message = t('maintenance');
  return (
    <div className='Maintenance'>
      <div className="logo" />
      <h1>                    
          {message}
      </h1>
    </div>

  )
}

export default Maintenance