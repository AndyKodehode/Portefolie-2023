
import { BookP, HeaderTop } from "../Components/styled"
import { LH1 } from "../Components/styled"
import { LImagDiv } from "../Components/styled"
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
// import { Carousel } from "../Components/carousel"


const ProjectDataOne =[

        {
          id: 45,
          header:'Ide og prosess',
          tekst:'Jeg begynte med å gjøre brukerundersøkelse for å finne ut av hva medlemmene på huset trenger for å bli motiverte og ha bra arbeidsdager',
          bilde: process.env.PUBLIC_URL + "/Img/Brukerundersøkelse.png"
        },


        {
          id: 46,
          header: 'Design',
          tekst: 'hei hei, hallo',
          bilde: process.env.PUBLIC_URL + "/Img/Fontenehuset Figma.png"

        },
        {
          id: 47,
          header: 'React Native',
          tekst: 'Here is a text',
          bilde: process.env.PUBLIC_URL + "/Img/React Native- Fontenehuset.png"
        }, 

        {
          id: 48,
          header: 'ReDesign',
          tekst: 'text text text',
          bilde: process.env.PUBLIC_URL + "/Img/Fontenehuset Figma redesign.png"
        },

        {
          id: 49,
          header: 'Gjenstående',
          tekst: 'text text text',
          bilde: process.env.PUBLIC_URL + "/Img/Fontenehuset Figma redesign.png"
        }
      
      
      ]

const ProjectDataTwo =
  
        [
            {
              id: 51,
              header:'Ide og prosess',
              tekst:'Jeg begynte med å gjøre brukerundersøkelse for å finne ut av hva medlemmene på huset trenger for å bli motiverte og ha bra arbeidsdager',
              bilde: process.env.PUBLIC_URL + "/Img/Brukerundersøkelse.png"
            }
          
          ]


const ProjectDataThree =      [

  {
    id: 65,
    header:'Ide og prosess',
    tekst:'Jeg begynte med å gjøre brukerundersøkelse for å finne ut av hva medlemmene på huset trenger for å bli motiverte og ha bra arbeidsdager',
    bilde: process.env.PUBLIC_URL + "/Img/skisse 3.jpg"
  },


  {
    id: 66,
    header: 'Wireframes',
    tekst: 'hei hei, hallo',
    bilde: process.env.PUBLIC_URL + "/Img/wireframe.png"

  },
  {
    id: 67,
    header: 'Design',
    tekst: 'Here is a text',
    bilde: process.env.PUBLIC_URL + "/Img/Colloseum Friends.jpg"
  }, 

  {
    id: 68,
    header: 'Prototype',
    tekst: 'text text text',
    bilde: process.env.PUBLIC_URL + "/Img/prototype.png"
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
       <p style={{width:'50%'}}>{app.tekst}</p>
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
            <NavStyled  style={{backgroundColor:'#70ACE0'}}>
              <ProjectNavText>
                  <div>
                      <Link to='/'  style={{textDecoration: 'none', color: 'inherit'}}>
                          <BookP style={{ textAlign: 'center', width: '15vw', marginRight: '1rem'}}>Hjem</BookP> 
                      </Link>
                  </div>

                  <div style={{display:'flex', flexDirection:'row'}}>
                      <Link to='/Streamingapp'>
                        <BookP style={{ textAlign: 'center', width: '15vw', marginRight: '1rem'}}>Forrige prosjekt</BookP> 
                      </Link>
                      <Link to='/TipCalculator'>
                        <BookP style={{ textAlign: 'center', width: '15vw', marginRight: '1rem'}}>Neste prosjekt</BookP> 
                      </Link>
                  </div>
              </ProjectNavText>
            </NavStyled>
           
            <HeaderTop style={{backgroundColor:'#70ACE0', marginTop: '0rem', marginBottom: '10rem', flexDirection: 'row', height: '40vh', justifyContent: 'space-evenly', paddingTop: '5rem'}}>
             
            <div style={{ display:'flex', flexDirection: 'column'}}>
                    <LH1 style={{color:'white'}}>Fontenehuset app</LH1>
                    <BookP style={{marginLeft: '2.2rem'}}> Et pågående prosjekt hvor jeg koder en mobilapp i React</BookP>
            </div>
                <LImagDiv  style={{marginRight:'1.5rem'}}>
                    <LImg style={{width:'60%'}} src={process.env.PUBLIC_URL + "/Img/mobil kopi.png"} alt="mobil img" />
                </LImagDiv>
            </HeaderTop>

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
    

    <div key={app.id} style={{marginBottom: '10rem'}} >
        <H2>{app.header}</H2>
        <ProjectImg src={app.bilde}/>
        <p style={{width:'50%'}}>{app.tekst}</p>
    </div>
    
    )


    return(

        <LearningFlexDiv>
        <NavStyled  style={{backgroundColor:'#70ACE0'}}>

          <ProjectNavText>
              <div>
                <Link to='/'>
                  <BookP style={{textAlign: 'center', width: '15vw', marginRight: '1rem'}}>Hjem</BookP> 
                </Link>
              </div>

              <div style={{display:'flex', flexDirection:'row'}}>
                <Link to='/Fontenehus'>
                      <BookP style={{textAlign: 'center', width: '15vw', marginRight: '1rem'}}>Forrige prosjekt</BookP> 
                    </Link>
                <Link to='/StreamingApp'>
                  <BookP style={{textAlign: 'center', width: '15vw', marginRight: '1rem'}}>Neste prosjekt</BookP> 
                </Link>
              </div>
          </ProjectNavText>
        </NavStyled>
       
        <HeaderTop style={{backgroundColor:'#70ACE0', marginTop: '0rem', marginBottom: '10rem', flexDirection: 'row', height: '40vh', justifyContent: 'space-evenly', paddingTop: '5rem'}}>
         
        <div style={{ display:'flex', flexDirection: 'column'}}>
                <LH1 style={{color:'white'}}>TipCalculator</LH1>
                <BookP style={{marginLeft: '2.2rem'}}> Et FrontEnd mentor prosjekt som jeg kodet i Javascript</BookP>
        </div>
            <LImagDiv  style={{marginRight:'1.5rem'}}>
                <LImg style={{width:'100%'}} src={process.env.PUBLIC_URL + "/Img/TipCalculator.jpg"} alt="mobil img" />
            </LImagDiv>
        </HeaderTop>

        <div style={{width:'50%', marginTop:'10rem'}}>
          {CalculatorData}
        </div>

     
    </LearningFlexDiv>  
    )
})


