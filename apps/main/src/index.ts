import { registerMicroApps, start } from "qiankun";

registerMicroApps([
  {
    name: "svelte-app",
    entry: "http://localhost:5000/",
    container: document.getElementById("svelte-app"),
    activeRule: "/",
  },
]);

start({ singular: true, sandbox: true });
