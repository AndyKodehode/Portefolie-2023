import { MainNav } from "../Components/Nav"
import { AttestImg } from "../Components/styled"





export const KodeHodeAttest= (()=>{

    const Style ={
        backgroundColor: 'white'
    }

    return(
     
        <div style={{display:'flex', flexDirection: 'column', alignItems: 'center'}} >
            <MainNav style={Style}/>
            <AttestImg src= {process.env.PUBLIC_URL + "/Img/Anders_Sluttattest-3.png"} alt='sluttattest'></AttestImg>
            
        </div>

    )
          

})


