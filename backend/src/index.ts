import express from 'express';
import cors from 'cors'
import { getPlaning } from './services/get.itinerary';

const app = express();
app.use(express.json());
app.use(cors())

app.use('/itinerary', async (req, res) => {
  try {
    const { location, duration, type, budget, preferences } = req.body;
    const result = await getPlaning({ location, duration, type, budget, preferences });
    res.json(result);
  } catch (error) {
    console.log(error);
    
  }
})

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});