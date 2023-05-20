export default ($axios) => ({
  async get(url, data) {
    try {
      return await $axios.$get(url, { params: data });
    } catch (error) {}
  },

  async post(url, params) {
    try {
      return await $axios.$post(url, params).catch((error) => {
        // throw error;
      });
    } catch (error) {}
  },

  async put(url, params) {
    try {
      return await $axios.$put(url, params).catch((error) => {
        console.log("error", error);
        // throw error;
      });
    } catch (error) {}
  },

  async deleteReq(url) {
    try {
      return await $axios
        .$delete(url)

        .catch((error) => {
          throw error;
        });
    } catch (error) {}
  },

  async patch(url, params) {
    return await $axios.$patch(url, params);
  },
});
