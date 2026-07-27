import { tab_deactivator } from "./services/utilities.js";
import {
  get_dashboard_content,
  get_add_content,
  get_delete_content,
  get_edit_content,
  get_view_content,
} from "./services/modules/contentProducer.js";




let tabs = document.querySelectorAll(".tab_menu");
let contentPane = document.getElementById("contentPane");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tab_deactivator();

    console.log(`${tab.innerHTML} clicked...`);
    tab.classList.add("active_tab");
    if (tab.innerHTML.toLowerCase() === "dashboard") {
      contentPane.innerHTML = get_dashboard_content();
    }
    if (tab.innerHTML.toLowerCase() === "view") {
      contentPane.innerHTML = get_view_content();
    }
    if (tab.innerHTML.toLowerCase() === "add") {
      contentPane.innerHTML = get_add_content();
    }
    if (tab.innerHTML.toLowerCase() === "edit") {
      contentPane.innerHTML = get_edit_content();
    }
    if (tab.innerHTML.toLowerCase() === "delete") {
      contentPane.innerHTML = get_delete_content();
    }
  });
});
