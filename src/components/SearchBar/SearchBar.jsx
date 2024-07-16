import { useState } from 'react'
import { Toaster } from 'react-hot-toast';
import { toast } from 'react-hot-toast';
import css from "./SearchBar.module.css"
const SearchBar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');
    const handleChange = (e) => {
    setInputValue(e.target.value);
  };
   const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') {
     toast.error('Please enter a search query.');
    }
    onSubmit(inputValue.trim());
    
  };
    return (
      
         <header className={css.header}>
            <form onSubmit={handleSubmit} className={css.form}>
             <input
              id="search-input"
             name="search"
             type="text"
             autoComplete="off"
             autoFocus
             placeholder="Search images and photos"
             value={inputValue}
             onChange={handleChange}
         />
         <button type="submit" className={css.btnInput}>Search</button>
        </form>
           <Toaster position="top-right" reverseOrder={false} />
    </header>
 

    )
}
export default SearchBar