/* 
typeof merupakan operator tipe data sebuah value atau variable
┌──────────────┬───────────────────────┐
│   Type       | Hasil Operator typeof |
├──────────────┼───────────────────────┤
│ Undefined    │   “undefined”         │
│ Null         │   “object”            │
│ Boolean      │   “boolean”           │
│ Number       │   “number”            │
│ BitInt       │   “bigint”            │
│ String       │   “string”            │
│ Symbol       │   “symbol”            │
│ Function     │   “function”          │
│ Lainnya      │   “object”            │
└──────────────┴───────────────────────┘
*/

const data = 1;

if (typeof data === "number") {
    console.log('number')
} else if (typeof data === "string") {
    console.log('string');
} else if (typeof data === "boolean") {
    console.log('boolean')
} else if (typeof data === "object") {
    console.log('object')
}
