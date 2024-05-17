import React from 'react';

const CustomTimeSlot = ({ slot }) => {
  const companies = ['Company A', 'Company B', 'Company C', 'Company D', 'Company E', 'Company F', 'Company G', 'Company H', 'Company I', 'Company J', 'Company K', 'Company L', 'Company M', 'Company N', 'Company O'];

  // Use the slot index to determine the company name
  const company = companies[slot];

  return <div>{company}</div>;
};

export default CustomTimeSlot;
