import React from "react"
import {Routes, Route} from 'react-router-dom'
import BookDetails from "./pages/BookDetails";
// import Login from "./pages/Login";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Navbar from "./components/Navbar";
import AddBooks from "./pages/AddBooks";
import EditBooks from "./pages/EditBooks"
// import ProtectedRoute from "./context/ProtectedRoute";

const App=()=>{
  
   return (
     <>
       <Navbar />
       <Routes>
         <Route path="/" element={<Home />} />
         <Route
           path="/books"
           element={
            //  <ProtectedRoute>
               <Books />
            //  </ProtectedRoute>
           }
         />
         <Route path="/bookdetails/:id" element={<BookDetails />} />
         {/* <Route path="/login" element={<Login />} /> */}
         <Route path="/addbooks" element={<AddBooks />} />
         <Route path="/editbooks" element={<EditBooks />} />
       </Routes>
     </>
   );
}

export default App
