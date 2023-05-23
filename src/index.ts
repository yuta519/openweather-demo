import axios from "axios";
import 'dotenv/config';

const apiKey = process.env.APIKEY
const location = 'TOKYO';

async function fetchMonthlyTemperatures() {
  try {
    // Make the API request
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?` +
      `q=${location}&appid=${apiKey}&units=metric`
    );
    console.log(response.data);
  } catch (error) {
    // Handle the error
    console.error(error);
  }
}

fetchMonthlyTemperatures();
