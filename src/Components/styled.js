
import styled from "styled-components"


//HEADER//

export const NavStyled= styled.nav`
width: 100%;
height: 2rem;
display: flex;
flex-direction: row;
justify-content: right;
background-color: #70ACE0;

@media (min-width: 700px){
  img{
    display: none;
   }
   background-color: white;
}



`

export const NavP = styled.p`
font-family: 'Montserrat', sans-serif;
font-size: 20px;
font-weight: 300;
line-height: 20px;
letter-spacing: 0em;
text-align: left;
color:  #364D61;
padding: 1rem;

`

export const NavText = styled.div`
display:none;
@media (min-width: 700px){
  display: flex; 
  flex-direction: row;
  margin-bottom: 2rem;
  margin-right: 4rem;

}


`

export const HeaderFrame = styled.div`

width: 100%;
height: 45rem;

@media (min-width: 700px){
  /* margin-top: 5rem; */
}


`

export const HeaderTop = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   height: 20rem;
   background-color: #70ACE0;
   /* justify-content: center; */
   @media (min-width: 768px) {
    background-color: white;
    justify-content: center;
    align-items: center;
    margin-bottom: 10rem;
    margin-top: 10rem;
  }
   

`
export const H1 = styled.h1`

//styleName: Portefolie/Montserrat/h4;
font-family: 'Montserrat', sans-serif;
font-size: 32px;
font-weight: 700;
line-height: 39px;
letter-spacing: 0em;
text-align: left;
margin-left: 2rem;
color: #0A2236 ;
margin-top: 2rem;
@media (min-width: 700px){
  font-size: 82px;
}

`



export const HeaderImgDiv = styled.div`

position: absolute;
top: 300px;
left:20px;
width: 20rem;


@media(min-width: 700px){
  /* display: none; */
  left: 800px;
  top: 800px;
  width: 30rem;
}

`

export const BlueBox = styled.div`
display: none;
width: 27rem;
height: 25rem;
background-color: #70ACE0;


@media (min-width: 700px) {
  display: block;
  margin-top: 2rem;
  
}

`

export const BotomHeaderDiv = styled.div`
 display: flex;
 flex-direction: row;
  
 @media (min-width: 700px){
  margin-left: 15rem;
  width: 60rem;
 }

`

export const MegSelv = styled.button`

width: 6rem;
height: 2rem;
background-color: transparent;
margin-left: 1.3rem;
border-radius: 5px;
border-style: solid;
border-color:  #70ACE0;
margin-top: 1rem;
`

export const HeaderP = styled.p`
//styleName: Portefolie/Montserrat/mobil/p;
font-family: 'Montserrat', sans-serif;
font-size: 14px;
font-weight: 300;
line-height: 20px;
letter-spacing: 0em;
text-align: left;
margin-top: 15rem;
width: 50vw;
margin-left: 1.5rem;
color:  #364D61;

@media(min-width: 700px){
  width: 20vw;
  margin-right: 20rem;
  font-size: 18px;
}

`

export const H2Lora = styled.h2`
//styleName: Portefolie/lora/mobil/h2;
font-family: 'Lora';
font-size: 18px;
font-weight: 400;
letter-spacing: 0em;
text-align: left;
margin-left: 2rem;
width: 14rem;
color: #546472;
@media(min-width: 700px){
  font-size: 34px;
  width: 40rem;
  font-weight: 200px;
  margin-left: 4rem;
  

}



`



// PROJECTSECTION//

export const Frame = styled.div `
display:grid;
height: 12rem;
width: 25rem;
grid-template-columns: 1fr 1fr 1fr 1fr ;
grid-template-rows: 1fr 1fr 1fr 1fr ;
margin-bottom: 1rem;
margin-top: 1rem;

@media( min-width: 700px){

  width: 52rem;
  height: 22rem;
  margin-top: 2rem;
}


`


export const FrameFlexDiv= styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 10rem;

@media(min-width: 700px){

  margin-top: 40rem;
}

`
 export const FrameImgOne = styled.img`
 
 width : 5rem;
 margin: 1rem;

 @media(min-width: 700px){
  width: 9rem;
  margin-top: 3rem;
  margin-left: 2rem;

 }
 `
 
 export const FrameImgTwo = styled.img`
 
 width : 9rem;
 margin-top: 2.5rem;

 @media(min-width: 700px){
   width: 18rem;
   margin-top: 4rem;

 }

 `


export const FrameImgThree = styled.img`

width : 9rem;
margin-top: 1.5rem;

@media(min-width: 700px){
   width: 18rem;
   height: 90%;
   object-fit: cover;
   margin-top: 4rem;

 }

`

export const H2= styled.h2`
font-family: 'Montserrat', sans-serif;
font-size: 20px;
font-weight: 700;
line-height: 44px;
letter-spacing: 0em;
color: '#062D4F';

@media( min-width: 700px){
  
  font-size: 36px;


}




`

export const FrameOneDiv = styled.div`

margin-left: 2rem;
width: 15rem;

@media(min-width: 700px){
  width: 40rem;
  margin-left: 6rem;
  margin-top: 3rem;
}


`

