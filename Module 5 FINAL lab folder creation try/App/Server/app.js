import express from 'express';
import fetch from 'node-fetch'; 
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger/swagger.json';
import productRoutes from './routes/productRoutes';

const app = express();
const port = 3000;

app.use(express.static('Client'));

app.use('./api/products',productRoutes)
// Route to fetch products from the Fake Store API
app.get('/products', async (req, res) => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).send('Error fetching products');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});