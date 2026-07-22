import './App.css';

function App() {
  const message = 'Husky, Prettier Testing content';
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold font-Inter">Welcome to React sharable UI component</h1>
      <h2 className="text-xl font-semi-bold">{message}</h2>
    </div>
  );
}

export default App;
