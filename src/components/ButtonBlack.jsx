import React from "react"
import {Link} from "react-router-dom"

function ButtonBlack({text, slug}) {
  return (
    <Link to={`/product/${slug || ""}`}>
      <button
        className={`w-40 h-12 bg-[#000000] hover:bg-[#4C4C4C] text-white text-[13px] transition leading-[17px] tracking-[1px] font-bold`}
      >
        {text}
      </button>
    </Link>
  )
}

export default ButtonBlack
