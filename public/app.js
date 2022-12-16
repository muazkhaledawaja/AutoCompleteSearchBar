const Input = document.querySelector("#custom-input");
const listData = document.querySelector("#dataList");
                           
import mockdata from './mockData.json' assert { type: "json" };
localStorage.setItem('mockdata',JSON.stringify({ mockdata}))
const showResults = (data) => {
  if (data.length > 0) {
    data.map((e) => {
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
 
 