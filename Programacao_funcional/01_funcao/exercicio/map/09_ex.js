const usuarios = [{ id: 1, username: 'joao123' }, { id: 2, username: 'maria456' }];
const userName = users => users.username;
const usernames = usuarios.map(userName);
console.log(usernames);
