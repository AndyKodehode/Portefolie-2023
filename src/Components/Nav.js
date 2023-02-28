import { NavStyled } from "./styled"
import { NavText } from "./styled"
import { NavP } from "./styled"
import { Link } from "react-router-dom"



export const MainNav = ((props)=>{

    return(
       
        <NavStyled style={props.style}>
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