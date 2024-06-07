import ButtonBrown from "./ButtonBrown"

function CategoryLeft({img, title, dscr, slug}) {
  return (
    <div className="grid grid-cols-2 items-center my-40 max-[984px]:my-[120px] max-[984px]:grid-cols-1">
      <div className="max-w-[540px] max-[984px]:max-w-full bg-[#F1F1F1] w-full flex h-[560px] max-[550px]:max-h-[560px] max-[550px]:h-full">
        <img
          className="m-auto max-[500px]:h-[200px] max-[500px]:w-[200px]"
          src={img}
          height={300}
          width={300}
          alt=""
        />
      </div>
      <div className="ml-[125px] max-[984px]:text-center max-[984px]:ml-0 max-[984px]:mt-[52px]">
        <p className="text-[14px] tracking-[10px] text-[#D87D4A]">
          NEW PRODUCT
        </p>
        <h2 className="font-bold text-[44px] tracking-[1.43px] max-[500px]:text-[28px]">
          {title}
        </h2>
        <p className="mt-8 mb-10 text-[15px] opacity-[50%]">
          {dscr}
        </p>
        <ButtonBrown slug={slug} textColor={"#FFFFFF"} text={"SEE PRODUCT"} />
      </div>
    </div>
  )
}

export default CategoryLeft
