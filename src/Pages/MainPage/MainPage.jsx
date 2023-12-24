import React from 'react'
import CompanyFrame from '../../MainPageComponents/CompanyFrame/CompanyFrame'
import SuggestedCategories from '../../MainPageComponents/SuggestedCategories/SuggestedCategories'
import SalesSection from '../../MainPageComponents/SalesSection/SalesSection'
import WatchFrame from '../../MainPageComponents/SmartWatchFrame/WatchFrame'
import TopBrands from '../../MainPageComponents/TopBrands/TopBrands'
import NewProducts from '../../MainPageComponents/NewProducts/NewProducts'
import Featured from '../../MainPageComponents/Featured/Featured'
import CompanyPromises from '../../MainPageComponents/CompanyPromises/CompanyPromises'
import Footer from '../../MainPageComponents/Footer/Footer'
const MainPage = () => {
  return (
    <div >
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