let BASE_URL = "";
const TIME_OUT = 1000;
if (process.env.NODE_ENV === "development") {
  BASE_URL = "";
} else if (process.env.NODE_ENV === "production") {
  BASE_URL = "http://10.28.89.17:9203";
} else {
  BASE_URL = "http://10.28.89.17:9203";
}

export { BASE_URL, TIME_OUT };
