import diningService from "~/api/dining";

export default ($axios, store, ctx) => ({
  diningService: diningService($axios, store, ctx),
});
