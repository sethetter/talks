function formatAddress(customer) {
  let name = customer.name;
  let street = customer.address.street;
  let city = customer.address.city;
  let state = customer.address.state;
  let zip = customer.address.zip;

  return `${name}\n${street}\n${city}, ${state} ${zip}`;
}

function statesServed(customers) {
  return customers
    .map(c => c.address.state)
    .reduce((out, state) => {
      if (out.indexOf(state) !== -1) return out;
      return out.concat([state]);
    }, []);
}

function locationList(customers) {
  const locations = customers.map(c => ({
    city: c.address.city,
    state: c.address.state,
    zip: c.address.zip
  }));

  return [...new Set(locations)];
}

// What happens if the `location` property is renamed to `address`?