export const H2div = styled.div`

        grid-column-start: 2;
        grid-column-end: 5;
        grid-row: 1;
        margin-left: 3rem;
        margin-top: 1rem;

        @media(min-width: 700px){

     margin-left: 5rem;
     margin-top: 4rem;
}

`
export const H3div = styled.div`
          grid-column-start: 2;
          grid-column-end:5;
          grid-row: 2;
          margin-left: 3rem;
          margin-right: 1rem;

          @media(min-width: 700px){

          margin-left: 5rem;
          }
            


`


export const H3 = styled.h3`
//styleName: Portefolie/lora/mobil/h2;
font-family: 'Lora';
font-size: 16px;
font-weight: 300;
line-height: 20px;
letter-spacing: 0em;
text-align: left;
color: #546472;

@media(min-width: 700px){
 
  font-size: 20px;

}


`




//PROGRESSECTION//

export const OuterBar = styled.div`

width: 10rem;
height: 0.5rem;
border-style: solid;
border-width: 0.5px;
border-color: lightblue;

@media( min-width: 700px){

  width: 12rem;
}



`





export const InnerBar = styled.div`
width: 20%;
height: 100%;
background-color: #70ACE0;

`

export const ProgressDiv = styled.div`

display: flex;
flex-direction: row-reverse;
justify-content: space-around;
align-items: center;
margin-top: 2rem;



`

export const ProgressFrame = styled.div`
display: flex;
flex-direction: column;
width: 20rem;
margin-top: 5rem;
margin-left: 2rem;

@media(min-width: 700px){
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr ;
  grid-template-columns: 1fr 1fr ;
  grid-column-gap: 5rem;
  margin-top: 7rem;
  margin-left: 0rem;
  margin-right: 3rem;
}

`

export const CircleImg = styled.div`
display: flex;
justify-content: center;
border-radius: 50%;
width: 4rem;
height: 4rem;
border-style: none;
border-width: 1px;
border-color: lightblue;

@media(min-width: 700px){

  width: 6rem;
  height: 6rem;
}


`

//LEARINGSECTION

export const FLearningStyle = styled.div`
width: 23rem;
height: 19rem;
background-color: #95E5CC;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr ;
grid-template-rows: 1fr 1fr 1fr 1fr ;
margin-bottom: 5rem;

@media( min-width: 700px){
   width: 30rem;
   height: 23rem;
   margin-top: 5rem;

}


`

export const BodyP = styled.p`

font-family: 'Montserrat', sans-serif;
font-size: 12px;
font-weight: 300;
line-height: 20px;
letter-spacing: 0em;
text-align: left;
color:  #364D61;

@media ( min-width: 700px){

  font-size: 14px;
}

`

export const LButton = styled.button`

width: 5rem;
height: 1.5rem;
border-style: solid;
border-color: white;
background-color: transparent;
color: white;
border-radius: 5px;
margin-bottom: 3rem;
:hover{
  cursor: pointer;
}

@media( min-width: 700px){

  width: 6rem;
}

`

export const LearningImg = styled.img`

width: 8rem;
height: 7rem;
object-fit: cover;

@media(min-width: 700px){

  width: 12rem;
  height: 11rem;
  margin-left: 1rem;
  margin-bottom: 2rem;
}

`


//FOOTERSECTION//

export const FooterStyle = styled.footer`

display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
width: 100%;
height: 4rem;
background-color: #0A2236;


`


export const FooterP =styled.p`

font-family: 'Lora';
font-size: 12px;
font-weight: 600;
line-height: 20px;
letter-spacing: 0em;
text-align: left;
color:  white;

`

//LÆRINGSSIDE//

export const HeaderLearningImg = styled.div`

position: absolute;
top: 300px;
left:20px;
width: 20rem;


@media(min-width: 700px){
  /* display: none; */
  left: 800px;
  top: 800px;
  width: 30rem;
}


`

export const LearningFlexDiv= styled.div`

display: flex;
flex-direction: column;
align-items: center;


`


export const LImagDiv = styled.div`

@media (min-width: 700px){
width: 35%;

}

`
export const LImg = styled.img`

width: 70%;
margin-left: 3rem;
/* margin-top: 8rem; */

@media (min-width: 700px){
  /* width: 55%; */
  margin-top: 20rem;
}


`

export const LH1 = styled.h1`

font-family: 'Montserrat', sans-serif;
font-size: 40px;
font-weight: 700;
line-height: 39px;
letter-spacing: 0em;
text-align: left;
color:  #0A2236;
margin-left: 2rem;
@media (min-width: 700px){
  font-size: 75px;
}


`

export const BooksImg = styled.div`

display: flex;
justify-content: center;
width: 25rem;
height: 12rem;
margin-top: 1rem;
z-index: 1;


`

export const BookFlexDiv = styled.div`

height: 30rem;
margin-top: 7rem;
position: relative;


`

export const BookP = styled.p`
font-family: 'Montserrat', sans-serif;
font-size: 14px;
font-weight: 300;
line-height: 20px;
letter-spacing: 0em;
text-align: left;
width: 45vw;
margin-left: 1.5rem;
margin-bottom: 1rem;
color:  #364D61;

@media(min-width: 700px){
  width: 20vw;
  margin-right: 20rem;
  font-size: 18px;
}

`

export const BookBox = styled.div`

position: absolute;
width: 19rem;
height: 11rem;
background-color: #70ACE0;
z-index: 2;
top: 11rem;
left: 5rem;
padding: 1rem;
margin-bottom: 2rem;

`