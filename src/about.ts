import About from './About.svelte';
import { mount } from "svelte"

const app = mount(About, {
  target: document.body,
});

export default app;
