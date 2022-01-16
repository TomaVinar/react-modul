const getAll = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json());
}
export const UserService = {
    getAll
}