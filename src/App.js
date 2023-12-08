  import logo from './logo.svg';
  import Header from './Components/Header/Header';
  import './App.css';
  import MainPage from './Pages/MainPage/MainPage';
  import { createBrowserRouter,RouterProvider,Outlet,Route } from 'react-router-dom';
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
