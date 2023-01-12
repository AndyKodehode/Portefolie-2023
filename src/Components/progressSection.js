import { ProgressbarHTML, ProgressbarAI, ProgressbarCSS, ProgressbarFigma, ProgressbarJS, ProgressbarReact, ProgressbarPS } from "./progressbar";
import { ProgressDiv } from "./styled";
import { CircleImg } from "./styled";
import { ProgressFrame } from "./styled";


export const  ProgressSection =(()=>{

    return(
     
   <div style={{display:'flex', justifyContent: 'center',  width: '80%'}}>
      
    <ProgressFrame>
      <ProgressDiv>
         <ProgressbarFigma></ProgressbarFigma>
            <CircleImg >
                <img  src="/Img/Figma.jpg" alt="html knowledge" style={{objectFit:'contain', width:'90%'}}/>
            </CircleImg>
      </ProgressDiv>


      <ProgressDiv>
         <ProgressbarHTML></ProgressbarHTML>
            <CircleImg>
                <img  src="/Img/HTML5.jpg" alt="html knowledge" style={{objectFit:'contain', width:'70%'}}/>
            </CircleImg>
      </ProgressDiv>
      <ProgressDiv>
         <ProgressbarCSS></ProgressbarCSS>
            <CircleImg>
                <img  src="/Img/css.png" alt="html knowledge" style={{objectFit:'contain', width:'75%'}}/>
            </CircleImg>
      </ProgressDiv>
      <ProgressDiv>
         <ProgressbarJS></ProgressbarJS>
            <CircleImg>
                <img  src="/Img/js icon.png" alt="html knowledge" style={{objectFit:'contain', width:'80%'}}/>
            </CircleImg>
      </ProgressDiv>

      <ProgressDiv>
         <ProgressbarAI></ProgressbarAI>
            <CircleImg>
                <img  src="/Img/AI2.png" alt="html knowledge" style={{objectFit:'contain', width:'70%'}}/>
            </CircleImg>
      </ProgressDiv>

      
      <ProgressDiv>
         <ProgressbarReact></ProgressbarReact>
            <CircleImg>
                <img  src="/Img/React logo.png" alt="html knowledge" style={{objectFit:'contain', width:'100%'}}/>
            </CircleImg>
      </ProgressDiv>

      
      <ProgressDiv>
         <ProgressbarPS></ProgressbarPS>
            <CircleImg>
                <img  src="/Img/photoshop_circle_icon.png" alt="html knowledge" style={{objectFit:'contain', width:'70%'}}/>
            </CircleImg>
      </ProgressDiv>
    </ProgressFrame>
    </div>
    
    )
})