import {Link} from "react-router-dom"

function ButtonBrown({text, textColor, slug}) {
  return (
    <Link to={`/product/${slug || ""}`}>
      <button
        className={`w-40 h-12 bg-[#D87D4A] hover:bg-[#FBAF85] text-[${textColor}] text-[13px] transition leading-[17px] tracking-[1px] font-bold`}
      >
        {text}
      </button>
    </Link>
  )
}

export default ButtonBrown
