import { createApp } from "vue";
import App from "./App.vue";
import html2canvas from "html2canvas";

createApp(App).mount("#app");

html2canvas(document.querySelector("#table")).then((canvas) => {
	console.log(canvas.toDataURL());
});
