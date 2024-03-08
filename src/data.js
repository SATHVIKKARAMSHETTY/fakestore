const apiURL = "https://fakestoreapi.com/products";
async function fetchData() {
  const response = await fetch(apiURL);
  const dat = await response.json();
  return dat;
}
const data = fetchData();
export default data;
