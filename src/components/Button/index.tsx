import "./style.css"

import React, { useRef, useState } from "react"

export type ButtonProps = {
  content: string
  style?: {}
  setStyle?: React.Dispatch<React.SetStateAction<{}>>
  clickButton: Function
}

export function Button(props: ButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)

  const removeShadow = () => {
    if (buttonRef.current) {
      buttonRef.current.style.boxShadow = ""
      if (buttonRef.current.name === "Sim" && props.setStyle) {
        props.setStyle({ height: "100px" })
        // props.setHeightSim("100px")
      }
    }
  }

  const addShadow = () => {
    if (buttonRef.current) {
      buttonRef.current.style.boxShadow = "rgb(123, 123, 123) 5px 5px 0.3em"
      if (props.setStyle) {
        if (buttonRef.current.name === "Não") {
          if (buttonRef.current.style.left === "-200px") {
            buttonRef.current.style.left = "0px"
            // props.setPositionSim("0px")
            props.setStyle({ ...props.style, left: "0px" })
          } else {
            buttonRef.current.style.left = "-200px"
            props.setStyle({ ...props.style, left: "200px" })
            // props.setPositionSim("400px")
          }
        } else {
          props.setStyle({ height: "150px" })
          // props.setHeightSim("150px")
        }
      }
    }

    //fugir()
  }

  const fugir = () => {
    if (buttonRef.current) {
      if (buttonRef.current.style.left == "0px") {
        buttonRef.current.style.left = `${Math.random() * 700}px`
        buttonRef.current.style.top = `${Math.random() * 700}px`
      } else {
        buttonRef.current.style.left = `${Math.random() * 700}px`
        buttonRef.current.style.top = `${Math.random() * 700}px`
      }
    }
  }
  function ganhou() {
    alert("ganhou")
  }

  return (
    <div>
      <button
        className="botao"
        name={props.content}
        ref={buttonRef}
        onMouseDown={removeShadow}
        onMouseUp={addShadow}
        onMouseOver={addShadow}
        onMouseOut={removeShadow}
        style={props.style ? props.style : {}}
        onClick={() => {
          props.clickButton()
        }}
      >
        {props.content}
      </button>
    </div>
  )
}
