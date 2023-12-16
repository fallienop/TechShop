import React from 'react'
import CompanyFrame from '../../Components/CompanyFrame/CompanyFrame'
import SuggestedCategories from '../../Components/SuggestedCategories/SuggestedCategories'
import SalesSection from '../../Components/SalesSection/SalesSection'
import WatchFrame from '../../Components/SmartWatchFrame/WatchFrame'
import TopBrands from '../../Components/TopBrands/TopBrands'
import NewProducts from '../../Components/NewProducts/NewProducts'
import Featured from '../../Components/Featured/Featured'
import CompanyPromises from '../../Components/CompanyPromises/CompanyPromises'
import Footer from '../../Components/Footer/Footer'
const MainPage = () => {
  return (
    <div>
        <CompanyFrame/>
        <SuggestedCategories/>
        <SalesSection/>
        <NewProducts/>
        <TopBrands/>
        <WatchFrame/>
        <Featured/>
        <CompanyPromises/>
        <Footer/>
    </div>
  )
}

export default MainPage