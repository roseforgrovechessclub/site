import { mount } from "svelte";
import _404 from "./_404.svelte";

const app = mount(_404, {
  target: document.body,
});

export default app;
