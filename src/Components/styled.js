
import styled from "styled-components"


//HEADER//

export const NavStyled= styled.nav`
width: 100%;
height: 3rem;
display: flex;
flex-direction: row;
justify-content: right;
background-color: #70ACE0;
/* clip-path: circle(25px at calc(100%-45px) 45px);
transition: 5s ease-in-out; */

@media (min-width: 700px){
  img{
    display: none;
   }
   background-color: white;
   z-index:0;
   color: black

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
z-index: 2;

`

export const NavText = styled.div`
display:none;
@media (min-width: 700px){
  display: flex; 
  flex-direction: row;
  margin-bottom: 2rem;
  margin-right: 4rem;
  justify-content:space-between;
  width: 100%;

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
top: 290px;
left:25px;
width: 15rem;


@media(min-width: 700px){
  /* display: none; */
  left: 790px;
  top: 800px;
  width: 20rem;
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
  height: 28rem;
  width: 24rem;
  
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

export const H2light = styled.h2`

font-family: 'Montserrat', sans-serif;
font-style: italic;
font-size: 20px;
font-weight: lighter;
line-height: 44px;
letter-spacing: 0em;
color: '#062D4F';

@media( min-width: 700px){
  
  font-size: 23px;

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
margin-top: 2rem;
margin-left: 2rem;

@media(min-width: 700px){
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr ;
  grid-template-columns: 1fr 1fr ;
  grid-column-gap: 5rem;
  margin-top: 2rem;
  margin-left: 0rem;
  margin-right: 20rem;
}

`

export const CircleImg = styled.div`
display: flex;
justify-content: center;
border-radius: 50%;
width: 4rem;
height: 4rem;
/* border-style: solid;
border-width: 1px;
border-color: lightblue; */


@media(min-width: 700px){

  width: 6rem;
  height: 6rem;
  border-color: none;
  border-style: none;
}


`

//LEARINGSECTION

export const FLearningStyle = styled.div`
width: 23rem;
height: 22rem;
background-color: #95E5CC;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr ;
grid-template-rows: 1fr 1fr 1fr 1fr ;
margin-bottom: 5rem;

@media( min-width: 700px){
   width: 35rem;
   height: 27rem;
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
  border-width: 3px;
  width: 6rem;
  height: 2rem;
  font-weight: 550;
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
height: 100%;


}

`
export const LImg = styled.img`

width: 70%;
margin-left: 3rem;
/* margin-top: 8rem; */

@media (min-width: 700px){
  /* width: 55%; */
  margin-top: 2rem;
  

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
width: 80vw;
height: 35vh;
margin-top: 1rem;
z-index: 1;

@media(min-width: 900px){
  width: 55vw;
  height: 55vh ;
}


`

export const Bimg = styled.img`
width: 90%;
object-fit: cover;

@media (min-width: 900px){
  
  width: 80% ;

}

`

export const BookFlexDiv = styled.div`

height: 30rem;
margin-top: 7rem;
position: relative;
display: flex;
flex-direction: column;
align-items: center;


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
color: black;

@media (min-width: 700px){
  width: 24vw;
  margin-bottom: 3rem;
}

@media(min-width: 1100px){
  width: 20vw;
  margin-right: 7rem;
  font-size: 18px;
}

`

export const BookBox = styled.div`

position: absolute;
width: 55vw;
height: 29vh;
background-color: #70ACE0;
z-index: 2;
top: 11rem;
left: 6rem;
padding: 1rem;
margin-bottom: 2rem;

@media (min-width: 700px){
  left: 20rem;
  width:40vw;
  top: 12rem;
  height: 33vh;

}

@media (min-width: 1200px){
  width: 22rem;
  height:12rem;
  left: 30rem;
  top:15rem;
}

`

export const CircleBtn = styled.button`

width: 1.5rem;
height: 1.5rem;
border-radius: 50%;
/* position: absolute; */
top: 6rem;
background-color: white;
border-style: solid;
border-color: lightgray;
z-index: 1;
margin-top: 6rem;

@media (min-width: 700px){

 margin-top: 11.5rem;
 width: 2.5rem;
 height: 2.5rem;
}

`

export const RoundImg = styled.img `

border-radius: 50%;
object-fit: contain;
width: 100%;
height: auto;


`

export const YoutubeFrame = styled.div`

display: flex;
flex-direction: column;
align-items: center;
width: 70%;
margin-bottom: 5rem;
justify-content: center;
margin-left: 5rem;


@media(min-width: 700px){
  margin-bottom: 5rem;
  flex-direction: row;
  width: 70%;
  
}
`

export const CircleImgFrame = styled.div`

display: flex;
width: 50%;
justify-content: center;
text-align: left;



`

export const CircleFlexDiv= styled.div`

display: flex;
flex-direction: row;
margin-bottom: 2rem;
width: 70%;
justify-content: center;
align-items: center;

@media(min-width: 700px){

  flex-direction: column;
}

`

export const CircleText= styled.div`
margin-left: 2rem;
text-align: left;
width: 50%;
:hover{
  color: lightgray;
}

@media (min-width: 700px){

  text-align: center;
  margin-left: 0rem;
}

`

export const CarouselFlexDiv = styled.div`

display: flex;
flex-direction: column;
width: 90%;
align-items: center;
justify-content: center;



@media (min-width: 700px){
  margin-bottom: 5rem;
  width: 50%;
}


`

export const KursDiv = styled.div`

@media (min-width: 700px){

  margin-bottom: 15rem;
  margin-top: 10rem;
}

`

export const BookMain = styled.div`

@media (min-width: 700px){

  margin-top: 20rem;
}


`

export const H2Learn= styled.h2`
font-family: 'Montserrat', sans-serif;
font-size: 25px;
font-weight: 700;
line-height: 44px;
letter-spacing: 0em;
color: '#062D4F';
font-weight: bold;

@media( min-width: 700px){
  
  font-size: 36px;


}`

export const KursBtn = styled.div`

display: flex;
align-items: right;
justify-content: right;
width: 100%


`


export const ProjectDiv = styled.div`

height: 30rem;
width: 100%;
margin-top: 7rem;
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 2rem;


@media( min-width: 700px){

  margin-top: 35rem;
}

`

export const ProjectImg = styled.img`

width: 100%;

@media (min-width: 700px){

  margin-top: 2rem;
  
}


`

export const ProjectAbImgOne= styled.img`

width: 30rem;
position: absolute;

@media (min-width: 700px){

  margin-top: 2rem;
  
}


`

export const ProjectAbImgTwo= styled.img`

width: 30rem;
position: absolute;

@media (min-width: 700px){

  margin-top: 2rem;
  
}


`

export const ProjectH2= styled.h2`
font-family: 'Montserrat', sans-serif;
font-size: 20px;
font-weight: 700;
line-height: 44px;
letter-spacing: 0em;
color: '#062D4F';

@media( min-width: 700px){
  
  font-size: 30px;


}




`

export const ProjectImgDiv = styled.div`

width: 70%;
margin-top: 10rem;
margin-bottom: 5rem;

@media( min-width: 700px){
  
width: 50%;


}
`

export const ProjectNavText = styled.div`

  display: flex; 
  flex-direction: row;
  margin-bottom: 2rem;
  justify-content:space-between;
  width: 100%;
`


export const AttestImg = styled.img`

width:100%;
height:100%;
margin-top:10rem ;

@media (min-width: 700px){
  width: 70%;
  height: 70%;
}

`

export const AboutDiv = styled.div`

display: flex;
flex-direction: column-reverse;
align-items: center;
justify-content: center;

@media (min-width:700px){
  flex-direction: row;
  margin-top: 10rem;
}


`


export const NavHover = styled.div`

width: 100%;
height: 5rem;
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 1rem;
z-index: 1;
:hover{
  background-color: #70ACE0;
  /* opacity: 0.5; */
  cursor: pointer;
  color: white;
}


`

export const AboutImg = styled.div`

width: 70%;
display: flex;
justify-content: center;
margin-bottom: 4rem;

@media (min-width: 700px){
  width: 50%;
}


`

export const AboutTextDiv = styled.div`

width: 50%;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;


/* @media (min-width:700px){
margin-top: 10rem
} */

`

export const AboutP = styled.p`
//styleName: Portefolie/Montserrat/mobil/p;
font-family: 'Montserrat', sans-serif;
font-size: 14px;
font-weight: 300;
line-height: 20px;
letter-spacing: 0em;
text-align: left;
margin-top: 2rem;
width: 50vw;
margin-left: 1.5rem;
color:  #364D61;

@media(min-width: 700px){
  width: 30vw;
  font-size: 16px;
}

`


export const StreamingDiv= styled.div`
width: 70%;
margin-top: 5rem;

@media(min-width: 700px){
  width: 50%;
  margin-top: 30rem;
}


`

export const ProjectTop = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 100%;
   height: 40vh;
   background-color: #70ACE0;
   justify-content: space-evenly;
   padding-top: 5rem;
   margin-bottom: 10rem;
   /* justify-content: center; */
   @media (min-width: 768px) {
    height: 40vh;
    background-color: #70ACE0 ;
    align-items: center;
    margin-bottom: 10rem;
    flex-direction: row;
    
    
  }`


export const PimgDiv = styled.div`

width: 70%;
margin-top: 3rem;

@media (min-width: 700px){
width: 35%;
height: 100%;
margin-top: 10rem;


}`


 export const PfonteneImgDiv = styled.div`
 
 width: 50%;
 margin-top: 3rem;

 

@media (min-width: 700px){
width: 40%;
height: 100%;
margin-top: 0rem;






}
 
 `
export const CVimg = styled.img`

width: 100%;

@media( min-width: 700px){
  width: 70%;
}

`

export const ProjectHeaderP = styled.p`
font-family: 'Montserrat', sans-serif;
font-size: 14px;
font-weight: 300;
line-height: 20px;
letter-spacing: 0em;
margin-left: 1.5rem;
text-align: left;
width: 45vw;
margin-bottom: 1rem;
color: black;

@media(min-width: 700px){
  width: 20vw;
  margin-right: 3rem;
  font-size: 18px;
}`


export const AboutHeaderDiv = styled.div`

width: 70%;

@media (min-width: 700px){
  width: 55%;
  margin-right: 1rem;
}



`


 