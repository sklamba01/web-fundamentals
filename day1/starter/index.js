
const nameFormatter = (user) => `${user.firstName} ${user.lastName}`;
const companyFormatter = (user) => `${user.company.name}`;
const positionFormatter = (user) => `${user.company.title}`;

let config = [
    {key: "name", label: "Name", formatter: nameFormatter},
    {key: "age", label: "Age"},
    {key: "phone", label: "Phone"},
    {key: "bloodGroup", label: "Blood group"},
    {key: "company", label: "Company", formatter: companyFormatter},
    {key: "position", label: "Position", formatter: positionFormatter},
    {key: "weight", label: "Weight"},
];

function renderUserListing() {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((json) => {
        try {
            let main = document.getElementsByClassName("main-conatiner")[0];
            json.users.forEach((user) => {
                main.appendChild(showUser(user));
            });
        } catch(ex) {
            console.log(ex);
        }
      });
}

function showUser(user) {
    let cardDiv = document.createElement("div");
    cardDiv.setAttribute("class", "card");
    let profileImage = document.createElement("img");
    profileImage.setAttribute("class", "profile-image");
    profileImage.setAttribute("src", user.image);
    cardDiv.appendChild(profileImage);
    let table = document.createElement("table");
    config.forEach((field) => {
        let value = field.formatter ? field.formatter(user) : user[field.key];
        table.appendChild(createRow(field.label, value));
    });
    console.log(table);
    cardDiv.appendChild(table);
    return cardDiv;
}

function createRow(label, value) {
    let row = document.createElement("tr");
    row.appendChild(createCol(label, true));
    row.appendChild(createCol(value, false));
    return row;
}

function createCol (data, isHeading) {
    let col = document.createElement("td");
    col.setAttribute("class", isHeading ? "heading" : "value");
    col.innerHTML = data;
    return col;
}

renderUserListing()