
import { Prosjectframes } from "../Components/projectframe";
import { Header } from "../Components/header";
import { ProgressSection } from "../Components/progressSection";
import { FrontsideLearning } from "../Components/FrontsideLearning";
import { Footer } from "../Components/footer";


export const Firstpage = (()=>{

  return(
    <div>
        <Header></Header>
        <Prosjectframes></Prosjectframes>
        <ProgressSection></ProgressSection>
        <FrontsideLearning></FrontsideLearning>
        <Footer></Footer> 
        

    </div>
  )
})