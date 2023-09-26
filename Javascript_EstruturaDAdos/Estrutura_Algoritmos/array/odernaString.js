let names = ["Ana", "ana", "jhon", "Jhon"];
console.log(names.sort());

console.log(names.sort((a, b) => {
if (a.toLowerCase() < b.toLowerCase()) {
return -1;
}
if (a.toLowerCase() > b.toLowerCase()) {
return 1;
}
return 0;
}));

names.sort((a,b) => a.localeCompare(b))
