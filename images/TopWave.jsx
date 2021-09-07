import * as React from "react"

function SvgComponent(props) {
  return (
    <svg width={48} height={100} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M0 0h48v1H0z" fill="#063855" fillRule="evenodd" />
    </svg>
  )
}

export default SvgComponent