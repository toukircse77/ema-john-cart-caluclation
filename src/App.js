import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layouts/Main';
import Shop from './components/Shop/Shop';
import Inventory from './components/Inventory/Inventory';
import About from './components/About/About';
import Orders from './components/Orders/Orders';
import { productAndCartLoader } from './Loaders/ProductAndCArtLoader';
const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        loader: () => fetch('products.json'),
        element:<Shop></Shop>
      },
      {
        path:'shop',
        loader: () => fetch('products.json'),
        element:<Shop></Shop>
      },
      {
        path:'orders',
        loader: productAndCartLoader,
        element:<Orders></Orders>
      },
      {
        path:'inventory',
        element:<Inventory></Inventory>
      },
      {
        path:'about',
        element:<About></About>
      }
    ]
  }
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} ></RouterProvider>
    </div>
  );
}

export default App;
