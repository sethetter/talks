interface Customer {
  id: number,
  name: string,
  address: Address,
} 

interface Address {
  street: string,
  city: string,
  state: string,
  zip: string,
}

function formatAddressTyped(customer: Customer): string {
  let name = customer.name;
  let street = customer.street;
  let city = customer.address.city;
  let state = customer.address.state;
  let zip = customer.address.zip;

  return `${name}\n${street}\n${city}, ${state} ${zip}`;
}