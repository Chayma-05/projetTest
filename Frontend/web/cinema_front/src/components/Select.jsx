import React, { useState, useEffect } from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material'; // Import Material UI components

const CategorySelect = ({ categories, filmData, isDisplayMode, handleChange }) => {
  const [selectedCategory, setSelectedCategory] = useState(
    filmData.idCategorie || '' // Set initial value based on filmData.idCategorie or empty string
  );

  useEffect(() => {
    // Update selectedCategory when filmData changes (for Edit mode)
    if (filmData.idCategorie && selectedCategory !== filmData.idCategorie) {
      setSelectedCategory(filmData.idCategorie);
    }
  }, [filmData]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    handleChange({ target: { name: 'idCategorie', value: event.target.value } });
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="category-label">Category</InputLabel>
      <Select
        labelId="category-label"
        id="category"
        value={selectedCategory}
        onChange={handleCategoryChange}
        disabled={isDisplayMode}
      >
        {categories.map((category) => (
          <MenuItem key={category.id} value={category.id}>
            {category.genre}
          </MenuItem>
        ))}
        {!selectedCategory && !isDisplayMode && (
          <MenuItem value="">Select a Category</MenuItem>
        )}
      </Select>
    </FormControl>
  );
};

export default CategorySelect;
