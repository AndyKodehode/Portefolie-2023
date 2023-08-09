import { LearningFlexDiv } from "../Components/styled"
import { CVimg } from "../Components/styled"
import { MainNav } from "../Components/Nav"


export const CV =  (()=>{
    
    const CVstyle = {
        backgroundColor: 'white'
    }

    return(

        <LearningFlexDiv>
            <MainNav style={CVstyle} ></MainNav>
            <CVimg style={{marginTop: '10rem'}} src= {process.env.PUBLIC_URL +  "/Img/CV 5_Side_1.png"} alt='CV1'/>
            <CVimg src= {process.env.PUBLIC_URL +  "/Img/CV 5_Side_2.png"} alt='CV2'/>
            <CVimg src= {process.env.PUBLIC_URL +  "/Img/CV 5_Side_3.png"} alt='CV3'/>
        </LearningFlexDiv>

    )
})