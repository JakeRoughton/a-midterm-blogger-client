import { useAuth } from "../Hooks/Auth";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
	//we need this in the navbar, so that we can log out
	//instead of passing logout through props,
	// we are importing the useAuth which is Auth's 
	// contxt which allows us to call logout()
	const auth = useAuth();

	return (
		<div>
		<h3>{auth.userEmail && `Current User: ${auth.userEmail}`}</h3>
		<Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/blogs">Blogs blogs and bloooogs</Nav.Link>
            <Nav.Link href="/registration">Registration</Nav.Link>
			      <Nav.Link href="/login">Login</Nav.Link>
            <NavDropdown title="Members only" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/create-one">Create Blog</NavDropdown.Item>
              {/* <NavDropdown.Item href="/updateBlog">
                Update Blog
              </NavDropdown.Item> */}
			      <NavDropdown.Divider />
              <NavDropdown.Item href="delete">Delete</NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
          {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
        <button className="btn btn-danger navbar-btn"onClick={()=>{
				auth.logout()
			}}>Logout</button>
        {/* <button class="btn btn-sm btn-outline-secondary" type="button"onClick={()=>{
				auth.logout()
			}}>Logout</button> */}
      </Navbar>
	</div>
	);
  }

export default NavBar




/*
			<h3>{auth.userEmail && `Current User: ${auth.userEmail}`}</h3>
			<Link className='navBarLink' to="/">Home</Link>
            <Link className='navBarLink' to="/blogs">Blogs</Link>
			<Link className='navBarLink' to="/registration">Registration Form</Link>
			<Link className='navBarLink' to="/login">Login Form</Link>
			<button onClick={()=>{
				auth.logout()
			}}>Logout</button>
*/