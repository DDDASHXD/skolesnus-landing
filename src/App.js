import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.location.href="https://app.skolesnus.dk";
  })
  return (
    <div className="App">
      <h1>Redirecting</h1>
    </div>
  );
}

export default App;
