'use client'
import { Footer, Navbar } from "../../components"
import { Driver } from "../../sections"
import { getProfile, getPaths } from "../../utils/services"


function Drivers({driver}) {

  return (
    <div className="home overflow-hidden w-full min-h-screen">

      
        <Navbar />
       
        <Driver driver={driver.drivers[0]} />
        <Footer />
      

    </div>
  )
}

export default Drivers

export async function getStaticProps({params}){
  const data = await getProfile(params.slug)
  
  return {
    props: { driver: data}
  }
}
export async function getStaticPaths(){
  const data = await getPaths()

  return{
      paths: data.drivers.map(({ slug }) => ({params: {slug}})),
      fallback:true
  }
}

