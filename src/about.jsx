import { Link } from "react-router-dom"
import Footer from "./footer"
const about = () => {
    const currentyear = (new Date()).getFullYear()
  return (
    <div>
 
     <div className="bg-image">
     </div>
     <div className="about-qout">
        <p className="qoute">Don't squeeze in sidean when you could relax in van! </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ☺️corrupti, alias voluptate vitae eaque debitis fuga! Minima voluptatum ipsam temporibus atque quos officiis eius maiores necessitatibus illum. Labore, facilis ea?</p>
     </div>
     <div className="box">
        <p>Your destination is wating <br /> your van is ready</p>
       <Link to={'/van'} ><button className="explore-van" >Explore our van</button></Link> 
     </div>
  <Footer/>
    </div>
  )
}

export default about
