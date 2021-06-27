import App from "./App.svelte";

const renderApp = () =>
  new App({
    target: document.body,
    props: {
      name: "world",
    },
  });

const getRenderedApp = () => {
  let app;
  if (!app) {
    app = renderApp();
  }
  return {
    app,
    destroy() {
      app.$destroy();
      app = undefined;
    },
  };
};

export const bootstrap = async () => {
  console.log("bootstrap");
};

export const mount = async () => {
  console.log("mount");
  getRenderedApp();
};

export const update = async () => {
  console.log("update");
};

export const unmount = async () => {
  console.log("unmount");
  getRenderedApp().destroy();
};
