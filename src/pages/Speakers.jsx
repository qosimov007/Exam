import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {fetchData} from "../redux/features/ecommerseSlice"
import CategoryLeft from "../components/CategoryLeft"
import CategoryRight from "../components/CategoryRight"
import ThreeShop from "../components/ThreeShop"
import Bringing from "../components/Bringing"
import Loader from "../components/Loader"
import {animateScroll} from "react-scroll"

function Speakers() {
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

  const speakers =
    allData && allData.filter((data) => data.category == "speakers")

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
                SPEAKERS
              </h1>
            </div>
          </div>
          <div className="max-container">
            <CategoryLeft
              slug={speakers && speakers[1].slug}
              img={speakers && speakers[1].image.desktop}
              title={speakers && speakers[1].name}
              dscr={speakers && speakers[1].description}
            />
            <CategoryRight
              slug={speakers && speakers[0].slug}
              img={speakers && speakers[0].image.desktop}
              title={speakers && speakers[0].name}
              dscr={speakers && speakers[0].description}
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

export default Speakers
