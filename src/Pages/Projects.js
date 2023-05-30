
import { BookP} from "../Components/styled"
import { LH1 } from "../Components/styled"
import { LImg } from "../Components/styled"
import { LearningFlexDiv } from "../Components/styled"
import { NavStyled } from "../Components/styled"
import { Link } from "react-router-dom"
import { ProjectDiv } from "../Components/styled"
import { ProjectImg } from "../Components/styled"
import { H2 } from "../Components/styled"
import { Footer } from "../Components/footer"
import { ProjectH2 } from "../Components/styled"
import { ProjectImgDiv } from "../Components/styled"
import { ProjectNavText } from "../Components/styled"
import { StreamingDiv } from "../Components/styled"
import { ProjectTop } from "../Components/styled"
import { PimgDiv } from "../Components/styled"
import { PfonteneImgDiv } from "../Components/styled"
import { ProjectHeaderP, KodeLimg, ProjectP } from "../Components/styled"

// import { Carousel } from "../Components/carousel"


const ProjectDataOne =[

        {
          id: 45,
          header:'Ide og prosess',
          tekst:'Jeg begynte med å gjøre brukerundersøkelse for å finne ut av hva medlemmene på huset trenger for å bli motiverte og ha bra arbeidsdager.Utgangspunktet var en problemstilling.Hva kan vi gjøre med en app for at de som sitter hjemme kan bli motivert for å komme på huset. Vi gjorde så en idemyldring hvor vi tok utgangspunkt i svarene fra brukerundersøkelsen, hvordan kan vi løse at noen trenger mer trygghet eller mer struktur for å trives.Etter dette så designet jeg en wireframe Figma og sendt ut brukertest gjennom Maze for se hva som funket og ikke.',
          bilde: process.env.PUBLIC_URL + "/Img/Brukerundersøkelse.png"
        },


        {
          id: 46,
          header: 'Design',
          tekst: ' Ut ifra svarene jeg hadde fått ville jeg lage et design hvor brukeren kunne navigere seg gjennom informasjon fra og om huset enkelt. Oppgaver fra enheter, møter og annen informasjon skal kunne være lett tilgjengelig på appen.',
          bilde: process.env.PUBLIC_URL + "/Img/Fontenehuset Figma.png"

        },
        {
          id: 47,
          header: 'React Native',
          tekst: 'Appen er laget i React Native som bruker både HTML, CSS og Javascript. I tillegg er det en del React spesifikke funksjoner som StackNavigation og UseState som man må lære seg. ',
          bilde: process.env.PUBLIC_URL + "/Img/React Native- Fontenehuset.png"
        }, 

        {
          id: 48,
          header: 'ReDesign',
          tekst: 'Jeg syns det første designet ble litt tett og hadde lite luft. Jeg tok bort det øverste bildet og gjorde karusellen større, med kun et bilde synlig av gangen. For at folk skal skjønne at de kan bla vil jeg legge sirkler under bildet. I tillegg var første design-filen litt rotete, så jeg ville lage et oppsett med components, farger og skriftstiler for å ha et mer profesjonelt designsystem.',
          bilde: process.env.PUBLIC_URL + "/Img/Fontenehuset Figma redesign.png"
        },

        {
          id: 49,
          header: 'Gjenstående',
          tekst: ' Den neste delen av prosessen blir å finne en måte å lagre data på, og et CMS verktøy for å skape innhold. Fremover vil jeg samarbeide med noen andre designere og programmere for å få det ferdig.',
          bilde: process.env.PUBLIC_URL + "/Img/Fontenehuset Figma redesign.png"
        }
      
      
      ]

const ProjectDataTwo =
  
        [


       
            {
              id: 51,
              header:'TipCalculator',
              tekst:'Et FrontEnd mentor prosjekt som jeg utvidet med enkelte funksjoner',
              bilde: process.env.PUBLIC_URL + "/Img/TipCalculator.jpg",
              link: 'https://github.com/AndyKodehode/tip-calculator'
            },

            {
              id: 52,
              header:'Handleliste',
              tekst:'Et to-do liste prosjekt, hvor vi kan legge til å fjerne elementer i en handleliste',
              bilde: process.env.PUBLIC_URL + "/Img/Grocery list.png",
              link:'https://github.com/AndyKodehode/todo-list'
            },

            {
              id: 53,
              header:'Trommemaskin',
              tekst:'Et prosjekt hvor vi skulle koble lyder til bokstaver på tastaturet for å få en trommemaskin',
              bilde: process.env.PUBLIC_URL + "/Img/drum-machine 2.png",
              link: 'https://github.com/AndyKodehode/drum-machine'
            },

            {
              id: 54,
              header:'The good Reminder',
              tekst:'En app som jeg jobber med akkurat nå. Jeg tok "build a mobile app with firebase" kurset på Scrimba og tenkte jeg ville prøve å lage en egen app, både for det ideen er god og for å lære mer om firbase.',
              bilde: process.env.PUBLIC_URL + "/Img/TheGoodReminder2.png",
              link: 'https://the-good-reminder.netlify.app/'
            }

          

          
          ]


