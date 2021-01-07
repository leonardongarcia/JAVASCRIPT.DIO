const user = {
    name: 'Guilherme',
    lastName: 'Cabrini da Silva'
};

function getUserWithFullName(user) {
    return {
        ...user, //spread
        fullName: `${user.name} ${user.lastName}`
    }
}

const userWithFullName = getUserWithFullName(user);

console.log(userWithFullName);