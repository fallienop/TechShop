import React from 'react'
import CompanyFrame from '../../Components/CompanyFrame/CompanyFrame'
import SuggestedCategories from '../../Components/SuggestedCategories/SuggestedCategories'
import SalesSection from '../../Components/SalesSection/SalesSection'
const MainPage = () => {
  return (
    <div>
        <CompanyFrame/>
        <SuggestedCategories/>
        <SalesSection/>
    </div>
  )
}

export default MainPage