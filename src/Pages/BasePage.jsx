import Navbar from "../Components/Navbar/Navbar"
import './BasePage.scss'

const BasePage = (props) => {
  return (
    <>
      <div className="main">
        <Navbar />
        {props.children}
      </div>
    </>
  )
}

export default BasePage