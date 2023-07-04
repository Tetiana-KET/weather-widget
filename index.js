const CssClasses = {
  WRAPPER: 'wrapper',
  WEATHER_CONTAINER: 'weather',
  WEATHER_BLOCK : 'weather_block',
  ICON_BLOCK: 'icon-block',
  WEATHER_ICON: 'weather_icon',
  CITY: 'city',
  CLOUDS: 'clouds',
  TEMP_WRAP: 'temp-description-wrap',
  TEMPERARURE: 'temperature',
  WEATHER_DESC: 'weather_descriprion',
  FEELS_LIKE: 'feels-like',
  WIND: 'wind',
  HUMIDITY: 'humidity',
};

function createWidget(data) {
  const wrapper = createElement('div', CssClasses.WRAPPER);
  document.body.prepend(wrapper);

  const sectionWeather = createElement('section', CssClasses.WEATHER_CONTAINER);
  wrapper.append(sectionWeather);

  const weatherBlock = createElement('div', CssClasses.WEATHER_BLOCK);
  const weatherIcon = createElement('div', CssClasses.ICON_BLOCK);

  const image = createElement ('img', CssClasses.WEATHER_ICON);
  image.src = data.img;
  image.alt = 'clouds';

  sectionWeather.append(weatherBlock, weatherIcon);
  

  const city = createElement('div', CssClasses.CITY);
  const tempDescriptionWrap = createElement('div', CssClasses.TEMP_WRAP);
  const temperature = createElement('div', CssClasses.TEMPERARURE);
  const weatherDescriprion = createElement('div', CssClasses.WEATHER_DESC);
  const clouds = createElement('div', CssClasses.CLOUDS);
  const wind = createElement('div', CssClasses.WIND);
  const humidity = createElement('div', CssClasses.HUMIDITY);
  const feelsLike = createElement('div', CssClasses.FEELS_LIKE);

  weatherBlock.append(city, tempDescriptionWrap, clouds, wind, humidity, feelsLike);
  weatherIcon.append(image);
  tempDescriptionWrap.append(temperature, weatherDescriprion);





}


function createElement (tagName, className) {
 const element = document.createElement(tagName);
 element.classList.add(className);
 return element;
};

window.addEventListener('load', createWidget);