let url = "http://localhost:8080/Customer";

export async function getAllCustomer() {
  let response = await fetch(`${url}`);
  let customers = await response.json();
  console.log(customers);
  return customers;
}

export async function getCustomersById(id) {
  let response = await fetch(`${url}/${id}`);
  let employee = await response.json();
  console.log(employee);
  return employee;
}


