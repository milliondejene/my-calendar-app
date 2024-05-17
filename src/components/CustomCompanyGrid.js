import React from 'react';

const CustomCompanyGrid = ({ companies }) => {
  return (
    <div>
      <h3>Company List</h3>
      <ul>
        {companies.map((company, index) => (
          <li key={index}>{company}</li>
        ))}
      </ul>
    </div>
  );
};

export default CustomCompanyGrid;
