import { NavStyled } from "./styled"
import { NavText } from "./styled"
import { NavP } from "./styled"
import { Link } from "react-router-dom"
import { useState } from "react"
import ReacModal from "react-modal"
import { NavHover } from "./styled"
// import { fadeIn, rotateIn } from "react-animations"
// import { StyleSheet} from 'aphrodite';



export const MainNav = ((props)=>{

    const customStyles = {
        content: {
          width: '100%',
          height: '100%',
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          transform: 'translate(-50%, -50%)',
          marginRight: '-50%',
        //   animation: 'x 10s',
        //   animationName: fadeIn
         
        }

     

      };


    const [modalIsOpen, setModalisOpen] = useState(false)

    function openModal(){
        setModalisOpen(true)}

    function closeModal(){
        setModalisOpen(false)
    }
    

    return(
       
     
        <NavStyled style={props.style}>
            <ReacModal
            
            isOpen={modalIsOpen}
            onAfterOpen={openModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            
            >
                <div style={{width:'100%', height:'100%', backgroundColor:'white'}}>
                        <div style={{display: 'flex', width:'90%', alignItems:'right', justifyContent: 'right', marginRight:'1rem', cursor:'pointer'}}>
                            <img onClick={closeModal} src={ process.env.PUBLIC_URL+"/Img/close.svg" } alt="close btn" style={{ marginTop:'1rem', width: '1rem', textAlign: 'right'}} />
                        </div>
                            <div style={{display:'flex', width:'100%', height:'100%', flexDirection:'column', justifyContent:'center', alignItems: 'center'}}>
                                <NavHover>
                                    <Link style={{textDecoration:'none'}} to='/CV'>
                                       <NavP>CV</NavP>
                                    </Link>
                                </NavHover>
                                <NavHover>
                                  <Link style={{textDecoration:'none'}} to='/About'> 
                                   <NavP>Kontakt</NavP>
                                  </Link>
                                </NavHover>
                                <NavHover>
                                    <Link style={{textDecoration:'none'}} to='/Learning'>
                                      <NavP>Kurs</NavP>
                                    </Link>
                                </NavHover>
                                <NavHover>
                                    <Link  style={{textDecoration:'none'}} to='/'>
                                      <NavP>Hjem</NavP>
                                    </Link>
                                </NavHover>
                            </div>
                </div>

                
                
        
            </ReacModal>
            <div onClick={openModal} style={{width: '2rem', marginRight: '2rem', cursor:'pointer'}}>
               <img  src={ process.env.PUBLIC_URL+"/Img/Hamburger-mobil.svg" } alt="hamburger meny" style={{ marginTop:'1rem', width: '2rem'}} />
            </div>
            <NavText>
                    <div>
                        <Link to='/' style={{textDecoration:'none'}}>
                           <NavP>Hjem</NavP>
                        </Link>
                    </div>
                    <div style={{display:'flex', flexDirection:'row'}}>
                         <Link style={{textDecoration:'none'}} to='/CV'>
                            <NavP>CV</NavP>
                          </Link>
                          <Link style={{textDecoration:'none'}} to='/About'> 
                             <NavP>Kontakt</NavP>
                          </Link>
                          <Link style={{textDecoration:'none'}} to='/Learning'>
                              <NavP>Kurs</NavP>
                          </Link>
                    </div>
                   
            </NavText>
        </NavStyled>
     

    )
})

export const NavTwo = (()=>{

    return(

        <NavStyled style={{backgroundColor:'#70ACE0'}}>
                <NavText>
                    <div>
                        <Link to='/' style={{textDecoration:'none'}}>
                           <NavP>Hjem</NavP>
                        </Link>
                    </div>

                    <div style={{display:'flex', flexDirection:'row'}}>
                        <NavP>CV</NavP>
                        <NavP>Kontakt</NavP>
                        <NavP>Kurs</NavP>
                    </div>
                </NavText>
                <img  src={ process.env.PUBLIC_URL+"/Img/Hamburger-mobil.svg" } alt="hamburger meny" style={{marginRight: '1rem', marginTop:'1rem', width: '2rem'}} />
        </NavStyled>


    )
})



// display:'flex', height:'100%', flexDirection:'column', justifyContent:'center', alignItems: 'center'