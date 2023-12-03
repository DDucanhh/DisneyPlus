import { list } from "./dataDisney+.js";
const listFilm = document.querySelector(".list-film");

list.forEach((item) => {
  const template = `
  <div class="thefilm">
  <div class="poster">
    <img
      src="${item.img}"
      alt=""
    />
  </div>
  <p class="namethefilm">${item.title}</p>
</div>`;
  listFilm.insertAdjacentHTML("beforeend", template);
});
