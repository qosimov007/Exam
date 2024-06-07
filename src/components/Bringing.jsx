function Bringing() {
  return (
    <div className="grid grid-cols-2 items-center mt-[200px] max-[1027px]:grid-cols-1">
      <div className="bg-[url('/personImgBig.png')] rounded-lg bg-cover w-full h-[300px] hidden max-[1027px]:block"></div>
      <div className="px-[58px] pt-[63px] max-[1027px]:px-[0px] max-[820px]:pt-[40px] max-[1027px]:text-center w-[690px] max-w-full mx-auto">
        <h3 className="font-bold text-[40px] max-[710px]:text-[28px] tracking-[1.44px] mb-8">
          BRINGING YOU THE <span className="text-[#D87D4A]">BEST</span> AUDIO
          GEAR
        </h3>
        <p className="text-[15px] opacity-[50%]">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div className="bg-[url('/personimg.svg')] max-w-full max-h-full rounded-lg bg-center ml-auto w-[540px] h-[588px] max-[1027px]:hidden"></div>
    </div>
  )
}

export default Bringing
