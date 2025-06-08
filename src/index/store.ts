import { derived, writable } from "svelte/store";
import routes from "./routes.json";

const HashStore = () => {
  let value = window.location.hash;
  const store = writable(value);

  const hashChange = () => {
    const { hash } = window.location;

    const route = hash.split("#")[1] || "";

    if (!routes.includes(route)) {
      window.location.hash = "#about";
      return;
    }
    store.set(window.location.hash);
  };

  window.addEventListener("hashchange", hashChange);
  hashChange();

  return {
    subscribe: store.subscribe,
  };
};

export const hashStore = HashStore();

export const route = derived(hashStore, ($hashStore) => {
  const r =
    routes.find((route) => $hashStore.split("#")[1] === route) || "about";
  window.scrollTo(0, 0);
  return r;
});

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

type ClubWinnersTableItem = {
  year: string;
  player: string;
  score: string;
};

const ClubWinnersStore = () => {
  const store = writable({});

  const init = async () => {
    const apiKey = "AIzaSyA2kPtNMDAIOTQ_P5Z53cAyV_Q77R9EVMI";
    const spreadsheetId = "11xBoHV33kT55D3jOD1VGYntsGXmPzhuw2ttYLvi-IfM";
    const sheetName = "Sheet1";

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?key=${apiKey}`;

    const res = await fetch(url);
    const resData = await res.json();
    const data: Array<Array<string>> = resData.values || [];

    const categories = data.splice(0, 1);
    const categoryCols = Object.fromEntries(
      categories[0]
        .map((h, i) => [h, i])
        .filter(([h, i]) => typeof h === "string" && h?.trim()),
    );

    let cat: string | null = null;
    const columnsByCategory: Array<string> = [];
    categories[0].forEach((cell) => {
      if (cell) {
        cat = cell;
      }
      if (cat) columnsByCategory.push(cat);
    });

    const dataByCategory: { [key: string]: Array<Array<string>> } = {};

    data.forEach((row, rowIndex) => {
      Object.keys(categoryCols).forEach((cat) => {
        if (!dataByCategory[cat]) {
          dataByCategory[cat] = [];
        }
        dataByCategory[cat].push([]);
      });
      row.forEach((cell, colIndex) => {
        const cat =
          colIndex < columnsByCategory.length
            ? columnsByCategory[colIndex]
            : columnsByCategory.at(-1);
        if (cat) dataByCategory[cat][rowIndex].push(cell);
      });
    });
    const tableDataByCategory: {
      [key: string]: { [key: string]: Array<ClubWinnersTableItem> };
    } = {};
    Object.entries(dataByCategory).forEach(([cat, subData]) => {
      if (!tableDataByCategory[cat]) {
        tableDataByCategory[cat] = {};
      }

      let title: string | null = null;
      subData.forEach((row, j) => {
        if (!row.find((cell) => cell.trim())) {
          title = null;
        } else if (title === null) {
          title = row[0];
        } else {
          if (!tableDataByCategory[cat][title]) {
            tableDataByCategory[cat][title] = [];
          }
          tableDataByCategory[cat][title].push({
            year: row[0],
            player: row[1],
            score: row[2],
          });
        }
      });
    });
    store.set(tableDataByCategory);
  };
  init();
  return { subscribe: store.subscribe };
};

export const clubWinnersStore = ClubWinnersStore();
