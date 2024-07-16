let randStr1 = Math.random().toString(36).slice(2); // "bnh5ytm"
let randStr2 = Math.random().toString(36).slice(2); // "bnh5ytm"
console.log(randStr1 + randStr2);
let rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
for (const row of rows) {
    console.log('*'.repeat(row));
}