const ProjectDataThree =      [

  {
    id: 65,
    header:'Ide og prosess',
    tekst:'Dette er et designprosjekt jeg har gjort sammen med min bror i 2020. Vi fikk en ide om en problemstilling som vi syns var gøy jobbe frem en løsning på. Hva om vi kunne lage en plattform som samlet alle streaming-tjenester på et sted?. En tjeneste som gjør det lettere å finne og lagre det du liker.Deretter kom ideen om å gjøre det til en sosial plattform hvor man kan dele og snakke sammen om filmer/serier, se andre sine lister og favoritter. Det var også en måte å lære meg XD på, i senere tid har jeg brukt mer Figma.',
    bilde: process.env.PUBLIC_URL + "/Img/skisse 3.jpg"
  },


  {
    id: 66,
    header: 'Wireframes',
    tekst: 'Vi lagde skisser i XD for å lage en oversikt, et bilde av hvordan vi ville ha det uten å bli for opphengt i detaljer. Det ble hentet mye inspiriasjon fra andre plattformer, hvordan ser Netlix, Amazon og HBO ut, hva har de til felles, hva liker vi og liker vi ikke.',
    bilde: process.env.PUBLIC_URL + "/Img/wireframe.png"

  },
  {
    id: 67,
    header: 'Design',
    tekst: 'Brukeren skal kunne navigere seg gjennom egne lister av favoritter, samt se andre profiler og venners lister og favoritter.',
    bilde: process.env.PUBLIC_URL + "/Img/Colloseum Friends.jpg"
  }, 

  {
    id: 68,
    header: 'Prototype',
    tekst: ' Jeg fikk første erfaring med å sette sammen alle overganger, funksjoner og prøve å få et prosjekt  til å flyte greit.',
    bilde: process.env.PUBLIC_URL + "/Img/prototype.png"
  }

]

const ProjectDataFour =[
  {
    id:'70',
    header:'Designhefte',
    tekst:'Et hefte jeg har laget til deltagerne hvor jeg får lært bort og repetert de prinsippene jeg har lært i kurs og leksjoner',
    bilde: process.env.PUBLIC_URL + "/Img/Designhefte fremside.jpg"

  },
  {
    id:'71',
    header:'Kickoff',
    tekst:'For å lage blest rundt prosjektet og vise alle interesserte hva det går ut på laget vi en Kickoff. Masse folk kom på huset og det ble suksess. Jeg laget designet til promoteringen av eventet.',
    bilde: process.env.PUBLIC_URL + "/Img/Kick_off.png"

  },

  {
    id:'72',
    header:'Logo',
    tekst:'I forkant av kurset var vi tre stykker som jobbet med en logo til kurset. Vi ønsket at den skulle være enkel og stilfull, det skulle ikke være en illustrasjon, men samtidig kunne være et kjennetegn for kurset. Til slutt laget vi en animasjon av logoen i After effects',
    bilde:process.env.PUBLIC_URL + "/Img/Logo skisse 2.jpg",
  

  }
]


// const ProjectCarousel = [
//   {
//     id: 61,
//     img: process.env.PUBLIC_URL + "/Img/Idemyldring 1.JPG",
//     text: ''
//   },
//   {
//     id: 62,
//     img:process.env.PUBLIC_URL + "/Img/Idemyldring 2.JPG",
//     text: ''
//   }
// ]

