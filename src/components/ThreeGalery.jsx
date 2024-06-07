function ThreeGalery({img1, img2, img3}) {
  return (
    <div className="flex gap-x-8 my-40 max-[500px]:my-[120px] max-[740px]:block">
      <div>
        <div className={`mb-8 max-[740px]:mb-[20px]`}>
          <img
            className="max-w-[445px] object-cover max-[740px]:max-w-full w-full max-h-[295px] rounded-lg h-full"
            src={img1}
            alt=""
          />
        </div>
        <div className={`max-[740px]:mb-[20px]`}>
          <img
            className="max-w-[445px] object-cover max-[740px]:max-w-full w-full max-h-[295px] rounded-lg h-full"
            src={img2}
            alt=""
          />
        </div>
      </div>
      <div>
        <img
          className="max-w-[635px] rounded-lg object-cover max-[740px]:max-w-full w-full max-h-full h-full"
          src={img3}
          alt=""
        />
      </div>
    </div>
  )
}

export default ThreeGalery
