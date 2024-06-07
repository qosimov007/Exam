import {useDispatch, useSelector} from "react-redux"
import Bringing from "../components/Bringing"
import CategoryLeft from "../components/CategoryLeft"
import CategoryRight from "../components/CategoryRight"
import ThreeShop from "../components/ThreeShop"
import {useEffect, useState} from "react"
import {fetchData} from "../redux/features/ecommerseSlice"
import Loader from "../components/Loader"
import {animateScroll} from "react-scroll"

function HeadPhones() {
  const dispatch = useDispatch()
  const {allData, loading, error} = useSelector((store) => store.ecommerse)
  useEffect(() => {
    dispatch(fetchData())
  }, [])
  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 500,
      smooth: true,
    })
  }, [])

  const headphones =
    allData && allData.filter((data) => data.category == "headphones")

  return (
    <>
      {loading && (
        <div className="bg-white z-40 opacity-50 justify-center items-center flex fixed top-0 left-0 right-0 bottom-0">
          <Loader />
        </div>
      )}
      {allData && (
        <div>
          <div className="bg-[#000000]">
            <div className="max-container">
              <hr className="bg-[#FFFFFF] z-0 relative opacity-[20%] h-[1px]" />
              <h1 className="font-bold text-center mt-[98px] mb-[97px] text-[#FFFFFF] text-[44px] tracking-[1.43px] max-[560px]:mt-[32px] max-[560px]:mb-[22px] max-[560px]:text-[28px]">
                HEADPHONES
              </h1>
            </div>
          </div>
          <div className="max-container">
            <CategoryLeft
              slug={headphones && headphones[2].slug}
              img={headphones && headphones[2].image.desktop}
              title={headphones && headphones[2].name}
              dscr={headphones && headphones[2].description}
            />

            <CategoryRight
              slug={headphones && headphones[1].slug}
              img={headphones && headphones[1].image.desktop}
              title={headphones && headphones[1].name}
              dscr={headphones && headphones[1].description}
            />
            <CategoryLeft
              slug={headphones && headphones[0].slug}
              img={headphones && headphones[0].image.desktop}
              title={headphones && headphones[0].name}
              dscr={headphones && headphones[0].description}
            />
            <div className="mb-[160px]">
              <ThreeShop />
            </div>
            <div className="mb-[160px] max-[1027px]:mb-[100px]">
              <Bringing />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default HeadPhones
