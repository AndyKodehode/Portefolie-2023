import { MainNav } from "../Components/Nav"
import { H2, AboutP, AboutDiv, AboutImg, AboutTextDiv, AboutHeaderDiv } from "../Components/styled"



export const About =(() =>{

    const AboutNav ={
        marginBottom:'4rem',
        backgroundColor: 'white'
    }

    // const FritidImg =[
    //     {
    //         id: 101,
    //         img: process.env.PUBLIC_URL + "/Img/js icon.png",
    //         tekst: 'første hobby'
    //     },

    //     {
    //         id: 102,
    //         img: process.env.PUBLIC_URL + "/Img/js icon.png",
    //         tekst: 'første hobby'
    //     }
    
    
    // ]

    return(
        <div style={{display:'flex', flexDirection: 'column', height: '200rem'}}>
           <MainNav style={AboutNav}></MainNav>

           <div>
                <AboutDiv>
                 
                  <AboutTextDiv>
                         <AboutHeaderDiv>
                            <H2>Hvem er jeg?</H2> 
                         </AboutHeaderDiv>
                      
                       <AboutP> 
                            I 2022 ble jeg ferdig med et kurs i frontend utvikling gjennom Kodehode og ser for meg en karriere innen design.
                                
                            Jeg liker veldig godt å finne nye løsninger på problemer, både når det gjelder design og brukervennlighet. 
                                
                            På kurset har jeg fått erfaring med HTML, CSS og JavaScript, jeg kjenner at jeg blir mer og mer trygg på det. 
                                
                            På fritiden har jeg tidligere drevet med improvisert teater og tenker på meg selv som en person med mye humor.
                                
                            Jeg er god med mennesker da jeg har jobbet i barnehage i mange år, det tenker jeg kan komme til nytte i møte med kunder og brukere vi skal designe og kode for. 

                            I 2023 har jeg brukt tiden til å lære meg mer på egenhånd og hjelpe Fontenehuset med sitt nye kodekurs 'Kodeloftet'
                            
                           
                        </AboutP>
                    </AboutTextDiv>

                    <AboutImg>
                       <img style={{width:'60%'}} src={process.env.PUBLIC_URL + "/Img/MegSelv.JPG"} alt='meg selv'/>
                    </AboutImg>

                </AboutDiv>

                
                   
                


                <div>
                
                  
                </div>  

                
            
         </div>
        
       

{/* 
        <YoutubeFrame style={{marginTop: '5rem'}}>

        {FritidImg.map((tube)=>{

        return(

            

                <div key={tube.id} style={{display:'flex', flexDirection: 'row', alignItems:'center', width:'100%'}}>

                    

                    <CircleFlexDiv>
                    <CircleImgFrame>
                                <CircleImg >
                                <a style={{textDecoration:'none'}} href={tube.link}><RoundImg  src= {(tube.img)}/></a> 
                                </CircleImg>
                    </CircleImgFrame>

                        <CircleText>
                        <a style={{textDecoration:'none', color:'inherit'}} href={tube.link}> <p >{tube.tekst}</p> </a> 
                        </CircleText>


                    </CircleFlexDiv>

                
                </div>
            
            

            
        )})}


        </YoutubeFrame> */}

        

    </div>

      
    )
})