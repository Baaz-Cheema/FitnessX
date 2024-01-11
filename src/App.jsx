import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Root from './Pages/Root'
import About from './Pages/About'
import Classes from './Pages/Classes'
import ClassDetail from './components/classes/ClassDetail'
import Blog from './Pages/Blog'
import TrainerDetail from './Pages/TrainerDetail'
import Membership from './Pages/Membership'
import Shop from './Pages/Shop'
import ItemDetail from './components/shop/ItemDetail'


const imageUrls = [
  "https://images.unsplash.com/photo-1585892478726-d26363dbf9e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1614928228253-dc09cbc3b11c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1544033527-b192daee1f5b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

imageUrls.forEach((url) => {
  const img = new Image();
  img.src = url;
});


const router = createBrowserRouter([
  {
    path: '/', element: <Root />, children: [
      { index: true, element: <Home /> },
      { path: '/about', element: <About /> },
      {
        path: '/classes', children: [
          { index: true, element: <Classes /> },
          { path: ':className', element: <ClassDetail /> }
        ]
      },
      {
        path: '/blogs/:blogName', children: [
          { index: true, element: <Blog /> },
        ]
      },
      {
        path: '/trainer/:name', children: [
          { index: true, element: <TrainerDetail /> },
        ]
      },
      {
        path: '/shop', children: [
          { index: true, element: <Shop /> },
          {
            path: ':shopItem', element:
              <ItemDetail />
          }
        ]
      },
      { path: '/membership', element: <Membership /> }
    ]
  }
])

function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App