export const Fontenehus = (()=>{

  

  // const [project, setProject] = useState([])

  // function nextProject(){
  //   let test = [Fontenehus, TipCalculator, StreamingApp]
  //   setProject(test+1)
  // }


  const FontenehusData= ProjectDataOne.map(app =>
    

      
  
    <div key={app.id} style={{marginBottom: '10rem'}} >
        <ProjectH2 style={{fontSize: '25px'}}>{app.header}</ProjectH2>
        <ProjectImg src={app.bilde}/>
       <ProjectP style={{width:'50%'}}>{app.tekst}</ProjectP>
    </div>

  )

  // const PCdata = ProjectCarousel.map(data =>
    

      
  
  //   <div key={data.id} >
  //     <img src={data.img} alt='mapped img'></img>
  //   </div>

  // )



    return(
        <div>
         <LearningFlexDiv>
            <NavStyled  style={{backgroundColor:'#70ACE0', height:'5rem'}}>
              <ProjectNavText>
                  <div>
                      <Link to='/'  style={{textDecoration: 'none', color: 'inherit'}}>
                          <BookP style={{ textAlign: 'center', width: '15vw', marginRight: '0rem'}}>Hjem</BookP> 
                      </Link>
                  </div>

                  <div style={{display:'flex', flexDirection:'row', marginRight: '1rem'}}>
                      <Link to='/Streamingapp'>
                        <BookP style={{ textAlign: 'center', width: '25vw', marginRight: '0rem'}}>Forrige prosjekt</BookP> 
                      </Link>
                      <Link to='/TipCalculator'>
                        <BookP style={{ textAlign: 'center', width: '20vw', marginRight: '0rem'}}>Neste prosjekt</BookP> 
                      </Link>
                  </div>
              </ProjectNavText>
            </NavStyled>
           
            <ProjectTop style={{marginBottom: '7rem'}}>
             
                <div style={{ display:'flex', flexDirection: 'column'}}>
                        <LH1 style={{color:'white'}}>Fontenehuset app</LH1>
                        <BookP style={{marginLeft: '2.2rem'}}> Et pågående prosjekt hvor jeg koder en mobilapp i React</BookP>
                </div>

                 <PfonteneImgDiv>
                    <LImg style={{width:'50%'}} src={process.env.PUBLIC_URL + "/Img/mobil kopi.png"} alt="mobil img" />
                  </PfonteneImgDiv>

            </ProjectTop>

            <ProjectDiv>

              <ProjectImgDiv>
                {FontenehusData}
              </ProjectImgDiv>

             
              <Footer />
    
             </ProjectDiv>
            
       
         
       
       
        </LearningFlexDiv>  

         

        </div>
    )
})


export const TipCalculator = (()=>{

  const CalculatorData = ProjectDataTwo.map( app =>
    

    <div key={app.id} style={{marginBottom: '10rem', display: 'flex', flexDirection: 'column', alignItems: 'center'}} >
        <H2>{app.header}</H2>
        <ProjectImg src={app.bilde}/>
        <ProjectP style={{width:'50%'}}>{app.tekst}</ProjectP>
        <a href={app.link}><p>Se mer</p></a>
    </div>
    
    )


    return(

        <LearningFlexDiv>
        <NavStyled  style={{backgroundColor:'#70ACE0', height:'7rem',zIndex:'0'}}>

          <ProjectNavText>
              <div>
                <Link  style={{textDecoration: 'none', color: 'inherit'}} to='/'>
                  <BookP style={{textAlign: 'center', width: '15vw', marginRight: '0rem'}}>Hjem</BookP> 
                </Link>
              </div>

              <div style={{display:'flex', flexDirection:'row', marginRight: '1rem'}}>
                   <Link to='/Fontenehus'>
                      <BookP style={{textAlign: 'center', width: '25vw', marginRight: '0rem'}}>Forrige prosjekt</BookP> 
                    </Link>
                <Link to='/StreamingApp'>
                  <BookP style={{textAlign: 'center', width: '20vw', marginRight: '0rem'}}>Neste prosjekt</BookP> 
                </Link>
              </div>
          </ProjectNavText>
        </NavStyled>
       
         
         <ProjectTop>
            <div style={{ display:'flex', flexDirection: 'column', width: '40%', alignItems: 'center', marginRight:'5rem'}}>
                    <LH1 style={{color:'white', marginLeft: '1rem'}}>Javascript</LH1>
                    <ProjectHeaderP> De javascript prosjektene jeg har gjort under Kodehodekurset</ProjectHeaderP>
            </div>
            <PimgDiv>
                <LImg style={{width:'100%', marginLeft: '1rem'}} src={process.env.PUBLIC_URL + "/Img/TCkode.png"} alt="mobil img" />
            </PimgDiv>


         </ProjectTop>
        

        <StreamingDiv>
          {CalculatorData}
        </StreamingDiv>

     
    </LearningFlexDiv>  
    )
})


