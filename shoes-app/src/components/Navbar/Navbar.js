import React from 'react';
import {Link} from 'react-router-dom';
import { Nav } from 'react-bootstrap';




const NavBar = () => {

    
	return (
		
		<Nav className="nav" variant="tabs">
			<Nav.Item>
				<Nav.Link className="class" href="/">Home</Nav.Link>
			</Nav.Item>
            <Nav.Item>
				<Nav.Link href="/create" eventKey="/create">Create</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href="/details" eventKey="/details">Details</Nav.Link>
			</Nav.Item>
			
		</Nav>
	);
}

export default NavBar;