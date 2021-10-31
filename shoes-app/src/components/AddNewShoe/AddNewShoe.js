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
			console.log(newShoe)
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
      		  <div className='container'>
          	  <form className="form-add" onSubmit={handleSubmit}>
                 <label className="label-add" htmlFor='id'>
                        TYPE : 
                     <input className="input-add"
					 id='id'
					 onChange={handleChange}
					 type="text" 
					 name="type"
					 value= {newShoe.type}
					 />
                 </label> 
                 <label className="label-add" htmlFor='id'>
                    STYLING :
                    <input className="input-add"
					id='id'
					onChange={handleChange}
					type="text" 
					name="styling" 
					value= {newShoe.styling}
					/>
                 </label>
                 <label className="label-add" htmlFor='id' >
                    DETAILS :
                    <input className="input-add"
					id='id'
					onChange={handleChange}
					type="text" 
					name="details" 
					value= {newShoe.details}
					/>
                 </label>
                 <label className="label-add" htmlFor='id'>
                    DESCRIPTION :
                    <input className="input-add"
					id='id'
					onChange={handleChange}
					type="text" 
					name="description" 
					value={newShoe.description}
					/>
                 </label>
                 <label className="label-add" htmlFor='id'>
                    BRAND NAME :
                    <input className="input-add"
					id='id'
					onChange={handleChange}
					type="text" 
					name="brand_name" 
					value={newShoe.brand_name}
					/>
                 </label>
                 <label className="label-add" htmlFor='id'>
                    BRAND URL :
                    <input className="input-add"
					id='id'
					onChange={handleChange}
					name="brand_url" 
					value={newShoe.brand_url}
					/>
                 </label>
                 <label className="label-add" htmlFor='id'>
                    SHOE URL :
                    <input className="input-add"
					id='id'
					onChange={handleChange}
					name="shoe_url" 
					value={newShoe.shoe_url}
					 />
                 </label>
                 {/* <label className="label-add" htmlFor='id'>
                  PHOTO :
                    <input className="input-add"
					id='id'
					onChange={handleChange}
					name="photo" 
					type="text"
					value={newShoe.photo}/>
                 </label> */}
                 <button className='app-button' name=" name" type='submit' onClick={handleSubmit} >Submit</button>
            </form>
        </div>
    );
}

export default AddNewShoe;