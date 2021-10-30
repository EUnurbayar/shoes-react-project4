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
			console.log(response.data)
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
        
			<div className='shoes-list'>
          
				{shoe.map((shoe) => {
					return (
						<Link className="shoe" to={`/shoes/${shoe.id}`}>
							<div  key={shoe.id}>
								<h2>{shoe.type}</h2>
								<h4>{shoe.brand_name}</h4>
                                <img src={shoe.photo}alt="/shoe.type" />
							</div>
						</Link>
					);
				})}
                
			</div>
		</>
	);
};


export default Home;
