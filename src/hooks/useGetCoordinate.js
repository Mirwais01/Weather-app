function useGetCoordinate({ query }) {
  async function getCoordinate() {
    const res = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=1&appid=a588e74b18360bd7b2d9e18a0cd9a986`
    );
    const data = await res.json();
    if (data.length > 0) {
      return { lat: data[0].lat, lon: data[0].lon };
    } else {
      throw new Error("City not found");
    }
  }
  if (query) {
    getCoordinate();
  }
  return null;
}

export default useGetCoordinate;
