import App from "./App.svelte";

const app = new App({
  target: document.getElementById("app"),
  props: {},
});

export default app;

if (import.meta.hot) {
  import.meta.hot.accept();
  import.meta.hot.dispose(() => {
    app.$destroy();
  });
}