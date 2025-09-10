import { getUsers } from "./api.js";

const fetchAndDisplayUsers = async () => {
  const demoEl = document.getElementById("demo");
  demoEl.textContent = "Loading data...";

  const users = await getUsers();

  if (users.length === 0) {
    demoEl.textContent = "No data available";
    return;
  }

  // Created a simple formatted list instead of raw JSON
  demoEl.innerHTML = users
    .map((user, index) => `<p><strong>${index + 1}.</strong> ${user.name} — ${user.email}</p>`)
    .join("");
};

fetchAndDisplayUsers();
