const ListGetId = JSON.parse(localStorage.getItem("nameoffilm"));
const body = document.querySelector("body");

function showThefilm(value) {
  const template = `  <div class="main-content">
        <img src="${value.poster}" alt="">
        <div class="fill"></div>
    </div>
    <div class="logo-film"><img src="${value.logo}" alt=""></div>
    <div class="stream-watch">
      <button class="Goto">Streaming now</button>
      <button class="Watch"><i class="fa-solid fa-play fa-fade" style="color: #ffffff"></i>Watch
        Trailer</button>
    </div>`;
  body.insertAdjacentHTML("beforeend", template);
}
showThefilm(ListGetId);
