import logo from './logo.svg';
import 'uno.css';

function App() {
  return (
    <div>
      <header>
        <img src={logo} className='h-40 w-40' alt="logo" />
        <p className='text-3xl text-green-600'>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <a
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
    </div>
  );
}

export default App;