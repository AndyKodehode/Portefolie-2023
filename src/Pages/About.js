import { MainNav } from "../Components/Nav"
import { YoutubeFrame, CircleFlexDiv, CircleImg, RoundImg, CircleImgFrame, CircleText, H2, HeaderP, AboutDiv } from "../Components/styled"



export const About =(() =>{

    const AboutNav ={
        marginBottom:'4rem'
    }

    const FritidImg =[
        {
            id: 101,
            img: process.env.PUBLIC_URL + "/Img/js icon.png",
            tekst: 'første hobby'
        },

        {
            id: 102,
            img: process.env.PUBLIC_URL + "/Img/js icon.png",
            tekst: 'første hobby'
        }
    
    
    ]

    return(
        <div style={{display:'flex', flexDirection: 'column', height: '200rem'}}>
           <MainNav style={AboutNav}></MainNav>

           <AboutDiv>
             <div style={{display:'flex', flexDirection:'column'}}>
               <H2>Hvem er jeg?</H2> 
               <HeaderP>
                For øyeblikket tar jeg kurs i frontend utvikling gjennom Kodehode og ser for meg en karriere innen design og utvikling.
                    
                Jeg liker veldig godt å finne nye løsninger på problemer, både når det gjelder design og brukervennlighet. 
                    
                På kurset har jeg fått erfaring med HTML, CSS og JavaScript, jeg kjenner at jeg blir mer og mer trygg på det. Dette kan dere blant annet se gjennom frontend mentor prosjekt jeg har gjort. 
                    
                På fritiden driver jeg med improvisert teater og tenker på meg selv som en person med mye humor.
                    
                Jeg er god med mennesker da jeg har jobbet i barnehage i mange år, det tenker jeg kan komme til nytte i møte med kunder og brukere vi skal designe og kode for. Ærlighet er viktig for meg og jeg er flink til å formulere hva jeg kan og ikke kan.</HeaderP>
               

             </div>
             <div>
                <img src={process.env.PUBLIC_URL + "/Img/meg 2.jpg"} alt='meg selv'/>
             </div>
        </AboutDiv>
        
       


        <YoutubeFrame>

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


        </YoutubeFrame>

        )

    </div>

      
    )
})