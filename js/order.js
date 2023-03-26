// Reuse the solution created to dynamically create order form fields developed 
// in the previous sprint challenge

//Save the order details captured from the form in json-server using Axios API
axios({
    method: "post",
    url: `http://localhost:3001/order`,
    data: bodyFormData,
    headers: { "Content-Type": "multipart/form-data" },
})
    .then(function (response) {
        //handle success
        console.log(response);
    })
    .catch(function (response) {
        //handle error
        console.log(response);
    });

