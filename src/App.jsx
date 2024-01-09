import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Root from './Pages/Root'
import About from './Pages/About'
import Classes from './Pages/Classes'
import ClassDetail from './components/classes/ClassDetail'
import Blog from './Pages/Blog'
import TrainerDetail from './Pages/TrainerDetail'

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
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App
