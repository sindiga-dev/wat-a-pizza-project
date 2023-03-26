function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function submitCustomerDetail(event) {
    event.preventDefault();
  
    // Get form values
    const custID = document.getElementById("custID").value;
    const name = document.getElementById("name").value;
    const password = document.getElementById("custPasword").value;
    const confirmPassword = document.getElementById("custConfirmPassword").value;
    const email = document.getElementById("email").value;
    const contact = document.getElementById("contact").value;
    const address = document.getElementById("address").value;
  
    // Check if form values are valid
    if (!custID || isNaN(custID)) {
      alert("Please enter a valid customer ID");
      return;
    }
  
    if (!name) {
      alert("Please enter a valid customer name");
      return;
    }
  
    if (!password) {
      alert("Please enter a password");
      return;
    }
  
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
  
    if (!email || !validateEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }
  
    if (!contact || isNaN(contact)) {
      alert("Please enter a valid contact number");
      return;
    }
  
    if (!address) {
      alert("Please enter a valid address");
      return;
    }
  
    // Save customer details to json-server using Axios API
    axios
      .post("http://localhost:3000/customer", {
        custID,
        name,
        password,
        email,
        contact,
        address,
      })
      .then((response) => {
        alert("Registration Successful");
        document.getElementById("customerRegistrationForm").reset();
      })
      .catch((error) => {
        alert("Error occurred while registering customer");
      });
  }
  