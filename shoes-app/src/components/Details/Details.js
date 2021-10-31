import React from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import API_URL from '../../config';
import '../../App.css';

function Details({props}) {
	
	const [newShoe, setNewShoe] = useState({});
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
			const data= new FormData()
			   data.append('photo', newObject.photo)
			   data.append('type', newObject.type)
			   data.append('brand_name',newObject.brand_name)
			   data.append('brand_url', newObject.brand_url)
			   data.append('styling', newObject.styling)
			   data.append('details', newObject.details)
			   data.append('description', newObject.description)
			
			const newObject= await axios.post(`${API_URL}/shoes/`, data, {'Content-Type': 'multipart/form-data',})
			newObject.status === 201 && history.push('/');
			console.log(newObject)
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
                <div className='detail-shoes'>
						<h5 className='detail-item'>Brand Name: ✧ {singleShoe.brand_name}</h5>
						<h5  className='detail-item'id='detail-shoe-item'> Tpye of the Shoe:✧ {singleShoe.type}</h5>
						<h5 className='detail-item' id='detail-shoe-item'> Description : ✧
							 {singleShoe.description}
						</h5>
						<img src={singleShoe.photo} alt="shoe" id='detail-shoe-item'></img> 
						<section id='detail-item'>
							<a className='detail-item'
								href={`${singleShoe.brand_url}`}
								alt='website link'
								id='detail-item-link'>
								Brand URL : ✧ {singleShoe.brand_url}
							</a>
						</section>
							<button className='singleItem-button' onClick={handleEdit}>
								Edit
							</button>
							<button className='singleItem-button' onClick={handleDelete}>
								Delete
							</button>
					</div>
                </>
            ):(
                <>
			     
				 <h5 className='title'>Edit your Shoe 👠 👢!</h5>
				 <div className='edit-container'>
                 <form className="form-edit" onSubmit={handleSubmit} onEdit={handleEdit}>
                 <label className="label-edit" htmlFor='id'>
                        TYPE : 
                     <input className="input-edit"
					 id='id'
                     onSubmit={handleSubmit}
					 onChange={handleChange}
					 type="text" 
					 name="type"
					 value= {newObject.type}
					 />
                 </label> 
                 <label className="label-edit" htmlFor='id'>
                    STYLING :
                    <input className="input-edit"
					id='id'
                    onSubmit={handleSubmit}
					onChange={handleChange}
					type="text" 
					name="styling" 
					value= {newObject.styling}
					/>
                 </label>
                 <label className="label-edit" htmlFor='id' >
                    DETAILS :
                    <input className="input-edit"
					id='id'
                    onSubmit={handleSubmit}
					onChange={handleChange}
					type="text" 
					name="details" 
					value= {newObject.details}
					/>
                 </label>
                 <label className="label-edit" htmlFor='id'>
                    DESCRIPTION :
                    <input className="input-add"
					id='id'
                    onSubmit={handleSubmit}
					onChange={handleChange}
					type="text" 
					name="description" 
					value={newObject.description}
					/>
                 </label>
                 <label className="label-edit" htmlFor='id'>
                    BRAND NAME :
                    <input className="input-edit"
					id='id'
                    onSubmit={handleSubmit}
					onChange={handleChange}
					type="text" 
					name="brand_name" 
					value={newObject.brand_name}
					/>
                 </label>
                 <label className="label-edit" htmlFor='id'>
                    BRAND URL :
                    <input className="input-edit"
					id='id'
                    onSubmit={handleSubmit}
					onChange={handleChange}
					name="brand_url" 
					value={newObject.brand_url}
					/>
                 </label>
                 <label className="label-edit" htmlFor='id'>
                    SHOE URL :
                    <input className="input-edit"
					id='id'
                    onSubmit={handleSubmit}
					onChange={handleChange}
					name="shoe_url" 
					value={newObject.shoe_url}
					 />
                 </label>
				 <label className="label-edit" htmlFor='id'>
                  PHOTO :
                    <input className="input-edit"
					id='photo'
					onChange={e=>setNewObject({...newObject, photo: e.target.files[0]})}
					name="photo" 
					type="file"
					/>
                 </label>
                 <button className='edit-button' onClick={handleSubmit} type='submit'> Submit </button>
				 <button className='edit-button' onClick={handleEdit}>Cancel</button>
            </form>
			</div>
            </>
          )}
        </>
    );
};


export default Details;