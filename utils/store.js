const Key = 'item';
const data = {};

const getItems = () => {
    const raw = data[Key] || [];
    return raw;
}

const addItem = (value) => {
    let list = getItems();
    if (typeof value === 'string') {
        list.push(value);
    } else {
        list.push(JSON.stringify(value));
    }
    
    data[Key] = list;
}

module.exports = {
    getItems,
    addItem
};