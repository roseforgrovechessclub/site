import { mount } from "svelte"
import Index from './Index.svelte';

const app = mount(Index, {
  target: document.body,
});

export default app;
