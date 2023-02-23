
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


const ProjectData =[
  {
    id: 40,
    Fontenehus:[
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
      
      
      ],


  
        TipCalculator:[
            {
              id: 51,
              header:'Ide og prosess',
              tekst:'Jeg begynte med å gjøre brukerundersøkelse for å finne ut av hva medlemmene på huset trenger for å bli motiverte og ha bra arbeidsdager',
              bilde: process.env.PUBLIC_URL + "/Img/Brukerundersøkelse.png"
            }]
  }]



export const Fontenehus = (()=>{

  

  // const [project, setProject] = useState([])

  // function nextProject(){
  //   let test = [Fontenehus, TipCalculator, StreamingApp]
  //   setProject(test+1)
  // }
    return(
        
         <LearningFlexDiv>
            <NavStyled  style={{backgroundColor:'#70ACE0'}}>
             
              <Link to='/AndyKodehode/Portefolie-2023'  style={{textDecoration: 'none', color: 'inherit'}}>
                  <BookP style={{ textAlign: 'center', width: '15vw', marginRight: '1rem'}}>Hjem</BookP> 
              </Link>
              <Link to='/Streamingapp'>
                <BookP style={{ textAlign: 'center', width: '15vw', marginRight: '1rem'}}>Forrige prosjekt</BookP> 
              </Link>
              <Link to='/TipCalculator'>
                <BookP style={{ textAlign: 'center', width: '15vw', marginRight: '1rem'}}>Neste prosjekt</BookP> 
              </Link>
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

           <div style={{display:'flex'}}>
           {ProjectData.map((app)=>{
                return(
         
              <ProjectDiv key={`Home-${app.Fontenehus.id}`}>
                
                <div key={app.Fontenehus.id} style={{width:'50%'}}>
                  <H2 >{app.header}</H2>
                  <ProjectImg src={app.bilde}/>
                  <p style={{width:'50%'}}>{app.tekst}</p>
                </div>

                <div key={app.Fontenehus.id} style={{width:'50%', marginTop:'10rem'}}>
                  <H2>{app.Fontenehus[1].header}</H2>
                  <ProjectImg src={app.Fontenehus[1].bilde}/>
                  <p style={{width:'50%'}}>{app.Fontenehus[1].tekst}</p>
                </div>

                <div key={app.Fontenehus.id} style={{width:'50%', marginTop:'10rem'}}>
                  <H2>{app.Fontenehus[2].header}</H2>
                  <ProjectImg src={app.Fontenehus[2].bilde}/>
                  <p style={{width:'50%'}}>{app.Fontenehus[2].tekst}</p>
                </div>

                <div key={app.Fontenehus.id} style={{width:'50%', marginTop:'10rem'}}>
                  <H2>{app.Fontenehus[3].header}</H2>
                  <ProjectImg src={app.Fontenehus[3].bilde}/>
                  <p style={{width:'50%'}}>{app.Fontenehus[3].tekst}</p>
                </div>

                <div key={app.Fontenehus.id} style={{width:'50%', marginTop:'10rem'}}>
                  <H2>{app.Fontenehus[4].header}</H2>
                  <ProjectImg src={app.Fontenehus[4].bilde}/>
                  <p style={{width:'50%'}}>{app.Fontenehus[4].tekst}</p>
                </div> 

              </ProjectDiv>
            
            
            )
            
          })}
          </div>
         <Footer/>

        </LearningFlexDiv>  
    )
})


