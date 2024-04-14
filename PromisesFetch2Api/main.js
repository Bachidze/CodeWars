const cont = document.querySelector(".container");

const fetchData = () =>
  new Promise((res) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((result) => res(result));
  });

const fetchData2 = () =>
  new Promise((res2) => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((resp2) => resp2.json())
      .then((result2) => res2(result2));
  });

Promise.all([fetchData(), fetchData2()]).then(([users, todos]) => {
  console.log(users);
  console.log(todos);
  displayData(users);
});

function displayData(data) {
  cont.innerHTML = data.map(
    (el) => `
      <div>
        <h2>ID: ${el.id}</h2>
        <h2>User ID: ${el.userId}</h2>
        <h2>Title: ${el.title}</h2> <!-- Assuming there is a 'title' property -->
      </div>
    `
  ).join(''); 
}
