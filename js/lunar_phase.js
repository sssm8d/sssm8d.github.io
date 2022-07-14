//stolen from https://jasonsturges.medium.com/moons-lunar-phase-in-javascript-a5219acbfe6e

const getJulianDate = (date = new Date()) => {
  const time = date.getTime();
  const tzoffset = date.getTimezoneOffset()
  
  return (time / 86400000) - (tzoffset / 1440) + 2440587.5;
}

const LUNAR_MONTH = 29.530588853;
const getLunarAge = (date = new Date()) => {
  const percent = getLunarAgePercent(date);
  const age = percent * LUNAR_MONTH;
  return age;
}
const getLunarAgePercent = (date = new Date()) => {
  return normalize((getJulianDate(date) - 2451550.1) / LUNAR_MONTH);
}
const normalize = value => {
  value = value - Math.floor(value);
  if (value < 0)
    value = value + 1
  return value;
}

const getLunarPhaseNorthern = (date = new Date()) => {
  const age = getLunarAge(date);
  if (age < 1.84566)
    return "&#127761;";
  else if (age < 5.53699)
    return "&#127762;";
  else if (age < 9.22831)
    return "&#127763;";
  else if (age < 12.91963)
    return "&#127764;";
  else if (age < 16.61096)
    return "&#127765;";
  else if (age < 20.30228)
    return "&#127766;";
  else if (age < 23.99361)
    return "&#127767;";
  else if (age < 27.68493)
    return "&#127768;";
  return "&#127770;";
}

const getLunarPhaseSouthern = (date = new Date()) => {
  const age = getLunarAge(date);
  if (age < 1.84566)
    return "&#127761;";
  else if (age < 5.53699)
    return "&#127768;";
  else if (age < 9.22831)
    return "&#127767;";
  else if (age < 12.91963)
    return "&#127766;";
  else if (age < 16.61096)
    return "&#127765;";
  else if (age < 20.30228)
    return "&#127764;";
  else if (age < 23.99361)
    return "&#127763;";
  else if (age < 27.68493)
    return "&#127762;";
  return "&#127770;";
}

const isWaxing = (date = new Date()) => {
  const age = getLunarAge(date);
  return age <= 14.765;
}
const isWaning = (date = new Date()) => {
  const age = getLunarAge(date);
  return age > 14.765;
}

const date = new Date();
const phase = getLunarPhaseNorthern(date);
if(document.getElementById("tim")){
	document.getElementById("tim").innerHTML = ( phase );
}