import {Link} from "react-router-dom"

function ButtonWhite({text, slug}) {
  return (
    <Link to={`/product/${slug || ""}`}>
      <button
        className={`w-40 h-12 bg-none hover:bg-[#000000] hover:text-white border-[#000000] border text-black text-[13px] transition leading-[17px] tracking-[1px] font-bold`}
      >
        {text}
      </button>
    </Link>
  )
}

export default ButtonWhite
