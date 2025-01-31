// import React, {useEffect, useState} from 'react'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'


// const AddBooks=()=> {

//     const initData = {
//         name: "",
//         category: "",
//         price: "",
        
//     }

//     const[formData,setFormData] = useState(initData)
//     const[loading, setloading] = useState(true)
    
//     const navigate = useNavigate()
//     const handleChange= (e)=>
//     {
//         //destructure name and value
//         const {name, value} = e.target;
//       setFormData({...formData, [name]:value})

//     }
//     const handleAdd= async (e)=>
//     {
//       e.preventdefault()
//       console.log(formData)
//       useEffect(()=>{
//         const fetchBook = async ()=>{
//             try {
//               await axios(
//                 `https://bubble-different-vertebra.glitch.me/books/${id}`,
//                 formData
//               );
//                 setFormData(Response.data)
//               navigate("/books");
//             } catch (err) {
//               alert("failed add to book");
//             }
//         }
//       }, [])

//     }
//   return (
//     <div>
//       AddBooks
//       <form onSubmit={handleAdd}>
//         <input
//           type="text"
//           placeholder="enter your name"
//           value={formData.name}
//           name="name"
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           placeholder="enter category"
//           value={formData.category}
//           name="name"
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           placeholder="enter price"
//           value={formData.price}
//           name="name"
//           onChange={handleChange}
//         />
//         <input type="submit" value="Add Book" />
//       </form>
//     </div>
//   );
// }

// export default AddBooks


import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddBooks = () => {
  const initData = {
    name: "",
    category: "",
    price: "",
  };

  const [formData, setFormData] = useState(initData);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(
        "https://bubble-different-vertebra.glitch.me/books",
        formData
      );
      navigate("/books");
    } catch (err) {
      alert("Failed to add book");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Add a New Book</h2>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Enter book name"
          value={formData.name}
          name="name"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter category"
          value={formData.category}
          name="category"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter price"
          value={formData.price}
          name="price"
          onChange={handleChange}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add Book"}
        </button>
      </form>
    </div>
  );
};

export default AddBooks;