export const StreamingApp = (()=>{

  const StreamingData= ProjectDataThree.map(app =>
    

    <div key={app.id} style={{marginBottom: '10rem'}} >
        <ProjectH2 style={{fontSize: '25px'}}>{app.header}</ProjectH2>
        <ProjectImg src={app.bilde}/>
       <p style={{width:'50%'}}>{app.tekst}</p>
    </div>

  )


    return(
         
        <LearningFlexDiv>
            <NavStyled  style={{backgroundColor:'#70ACE0', justifyContent: 'right'}}>
                <Link to='/'>
                  <BookP style={{ textAlign: 'center', width: '15vw', marginRight: '1rem', justifySelf: 'left'}}>Hjem</BookP> 
                </Link>
                <Link to='/TipCalculator'>
                        <BookP style={{ textAlign: 'center', width: '15vw', marginRight: '1rem'}}>Forrige prosjekt</BookP> 
                      </Link>
                <Link to='/Fontenehus'>
                <BookP style={{ textAlign: 'center', width: '15vw', marginRight: '1rem'}}>Neste prosjekt</BookP> 
              </Link>
            </NavStyled>
          
            <HeaderTop style={{backgroundColor:'#70ACE0', marginTop: '0rem', marginBottom: '10rem', flexDirection: 'row', height: '40vh', justifyContent: 'space-evenly', paddingTop: '5rem'}}>
            
            <div style={{ display:'flex', flexDirection: 'column'}}>
                    <LH1 style={{color:'white'}}>StreamingApp</LH1>
                    <BookP style={{marginLeft: '2.2rem'}}> Et kreativt prosjekt som jeg gjorde i 2019/20</BookP>
            </div>
                <LImagDiv  style={{marginRight:'1.5rem'}}>
                    <LImg style={{width:'100%'}} src={process.env.PUBLIC_URL + "/Img/streaming-home.jpg"} alt="streaming img" />
                </LImagDiv>
            </HeaderTop>

         
            <div style={{width:'50%', marginTop:'10rem'}}>
              {StreamingData}
            </div>
           
        </LearningFlexDiv>  
        
       
    )
})