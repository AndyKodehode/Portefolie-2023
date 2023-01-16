import { NavStyled } from "./styled"
import { NavText } from "./styled"
import { NavP } from "./styled"



export const Nav = (()=>{

    return(
       
        <NavStyled>
            <NavText>
                <NavP>CV</NavP>
                <NavP>Kontakt</NavP>
                <NavP>Kurs</NavP>
            </NavText>
            <img  src={ process.env.PUBLIC_URL+"/Img/Hamburger-mobil.svg" } alt="hamburger meny" style={{marginRight: '1rem', marginTop:'1rem', width: '2rem'}} />
        </NavStyled>

    )
})

export const NavTwo = (()=>{

    return(

        <NavStyled style={{backgroundColor:'#70ACE0'}}>
                <NavText>
                    <NavP>CV</NavP>
                    <NavP>Kontakt</NavP>
                    <NavP>Kurs</NavP>
                </NavText>
                <img  src={ process.env.PUBLIC_URL+"/Img/Hamburger-mobil.svg" } alt="hamburger meny" style={{marginRight: '1rem', marginTop:'1rem', width: '2rem'}} />
        </NavStyled>


    )
})