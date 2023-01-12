import { HeaderFrame } from "./styled"
import { HeaderTop } from "./styled"
import { H1 } from "./styled"
import { H2Lora } from "./styled" 
import { HeaderP } from "./styled"
import { Nav } from "./Nav"
import { HeaderImgDiv} from "./styled"
import { BlueBox } from "./styled"
import { BotomHeaderDiv } from "./styled"

export const Header = (()=>{

    return(
        <HeaderFrame>
               <Nav></Nav>
           
           <HeaderTop>
           
            <div style={{ marginTop: '1rem', marginLeft: '2.5rem'}}>
               <H1>Hei, jeg er Anders</H1>
               <H2Lora>Designstudent med erfaring 
                i HTML, CSS, Javascript og React</H2Lora>
            </div>

           </HeaderTop>

           
              <BotomHeaderDiv>
                   
                   <div>
                        <HeaderP>
                        Jeg liker veldig godt å finne nye løsninger på problemer, både når det gjelder design og brukervennlighet.  
                        Har fullført frontend kurs gjennom Kodehode og lærer design på egenhånd.

                        </HeaderP>

                  </div>

                  <div>
                        <HeaderImgDiv>
                            <img src="/Img/meg selv.jpg" alt="meg selv" style={{width: '80%'}}/>
                        </HeaderImgDiv>
                        <BlueBox></BlueBox>
                  </div>
                       
              </BotomHeaderDiv>
              
                
            

            
      

        </HeaderFrame>
    )
})



// marginLeft: '60rem', width: '40rem'