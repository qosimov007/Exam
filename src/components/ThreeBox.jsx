import ButtonBrown from "./ButtonBrown"

function ThreeBox() {
  return (
    <>
      <h1 className="text-center font-bold text-[32px] tracking-[1.14px] max-[500px]:text-[24px]">
        YOU MAY ALSO LIKE YOU
      </h1>
      <div className="grid grid-cols-3 mt-[100px] max-[500px]:mt-[40px] gap-x-[30px] max-[930px]:grid-cols-1 max-[930px]:justify-items-center">
        <div className="w-full mb-[120px]">
          <div className="max-w-full w-full h-[318px] bg-[#F1F1F1] rounded-lg">
            <img
              className="h-full m-auto max-[930px]:max-w-full max-[930px]:w-[190px]"
              src="/XX99Mark.svg"
              width={140}
              height={140}
              alt=""
            />
          </div>
          <div className="grid justify-center max-[920px]:justify-start max-[580px]:justify-center max-[580px]:text-center">
            <p className="mb-8 mt-10 font-bold text-[24px] tracking-[1.71px]">
              XX99 MARK II
            </p>
            <ButtonBrown
              slug={"xx99-mark-two-headphones"}
              text={"SEE PRODUCT"}
              textColor={"#FFFFFF"}
            />
          </div>
        </div>
        <div className="w-full mb-[120px]">
          <div className="max-w-full w-full h-[318px] bg-[#F1F1F1] rounded-lg">
            <img
              className="h-full m-auto max-[930px]:max-w-full max-[930px]:w-[190px]"
              width={140}
              height={140}
              src="/zx9speaker.svg"
              alt=""
            />
          </div>
          <div className="grid justify-center max-[930px]:justify-start max-[580px]:justify-center max-[580px]:text-center">
            <p className="mb-8 mt-10 font-bold text-[24px] tracking-[1.71px]">
              ZX9 SPEAKER
            </p>
            <ButtonBrown
              slug={"zx9-speaker"}
              text={"SEE PRODUCT"}
              textColor={"#FFFFFF"}
            />
          </div>
        </div>
        <div className="w-full mb-[120px]">
          <div className="max-w-full w-full h-[318px] bg-[#F1F1F1] rounded-lg">
            <img
              className="h-full m-auto max-[930px]:max-w-full max-[930px]:w-[190px]"
              src="/earphones.svg"
              alt=""
              width={140}
              height={140}
            />
          </div>
          <div className="grid justify-center max-[930px]:justify-start max-[580px]:justify-center max-[580px]:text-center">
            <p className="mb-8 mt-10 font-bold text-[24px] tracking-[1.71px]">
              YX1 EARPHONES
            </p>
            <ButtonBrown
              slug={"yx1-earphones"}
              text={"SEE PRODUCT"}
              textColor={"#FFFFFF"}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default ThreeBox
