import { writable } from "svelte/store";
import routes from "./routes.json";

const HashStore = () => {
  let value = window.location.hash;
  const store = writable(value);
  window.addEventListener("hashchange", () => {
    const { hash } = window.location;

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
  };
};

export const hashStore = HashStore();

const FixtureStore = () => {
  const store = writable({ headers: [], data: [] });
  const init = async () => {
    const res = await fetch(
      "https://lms.englishchess.org.uk/lms/lmsrest/league/club",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: "8YLR",
        }),
      },
    );
    const resData = await res.json();
    store.set({ headers: resData[0].header, data: resData[0].data });
  };
  init();
  return {
    subscribe: store.subscribe,
  };
};

export const fixtureStore = FixtureStore();
