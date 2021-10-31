import React from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import API_URL from '../../config';
import '../../App.css';

function AddNewShoe({props}) {
	
    const [shoe, setShoe] = useState([]);
	const { id } = useParams();
	const [newShoe, setNewShoe] = useState({});
	let history = useHistory();

  

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

    const handleChange = (event) => {
	    let name= event.target.name;
		let value = event.target.value;
		setNewShoe({ ...newShoe, [name]: value });
	};
	

	const handleSubmit = async (event) => {
		event.preventDefault();		
		const verify = window.confirm(`Are you sure you want to create this?`)
		if (verify) {
			try {
			const Shoe = await axios.post(`${API_URL}/shoes/`, newShoe)
			Shoe.status === 201 && history.push('/');
		} catch (error) {
		console.log(error)
	
		}
		}  else {
			return;
		}
	};
	if (!shoe) {
		<h1>loading</h1>;
	}

   		 return (
      		  <div>
          	  <form onSubmit={handleSubmit}>
                 <label htmlFor='id'>
                        TYPE:
                     <input 
					 id='id'
					 onChange={handleChange}
					 type="text" 
					 name="type"
					 value= {newShoe.type}
					 />
                 </label> 
                 <label htmlFor='id'>
                    STYLING:
                    <input 
					id='id'
					onChange={handleChange}
					type="text" 
					name="styling" 
					value= {newShoe.styling}
					/>
                 </label>
                 <label htmlFor='id' >
                    DETAILS:
                    <input 
					id='id'
					onChange={handleChange}
					type="text" 
					name="details" 
					value= {newShoe.details}
					/>
                 </label>
                 <label htmlFor='id'>
                    DESCRIPTION:
                    <input 
					id='id'
					onChange={handleChange}
					type="text" 
					name="description" 
					value={newShoe.description}
					/>
                 </label>
                 <label htmlFor='id'>
                    BRAND NAME:
                    <input
					id='id'
					onChange={handleChange}
					type="text" 
					name="brand_name" 
					value={newShoe.brand_name}
					/>
                 </label>
                 <label htmlFor='id'>
                    BRAND URL:
                    <input 
					id='id'
					onChange={handleChange}
					name="brand_url" 
					value={newShoe.brand_url}
					/>
                 </label>
                 <label htmlFor='id'>
                    SHOE URL:
                    <input 
					id='id'
					onChange={handleChange}
					name="shoe_url" 
					value={newShoe.shoe_url}
					 />
                 </label>
                 <label htmlFor='id'>
                  PHOTO:
                    <input
					id='id'
					onChange={handleChange}
					name="photo" 
					type="text"
					value={newShoe.photo}/>
                 </label>
                 <button className='app-button' name=" name" type='submit' onClick={handleSubmit} >Submit</button>
            </form>
        </div>
    );
}

export default AddNewShoe;