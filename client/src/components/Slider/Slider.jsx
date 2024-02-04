import React, { useState } from 'react'
import WestOutlinedIcon from "@mui/icons-material/WestOutlined"
import EastOutlinedIcon from "@mui/icons-material/EastOutlined"
import "./Slider.scss"

const Slider = () => {
    const [curSlide, setCurSlide] = useState(0)
    const data = [
        "https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/1300550/pexels-photo-1300550.jpeg?auto=compress&cs=tinysrgb&w=1600",
        
      ];

      const prevSlide = () => {
       setCurSlide(curSlide === 0 ? 2 : (prev) => prev - 1)
      }

      const nextSlide = () => {
        setCurSlide(curSlide === 2 ? 0 : (next) => next + 1)
      }
  return (
    <div className="slider">
        <div className="container" style={{transform:`translateX(-${curSlide * 100}vw)`}}>
            <img src={data[0]} alt="" />
            <img src={data[1]} alt="" />
            <img src={data[2]} alt="" />
        </div>
        <div className="icons">
            <div className="icon" onClick={prevSlide}>
            <WestOutlinedIcon/>
            </div>
            <div className="icon" onClick={nextSlide}>
            <EastOutlinedIcon/>
            </div>
        </div>
    </div>
  )
}

export default Slider