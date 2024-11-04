// src/components/FilterComponent.js
import React, { useState } from "react";
import styled from "styled-components";

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 8px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 600px;
`;

const FilterTitle = styled.h3`
  margin-bottom: 10px;
`;

const FilterOption = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

const FilterLabel = styled.label`
  margin-right: 10px;
  font-weight: bold;
`;

const FilterSelect = styled.select`
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const FilterButton = styled.button`
  padding: 10px 20px;
  margin: 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const ToggleButton = styled.button`
  padding: 5px 10px;
  margin: 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const FilterComponent = ({ onFilterChange }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleFilterChange = (filterType, value) => {
        onFilterChange(filterType, value);
        setIsExpanded(false); // Collapse the filter options after selection
    };

    return (
        <FilterContainer>
            <ToggleButton onClick={() => setIsExpanded(!isExpanded)}>
                {isExpanded ? "Hide Filters" : "Show Filters"}
            </ToggleButton>
            {isExpanded && (
                <>
                    <FilterTitle>Filter Movies</FilterTitle>
                    <FilterOption>
                        <FilterLabel>Category:</FilterLabel>
                        <FilterSelect onChange={(e) => handleFilterChange("category", e.target.value)}>
                            <option value="">All</option>
                            <option value="bollywood">Bollywood</option>
                            <option value="hollywood">Hollywood</option>

                        </FilterSelect>
                    </FilterOption>
                    <FilterOption>
                        <FilterLabel>Rating:</FilterLabel>
                        <FilterSelect onChange={(e) => handleFilterChange("rating", e.target.value)}>
                            <option value="">All</option>
                            <option value="1">1+</option>
                            <option value="2">2+</option>
                            <option value="3">3+</option>
                            <option value="4">4+</option>
                            <option value="5">5+</option>
                        </FilterSelect>
                    </FilterOption>
                    <div>
                        <FilterButton onClick={() => handleFilterChange("category", "bollywood")}>Bollywood</FilterButton>
                        <FilterButton onClick={() => handleFilterChange("category", "hollywood")}>Hollywood</FilterButton>

                    </div>
                </>
            )}
        </FilterContainer>
    );
};

export default FilterComponent;