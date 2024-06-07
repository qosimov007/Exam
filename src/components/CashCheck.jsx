import React, {useState} from "react"

function CashCheck({text, checked, onChange}) {
  return (
    <div
      className={`mb-4 pt-2 pl-[21px] font-bold text-[14px] w-full h-[56px] border ${
        checked ? "border-[#D87D4A]" : "border-[#CFCFCF]"
      } rounded-lg items-center`}
    >
      <div className="form-control">
        <label className="label cursor-pointer justify-start">
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-red-500"
            checked={checked}
            onChange={onChange}
          />
          <span className="label-text ml-2">{text}</span>
        </label>
      </div>
    </div>
  )
}
export default CashCheck
