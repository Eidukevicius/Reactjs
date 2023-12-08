import { ReactComponent as Logo} from "../../svg/Vector(2).svg"
import { ReactComponent as Search} from "../../svg/search-line(1).svg"
import { ReactComponent as User} from "../../svg/user-line(1).svg"
const Nav = ()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light">
    <div className="container-fluid">
    <Logo/>
  <a className="navbar-brand mx-2" href="#">Recipedia</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarSupportedContent">
    <ul className="navbar-nav">
      <li className="nav-item active mx-4">
        <a className="nav-link" href="#">Home</a>
      </li>
      <li className="nav-item mx-4">
        <a className="nav-link" href="#">Recipe</a>
      </li>
      <li className="nav-item mx-4">
        <a className="nav-link" href="#">Community</a>
      </li>
      <li className="nav-item mx-4">
        <a className="nav-link" href="#">About Us</a>
      </li>
    </ul>
  </div>
    <div className="d-flex justify-content-end userSe">
        <Search/>
        <User/>
    </div>
    </div>
</nav>
    );
}

export default Nav