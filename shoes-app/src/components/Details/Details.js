// import { useState, useEffect } from 'react';
// import React from 'react';
// import axios from 'axios';
// import { useParams, useHistory } from 'react-router-dom';
// import API_URL from '../../config.js';


// const Detail = ({ props }) => {
	
// 	const [shoe, setShoe] = useState([]);
// 	const [edit, setEdit] = useState(false);
// 	const { id } = useParams();
// 	const [newObject, setNewObject] = useState({});
// 	const [problem, setProblem] = useState(false);
// 	let history = useHistory();
	
// 	useEffect(() => {
// 		axios
// 			.get(`${API_URL}/shoess/${id}`)
// 			.then((item) => setShoe(item.data))
// 			.catch((error) => setProblem(error));
// 	}, []);

	
// 	const handleChange = (event) => {
// 		let type = event.target.type;
// 		let value = event.target.value;
// 		setNewObject({ ...newObject, [type]: value });
// 	};
// 	const handleEdit = () => {
// 		setEdit(!edit);
// 	};
// 	const handleSubmit = async (event) => {
// 		event.preventDefault();		
// 		try {
// 			const newShoe = await axios.put(
// 				`${API_URL}/shoess/${id}`,
// 				newObject
// 			);
// 			newShoe.status === 201 && history.push('/');
// 		} catch (error) {
// 			setProblem(error);
// 		}
// 	};
// 		const handleDelete = async (event) => {
// 		const verify = window.confirm('Are you sure you want to delete?');
// 		if (verify) {
// 			try {
// 				const deleteOne = await axios.delete(`${API_URL}/shoess/${id}`);

// 				deleteOne.status === 204 && history.push('/');
// 			} catch (error) {
// 			setProblem(error);
// 			}
// 		} else {
// 			return;
// 		}
// 	};
// 	if (!shoe) {
// 		<h1>loading</h1>;
// 	}
	
// 	return (
// 		<>
// 			{!edit ? (
// 				<>
// 				</>	
// 		</>
// 	);
// };
// export default Detail;