function formatAddress(customer) {
  let name = customer.name;
  let street = customer.street;
  let city = customer.address.city;
  let state = customer.address.state;
  let zip = customer.address.zip;

  return `${name}\n${street}\n${city}, ${state} ${zip}`;
}

let customer = {
  name: "Truman Burbank",
  address: {
    street: "123 Ventura Blvd",
    city: "Seahaven Island",
    state: "FL",
    zip: "12345"
  }
}

console.log(formatAddress(customer));