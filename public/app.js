const searchArea = document.querySelector(".search-area");
const Input = document.querySelector("#custom-input");
const autoCompleteBox = document.querySelector(".auto-box");
const Result  = document.querySelector("results-container");
const listData = document.querySelector("#dataList");

const showResults = (data) => {
  if (data.length > 0) {
    listData.innerHTML = ``;
    data.forEach((e) => {
      listData.innerHTML += `<option value="${e.first_name}">`;
    });
    return;
  }
};

const searchQuery = () => {
  fetch(`/search?q=${Input.value}`)
    .then((res) => res.json())
    .then((data) => {
      showResults(data);
    })
    .catch((err) => console.log(err));
};

Input.oninput = searchQuery;
