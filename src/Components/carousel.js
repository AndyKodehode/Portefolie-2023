import { carouselData } from "../Pages/Data"
import { useState } from "react"
import { BookFlexDiv } from "./styled"
import { BooksImg } from "./styled"
import { CircleBtn } from "./styled"
import {AiOutlineArrowLeft} from 'react-icons/ai'
import{AiOutlineArrowRight} from 'react-icons/ai'




export const Carousel= (()=>{


  

const[carsouselImg, setCarouselImg]= useState(0)


const clickHandler = ()=>{
    if(carsouselImg===carouselData.length-1){
       return setCarouselImg(0)
    }

    setCarouselImg(prevCarouselImg =>prevCarouselImg+1)
}

const backClick =()=>{
    if(carsouselImg=== carouselData.length-9){
     return setCarouselImg(8)
    }

    setCarouselImg(prevCarouselImg => prevCarouselImg-1)
}

return(

<BookFlexDiv style={{display: 'flex', flexDirection:'column', width: '100%'}}> 
   
     
     <div   style={{display:'flex', flexDirection: 'row', width: '100%', justifyContent:'center' }} >

            <CircleBtn  onClick={backClick} style={{marginRight:'4%'}}>
                
                <AiOutlineArrowLeft/>
            </CircleBtn>

            <BooksImg  style={{zIndex:'0', width: '80%'}} key={carouselData[carsouselImg].id}>
                    <img src={carouselData[carsouselImg].image} alt="carsousel??"/>
                
                    
            </BooksImg>

          
            

            <CircleBtn  onClick={clickHandler} style={{marginLeft:'4%'}}>
           
           
               <AiOutlineArrowRight />
           </CircleBtn>
    </div>

    <div>

        <p >
            {carouselData[carsouselImg].text}
        </p>

    </div>
            
          
            

</BookFlexDiv>)

})