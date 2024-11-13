const apiUrl = 'https://open-weather13.p.rapidapi.com/city';
const apiKey = 'd8e86c12b0mshcc0b144f5fbe05ap11d232jsnee2344fedde0'

export const fetchWeather = async (city) => {
  try {
    const response = await fetch(`${apiUrl}/${city}`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com',
      },
    });
    if (!response.ok) {
      console.log("Response Status:", response.status);
      console.log("Response:", await response.text());
      throw new Error(`Error: ${response.statusText}`);
    }
    const data = await response.json();
    console.log("Fetched Weather Data:", data); // Log fetched data to see if it's working
    return data;
  } catch (error) {
    console.error('Error fetching weather:', error);
    throw error;
  }
};

console.log('')