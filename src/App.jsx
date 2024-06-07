import {Navigate, RouterProvider, createBrowserRouter} from "react-router-dom"
import RootLayout from "../layout/RootLayout"
import Home from "./components/Home"
import ProductDetail from "./pages/ProductDetail"
import CheckOut from "./pages/CheckOut"
import HeadPhones from "./pages/HeadPhones"
import Speakers from "./pages/Speakers"
import Earphones from "./pages/Earphones"
import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {fetchData} from "./redux/features/ecommerseSlice"
import Signup from "./pages/Signup"


function App() {
  const {userData, allSelectData} = useSelector((state) => state.ecommerse)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchData())
  }, [])

  const routest = createBrowserRouter([
    {
      path: "/",
      element: userData == null ? <Navigate to={"/signup"} /> : <RootLayout />,
      children: [
        {
          index: true,
          element: userData == null ? <Navigate to={"/signup"} /> : <Home />,
        },
        {
          path: "/headphones",
          element:
            userData == null ? <Navigate to={"/signup"} /> : <HeadPhones />,
        },
        {
          path: "/speakers",
          element:
            userData == null ? <Navigate to={"/signup"} /> : <Speakers />,
        },
        {
          path: "/earphones",
          element:
            userData == null ? <Navigate to={"/signup"} /> : <Earphones />,
        },
        {
          path: "/product/:slug",
          element:
            userData == null ? <Navigate to={"/signup"} /> : <ProductDetail />,
        },
        {
          path: "/checkout",
          element:
            userData == null || allSelectData.length == 0 ? (
              <Navigate to={"/signup"} />
            ) : (
              <CheckOut />
            ),
        },
      ],
    },
    {
      path: "/signup",
      element: userData ? <Navigate to={"/"} /> : <Signup />,
    },
  
  ])
  return <RouterProvider router={routest} />
}

export default App
