// Add your code here
function submitData(name, email) {
  const formData = {
    name: name,
    email: email
  };

  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  })
  .then(response => response.json())
  .then(object => {
    // Append the ID returned by the server to the DOM
    const newElement = document.createElement("p");
    newElement.textContent = `New ID: ${object.id}`;
    document.body.appendChild(newElement);
  })
  .catch(error => {
    // Append the error message to the DOM
    const errorElement = document.createElement("p");
    errorElement.textContent = `Error: ${error.message}`;
    document.body.appendChild(errorElement);
  });
}
