  
  import Header from './MainPageComponents/Header/Header';
  import './App.css';
  import MainPage from './Pages/MainPage/MainPage';
  import { createBrowserRouter,RouterProvider,Outlet,Route } from 'react-router-dom';
  import ProductModal from './MainPageComponents/Header/Modals/ProductModal/ProductModal';
  import ProductPage from './Pages/ProductPage/ProductPage'
  const AppLayout =()=>{
    return( 
         <>
    <Header/>
    <Outlet/>
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
        path: "/modal",
        element: <ProductModal />
        
      },
      {
        path:'/products',
        element:<ProductPage/>
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
