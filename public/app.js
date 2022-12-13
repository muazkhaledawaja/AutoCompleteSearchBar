const Input = document.querySelector("#custom-input");
const listData = document.querySelector("#dataList");

const showResults = (data) => {
  if (data.length > 0) {
    listData.innerHTML = ``;
    data.forEach((e) => {
      listData.innerHTML += `<option value="${e.carName}">`;
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
