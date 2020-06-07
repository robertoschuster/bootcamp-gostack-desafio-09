function getAddress(street, number, compl, city, state) {
  let address = '';

  if (street) {
    address += street;

    if (number) {
      address += `, ${number}`;
    }

    if (compl) {
      address += `, ${compl}`;
    }
  }

  if (city) {
    address += `, ${city}`;
  }

  if (state) {
    address += ` - ${state}`;
  }

  return address;
}

export default getAddress;