export const StreamingApp = (()=>{

  const StreamingData= ProjectDataThree.map(app =>
    

    <div key={app.id} style={{marginBottom: '10rem'}} >
        <ProjectH2 style={{fontSize: '25px'}}>{app.header}</ProjectH2>
        <ProjectImg  src={app.bilde}/>
        <ProjectP style={{width:'50%'}}>{app.tekst}</ProjectP>
    </div>

  )


    return(
         
        <LearningFlexDiv>
            <NavStyled  style={{backgroundColor:'#70ACE0', justifyContent: 'right', height:'5rem'}}>
                <ProjectNavText>
                <div>
                    <Link  style={{textDecoration: 'none', color: 'inherit'}}  to='/'>
                      <BookP style={{ textAlign: 'center', width: '15vw', marginRight: '1rem', justifySelf: 'left'}}>Hjem</BookP> 
                    </Link>
                </div>

                <div style={{display:'flex', flexDirection:'row', marginRight: '1rem'}}>
                    <Link to='/TipCalculator'>
                            <BookP style={{ textAlign: 'center', width: '25vw', marginRight: '0rem'}}>Forrige prosjekt</BookP> 
                          </Link>
                    <Link to='/Kodeloftet'>
                        <BookP style={{ textAlign: 'center', width: '20vw', marginRight: '0rem'}}>Neste prosjekt</BookP> 
                    </Link>
              </div>
              </ProjectNavText>
            </NavStyled>
          
            <ProjectTop style={{height: '70vh'}} >
            
            <div style={{ display:'flex', flexDirection: 'column'}}>
                    <LH1 style={{color:'white', marginLeft: '2.8rem'}}>StreamingApp</LH1>
                    <BookP style={{marginLeft: '3rem'}}> Et kreativt prosjekt som jeg gjorde i 2019/20</BookP>
            </div>
                <PimgDiv>
                    <LImg style={{width:'80%', marginLeft: '3rem'}} src={process.env.PUBLIC_URL + "/Img/streaming-home.jpg"} alt="mobil img" />
                </PimgDiv>
            </ProjectTop>

         
            <StreamingDiv>
              {StreamingData}
             </StreamingDiv>
           
        </LearningFlexDiv>  
        
       
    )
})



export const Kodeloftet= (()=>{

  const KodeLoftData= ProjectDataFour.map(app =>
    

    <div key={app.id} style={{marginBottom: '10rem', display: 'flex', flexDirection:'row'}} >
       <KodeLimg>
        <ProjectImg style={{width: '70%'}} src={app.bilde}/>
       </KodeLimg>
       <div style={{display:'flex', flexDirection:'column', width: '100%'}}>
        <ProjectH2 style={{fontSize: '25px'}}>{app.header}</ProjectH2>
        <ProjectP style={{width:'100%'}}>{app.tekst}</ProjectP>
      </div>

      
    </div>

  )

  return(
    <LearningFlexDiv>
            <NavStyled  style={{backgroundColor:'#70ACE0', justifyContent: 'right', height:'5rem'}}>
                <ProjectNavText>
                <div>
                    <Link  style={{textDecoration: 'none', color: 'inherit'}}  to='/'>
                      <BookP style={{ textAlign: 'center', width: '15vw', marginRight: '1rem', justifySelf: 'left'}}>Hjem</BookP> 
                    </Link>
                </div>

                <div style={{display:'flex', flexDirection:'row', marginRight: '1rem'}}>
                    <Link to='/StreamingApp'>
                            <BookP style={{ textAlign: 'center', width: '25vw', marginRight: '0rem'}}>Forrige prosjekt</BookP> 
                          </Link>
                    <Link to='/Fontenehus'>
                        <BookP style={{ textAlign: 'center', width: '20vw', marginRight: '0rem'}}>Neste prosjekt</BookP> 
                    </Link>
              </div>
              </ProjectNavText>
            </NavStyled>
          
            <ProjectTop style={{height: '50vh'}} >
            
            <div style={{ display:'flex', flexDirection: 'column'}}>
                    <LH1 style={{color:'white', marginLeft: '1rem'}}>Kodeloftet</LH1>
                  <BookP style={{marginLeft: '1.2rem'}}> Et forkurs i koding på Fontenehuset i Bergen som vi starter med i mars 2023</BookP>
            </div>
                <PimgDiv style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <LImg style={{width:'100%'}} src={process.env.PUBLIC_URL + "/Img/Kodeloftet.jpg"} alt="mobil img" />
                </PimgDiv>
            </ProjectTop>

         
            <StreamingDiv style={{marginBottom: '10rem'}}>
              {KodeLoftData}
              <video style={{width: '100%'}} src= {process.env.PUBLIC_URL + "/Img/Kodeloftet_logo.mp4"} controls />
             </StreamingDiv>
           
        </LearningFlexDiv>  
  )
})