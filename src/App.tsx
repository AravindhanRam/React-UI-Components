import './App.css';

function App() {
  const message = 'Testing Husky File Included';
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-semibold">
        Welcome to React shared UI Component Repository
      </h1>
      <h2 className="text-xl font-normal">{message}</h2>
    </div>
  );
}

export default App;
