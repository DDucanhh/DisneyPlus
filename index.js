import { list, list2 } from "./dataDisney+.js";

const main = document.querySelector(".main");
renderMovieList(list);

function renderMovieList(list) {
  const listFilm = document.createElement("div");
  listFilm.classList.add("list-film");
  main.appendChild(listFilm);
  list.forEach((item) => {
    const template = `
    <div id="${item.id}" class="thefilm">
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
}

const changeBottomLine = document.querySelectorAll(".typeoffilm p");
changeBottomLine.forEach((x) => {
  x.addEventListener("click", () => {
    changeBottomLine.forEach((value) => {
      value.classList.remove("underline");
    });
    x.classList.add("underline");

    const listFilm = document.querySelector(".list-film");
    listFilm.remove();

    console.log(x.className.replace(" underline", ""));
    switch (x.className.replace(" underline", "")) {
      case "recent-list":
        renderMovieList(list);
        break;
      case "coming-list":
        renderMovieList(list2);
        break;
    }
  });
});

const CanWatchWhatQ = document.querySelector(".Can-watch-What-q");
CanWatchWhatQ.addEventListener("click", () => {
  const CanWatchWhatA = document.querySelector(".Can-watch-What-a");
  CanWatchWhatA.classList.toggle("appear");
  if (CanWatchWhatA.classList.contains("appear")) {
    CanWatchWhatA.style.display = "block";
  } else {
    CanWatchWhatA.style.display = "none";
  }
});

const CanWatchWhereQ = document.querySelector(".Can-watch-Where-q");
CanWatchWhereQ.addEventListener("click", () => {
  const CanWatchWhereA = document.querySelector(".Can-watch-Where-a");
  CanWatchWhereA.classList.toggle("appear");
  if (CanWatchWhereA.classList.contains("appear")) {
    CanWatchWhereA.style.display = "block";
  } else {
    CanWatchWhereA.style.display = "none";
  }
});

const HowMuchQ = document.querySelector(".How-much-q");
HowMuchQ.addEventListener("click", () => {
  const HowMuchA = document.querySelector(".How-much-a");
  HowMuchA.classList.toggle("appear");
  if (HowMuchA.classList.contains("appear")) {
    HowMuchA.style.display = "block";
  } else {
    HowMuchA.style.display = "none";
  }
});

const isGoodQ = document.querySelector(".is-good-q");
isGoodQ.addEventListener("click", () => {
  const isGoodA = document.querySelector(".is-good-a");
  isGoodA.classList.toggle("appear");
  if (isGoodA.classList.contains("appear")) {
    isGoodA.style.display = "block";
  } else {
    isGoodA.style.display = "none";
  }
});

const thefilm = document.querySelectorAll(".thefilm");
thefilm.forEach((q) => {
  q.addEventListener("click", () => {
    const getId = q.id;
    const listGetId = list[getId];
    localStorage.setItem("nameoffilm", JSON.stringify(listGetId));
    window.location.href = "Thefilm.html";
  });
});
