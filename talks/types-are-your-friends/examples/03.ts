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

function formatAddressTyped2(customer: Customer): string {
  let name = customer.name;
  let street = customer.address.street;
  let city = customer.address.city;
  let state = customer.address.state;
  let zip = customer.address.zip;

  return `${name}\n${street}\n${city}, ${state} ${zip}`;
}

function statesServedTyped(customers: Customer[]): string[] {
  return customers
    .map(c => c.address.state)
    .reduce((out, state) => {
      if (out.indexOf(state) !== -1) return out;
      return out.concat([state]);
    }, []);
}

function locationListTyped(customers: Customer[]): Partial<Address>[] {
  const locations = customers.map(c => ({
    city: c.address.city,
    state: c.address.state,
    zip: c.address.zip
  }));

  return [...new Set(locations)];
}