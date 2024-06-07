import {useDispatch, useSelector} from "react-redux"
import Bringing from "./Bringing"
import ButtonBlack from "./ButtonBlack"
import ButtonBrown from "./ButtonBrown"
import ButtonWhite from "./ButtonWhite"
import Loader from "./Loader"
import ThreeShop from "./ThreeShop"
import {useEffect} from "react"
import {animateScroll} from "react-scroll"
import {fetchData} from "../redux/features/ecommerseSlice"

function Home() {
  const {loading, allData} = useSelector((store) => store.ecommerse)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])
  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 500,
      smooth: true,
    })
  }, [])
  return (
    <>
      {loading && (
        <div className="bg-white z-40 opacity-50 justify-center items-center flex fixed top-0 left-0 right-0 bottom-0">
          <Loader />
        </div>
      )}

      {allData && (
        <>
          <div>
            <div className="bg-[url('/assets/home/mobile/image-header.jpg')] bg-cover bg-center bg-no-repeat sm:bg-[url('/assets/home/tablet/image-header.jpg')] 2xl:pt-44 max-[1188px]:pt-0 lg:bg-[url('/assets/home/desktop/image-hero.jpg')]">
              <div className="max-container py-28 sm:pb-40 sm:pt-32 lg:pb-60 lg:pt-40">
                <div className="mx-auto flex w-full max-w-96 flex-col items-center text-center lg:mx-0 lg:items-start lg:text-start">
                  <span className="mb-4 text-white opacity-50 tracking-[10px] text-[14px]">
                    NEW PRODUCT
                  </span>
                  <h1 className="mb-6 font-bold text-[56px] text-4xl tracking-[2px] text-[#FFFFFF] max-[494px]:text-[36px] grid grid-cols-1 gap-4">
                    XX99 Mark II<span>Headphones</span>
                  </h1>
                  <p className="mb-7 max-[494px]:text-[15px] text-[#FFFFFF] opacity-75">
                    Experience natural, lifelike audio and exceptional build
                    quality made for the passionate music enthusiast.
                  </p>
                  <ButtonBrown
                    slug={"xx99-mark-two-headphones"}
                    text={"SEE PRODUCT"}
                    textColor={"#FFFFFF"}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="max-container mb-[200px] max-[1027px]:mb-[96px] mt-28">
            <ThreeShop />
            <div className="mt-[168px] h-[560px] bg-[#D87D4A] grid grid-cols-2 max-[1110px]:grid-cols-1 max-[1110px]:h-[840px] max-[1110px]:pt-[52px]">
              <img
                className="ml-[80px] mt-[100px] w-[410px] max-[1110px]:w-[197px] max-[1110px]:max-w-full max-[1110px]:mx-auto max-[1110px]:mt-[52px]"
                src="/zx9speaker.svg"
                alt=""
              />
              <div className="max-[1110px]:w-[349px] max-[1110px]:max-w-full max-[1110px]:mx-auto max-[1110px]:text-center max-w-[349px] mt-[118px] w-full ml-[138px] mb-44 max-[1110px]:mt-[64px]">
                <h1 className="text-[#FFFFFF] font-bold text-[56px] tracking-[2px]">
                  ZX9 SPEAKER
                </h1>
                <p className="text-[#FFFFFF] text-[15px] mt-6 mb-10">
                  Upgrade to premium speakers that are phenomenally built to
                  deliver truly remarkable sound.
                </p>
                <ButtonBlack slug={"zx9-speaker"} text={"SEE PRODUCT"} />
              </div>
            </div>
            <div className="bg-[url('/zxyspeaker.svg')] bg-center h-[320px] mt-[48px] bg-no-repeat p-24 max-[710px]:pl-[24px]">
              <p className="font-bold mb-8 text-black text-[28px]">
                ZX7 SPEAKER
              </p>
              <ButtonWhite slug={"zx7-speaker"} text={"SEE PRODUCT"} />
            </div>
            <div className="grid grid-cols-2 mt-[48px] gap-x-[30px] max-[910px]:grid-cols-1 max-[910px]:gap-y-[24px] justify-items-center">
              <div className=" w-full bg-center h-[320px] bg-[url('/yx1earphones.svg')]"></div>
              <div className="w-full bg-center h-[320px] bg-[#F1F1F1]">
                <div className="mt-[101px] pl-[95px] max-[600px]:pl-[24px]">
                  <p className="font-bold text-black text-[28px] mb-8 tracking-[2px]">
                    YX1 EARPHONES
                  </p>
                  <ButtonWhite slug={"yx1-earphones"} text={"SEE PRODUCT"} />
                </div>
              </div>
            </div>
            <Bringing />
          </div>
        </>
      )}
    </>
  )
}

export default Home
