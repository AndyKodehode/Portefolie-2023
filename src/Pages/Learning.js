
import { HeaderTop } from "../Components/styled"
import { MainNav } from "../Components/Nav"
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
import { Carousel } from "../Components/carousel"
import { CircleImg } from "../Components/styled"
import { RoundImg } from "../Components/styled"
import { YoutubeFrame } from "../Components/styled"
import { CircleImgFrame } from "../Components/styled"
import { CarouselFlexDiv } from "../Components/styled"
import { H2Learn } from "../Components/styled"
import { Footer } from "../Components/footer"
import { KursDiv } from "../Components/styled"
import { BookMain } from "../Components/styled"
import { CircleFlexDiv } from "../Components/styled"
import { CircleText } from "../Components/styled"
import { LButton } from "../Components/styled"
import { KursBtn } from "../Components/styled"
import { Bimg } from "../Components/styled"

import { Link } from "react-router-dom"


export const YoutubeImg = [
    {
       id: 20,
       image:  process.env.PUBLIC_URL+'/Img/Flux.jpg',
       text: 'Flux academy',
       link: 'https://www.youtube.com/@FluxAcademy'
       

    }
  ,
    {
        id: 21,
        image: process.env.PUBLIC_URL+'/Img/Satori.jpg',
        text: 'Satori graphics',
        link: 'https://www.youtube.com/@SatoriGraphics'
    },

    {
        id: 22,
        image: process.env.PUBLIC_URL+'/Img/Charlie Marie.jpg',
        text: 'CharlieMarieTV',
        link: 'https://www.youtube.com/@charlimarieTV'
    },

    {
        id: 23,
        image: process.env.PUBLIC_URL+'/Img/Figma.jpg',
        text: 'Figma', 
        link:'https://www.youtube.com/@Figma'
        
    }

]

export const RoundImgCont=(()=>{


   return(

     <YoutubeFrame>

    {YoutubeImg.map((tube)=>{

     return(

         
    
             <div key={tube.id} style={{display:'flex', flexDirection: 'row', alignItems:'center', width:'100%'}}>

                  

                 <CircleFlexDiv>
                    <CircleImgFrame>
                             <CircleImg >
                               <a style={{textDecoration:'none'}} href={tube.link}><RoundImg  src= {(tube.image)}/></a> 
                             </CircleImg>
                    </CircleImgFrame>

                      <CircleText>
                        <a style={{textDecoration:'none', color:'inherit'}} href={tube.link}> <p >{tube.text}</p> </a> 
                      </CircleText>


                 </CircleFlexDiv>

               
             </div>
           
         
    
           
     )})}


  </YoutubeFrame>
   
   )

})


