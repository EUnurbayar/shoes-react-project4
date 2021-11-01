import React from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import API_URL from '../../config';
import '../../App.css';

function AddNewShoe({props}) {
	
    const [shoe, setShoe] = useState([]);
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
			try {
			const data= new FormData()
			   data.append('photo', newShoe.photo)
			   data.append('type', newShoe.type)
			   data.append('brand_name', newShoe.brand_name)
			   data.append('brand_url', newShoe.brand_url)
			   data.append('styling', newShoe.styling)
			   data.append('details', newShoe.details)
			   data.append('description', newShoe.description)
			
			const Shoe = await axios.post(`${API_URL}/shoes/`, data, {'Content-Type': 'multipart/form-data',})
			console.log(Shoe)
			Shoe.status === 201 && history.push('/');
		} catch (error) {
		console.log(error)
	
		}
		
	};
	if (!shoe) {
		<h1>loading</h1>;
	}

   		 return (
			<>
			<h5 className='title'>Add new shoes 👠 🥾 👢!</h5>
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
                 <label className="label-add" htmlFor='photo'>
                  PHOTO :
                    <input className="input-add"
					id='photo'
					onChange={e=>setNewShoe({...newShoe,photo: e.target.files[0]})}
					name="photo" 
					type="file"
					/>
                 </label>
                 <button className='app-button' name=" name" type='submit' onClick={handleSubmit} >Submit</button>
            </form>
        </div>
		</>
    );
}

export default AddNewShoe;