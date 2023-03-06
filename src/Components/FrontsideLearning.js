import { FLearningStyle } from "./styled"
import { H2 } from "./styled"
import { BodyP } from "./styled"
import { LButton } from "./styled"
import { LearningImg } from "./styled"
import { Link } from "react-router-dom"

export const FrontsideLearning = (()=>{

    return(
       
        <div style={{
           display: 'flex',
           justifyContent: 'center',
           marginTop: '7rem'

        }}>
            <FLearningStyle>

                <div style={{

                    gridColumnStart: 3,
                    gridColumnEnd: 5,
                    gridRowStart: 2,
                    gridRowEnd: 2
                   
                   
                }}>
                   <H2>Læring</H2>
                </div>
                    <div
                    style={{

                        gridColumnStart: 3,
                        gridColumnEnd: 4,
                        gridRowStart: 3,
                        gridRowEnd: 4,
                       

                       
                    }}
                    >
                        <BodyP style={{ width: '10rem' }}>
                            
                            Da jeg har en kortere formell utdanning prøver jeg å tilegne meg kunnskap gjennom lesing, prøving og feiling.  
                            Jeg bruker Skillshare og Domestika for kurs som jeg syns er relevante i tillegg til bøker om design og tips fra flinke designere på Youtube.
                        </BodyP>
                    </div>

                    <div
                    style={{

                        gridColumnStart: 1,
                        gridColumnEnd: 2,
                        gridRowStart: 3,
                        gridRowEnd: 5,
                        marginRight: '1rem',
                        marginLeft: '1rem',
                        marginTop: '1rem'
                       
                       

                       
                    }}
                    
                    
                    >
                      <LearningImg src=  {process.env.PUBLIC_URL+ "/Img/FangWin.jpg"} alt="læringsbilde"/>

                    </div>
                    <Link style={{gridColumnStart: '3', gridColumnEnd: '3', gridRowStart: 4, gridRowEnd:'4', marginBottom:'2rem', marginTop: '1rem', textDecoration: 'none', color: 'inherit'}} to='/Learning' >
                      <LButton >Se Mer</LButton>
                    </Link>

            </FLearningStyle>
        </div>
        
    )
})