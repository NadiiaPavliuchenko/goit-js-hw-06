const form = document.querySelector(".login-form");

const getFormData = (e) => {
  e.preventDefault();
  const form = e.currentTarget;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    alert("All fields should be filled");
  } else {
    const data = {
      email,
      password,
    };
    console.log(data);
  }

  form.reset();
};

form.addEventListener("submit", getFormData);
