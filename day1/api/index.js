// How to fetch Data from server.

function fetchDataFromServer() {
  fetch("https://dummyjson.com/users")
    .then((response) => response.json())
    .then((json) => printData(json));
}

function printData(data) {
  console.log(data);
  let {limit, skip, total, users} = data;
  console.log(users);
  let age_avg = users.reduce((a, b) => {
    a += b.age;
    return a;
  }, 0);
  console.log(age_avg / users.length);

  let all = users.reduce((a, b) => {
    a.push({name:b.firstName + " " + b.lastName, age:b.age, weight:b.weight});
    return a;
  }, []);
  console.log(all);
  // all = all.filter((e) => e.age > 50);
  // console.log(all);

  let avg_weight = all.reduce((a, b) => {
    a += b.weight;
    return a;
  }, 0);
  console.log(avg_weight / all.length);
}

fetchDataFromServer();
