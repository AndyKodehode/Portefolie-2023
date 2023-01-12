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
            <img  src="/Img/Hamburger-mobil.svg" alt="hamburger meny" style={{marginRight: '1rem'}}/>
        </NavStyled>

    )
})