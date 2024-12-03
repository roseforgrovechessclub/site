import { writable } from "svelte/store";
import routes from "./routes.json";

const HashStore = () => {

  let value = window.location.hash;
  const store = writable(value);
  window.addEventListener("hashchange", () => {
    const {hash} = window.location;

    const route = hash.split("#")[1] || "";

    if (!routes.includes(route)) {
      window.location.hash = "";
      console.log("invalid route");
      return;
    }
    console.log("hash change", hash, route);
    store.set(window.location.hash);
  });
  
  return {
    subscribe: store.subscribe,
  }
};

export const hashStore = HashStore();


