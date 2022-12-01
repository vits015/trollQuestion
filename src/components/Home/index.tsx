import "./style.css"
import { useState } from "react"

import { Button } from "../Button"

function Home() {
  // const [positionSim, setPositionSim] = useState<string>("")
  // const [heightSim, setHeightSim] = useState<string>("")
  const [customStyle, setCustomStyle] = useState<{}>()
  const clickButton = () => {
    alert("LULA LIVRE!")
  }
  return (
    <>
      <h1>Você é Comunista??</h1>
      <div className="container">
        <Button content="Sim" style={customStyle} clickButton={clickButton} />
        <Button
          content="Não"
          setStyle={setCustomStyle}
          clickButton={() => {}}
        />
      </div>
    </>
  )
}

export default Home
