function extractNameAndStreet(person) {
    const { name, address: { street } } = person;
    return { name, street };
  }

  const person = {
    name: 'John Doe',
    age: 35,
    address: {
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      zip: '12345'
    }
  };
  
  console.log(extractNameAndStreet(person)); // { name: 'John Doe', street: '123 Main St' }
  