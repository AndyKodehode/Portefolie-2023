import { Frame} from "../Components/styled"
import { H2 } from "../Components/styled"
import { H3} from "../Components/styled"
import { H2div } from "../Components/styled"
import { H3div } from "../Components/styled"
import { FrameFlexDiv } from "../Components/styled"
import { FrameImgOne } from "../Components/styled"
import { FrameImgTwo } from "../Components/styled"
import { FrameImgThree } from "../Components/styled"
import { FrameOneDiv } from "../Components/styled"





export const Prosjectframes = (()=>{

return(
<FrameFlexDiv>

    <Frame   style={{
      backgroundColor: '#95E5CC'
    }}>
      <FrameOneDiv>
      <H2div>
          <H2>Fontenehuset-app</H2>
      </H2div>

       

       <H3div>
          <H3>
            App designet for brukere av 
            Fontenehuset Bergen
          </H3>
        </H3div>
      </FrameOneDiv>

        


        
      <div
      style={{
        gridColumn: 1,
        gridRowStart:1,
        gridRowEnd: 4
        }} 
      >
          <FrameImgOne src="/Img/mobil kopi.png" alt="trying to figure this out"/>

      </div>
     
    </Frame>

    <Frame   style={{
      backgroundColor: '#CCDE54'
     }}>
    
       <H2div>
         <H2>Tips-kalkulator</H2>
       </H2div>
    
     

      <H3div>
          <H3>
            Tips kalkulator fra Front-end mentor
          </H3>
      </H3div>

        
      

      <div

      style={{
        gridColumn: 1,
        gridRowStart:1,
        gridRowEnd: 4
           }}>
      
           
           <FrameImgTwo src="/Img/TipCalculator kuttet.jpg" alt="next"/>
      </div>
      
     
    </Frame>

    <Frame   style={{
      backgroundColor: '#70ACE0'
    }}>
      

      <H2div>
         <H2>Streaming-app</H2>
      </H2div>

      <H3div>
          <H3
          style={{color:'#39454F'}}
          >
            Design av streaming app i Adobe XD
          </H3>
      </H3div>
     

      <div

      style={{
        gridColumn: 1,
        gridRowStart:1,
        gridRowEnd: 4
           }}>
      
           
           <FrameImgThree src="/Img/Colloseum kuttet.jpg" alt="next"/>
      </div>
    </Frame>
  
    </FrameFlexDiv>
)
})



// style={{
//   marginLeft: '5.5rem'
//  }}