import logo from './logo.svg';

function App() {
  return (
    <div>
      <header>
        <img src={logo} class="h-40 w-40" alt="logo" />
        <p class="text-3xl text-green-600">
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <a
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
        <button class="btn">hello</button>
      </header>
    </div>
  );
}

export default App;
