import React from 'react'
import { useTranslation } from 'react-i18next'
import "../common/i18"

const Lang = () => {

    const { i18n, t } = useTranslation()
    const handleClick = (language) => {
        i18n.changeLanguage(language);
    }

    return (
        <div>
            <button onClick={() => handleClick('en')} >EN</button>
            <button onClick={() => handleClick('az')} >AZ</button>
        </div>
    )
}

export default Lang