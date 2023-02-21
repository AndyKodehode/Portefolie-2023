import { NavTwo } from "../Components/Nav"
import { BookP, HeaderTop } from "../Components/styled"
import { LH1 } from "../Components/styled"
import { LImagDiv } from "../Components/styled"
import { LImg } from "../Components/styled"
import { LearningFlexDiv } from "../Components/styled"
import { NavStyled } from "../Components/styled"
import { Link } from "react-router-dom"
import { useState } from "react"



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
                  <BookP style={{marginRight:'1rem', textAlign: 'center'}}>Hjem</BookP> 
              </Link>
              <Link to='/Streamingapp'>
                <BookP style={{marginRight:'1rem', textAlign: 'center'}}>Forrige prosjekt</BookP> 
              </Link>
              <Link to='/TipCalculator'>
                <BookP style={{marginRight:'1rem', textAlign: 'center'}}>Neste prosjekt</BookP> 
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
        </LearningFlexDiv>  
    )
})


export const TipCalculator = (()=>{
    return(

        <LearningFlexDiv>
        <NavStyled  style={{backgroundColor:'#70ACE0'}}>
          <Link to='/AndyKodehode/Portefolie-2023"'>
            <BookP style={{marginRight:'1rem', textAlign: 'center'}}>Hjem</BookP> 
          </Link>
          <Link to='/Fontenehus'>
                <BookP style={{marginRight:'1rem', textAlign: 'center'}}>Forrige prosjekt</BookP> 
              </Link>
          <Link to='/StreamingApp'>
            <BookP style={{marginRight:'1rem', textAlign: 'center'}}>Neste prosjekt</BookP> 
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
    </LearningFlexDiv>  
    )
})


export const StreamingApp = (()=>{
    return(
         
        <LearningFlexDiv>
        <NavStyled  style={{backgroundColor:'#70ACE0', justifyContent: 'space-between'}}>
          <Link to='/AndyKodehode/Portefolie-2023"'>
            <BookP style={{marginRight:'1rem', textAlign: 'center'}}>Hjem</BookP> 
          </Link>
          <Link to='/TipCalculator'>
                <BookP style={{marginRight:'1rem', textAlign: 'center'}}>Forrige prosjekt</BookP> 
              </Link>
          <Link to='/Fontenehus'>
            <BookP style={{marginRight:'1rem', textAlign: 'center'}}>Neste prosjekt</BookP> 
          </Link>
        </NavStyled>
       
        <HeaderTop style={{backgroundColor:'#70ACE0', marginTop: '0rem', marginBottom: '10rem', flexDirection: 'row', height: '40vh', justifyContent: 'space-evenly', paddingTop: '5rem'}}>
         
        <div style={{ display:'flex', flexDirection: 'column'}}>
                <LH1 style={{color:'white'}}>StreamingApp</LH1>
                <BookP style={{marginLeft: '2.2rem'}}> Et kreativt prosjekt som jeg gjorde i 2019/20</BookP>
        </div>
            <LImagDiv  style={{marginRight:'1.5rem'}}>
                <LImg style={{width:'100%'}} src={process.env.PUBLIC_URL + "/Img/Streaming-home.jpg"} alt="mobil img" />
            </LImagDiv>
        </HeaderTop>
    </LearningFlexDiv>  
       
    )
})