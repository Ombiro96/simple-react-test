const getFullName = (fname, lname) => {
    return `${fname} ${lname}`;
}

const actualFullName = getFullName('John', 'Doe');
const expectedFullName = 'JohnDoe';

if (actualFullName !== expectedFullName) {
    throw new Error('Test failed!');
}