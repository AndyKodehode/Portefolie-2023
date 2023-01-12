import { FLearningStyle } from "./styled"
import { H2 } from "./styled"
import { BodyP } from "./styled"
import { LButton } from "./styled"
import { LearningImg } from "./styled"

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
                    gridRowEnd: 2,
                    marginBottom: '1rem'
                   
                   
                }}>
                   <H2 >Læring</H2>
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
                            
                            Selv om jeg ikke har en offesiell utdanning så prøver jeg å lese og lære om feltet.  
                            Jeg bruker Skillshare og Domestika for kurs som jeg syns er relevante i tillegg til bøker om design.
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
                      <LearningImg src="/Img/FangWin.jpg" alt="læringsbilde"/>

                    </div>

                    <LButton style={{gridColumnStart: '3', gridColumnEnd: '4', gridRowStart: 4, gridRowEnd:'4', marginBottom:'2rem', marginTop: '1rem'}}>Se Mer</LButton>

            </FLearningStyle>
        </div>
    )
})