import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import API_URL from '../../config';
import '../../App.css';

function AddNewShoe({props}) {

    const [shoe, setShoe] = useState([]);

    const [edit, setEdit] = useState(false);
	const { id } = useParams();
	const [newObject, setNewObject] = useState({});
	
	let history = useHistory();

	const getShoe = async () => {
		try {
			const res = await fetch (`${API_URL}/shoes`);
            console.log(res)
            const data = await res.json()
			setShoe(data);
            console.log(data)
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		getShoe();
    	
        
	}, []);


    const handleChange = (event) => {
		let type= event.target.type;
		let value = event.target.value;
		setNewObject({ ...newObject, [type]: value });
	};
	const handleEdit = () => {
		setEdit(!edit);
	};
	const handleSubmit = async (event) => {
		event.preventDefault();		
		try {
			const newShoe = await fetch.put(
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
				const deleteOne = await fetch.delete(`${API_URL}/shoes/${id}`);
				deleteOne.status === 204 && history.push('/');
			} catch (error) {
			console.log(error);
			}
		} else {
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
                     <input type="text" name="name" />
                 </label> 
                 <label>
                    STYLING:
                    <input type="text" name="name" />
                 </label>
                 <label>
                    DETELS:
                    <input type="text" name="name" />
                 </label>
                 <label>
                    DESCRIPTION:
                    <input type="text" name="name" />
                 </label>
                 <label>
                    BRAND NAME:
                    <input type="text" name="name" />
                 </label>
                 <label>
                    BRAND URL:
                    <input type="text" name="name" />
                 </label>
                 <label>
                    SHHOE URL:
                    <input type="text" name="name" />
                 </label>
                 <label>
                  PHOTO:
                    <input type="text" name="name" />
                 </label>
                 <button className='app-button' type='submit'>Submi</button>
				 <button className='app-button' onclick={handleEdit}>Cancel</button>
            </form>
        </div>
    );
}

export default AddNewShoe;