export const TipCalculator = (()=>{
    return(

        <LearningFlexDiv>
        <NavStyled  style={{backgroundColor:'#70ACE0'}}>
          <Link to='/AndyKodehode/Portefolie-2023'>
            <BookP style={{textAlign: 'center', width: '15vw', marginRight: '1rem'}}>Hjem</BookP> 
          </Link>
          <Link to='/Fontenehus'>
                <BookP style={{textAlign: 'center', width: '15vw', marginRight: '1rem'}}>Forrige prosjekt</BookP> 
              </Link>
          <Link to='/StreamingApp'>
            <BookP style={{textAlign: 'center', width: '15vw', marginRight: '1rem'}}>Neste prosjekt</BookP> 
          </Link>
        </NavStyled>
       
        <HeaderTop style={{backgroundColor:'#70ACE0', marginTop: '0rem', marginBottom: '10rem', flexDirection: 'row', height: '40vh', justifyContent: 'space-evenly', paddingTop: '5rem'}}>
         
        <div style={{ display:'flex', flexDirection: 'column'}}>
                <LH1 style={{color:'white'}}>TipCalculator</LH1>
                <BookP style={{marginLeft: '2.2rem'}}> Et FrontEnd mentor prosjekt som jeg kodet i Javascript</BookP>
        </div>
            <LImagDiv  style={{marginRight:'1.5rem'}}>
                <LImg style={{width:'100%'}} src={process.env.PUBLIC_URL + "/Img/tipCalculator.jpg"} alt="mobil img" />
            </LImagDiv>
        </HeaderTop>

        
        {ProjectData.map((app)=>{
                return(
         
              <ProjectDiv>
                
                <div key={app.id} style={{width:'50%'}}>
                  <H2>{app.Fontenehus[0].header}</H2>
                  <ProjectImg src={app.Fontenehus[0].bilde}/>
                  <p style={{width:'50%'}}>{app.Fontenehus[0].tekst}</p>
                </div>

                <div key={app.id} style={{width:'50%', marginTop:'10rem'}}>
                  <H2>{app.Fontenehus[1].header}</H2>
                  <ProjectImg src={app.Fontenehus[1].bilde}/>
                  <p style={{width:'50%'}}>{app.Fontenehus[1].tekst}</p>
                </div>

                <div key={app.id} style={{width:'50%', marginTop:'10rem'}}>
                  <H2>{app.Fontenehus[2].header}</H2>
                  <ProjectImg src={app.Fontenehus[2].bilde}/>
                  <p style={{width:'50%'}}>{app.Fontenehus[2].tekst}</p>
                </div>

                <div key={app.id} style={{width:'50%', marginTop:'10rem'}}>
                  <H2>{app.Fontenehus[3].header}</H2>
                  <ProjectImg src={app.Fontenehus[3].bilde}/>
                  <p style={{width:'50%'}}>{app.Fontenehus[3].tekst}</p>
                </div>

              </ProjectDiv>
            
            
            )
            
          })}

     
    </LearningFlexDiv>  
    )
})


export const StreamingApp = (()=>{
    return(
         
        <LearningFlexDiv>
            <NavStyled  style={{backgroundColor:'#70ACE0', justifyContent: 'right'}}>
                <Link to='/AndyKodehode/Portefolie-2023'>
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
                    <LImg style={{width:'100%'}} src={process.env.PUBLIC_URL + "/Img/Streaming-home.jpg"} alt="streaming img" />
                </LImagDiv>
            </HeaderTop>

            
           {ProjectData.map((app)=>{
                return(
         
              <ProjectDiv>
                
                <div key={app.id} style={{width:'50%'}}>
                  <H2>{app.Fontenehus[0].header}</H2>
                  <ProjectImg src={app.Fontenehus[0].bilde}/>
                  <p style={{width:'50%'}}>{app.Fontenehus[0].tekst}</p>
                </div>

                <div key={app.id} style={{width:'50%', marginTop:'10rem'}}>
                  <H2>{app.Fontenehus[1].header}</H2>
                  <ProjectImg src={app.Fontenehus[1].bilde}/>
                  <p style={{width:'50%'}}>{app.Fontenehus[1].tekst}</p>
                </div>

                <div key={app.id} style={{width:'50%', marginTop:'10rem'}}>
                  <H2>{app.Fontenehus[2].header}</H2>
                  <ProjectImg src={app.Fontenehus[2].bilde}/>
                  <p style={{width:'50%'}}>{app.Fontenehus[2].tekst}</p>
                </div>

                <div key={app.id} style={{width:'50%', marginTop:'10rem'}}>
                  <H2>{app.Fontenehus[3].header}</H2>
                  <ProjectImg src={app.Fontenehus[3].bilde}/>
                  <p style={{width:'50%'}}>{app.Fontenehus[3].tekst}</p>
                </div>

              </ProjectDiv>
            
            
            )
            
          })}


           
        </LearningFlexDiv>  
        
       
    )
})