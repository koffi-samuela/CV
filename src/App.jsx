import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Template from './components/Template';
import Home from './pages/Home';


//COMPOSANT PRINCIPAL DU ROUTEUR
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Template />,
      errorElement: <div> errorrrrrrrr 404</div>,
      children: [
        {
          index: true,
          element: <Home />
        },
        // {
        //   path:'/user/:id',
        //   element : <Detail />
        // },
        // {
        //   path:'/users',
        //   element : <Users />
        // }
      ]
    }
  ]
)
// export default App;
export default function App() {
  return  <RouterProvider router={router} />
  
}
