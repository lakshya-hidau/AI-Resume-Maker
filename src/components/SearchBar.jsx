import React, { useState } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';

const SearchBar = ({ onSearch, placeholder = "Search..." }) => {
  const [query, setQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  const handleClear = () => {
    setQuery('');
    setIsExpanded(false);
    onSearch('');
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="flex items-center">
        <div className={`relative transition-all duration-300 ${isExpanded ? 'w-64' : 'w-10'}`}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsExpanded(true)}
            onBlur={() => !query && setIsExpanded(false)}
            className={`input input-bordered w-full pr-10 transition-all duration-300 ${
              isExpanded ? 'opacity-100' : 'opacity-0 w-0'
            }`}
            placeholder={placeholder}
          />
          <button
            type="button"
            onClick={() => isExpanded ? handleClear() : setIsExpanded(true)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 btn btn-ghost btn-sm btn-circle"
          >
            {isExpanded && query ? <FaTimes /> : <FaSearch />}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;