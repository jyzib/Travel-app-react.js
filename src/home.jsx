import { data } from "autoprefixer"
import { Link } from "react-router-dom"
const home = () => {
    const currentyear = (new Date()).getFullYear()
   
  return (
    <div>
   
   <div className="body">
    <div className="test-body">
    <div className="header-text-area">
    <h1 className="header-text" > You got the travel plane , We got the travel Vans</h1> 
    <p className="header-paragraph"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo, saepe. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium saepe exercitationem reprehenderit corporis at obcaecati in totam </p>
    </div>
     <button className="find-van" ><Link to={'/van'} >Find your van</Link></button>
  

   </div>
   <div className="footer">
   &#169;{currentyear} #VAINS
   </div>

   </div>
    </div>
  )
}

export default home
