import {NavArrowRight} from "iconoir-react"
import {Link} from "react-router-dom"
function ThreeShop() {
  return (
    <div className="grid grid-cols-3 gap-x-8 max-[710px]:grid-cols-1 max-[710px]:gap-y-[90px] justify-items-center">
      <Link
        to={"/headphones"}
        className="bg-base-200 transition-all hover:opacity-50 grid justify-items-center max-w-[350px] w-full h-[204px]"
      >
        <img
          className="mt-[-74px] w-[122px] h-[160px]"
          src="/headphones.svg"
          alt=""
        />
        <p className="font-bold text-[18px] tracking-[1.29px]">HEADPHONES</p>
        <div className="flex items-center mb-4">
          <p className="font-bold text-[13px] tracking-[1px] opacity-[50%]">
            SHOP
          </p>
          <NavArrowRight width={20} height={20} color="#D87D4A" />
        </div>
      </Link>
      <Link
        to={"/speakers"}
        className="bg-base-200 transition-all hover:opacity-50 grid justify-items-center max-w-[350px] w-full h-[204px]"
      >
        <img
          className="mt-[-74px] w-[122px] h-[160px]"
          src="/zx9speaker.svg"
          alt=""
        />
        <p className="font-bold text-[18px] tracking-[1.29px]">SPEAKERS</p>
        <div className="flex items-center mb-4">
          <p className="font-bold text-[13px] tracking-[1px] opacity-[50%]">
            SHOP
          </p>
          <NavArrowRight width={20} height={20} color="#D87D4A" />
        </div>
      </Link>
      <Link
        to={"/earphones"}
        className="bg-base-200 transition-all hover:opacity-50 grid justify-items-center max-w-[350px] w-full h-[204px]"
      >
        <img
          className="mt-[-74px] w-[122px] h-[160px]"
          src="/earphones.svg"
          alt=""
        />
        <p className="font-bold text-[18px] tracking-[1.29px]">EARPHONES</p>
        <div className="flex items-center mb-4">
          <p className="font-bold text-[13px] tracking-[1px] opacity-[50%]">
            SHOP
          </p>
          <NavArrowRight width={20} height={20} color="#D87D4A" />
        </div>
      </Link>
    </div>
  )
}

export default ThreeShop
