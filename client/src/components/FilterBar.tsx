import React from 'react';

interface FilterBarProps {
  onFilterChange: (genre: string, platform: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ onFilterChange }) => {
  const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange(e.target.value, '');
  };

  const handlePlatformChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange('', e.target.value);
  };

  return (
    <div className="filter-bar">
      <label>
        Genre:
        <select onChange={handleGenreChange}>
          <option value="">All</option>
          <option value="Action">Action</option>
          <option value="Adventure">Adventure</option>
          {/* Add more genres as needed */}
        </select>
      </label>
      <label>
        Platform:
        <select onChange={handlePlatformChange}>
          <option value="">All</option>
          <option value="PC">PC</option>
          <option value="PlayStation">PlayStation</option>
          {/* Add more platforms as needed */}
        </select>
      </label>
    </div>
  );
};

export default FilterBar;