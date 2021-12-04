import React from 'react';
import './Search.css';

const Search = () => {
    return (
        <div>
            <form onSubmit='' className="search-input">
                <input
                className="search"
                type="text"
                placeholder="Encontre aqui"
                required
                />
                <input type="submit" value="Procurar" />
            </form>
        </div>
    )
}

export default Search;
