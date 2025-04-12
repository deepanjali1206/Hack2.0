import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container text-center mt-5">
      <h1 className="text-primary mb-4">Welcome to KaamSetu</h1>
      <p className="lead">This is your first step toward the Invisible Economy App!</p>
      <button className="btn btn-success" onClick={() => setCount(count + 1)}>
        Count is {count}
      </button>
      <p className="mt-3">Bootstrap is <strong>working</strong> if this looks styled ✅</p>
    </div>
  );
}

export default App;
