import {NavLink} from "react-router-dom"

function Footer() {
  return (
    <div className="w-full bg-[#101010] h-auto">
      <footer className="max-container mt-16 max-[650px]:mt-10 mb-7">
        <div className="flex justify-between max-[910px]:block max-[650px]:text-center">
          <NavLink to={"/"}>
            <img className="max-[650px]:mx-auto" src="/logo.svg" alt="" />
          </NavLink>
          <nav className="flex max-[650px]:grid max-[650px]:w-min max-[650px]:justify-items-center max-[650px]:mx-auto max-[650px]:mt-8 max-[910px]:gap-y-4 max-[910px]:mt-7 text-[#FFFFFF] gap-x-[34px] font-bold text-[13px] tracking-[2px]">
            <NavLink className={"hover:text-[#D87D4A] transition"} to={"/"}>
              HOME
            </NavLink>
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
        </div>
        <div className="items-center flex justify-between max-[650px]:block">
          <div>
            <p className="max-w-[540px] w-full mt-9 mb-14 text-[15px] text-[#FFFFFF] opacity-[50%] max-[650px]:text-center">
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we're open 7 days a week.
            </p>
            <p className="font-bold text-[15px] max-[650px]:text-center text-[#FFFFFF] opacity-[50%]">
              Copyright 2021. All Rights Reserved
            </p>
          </div>
          <div className="flex gap-x-4 max-[910px]:self-end max-[650px]:justify-center max-[650px]:mt-12">
            <img src="/facebook.svg" alt="" />
            <img src="/twitter.svg" alt="" />
            <img src="/instagram.svg" alt="" />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
