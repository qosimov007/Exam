import {NavLink, useParams} from "react-router-dom"
import Bringing from "../components/Bringing"
import ThreeBox from "../components/ThreeBox"
import ThreeShop from "../components/ThreeShop"
import {useEffect, useState} from "react"
import {nanoid} from "@reduxjs/toolkit"
import ThreeGalery from "../components/ThreeGalery"
import {useDispatch, useSelector} from "react-redux"
import {addToCard} from "../redux/features/ecommerseSlice"
import Loader from "../components/Loader"
import {animateScroll} from "react-scroll"

function ProductDetail() {
  const dispatch = useDispatch()
  const {loading} = useSelector((store) => store.ecommerse)
  const [singleData, setSingleData] = useState(null)
  const slug = useParams()
  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 500,
      smooth: true,
    })
  }, [slug])
  useEffect(() => {
    fetch(
      `https://render-json-server-8q4k.onrender.com/data?slug=${slug.slug}`
    ).then((res) =>
      res.json().then((datas) =>
        datas.forEach((data) => {
          setSingleData(data)
        })
      )
    )
  }, [slug])

  return (
    <>
      {loading && (
        <div className="bg-white z-40 opacity-50 justify-center items-center flex fixed top-0 left-0 right-0 bottom-0">
          <Loader />
        </div>
      )}
      {singleData ? (
        <div className="max-container">
          <NavLink className={"btn"} to={"/"}>
            Go Back
          </NavLink>
          <div className="grid grid-cols-2 items-center mt-14 mb-[88px] max-[1138px]:grid-cols-1">
            <div className="max-w-[540px] max-[1138px]:max-w-full bg-[#F1F1F1] w-full flex h-[560px] max-[550px]:max-h-[560px] max-[550px]:h-full">
              <img
                className="m-auto w-[381px] max-[500px]:h-[200px] max-[500px]:w-[200px]"
                src={singleData.categoryImage?.desktop}
                alt=""
              />
            </div>
            <div className="ml-[125px] max-[1138px]:ml-0 max-[1138px]:py-[24px] max-[1138px]:pr-[24px]">
              <p className="text-[14px] tracking-[10px] text-[#D87D4A]">
                NEW PRODUCT
              </p>
              <h2 className="max-[500px]:text-[28px] mt-2 font-bold text-[44px] tracking-[1.43px]">
                {singleData?.name}
              </h2>
              <p className="mt-8 mb-10 max-[500px]:mb-[20px] text-[15px] opacity-[50%]">
                {singleData?.description}
              </p>
              <h3 className="font-bold text-[18px] tracking-[1.29px]">
                $ {singleData?.price}
              </h3>
              <div className="flex gap-x-4 mt-[47px] max-[500px]:mt-[31px]">
                <button
                  onClick={() =>
                    dispatch(addToCard({...singleData, amount: 1}))
                  }
                  className={`w-40 h-12 bg-[#D87D4A] hover:bg-[#FBAF85] text-[#FFFFFF] text-[13px] transition leading-[17px] tracking-[1px] font-bold`}
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-between max-[1138px]:block">
            <div>
              <h2 className="font-bold text-[32px] mb-[24px] tracking-[1.14px]">
                FEATURES
              </h2>
              <p className="text-[15px] max-[1138px]:max-w-full opacity-[50%] max-w-[635px] w-full">
                {singleData?.features}
              </p>
            </div>
            <div className="max-[1138px]:flex max-[1138px]:mt-[120px] max-[1138px]:justify-between max-[700px]:block max-[700px]:mt-[88px]">
              <h2 className="font-bold mb-8 text-[32px] tracking-[1.14px]">
                IN THE BOX
              </h2>
              <div className="mr-[124px] max-[414px]:mr-0">
                {singleData.includes?.map((inc) => {
                  return (
                    <p
                      key={nanoid()}
                      className="mb-2 opacity-[50%] text-[15px] flex gap-x-6"
                    >
                      <span className="text-[#D87D4A] font-bold text-[15px]">
                        {inc.quantity}x
                      </span>
                      {inc.item}
                    </p>
                  )
                })}
              </div>
            </div>
          </div>
          <ThreeGalery
            img1={singleData.gallery?.first.desktop}
            img2={singleData.gallery?.second.desktop}
            img3={singleData.gallery?.third?.desktop}
          />
          <ThreeBox />
          <div className="mt-40">
            <ThreeShop />
          </div>
          <div className="mb-[120px]">
            <Bringing />
          </div>
        </div>
      ) : (
        <div className="bg-white z-40 opacity-50 justify-center items-center flex fixed top-0 left-0 right-0 bottom-0">
          <Loader />
        </div>
      )}
    </>
  )
}

export default ProductDetail
