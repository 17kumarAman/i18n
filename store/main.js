// main.js
import updateData from '@store/updateData'; // Note the use of .js extension

const newItem = {
  id: 1,
  name: 'Example Item',
  price: 19.99,
};

updateData(newItem);
