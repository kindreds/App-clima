import axios from 'axios';

export const weatherAPI = async (city) => {
  const encodedURL = encodeURI(city);

  const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/current.json',
    params: { q: encodedURL },
    headers: {
      'x-rapidapi-key': '4dddcb4b7dmsh86b672baba85b2ep1d5a2fjsn1ad334f232ed',
      'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
    },
  };

  const { data } = await axios(options);

  if (data.error) throw new Error(`Error: ${data.error.message}`);

  const { country, name } = data.location;
  const { temp_c, wind_kph, humidity } = data.current;

  return `El clima en ${name} ubicado en ${country} es de ${temp_c} C°\ncon unos vientos de ${wind_kph} K/H y una humedad de ${humidity}%`;
};
