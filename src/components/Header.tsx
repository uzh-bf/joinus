import React from 'react'
import ScrollDown from './ScrollDown'

function Header() {
  return (
    <div className="title-bg bg-[#00023e] min-h-[90vh] py-4 bg-left-bottom bg-no-repeat sm:min-h-[100vh]">
      <div className="absolute top-0 left-0 right-0 h-[85vh] sm:h-[100vh]">
        <h1 className="pt-48 text-5xl font-normal text-center md:text-6xl font-thesans-bold text-gray-50">
          Dein neuer Job?
        </h1>
        <h2 className="p-4 m-auto mt-16 text-3xl font-normal text-center md:text-5xl md:max-w-4xl font-thesans-plain text-gray-50">
          Das Institut für Banking und Finance sucht Informatiker*innen! Finde
          heraus, was es so speziell macht.
        </h2>
        <ScrollDown inverted scrollTo="#citations" />
      </div>
    </div>
  )
}
export default Header