export const Learning = (()=>{

    const LearningStyle = {
        
        backgroundColor: '#70ACE0'}

    return(
     
        <LearningFlexDiv>
           <MainNav style={LearningStyle}></MainNav>
           <HeaderTop style={{backgroundColor:'#70ACE0', marginTop: '0rem', marginBottom: '10rem', flexDirection: 'row', height: '40vh', justifyContent: 'space-evenly', paddingTop: '5rem'}}>
              <div style={{ display:'flex', flexDirection: 'column'}}>
                    <LH1 style={{color:'white'}}>L??ring</LH1>
                    <BookP style={{marginLeft: '2.2rem'}}> En liten oversikt over hva jeg har gjort av kurs og egenl??ring</BookP>
              </div>
             <LImagDiv >
                 <LImg  src={process.env.PUBLIC_URL + "/Img/FangWin.jpg"} alt="book img" />
             </LImagDiv>
           </HeaderTop>


         <BookMain>

              
          <H2Learn style={{textAlign: 'center'}}>B??ker</H2Learn>

               <BookFlexDiv>

                    
                        <BooksImg>
                            <Bimg src={process.env.PUBLIC_URL + "/Img/Rocket Surgery.jpg"} alt="rocket surgery"/>
                        </BooksImg>

                        <BookBox>
                            <NavP style={{color:'white', marginLeft: '0.5rem'}}>Rocket Surgery</NavP>
                           <BookP>
                                En praktisk bok om hvordan man gj??r brukertesting, hva man m?? tenke p?? i forkant, underveis og hva observat??rer skal gj??re
                           </BookP>
                            
                        </BookBox>

                </BookFlexDiv>

                <BookFlexDiv>
                    
                    
                        <BooksImg>
                            <Bimg src={process.env.PUBLIC_URL + "/Img/drittsystem.jpg"} alt="rocket surgery" />
                        </BooksImg>

                        <BookBox>
                                <NavP style={{color:'white', marginLeft: '1.2rem', padding: '0.2rem'}}>J??vla Drittsystem</NavP>
                                <BookP>
                                    En bok om viktigheten av ?? gj??re grundig jobb i forkant n??r man skal skape et produkt, og konsekvensene av ?? ikke gj??re forarbeidet godt nok.
                            </BookP>
                            
                        </BookBox>

                </BookFlexDiv>

                <BookFlexDiv>
                        
                                
                            <BooksImg>
                                <Bimg src={process.env.PUBLIC_URL + "/Img/100 things 2.jpg"} alt="rocket surgery" />
                            </BooksImg>

                            <BookBox>
                                <NavP style={{color:'white', marginLeft: '0.5rem'}}>100 things</NavP>
                                <BookP>
                                        En bok om hvordan mennesker fungerer og hvordan man kan ta hensyn til det i design
                                </BookP>
                                
                            </BookBox>

                </BookFlexDiv>

            </BookMain>

      
           <KursDiv>

                    <H2Learn style={{textAlign: 'center'}}>Kurs</H2Learn>
                    <BookFlexDiv style={{marginTop:'2rem'}}>

                            <NavP>IDF</NavP>

                            <BooksImg>
                                <img  src={process.env.PUBLIC_URL + "/Img/IDFKuttet.png"} alt= "IDF kurs"  style={{objectFit: 'cover', width:'90%'}}/>
                            </BooksImg>
                                
                                <div>
                                    <BookP style={{color:'#0A2236'}}>
                                        Teoretisk kurs p?? nett i design-thinking, hvordan g?? frem for ?? l??se problemer.
                                    </BookP>
                               </div>

                            <KursBtn>
                                <Link to='/IDFkurs'>
                                  <LButton style={{borderColor:'#DDDBDB', color: '#0E518C', padding: '12px', verticalAlign: 'center', textAlign: 'center', lineHeight: '0' }}>Kursbevis</LButton>
                                </Link>
                            </KursBtn>
                       

                    </BookFlexDiv>
                

                    



                

                    
                    <BookFlexDiv>

                            <NavP>Kodehode</NavP>

                            <BooksImg>
                                <img  src={process.env.PUBLIC_URL + "/Img/koding.jpg"} alt= "Kodehode kurs"  style={{objectFit: 'cover', width:'90%'}}/>
                            </BooksImg>

                            <BookP style={{color:'#0A2236'}}>
                                Kurs i HTML, CSS, Javascript, Figma og React.
                            </BookP>

                            
                          
                            <KursBtn>
                                  <Link to='/KhAttest'>
                                    <LButton style={{borderColor:'#DDDBDB', color: '#0E518C', padding: '12px', verticalAlign: 'center', textAlign: 'center', lineHeight: '0' }}>Kursbevis</LButton>
                                 </Link>
                            </KursBtn>
                             
                           
                    

                    </BookFlexDiv>
            
            </KursDiv>
            
             <CarouselFlexDiv>
                <H2Learn >Skillshare&Domestika</H2Learn>
                <Carousel/>
             </CarouselFlexDiv> 
        
           


        <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '5rem', marginTop: '3rem'}}>
                     <H2Learn>Youtube </H2Learn> 
                    <h3>Personer jeg f??lger</h3>
        </div>

        <div style={{width: '100%', display:'flex', alignItems: 'center', justifyContent: 'center'}}>{RoundImgCont()}</div>

         
                
           
            
                
           
          
        <Footer/>


        </LearningFlexDiv>

   

        
    )
})


          

// <div style={{display:'flex', flexDirection:'row', marginBottom: '2rem', width: '100%', justifyContent: 'center', alignItems:'center'}}></div>


