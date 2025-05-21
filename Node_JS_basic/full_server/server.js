import express from 'express';
import router from './routes';

const app = express();
const port = 1245;

app.use('/', router);

const server = app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use`);
  } else {
    console.error('Server error:', err);
  }
  process.exit(1);
});

export default app; 