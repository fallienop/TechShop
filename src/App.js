  
  import Header from './MainPageComponents/Header/Header';
  import './App.css';
  import MainPage from './Pages/MainPage/MainPage';
  import { createBrowserRouter,RouterProvider,Outlet,Route } from 'react-router-dom';
  import ProductModal from './MainPageComponents/Header/Modals/ProductModal/ProductModal';
  import ProductPage from './Pages/ProductPage/ProductPage'
  import SearchModal from './MainPageComponents/Header/Modals/SearchModal/SearchModal';
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
        element: <SearchModal />
        
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
