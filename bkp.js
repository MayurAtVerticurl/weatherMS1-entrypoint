const axios = require('axios');

const getWeather = async () => {
  const lat = 11.102486;
  const lon = 76.988304;

  const ms1URL = `https://selfassuredmiserablerectangles--mayurrajan.repl.co/getWeatherData`;
  const response1 = await axios.get(ms1URL, {
    params: {
      lat: parseFloat(lat),
      lon: parseFloat(lon),
    },
  });

  const ms1DATA = response1.data;

  const ms2URL = `https://sociablewhirlwindmicrostation--mayurrajan.repl.co/getAiReport`;
  const response2 = await axios.get(ms2URL, {
    params: {
      data: JSON.stringify(ms1DATA),
    },
  });

  const ms2DATA = response2.data;
  // console.log('ms1DATA', ms1DATA);
  // console.log('ms2DATA', ms2DATA);

  const output = {
    temperature: ms1DATA.main.temp,
    condition: ms1DATA.weather[0].main,
    location: ms1DATA.name,
    pressure: ms1DATA.main.pressure,
    humidity: ms1DATA.main.humidity,
    sunset: ms1DATA.sys.sunset,
    sunrise: ms1DATA.sys.sunrise,
    gpt: ms2DATA.gpt,
  }

  console.log('output', output)
};

getWeather();
