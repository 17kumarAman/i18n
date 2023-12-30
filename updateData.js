// updateData.js
import fs from 'fs';

function updateData(newItem) {
  try {
    // Read the existing data from the JSON file
    const rawData = fs.readFileSync('data.json');
    let data = JSON.parse(rawData);

    // Add the new item to the data
    data.push(newItem);

    // Write the updated data back to the JSON file
    fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
    console.log('Data added successfully!');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Example: Usage
const newItem = {
  id: 1,
  name: 'Example Item',
  price: 19.99,
};

updateData(newItem);
