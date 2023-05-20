export default ($axios) => ({
  async getRestaurants(data) {
    return ctx.$request.post(`/resturant/get`, data);
  },
});
