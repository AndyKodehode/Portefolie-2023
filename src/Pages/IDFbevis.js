import { MainNav } from "../Components/Nav"


export const IdfKurs= (()=>{
 

    const Style ={
        backgroundColor: 'white'
    }


    return(

        <div style={{display:'flex', flexDirection: 'column', alignItems: 'center'}} >
                <MainNav style={Style}/>
                <img style={{width: '70%', height: '70%', marginTop:'10rem'}} src= {process.env.PUBLIC_URL + "/Img/course-certificate-IDF.jpg"} alt='sluttattest'></img>
                <a style={{textDecoration:'none', marginTop: '5rem', marginBottom: '5rem', fontSize: '20px', color:'inherit'}} href="https://www.interaction-design.org/anders-brekke-hausvik/certificate/course/977f45b5-9f91-4ece-91a3-dad179dd6f36">se mer</a>
                
        </div>

    )
})