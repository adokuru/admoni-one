var url = "https://demo.api.gladepay.com/payment";
var options = {
  method: "POST",
  mode: "no-cors",
  headers: {
    "Content-Type": "application/json",
    key: "123456789",
    mid: "GP0000001",
  },
  body: JSON.stringify({
    action: "initiate",
    paymentType: "card",
    user: {
      firstname: "John",
      lastname: "Doe",
      email: "hello@example.com",
      ip: "192.168.33.10",
      fingerprint: "cccvxbxbxb",
    },
    card: {
      card_no: "5438898014560229",
      expiry_month: "09",
      expiry_year: "19",
      ccv: "789",
      pin: "3310",
    },
    amount: "10000",
    country: "NG",
    currency: "NGN",
  }),
};

fetch(url, options)
  .then(function (response) {
    // The API call was successful!
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject(response);
    }
  })
  .then(function (data) {
    // This is the JSON from our response
    console.log(data);
  })
  .catch(function (err) {
    // There was an error

    console.warn("Something went wrong.", err);
  });
