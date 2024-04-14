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
  displayData(users, todos);
});

function displayData(users, todos) {
  const usersHTML = users.map(
    (user) => `
      <div>
        <h2>User ID: ${user.id}</h2>
        <h2>Name: ${user.name}</h2>
        <h2>Email: ${user.email}</h2>
      </div>
    `
  ).join('');

  const todosHTML = todos.map(
    (todo) => `
      <div>
        <h2>Todo ID: ${todo.id}</h2>
        <h2>User ID: ${todo.userId}</h2>
        <h2>Title: ${todo.title}</h2>
        <h2>Completed: ${todo.completed ? 'Yes' : 'No'}</h2>
      </div>
    `
  ).join('');

  cont.innerHTML = usersHTML + todosHTML;
}
