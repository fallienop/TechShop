  
  import Header from './MainPageComponents/Header/Header';
  import './App.css';
  import MainPage from './Pages/MainPage/MainPage';
  import { createBrowserRouter,RouterProvider,Outlet,Route } from 'react-router-dom';
  import ProductModal from './MainPageComponents/Header/Modals/ProductModal/ProductModal';
  import ProductPage from './Pages/ProductPage/ProductPage'
  import ProductDetails from './Pages/ProductDetails/ProductDetails';
  // import Footer from './MainPageComponents/Footer/Footer';
  
  const AppLayout =()=>{
    return( 
         <>
    <Header/>
    <Outlet/>
    {/* <Footer/> */}
    </>
  )}
  const router=createBrowserRouter([
  {

    element:<AppLayout/>,
    children:[
      {
        path: "/",
        element: <MainPage />
        
      },
      {
        path: "/productdetails/:category/:productId",
        element: <ProductDetails />
        
      },
      {
        path:'/products',
        element:<ProductPage/>
      },
      {
        path:'/Contact',
        element:<ProductModal/>
      }
    ] 


  }


  ])
  function App() {
    
    return(
    
      <RouterProvider router={router}/>

      
      )
        
      
    
  }

  export default App;
