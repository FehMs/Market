import React, {useState, useContext} from 'react';
import { CiSearch } from 'react-icons/ci';
import './SearchBar.css';
import fetchProducts from '../../api/fetchProducts';
import AppContext from '../../context/AppContext';

function SearchBar() {

  const [searchValue, setSearchValue] = useState('');
  const { setProducts, setLoading } = useContext(AppContext);

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    const products = await fetchProducts(searchValue);
    
    setProducts(products);
    setLoading(false);
    setSearchValue('');

  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      {name}
      <input 
        type="search"
        value={searchValue}
        placeholder="Buscar produtos"
        className="search-input"
        onChange={ ({target}) => setSearchValue(target.value)}
        required
      />

      <button type="submit" className="search-button">
        <CiSearch/>
      </button>
    </form>
  );
}

export default SearchBar;
