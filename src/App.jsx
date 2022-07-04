import logo from './logo.svg';
import Button from '@suid/material/Button';
import Typography from '@suid/material/Typography';

function App() {
  return (
    <div>
      <header>
        <img src={logo} class="h-40 w-40" alt="logo" />
        <p class="text-3xl text-green-600">
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <Typography variant="h5" gutterBottom sx={{color: 'green'}}>
          Edit <code>src/App.jsx</code> and save to reload.
        </Typography>
        <Button variant="contained">Hello World</Button>
      </header>
    </div>
  );
}

export default App;
