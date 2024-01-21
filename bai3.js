const fs = require('fs').promises;
const axios = require('axios');

async function loadData() {
    try {
        const data = await fs.readFile('./data.json', 'utf8');
        console.log('Dữ liệu được tải từ đĩa:', data);

        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        console.log('Dữ liệu được tải từ URL:', response.data);
    } catch (error) {
        console.error('Lỗi:', error.message);
    }
}

loadData();
