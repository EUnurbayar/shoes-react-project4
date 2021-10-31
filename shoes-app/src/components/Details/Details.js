import React from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import API_URL from '../../config';
import '../../App.css';

function Details({props}) {
	
    const [singleShoe, setSingleShoe] = useState([]);
    const [newObject, setNewObject] = useState({});
	const [edit, setEdit] = useState(false);
	const { id } = useParams();
	let history = useHistory();
    
	useEffect(() => {
		axios
			.get(`${API_URL}/shoes/${id}`)
			.then((item) => setSingleShoe(item.data))
			.catch((error) => console.log(error));
	}, []);

    
	
	const handleChange = (event) => {
		let name = event.target.name;
		let value = event.target.value;
		setNewObject({ ...newObject, [name]: value });
	};
	const handleEdit = () => {
		setEdit(!edit);
	};
	const handleSubmit = async (event) => {
		event.preventDefault();		
		try {
			const newShoe = await axios.put(
				`${API_URL}/shoes/${id}`,
				newObject
			);
			newShoe.status === 201 && history.push('/');
		} catch (error) {
			console.log(error);
		}
	};
		const handleDelete = async (event) => {
		const verify = window.confirm('Are you sure you want to delete?');
		if (verify) {
			try {
				const deleteOne = await axios.delete(`${API_URL}/shoes/${id}`);
				deleteOne.status === 204 && history.push('/');
			} catch (error) {
			console.log(error);
			}
		} else {
			return;
		}
	};
	if (!singleShoe) {
		<h1>loading</h1>;
	}
   		 return (
            <>
        	{!edit ? (
                <>
                <div className='detail-attraction'>
						<h1 id='detail-item-name'>{singleShoe.type}</h1>
						<p className='detail-item' id='detail-item-description'>
							{singleShoe.description}
						</p>
						<section id='detail-item-addresses'>
							<p className='detail-item'>Address: {singleShoe.brand_name}</p>
							<a
								href={`${singleShoe.brand_url}`}
								alt='website link'
								className='detail-item'
								id='detail-item-link'>
								Brand URL : {singleShoe.brand_url}
							</a>
						</section>
						<aside className='buttons-flex'>
							<button className='app-button' onClick={handleEdit}>
								Edit
							</button>
							<button className='app-button' onClick={handleDelete}>
								Delete
							</button>
						</aside>
					</div>
                </>
            ):(
                <>
             <form className="form" onSubmit={handleSubmit} onEdit={handleEdit}>
                 <label className="label-add" htmlFor='id'>
                        TYPE : 
                     <input className="input-add"
					 id='id'
                     onSubmit={handleSubmit}
					 onChange={handleChange}
					 type="text" 
					 name="type"
					 value= {singleShoe.type}
					 />
                 </label> 
                 <label className="label-add" htmlFor='id'>
                    STYLING :
                    <input className="input-add"
					id='id'
                    onSubmit={handleSubmit}
					onChange={handleChange}
					type="text" 
					name="styling" 
					value= {singleShoe.styling}
					/>
                 </label>
                 <label className="label-add" htmlFor='id' >
                    DETAILS :
                    <input className="input-add"
					id='id'
                    onSubmit={handleSubmit}
					onChange={handleChange}
					type="text" 
					name="details" 
					value= {singleShoe.details}
					/>
                 </label>
                 <label className="label-add" htmlFor='id'>
                    DESCRIPTION :
                    <input className="input-add"
					id='id'
                    onSubmit={handleSubmit}
					onChange={handleChange}
					type="text" 
					name="description" 
					value={singleShoe.description}
					/>
                 </label>
                 <label className="label-add" htmlFor='id'>
                    BRAND NAME :
                    <input className="input-add"
					id='id'
                    onSubmit={handleSubmit}
					onChange={handleChange}
					type="text" 
					name="brand_name" 
					value={singleShoe.brand_name}
					/>
                 </label>
                 <label className="label-add" htmlFor='id'>
                    BRAND URL :
                    <input className="input-add"
					id='id'
                    onSubmit={handleSubmit}
					onChange={handleChange}
					name="brand_url" 
					value={singleShoe.brand_url}
					/>
                 </label>
                 <label className="label-add" htmlFor='id'>
                    SHOE URL :
                    <input className="input-add"
					id='id'
                    onSubmit={handleSubmit}
					onChange={handleChange}
					name="shoe_url" 
					value={singleShoe.shoe_url}
					 />
                 </label>
                 <label className="label-add" htmlFor='id'>
                  PHOTO :
                    <input className="input-add"
					id='id'
                    onSubmit={handleSubmit}
					onChange={handleChange}
					name="photo" 
					type="text"
					value={singleShoe.photo}/>
                 </label>
                 <button className='app-button' type='submit' onclick={handleEdit}> Submit </button>
				 <button className='app-button' onclick={handleChange}>Cancel</button>
            </form>
            </>
          )}
        </>
    );
};


export default Details;