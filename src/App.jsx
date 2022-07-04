import logo from './logo.svg';
import Button from '@suid/material/Button';
import Typography from '@suid/material/Typography';
import Box from "@suid/system/Box";

function App() {
  return (
    <div>
      <header>
        <Box sx={{ height: '10rem', width: '10rem' }}>
          <img src={logo} alt="logo" />
        </Box>
        <p class="text-3xl text-green-600">
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <Typography variant="h5" gutterBottom sx={{ color: 'green' }}>
          Edit <code>src/App.jsx</code> and save to reload.
        </Typography>
        <Button variant="contained">Hello World</Button>
      </header>
    </div>
  );
}

export default App;
