import React from 'react';
import './SortFilterControls.css';

interface Props {
  onSortChange: (sortOption: string) => void;
  onFilterChange: (filterOption: string) => void;
  setItemsPerPage: React.Dispatch<React.SetStateAction<number>>; // For setting items per page
}

const SortFilterControls: React.FC<Props> = ({ onSortChange, onFilterChange, setItemsPerPage }) => {
  return (
    <div className="sort-filter-controls">
      {/* Sorting */}
      <select onChange={(e) => onSortChange(e.target.value)} className="sort-select">
        <option value="">Sort By</option>
        <option value="id-asc">ID: Low to High</option>
        <option value="id-desc">ID: High to Low</option>
        <option value="name-asc">Name: A-Z</option>
        <option value="name-desc">Name: Z-A</option>
      </select>

      {/* Filtering by Type */}
      <select onChange={(e) => onFilterChange(e.target.value)} className="filter-select">
        <option value="">Filter by Type</option>
        <option value="fire">Fire</option>
        <option value="water">Water</option>
        <option value="grass">Grass</option>
        <option value="poison">Poison</option>
        <option value="ground">Ground</option>
        <option value="rock">Rock</option>
        <option value="bug">Bug</option>
        <option value="ghost">Ghost</option>
        <option value="steel">Steel</option>
        <option value="electric">Electric</option>
        <option value="psychic">Psychic</option>
        <option value="ice">Ice</option>
        <option value="dragon">Dragon</option>
        <option value="dark">Dark</option>
        <option value="fairy">Fairy</option>
        <option value="stellar">Stellar</option>
        <option value="unknown">Unknown</option>
      </select>

      {/* Pagination */}
      <select onChange={(e) => setItemsPerPage(Number(e.target.value))} className="items-per-page-select">
        <option value={10}>10 per page</option>
        <option value={20}>20 per page</option>
        <option value={50}>50 per page</option>
      </select>
    </div>
  );
};

export default SortFilterControls;
