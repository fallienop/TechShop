import React from 'react'
import CompanyFrame from '../../Components/CompanyFrame/CompanyFrame'
import SuggestedCategories from '../../Components/SuggestedCategories/SuggestedCategories'
import SalesSection from '../../Components/SalesSection/SalesSection'
import WatchFrame from '../../Components/SmartWatchFrame/WatchFrame'
import TopBrands from '../../Components/TopBrands/TopBrands'
import NewProducts from '../../Components/NewProducts/NewProducts'
const MainPage = () => {
  return (
    <div>
        <CompanyFrame/>
        <SuggestedCategories/>
        <SalesSection/>
        <NewProducts/>
        <TopBrands/>
        <WatchFrame/>
    </div>
  )
}

export default MainPage