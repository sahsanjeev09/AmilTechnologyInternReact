let users = JSON.parse(localStorage.getItem("users")) || [];
let editIndex = -1;

const form = document.getElementById("userForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const msg = document.getElementById("msg");
const userTable = document.getElementById("userTable");

const nameRegex = /^[A-Za-z ]{3,}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

// Render table
function renderTable() {
  userTable.innerHTML = "";
  users.forEach((user, i) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${i + 1}</td>
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>
        <button class="action-btn edit-btn" onclick="editUser(${i})">Edit</button>
        <button class="action-btn delete-btn" onclick="deleteUser(${i})">Delete</button>
      </td>
    `;
    if (i === users.length - 1) row.classList.add("added"); // highlight last added
    userTable.appendChild(row);
  });
}

// Storing data to localStorage + cookie
function saveData() {
  localStorage.setItem("users", JSON.stringify(users));
  document.cookie = `lastUser=${JSON.stringify(users.at(-1))}; path=/; max-age=604800`;
}

// Form submit
form.onsubmit = e => {
  e.preventDefault();
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  if (!nameRegex.test(name)) return showMsg("Invalid name (min 3 letters)", "error");
  if (!emailRegex.test(email)) return showMsg("Invalid email format", "error");
  if (editIndex === -1 && users.some(u => u.email === email)) 
    return showMsg("Email already exists!", "error");

  if (editIndex === -1) {
    users.push({ name, email });
    showMsg("User added successfully!", "success");
  } else {
    users[editIndex] = { name, email };
    editIndex = -1;
    showMsg("User updated!", "success");
  }

  saveData();
  renderTable();
  form.reset();
};

// Show message helper
function showMsg(text, type) {
  msg.textContent = text;
  msg.className = `msg ${type}`;
}

// Edit user
function editUser(i) {
  editIndex = i;
  nameInput.value = users[i].name;
  emailInput.value = users[i].email;
}

// Delete user
let deleteIndex = -1;
const modal = document.getElementById("deleteModal");
const confirmDeleteBtn = document.getElementById("confirmDelete");
const cancelDeleteBtn = document.getElementById("cancelDelete");

// Trigger modal
function deleteUser(i) {
  deleteIndex = i;
  modal.style.display = "flex"; // show modal
}

// Confirm delete
confirmDeleteBtn.onclick = () => {
  users.splice(deleteIndex, 1);
  saveData();
  renderTable();
  modal.style.display = "none"; // close modal
};

// Cancel delete
cancelDeleteBtn.onclick = () => {
  modal.style.display = "none"; // close modal
};

// Close modal if clicking outside
window.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};

// Initial render
renderTable();