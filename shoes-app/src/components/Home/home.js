import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import API_URL from '../../config';
import '../../App.css';
import React from 'react';



const Home = () => {

	const [shoe, setShoe] = useState([]);
	const [problem, setProblem] = useState(false);

	
	const getShoes = () => {
		axios.get(`${API_URL}/shoes/`) 
			
		  .then((response) => {
			setShoe(response.data);
		  })
		  .catch((e) => {
			console.error(e);
		  });
		}
	  
	useEffect(() => {
		getShoes();
	}, []);
                                                                                                                                    

	return (                                                    
		<>
		{ problem && <hh>{problem}</hh> }   
			<h2 className='title'>Here your shoe inventory!</h2>                                         
                                                                                  
			<div className='cards'>
          
				{shoe.map((shoe) => {
					return (                                                                                                                           
						<Link key={shoe.id} to={`/shoes/${shoe.id}`}>
							<div className="shoes" key={shoe.id}>              
								<h4 className="text">{shoe.type}</h4>
								<h4 className="text">{shoe.brand_name}</h4>
                                <img className="image" src={shoe.photo}alt="/shoe.type" />
							</div>                                                            
						</Link>
					);
				})}
                
			</div>
		</>
	);
};                  
                         
  export default Home;
