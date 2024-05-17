import React from 'react';
import { Navigate } from 'react-big-calendar';

const CustomToolbar = (toolbar) => {
  const goToBack = () => {
    toolbar.onNavigate(Navigate.PREVIOUS);
  };

  const goToNext = () => {
    toolbar.onNavigate(Navigate.NEXT);
  };

  const goToCurrent = () => {
    toolbar.onNavigate(Navigate.TODAY);
  };

  const label = () => {
    const date = toolbar.date;
    const formattedDate = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(date);
    return <span className="toolbar-label">{formattedDate}</span>;
  };

  return (
    <div className="rbc-toolbar">
      <div className="rbc-toolbar-group">
        {label()}
      </div>
      <div className="rbc-toolbar-group">
        <button type="button" onClick={goToBack}>Back</button>
        <button type="button" onClick={goToCurrent}>Today</button>
        <button type="button" onClick={goToNext}>Next</button>
      </div>
    </div>
  );
};

export default CustomToolbar;
