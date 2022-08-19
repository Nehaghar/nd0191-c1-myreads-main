/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import { useState ,useEffect } from "react";
import * as BooksAPI from "./BooksAPI.js";
import BookTable from "./components/BookTable";
import BookRow from "./components/BookRow";


function App() {
 

  const [books,setBooks] = useState([""]);
   //useEffect hook to retrieve all books available async using the BooksAPI getAll() method
  const useEffect=(()=>{
    const getBooks = async ()=>{
      const res = await BooksAPI.getAll();
      setBooks(res);
    } ; getBooks();
  }, []); 
  return (<><BookTable books={books} /></>);
  
}
  

export default App;