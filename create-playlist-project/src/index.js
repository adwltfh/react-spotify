import "./styles.css";

document.getElementById("form").addEventListener("submit", myFunction);

function myFunction(event) {
  event.stopImmediatePropagation();
  const title = document.getElementById("title-name").value;
  const desc = document.getElementById("desc").value;
  alert(`Playlist berjudul ${title} dengan ${desc} berhasil dibuat.`);
  event.preventDefault();

  document.getElementById("form").reset();
}

const data_url =
  "https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json";

fetch(data_url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    alert(error);
  });
