import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {

  const language = useSelector(store=> store?.config?.lang)

  return (
    <div className='absolute top-[12%] w-full'>
        <form className='p-3 w-[60%] mx-auto flex items-center justify-center'>
            <input type="text" className='w-full rounded-l-full bg-white p-4' placeholder={lang[language].gptPlaceHolder}/>
            <button className='p-[14px] h-full bg-red-600 text-xl w-[6vw] rounded-r-lg cursor-pointer'>{lang[language].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar