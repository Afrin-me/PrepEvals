import React from 'react'
import { useParams } from 'react-router-dom'

const EditBooks=() =>{

    const {id} = useParams();
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
  return (
    <div>
      <h2>Edit Book</h2>
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
}

export default EditBooks