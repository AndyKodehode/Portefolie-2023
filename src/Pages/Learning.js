
import { HeaderTop } from "../Components/styled"
import { NavTwo } from "../Components/Nav"
// import { H1 } from "../Components/styled"
// import { H2 } from "../Components/styled"
// import { HeaderImgDiv } from "../Components/styled"
import { LImagDiv } from "../Components/styled"
import { LImg } from "../Components/styled"
import { LH1 } from "../Components/styled"
import { BooksImg } from "../Components/styled"
import { LearningFlexDiv } from "../Components/styled"
import { BookFlexDiv } from "../Components/styled"
import { BookBox } from "../Components/styled"
import { BookP } from "../Components/styled"
import { NavP } from "../Components/styled"



export const Learning = (()=>{

    return(
     
        <LearningFlexDiv>
           <NavTwo ></NavTwo>
           <HeaderTop style={{backgroundColor:'#70ACE0', marginTop: '0rem', marginBottom: '10rem', flexDirection: 'row', height: '40vh', justifyContent: 'space-evenly', paddingTop: '5rem'}}>
              <LH1 style={{color:'white'}}>Læring</LH1>
             <LImagDiv>
                 <LImg  src={process.env.PUBLIC_URL + "/Img/FangWin.jpg"} alt="book img" />
             </LImagDiv>
           </HeaderTop>


          <BookFlexDiv>

                  
                <BooksImg>
                    <img src={process.env.PUBLIC_URL + "/Img/Rocket Surgery.jpg"} alt="rocket surgery" style={{objectFit: 'cover', width:'100%'}}/>
                </BooksImg>

                <BookBox>
                   <NavP style={{color:'white', marginLeft: '0.5rem'}}>Rocket Surgery</NavP>
                   <BookP>
                        En praktisk bok om hvordan man gjør brukertesting, hva man må tenke på i forkant, underveis og hva observatører skal gjøre
                   </BookP>
                    
                </BookBox>

            </BookFlexDiv>

            <BookFlexDiv>
                
                  
                    <BooksImg>
                        <img src={process.env.PUBLIC_URL + "/Img/drittsystem.jpg"} alt="rocket surgery" style={{objectFit: 'cover', width:'100%'}}/>
                    </BooksImg>

                    <BookBox>
                            <NavP style={{color:'white', marginLeft: '1.2rem', padding: '0.2rem'}}>Jævla Drittsystem</NavP>
                            <BookP>
                                En bok om viktigheten av å gjøre grundig jobb i forkant av lansering av et produkt, og konsekvensene av å ikke gjøre forarbeidet godt nok.
                           </BookP>
                        
                    </BookBox>

            </BookFlexDiv>

            <BookFlexDiv>

                            
                        <BooksImg>
                            <img src={process.env.PUBLIC_URL + "/Img/100 things 2.jpg"} alt="rocket surgery" style={{objectFit: 'cover', width:'100%'}}/>
                        </BooksImg>

                        <BookBox>
                            <NavP style={{color:'white', marginLeft: '0.5rem'}}>100 things</NavP>
                            <BookP>
                                    En praktisk bok om hvordan man gjør brukertesting, hva man må tenke på i forkant, underveis og hva observatører skal gjøre
                             </BookP>
                            
                        </BookBox>

            </BookFlexDiv>




        </LearningFlexDiv>

   

        
    )
})