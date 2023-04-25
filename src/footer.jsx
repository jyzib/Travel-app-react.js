const currentyear = (new Date()).getFullYear()
const footer = () => {
  return (
    <div>
        <div className="footer-about">
     &#169;{currentyear} #VAINS
     </div> 
    </div>
  )
}

export default footer
