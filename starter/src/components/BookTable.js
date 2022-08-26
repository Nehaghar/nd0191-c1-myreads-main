/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import { useState } from "react";
const BookTable = ({books}) => 
{ console.log(books);
  const [showSearchPage, setShowSearchpage] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");
  const searchQuery =(showSearchPage)=>{
    setShowSearchpage(showSearchPage.trim());
  };
   //const showingBooks = showSearchPage === "" ? books : books.filter((b)=> b.title.toLowerCase().includes(showSearchPage.toLowerCase()));

return( <div className="app">
   {showSearchPage ? (
        <div className="search-books">
          <div className="search-books-bar">  
            <a
              className="close-search"
              onClick={() => setShowSearchpage(!showSearchPage)}
            >
              Close
            </a>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN" 
                 onChange={(event)=>searchQuery(event.target.value)}              />
            </div>{console.log(showSearchPage)}
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
      ) : (
     <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div> <div className="list-books-content"><div><div className="bookshelf"><h2 className="bookshelf-title">Currently Reading</h2><div className="bookshelf-books"><ol className="books-grid">
            
            {books.map((book)=>(<li>
                      <div className="book">
                        <div className="book-top">
                          <div
                            className="book-cover"
                            style={{
                              width: 128,
                              height: 193,
                              backgroundImage:
                                'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")',
                            }}
                          ></div>
                          <div className="book-shelf-changer">
                            <select value={selectedOption}
    	onChange={(event) => setSelectedOption(event.target.value)}>
                              <option value="none" disabled>
                                Move to...
                              </option>
                              <option value="currentlyReading">
                                Currently Reading
                              </option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                          </div>
                        </div>
                   
                        <div className="book-title">{book}</div>
                        <div className="book-authors">{book}</div>
                      </div>
                    </li>))}
                    <div className="open-search">
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div>
             
            
            
            </ol></div></div></div></div></div>  )}
    </div>
  );
}
export default BookTable;