import React from 'react';
import { Link } from 'react-router-dom';

function StartPage() {
  return (
    <div className="StartPage-container">
      <h1>Notepad App</h1>
      <Link to="/notepad">
        <button>Create a Note</button>
      </Link>
    </div>
  );
}

export default StartPage;
