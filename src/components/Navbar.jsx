import {Menu} from "iconoir-react"
import {Fragment, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {Link, NavLink} from "react-router-dom"
import LoadingBar from "react-top-loading-bar"
import {
  addToCard,
  decrementData,
  deleteAll,
  setUser,
} from "../redux/features/ecommerseSlice"
import {nanoid} from "@reduxjs/toolkit"

function Navbar() {
  const dispatch = useDispatch()
  
  const [progress, setProgress] = useState(0)
  const {allSelectData, allCount, allPrice,} = useSelector(
    (store) => store.ecommerse
  )


  return (
    <div className="bg-[#0E0E0E]">
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <header className="max-container z-20 relative flex justify-between py-9 items-center">
        <div className="flex items-center ">
          <div className="dropdown dropdown-right hidden max-[780px]:block">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <Menu color="#FFFFFF" />
            </div>
            <ul
              tabIndex={0}
              className="mt-3 p-2 z-50 shadow menu menu-sm dropdown-content bg-[#000000]  rounded-box w-[200px] tracking-[2px] text-white text-[16px]"
            >
              <li>
                <NavLink to={"/"} className="justify-center">
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink to={"/headphones"} className="justify-center">
                  HEADPHONES
                </NavLink>
              </li>
              <li>
                <NavLink to={"speakers"} className="justify-center">
                  SPEAKERS
                </NavLink>
              </li>
              <li>
                <NavLink to={"earphones"} className="justify-center">
                  EARPHONES
                </NavLink>
              </li>
            </ul>
          </div>
          <NavLink to={"/"}>
            <img src="/logo.svg" alt="" />
          </NavLink>
        </div>
        <nav className="flex text-[#FFFFFF] gap-x-[34px] font-bold text-[13px] tracking-[2px] max-[780px]:hidden">
          <Link
            className={"hover:text-[#D87D4A]"}
            onClick={() => setProgress(100)}
            to={"/"}
          >
            HOME
          </Link>
          <NavLink
            className={"hover:text-[#D87D4A] transition"}
            to={"/headphones"}
          >
            HEADPHONES
          </NavLink>
          <NavLink
            className={"hover:text-[#D87D4A] transition"}
            to={"/speakers"}
          >
            SPEAKERS
          </NavLink>
          <NavLink
            className={"hover:text-[#D87D4A] transition"}
            to={"/earphones"}
          >
            EARPHONES
          </NavLink>
        </nav>

        <div className="dropdown z-50 dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">{allCount}</span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="menu dropdown-content mt-3 z-[1] shadow bg-base-100 rounded-box w-[400px] max-[450px]:w-[300px] pb-5"
          >
            <div className="mx-8 max-[450px]:mx-3">
             
              <div className="flex justify-between my-8 items-center">
                <p className="font-bold text-[18px] tracking-[1.29px]">
                  CART ({allCount})
                </p>
                <p
                  onClick={() => dispatch(deleteAll())}
                  className="hover:text-[#D87D4A] transition text-[15px] opacity-[50%] cursor-pointer"
                >
                  Remove all
                </p>
              </div>
              {allSelectData.map((data) => {
                return (
                  <Fragment key={nanoid()}>
                    <div className="grid w-full grid-cols-2 mb-6 items-center">
                      <div className="flex items-center">
                        <div className="max-w-16 w-full h-16 bg-base-200 rounded-lg">
                          <img
                            className="w-full h-full rounded-lg m-auto"
                            src={data?.image?.desktop}
                            alt=""
                          />
                        </div>
                        <div className="ml-4 max-[450px]:ml-2">
                          <p className="max-[450px]:text-[12px] line-clamp-1 font-bold text-[15px]">
                            {data?.name?.slice(0, 7) + "..."}
                          </p>
                          <p className="opacity-[50%] font-bold text-[14px] max-[450px]:text-[11px] ruby">
                            $ {data?.price.toLocaleString("en-US")}
                          </p>
                        </div>
                      </div>
                      <div className="w-[96px] h-[32px] max-[450px]:w-[80px] bg-base-200 flex justify-between items-center px-6 max-[450px]:px-4 ml-auto">
                        <button
                          onClick={() => dispatch(decrementData(data))}
                          className="hover:text-[#FBAF85]"
                        >
                          -
                        </button>
                        <p className="font-bold text-[13px]">{data.amount}</p>
                        <button
                          onClick={() =>
                            dispatch(addToCard({...data, amount: 1}))
                          }
                          className="hover:text-[#FBAF85]"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </Fragment>
                )
              })}
              {allSelectData.length == [] && (
                <h1>You don't have any products yet</h1>
              )}
              {allSelectData <= [] ? (
                <></>
              ) : (
                <>
                  <div className="flex justify-between items-center">
                    <p className="opacity-[50%] text-[15px]">TOTAL</p>
                    <p className="text-[18px] font-bold">
                      $ {allPrice.toLocaleString("en-US")}
                    </p>
                  </div>
                  <Link to={"/checkout"}>
                    <button className="text-[#FFFFFF] hover:bg-[#FBAF85] transition font-bold text-[13px] bg-[#D87D4A] max-w-[313px] w-full h-12 mt-6">
                      CHECKOUT
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar
