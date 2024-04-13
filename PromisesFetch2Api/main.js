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

Promise.all([fetchData(), fetchData2()]).then(([f1, f2]) => {
  console.log(f1);
  console.log(f2);
});
