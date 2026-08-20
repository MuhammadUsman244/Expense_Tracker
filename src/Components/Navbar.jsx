import './Navbar.css'
function Navbar(props){
    return(
        <div className="navbarHeading">
        <h1><span>💰 </span> {props.title}</h1>
        </div>
    )
}
export default Navbar;