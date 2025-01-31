import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/books.css";
import { useNavigate } from "react-router-dom";

const Books = () => {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const[sort, setSort] = useState("");
  const[category,setCategory]= useState("")
  const[page,setPage] = useState(1)
  const limit =4;

  const navigate = useNavigate();

  function getAllBooks() {
    axios
      .get(`https://bubble-different-vertebra.glitch.me/books?sort=${sort}&category=${category}&page=${page}&limit=${limit}`)
      .then((res) => {
        console.log(res.data.books);
        setBook(res.data.books);
      })
      .catch((err) => setError(error))
      .finally(setLoading(false));
  }

  useEffect(() => {
    getAllBooks();
  }, [sort,category,page]);

  function handlePrev(){
    setPage((prev)=>prev-1)
  }
  function handleNext() {
    setPage((prev) => prev + 1);
  }

  function handleView(id) {
    navigate(`/bookdetails/${id}`);
  }

  function handleDlt(id) {
    console.log(id);

    axios
      .delete(`https://bubble-different-vertebra.glitch.me/books/${id}`)
      .then(() => {
        getAllBooks();
      });
  }

  return (
    <>
      <div>
        <h2>Welcome to our Books Section</h2>
        <div>
          {/* //sorting */}
          <select id="" value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="" disabled>
              --select--
            </option>
            <option value="name_asc">sort by name</option>
            <option value="price_asc">sort by asc price</option>
            <option value="price_desc">sort by dsc price</option>
          </select>
          {/* // filter by category */}
          <select
            id=""
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" disabled>
              --select by category--
            </option>
            {[
              "Fiction",
              "Drama",
              "Self-Help",
              "Technology",
              "Productivity",
              "Business",
              "Finance",
              "History",
            ].map((el) => {
              return (
                <option value={el} id={el.id}>
                  {el}
                </option>
              );
            })}
          </select>
        </div>

        <button className="add-btn" onClick={() => navigate("/addbooks")}>
          Add Books
        </button>
        <div className="cont">
          {loading && <p>Loading...</p>}
          {book.map((el) => {
            return (
              <div key={el.id} className="card">
                <h2>{el.name}</h2>
                <h3>Category:{el.category}</h3>
                <p>Price:{el.price}</p>
                <div className="btn-div">
                  <button
                    className="view-btn"
                    onClick={() => handleView(el.id)}
                  >
                    View more
                  </button>
                  <button className="dlt-btn" onClick={() => handleDlt(el.id)}>
                    Delete
                  </button>
                  <button
                    className="edit-btn"
                    onClick={() => navigate("/editbooks")}
                  >
                    Edit
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          {/* //pagination  */}
          <button onClick={handlePrev} disabled={page == 1}>
            Prev
          </button>
          <button onClick={handleNext} >Next</button>
        </div>
      </div>
    </>
  );
};

export default Books;
