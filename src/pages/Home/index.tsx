import { useState } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <Button type="primary" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Link to="/header">Header</Link>
    </>
  );
}

export default Home;
