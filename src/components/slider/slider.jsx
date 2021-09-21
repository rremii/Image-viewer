import React from 'react'
import css from "./slider.module.css"
import {useState} from "react";

const Slider=(props)=> {

    let [currentSlide, changeSlide] = useState(0)
    let[imgArr,changeImg]=useState([])

// window.currentSlide = currentSlide
// window.imgArr = imgArr
// document.addEventListener('keydown',(e)=>{
//     console.log(e)
// if(e.key ==='ArrowLeft'){
//     PrevSlide()
// }
// if(e.key ==='ArrowRight' ){
//     NextSlide()
// }
// },false)


const NextSlide=()=>{
        if(currentSlide === imgArr.length - 1)return changeSlide(0)
      return changeSlide(currentSlide + 1)
}
const PrevSlide=()=>{
    if(currentSlide <= 0)return changeSlide(imgArr.length - 1)
    return changeSlide(currentSlide - 1)
}

const  uploadImg=(e)=>{
        let newImgArr = Array.from(e.target.files).map(file=>URL.createObjectURL(file))
    changeImg(newImgArr)
    console.log(newImgArr)

}




    let imgEL = imgArr.map((img,i) => {
            return (
                <span>
                    <img key={i} className={css.slide} style={{transform: `translateX(${100 *(i-currentSlide)}%)`
                        ,opacity: `${i === currentSlide ? 1 : 0 }`}} src={img} alt="img"/>
                </span>
            )})
    let img = imgArr.map((img,i)=>{
        return(
            <div>
                <img style={{opacity: i=== currentSlide ? 1 :0.3}} className={css.img} src={img} alt=""/>
            </div>
        )
    })

    return (
        <div className={css.slider}>
            <div>
<h1 className={css.h1}>Image viewer</h1>
                {imgEL}
                <button onClick={NextSlide} className={css.btnRight} style={{opacity:imgArr.length?1:0}}>&gt; </button>
                <button onClick={PrevSlide} className={css.btnLeft} style={{opacity:imgArr.length?1:0}}>&lt;</button>
                <button className={css.input}>Click
                    <input className={css.inputText} multiple={true}  onChange={uploadImg}  type="file"/>
                </button>



                <div className={css.containerDiv}>
                    <button className={css.HELLBUTTON}>
                    </button>
                </div>
                {img}
            </div>
        </div>
    )
}
export default Slider
