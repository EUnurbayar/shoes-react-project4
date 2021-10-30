import React from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import API_URL from '../../config';
import '../../App.css';

function AddNewShoe({props}) {
	const [name, setName]= useState();
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
	    let name= event.target.type;
		let value = event.target.value;
		setNewShoe({ ...newShoe, [name]: value });
	};
	

	const handleSubmit = async (event) => {
		event.preventDefault();		
		const verify = window.confirm(`Are you sure you want to create this?`)
		if (verify) {
		try {
			const user = {
				name: this.target.name
			};
			const Shoe = await axios.post(`https://thawing-sands-01164.herokuapp.com/api-authlogin/?next=/shoes/`, {user}, newShoe)

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
          	  <form>
                 <label>
                        TYPE:
                     <input 
					 id='id'
					 onChange={handleChange}
					 type="text" 
					 name="type"
					 value= {newShoe.type}
					 />
                 </label> 
                 <label>
                    STYLING:
                    <input 
					id='id'
					onChange={handleChange}
					type="text" 
					name="styling" 
					value= {newShoe.styling}
					/>
                 </label>
                 <label>
                    DETAILS:
                    <input 
					id='id'
					onChange={handleChange}
					type="text" 
					name="details" 
					value= {newShoe.details}
					/>
                 </label>
                 <label>
                    DESCRIPTION:
                    <input 
					id='id'
					onChange={handleChange}
					type="text" 
					name="description" 
					value={newShoe.description}
					/>
                 </label>
                 <label>
                    BRAND NAME:
                    <input
					id='id'
					onChange={handleChange}
					type="text" 
					name="brand_name" 
					value={newShoe.brand_name}
					/>
                 </label>
                 <label>
                    BRAND URL:
                    <input 
					id='id'
					onChange={handleChange}
					name="brand_url" 
					value={newShoe.brand_url}
					/>
                 </label>
                 <label>
                    SHOE URL:
                    <input 
					id='id'
					onChange={handleChange}
					name="name" 
					value={newShoe.brand_url}
					 />
                 </label>
                 <label>
                  PHOTO:
                    <input
					id='id'
					onChange={handleChange}
					name="name" 
					type="text"
					value={newShoe.photo}/>
                 </label>
                 <button className='app-button' type='submit' onClick={handleSubmit} >Submit</button>
            </form>
        </div>
    );
}

export default AddNewShoe;