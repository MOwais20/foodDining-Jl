export default ($axios, store, ctx) => ({
  async getRestaurants(data) {
    return ctx.$request.get(`/resturant`, data);
  },

  async createRestaurants(data) {
    return ctx.$request.post(`/resturant/create`, data);
  },

  async login(data) {
    return ctx.$request.post(`/user/login`, data);
  },

  async signup(data) {
    return ctx.$request.post(`/user/signup`, data);
  },

  async getReservations(data) {
    return ctx.$request.get(`/reservation`, data);
  },

  async createReservations(data) {
    return ctx.$request.post(`/reservation/create`, data);
  },

  async getOrder(data) {
    return ctx.$request.get(`/order`, data);
  },

  async createOrder(data) {
    return ctx.$request.post(`/order/create`, data);
  },

  async addRating(data) {
    return ctx.$request.post(`/rating/create`, data);
  },
});
