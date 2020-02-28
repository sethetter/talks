function formatAddress(customer) {
  let name = customer.name;
  let street = customer.location.street;
  let city = customer.location.city;
  let state = customer.location.state;
  let zip = customer.location.zip;

  return `${name}\n${street}\n${city}, ${state} ${zip}}`;
}

function statesServed(customers) {
  return customers
    .map(c => c.location.state)
    .reduce((out, state) => {
      if (out.indexOf(state) !== -1) return out;
      return out.concat([state]);
    }, []);
}