const app = require('./app');

const port = '3000';
const host = '0.0.0.0';

app.listen(port, host, () => {
  // eslint-disable-next-line no-console
  console.log(`Server Running on port: ${port}`);
});
