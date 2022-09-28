
import {Link} from 'react-router-dom';
const Navbar = () => {
    const responseGoogle=(response)=>{
        console.log(response)
    }
    return ( 
        <nav className="NavBar">
                <h1>The Blog</h1>            
            <div className="links">  
            {/* <GoogleLogin
    clientId="672934050579-6lgr2ol874fuu4ev9vcgkl6a8g7ucmv9.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />

<GoogleLogout
    clientId="672934050579-6lgr2ol874fuu4ev9vcgkl6a8g7ucmv9.apps.googleusercontent.com"
    buttonText="Logout"
      onLogoutSuccess={responseGoogle}
    >
    </GoogleLogout> */}
                <Link to="/">Home</Link>
                <Link to="/create" >New Blog</Link>
        </div>
            
        </nav>
    );
}
 
export default Navbar;