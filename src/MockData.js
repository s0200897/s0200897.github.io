const mockData = {
  location: {
    id: 1819729,
    name: 'Hong Kong',
    coord: {
      lat: 22.2793,
      lon: 114.1628,
    },
    main: {
      temp: 28.6,
      pressure: 1015,
      humidity: 70,
      temp_min: 26.67,
      temp_max: 30,
    },
    dt: 1570443518,
    wind: {
      speed: 5.1,
      deg: 120,
    },
    sys: {
      country: 'CN',
    },
    rain: null,
    snow: null,
    clouds: {
      all: 20,
    },
    weather: [
      {
        id: 801,
        main: 'Clouds',
        description: 'few clouds',
        icon: '02n',
      },
    ],
  },
  forecasts: [
    {
      day: '2019-10-07',
      tempMin: 22.79,
      tempMax: 30.75,
      conditions: 'clear sky',
      icon: '01d',
      wind: 9.14,
      hourly: [
        {
          day: '2019-10-07 12:00:00',
          tempMin: 30.15,
          tempMax: 30.75,
          conditions: 'clear sky',
          icon: '01d',
          wind: 9.14,
        },
        {
          day: '2019-10-07 15:00:00',
          tempMin: 27.35,
          tempMax: 27.8,
          conditions: 'clear sky',
          icon: '01n',
          wind: 8.81,
        },
        {
          day: '2019-10-07 18:00:00',
          tempMin: 24.75,
          tempMax: 25.05,
          conditions: 'few clouds',
          icon: '02n',
          wind: 2.96,
        },
        {
          day: '2019-10-07 21:00:00',
          tempMin: 22.79,
          tempMax: 22.94,
          conditions: 'overcast clouds',
          icon: '04n',
          wind: 2.38,
        },
      ],
    },
  ],
}

export default mockData
