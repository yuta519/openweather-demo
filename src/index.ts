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
// async function fetchMonthlyTemperatures() {
//   try {
//     // Make the API request
//     const response = await axios.get(
//       `https://api.openweathermap.org/data/2.5/forecast?` +
//         `q=${location}&appid=${apiKey}&units=metric`
//     );

//     console.log(response.data.list)
//     // Extract the temperature data from the response
//     const temperatures = response.data.list.map(
//       (item: any) => ({
//         temperature: item.main.temp,
//         timestamp: new Date(item.dt * 1000),
//       })
//     );

//     // Calculate the average monthly temperatures
//     const monthlyTemperatures: number[] = [];
//     const monthlySums: number[] = [];
//     const monthlyCounts: number[] = [];

//     temperatures.forEach(({ temperature, timestamp }: { temperature: any, timestamp: any }) => {
//       const month = timestamp.getMonth();

//       if (!monthlySums[month]) {
//         monthlySums[month] = 0;
//         monthlyCounts[month] = 0;
//       }

//       monthlySums[month] += temperature;
//       monthlyCounts[month]++;
//     });

//     for (let i = 0; i < 12; i++) {
//       const averageTemperature = monthlySums[i] / monthlyCounts[i];
//       monthlyTemperatures.push(averageTemperature);
//     }

//     // Output the average monthly temperatures
//     console.log('Average Monthly Temperatures:');
//     console.log(monthlyTemperatures);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// }
fetchMonthlyTemperatures();
