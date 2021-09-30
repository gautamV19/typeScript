const y;

const z = 9;
z = 89;

s = 7899;

var a = "asdfwer";
a = 89;

let x: string; //passive notation
x = "asdf";

let boo: boolean;
let str: string;
let num: number;

//* Arrays

let arr = [12, "slfhj", false];
arr[0] = "hjk";

let arr2: number[] = [1, 3, true, 78, 84578934, 34.435, 0x6789];
arr2[0] = "dklsfjs";

let arr3: Array<string> = ["lskdf", "skd"];

//* Tuples */

let [a, b] = [1, 2];

let x = 13;
let y = 7;

[x, y] = [y, x];

let tup: [number, string, number, boolean];
tup = [1, "dfg", 56, true];

//* special types of datatypes */

y = undefined;
let xy: number | undefined;
xy = 84578934;
xy = undefined;
xy = null;

let zy: number | undefined | null;
zy = 84578934;
zy = undefined;
zy = null;

let canTakeAnything: any;
canTakeAnything = 1;
canTakeAnything = null;
canTakeAnything = undefined;
canTakeAnything = false;
canTakeAnything = "siorwlsk";

let canTakeAnything2;
canTakeAnything2 = 1;
canTakeAnything2 = null;
canTakeAnything2 = undefined;
canTakeAnything2 = false;
canTakeAnything2 = "siorwlsk";

let abc: never;
abc = 123;
abc = null;
abc = undefined;

//* Functions */

function greet(name) {
  name = 88;
  console.log("Hello" + name);
  return 10;
}

greet("arnav");

function greet2(name: string): never {
  //return type
  name = 88;
  console.log("Hello2" + name);
  return 10;
}

let rx = greet2("arnav");
console.log(rx);

function area(a: number, b: number): number {
  return a * b;
}
function area5(a: number, b: number = a): number {
  return a * b;
}
function area2(a: number, b: number | undefined): number {
  if (typeof b === undefined) {
    return a * a;
  } else {
    return a * b;
  }
}

function area4(a: number, b: number | void): number {
  if (typeof b === undefined) {
    return a * a;
  } else {
    return a * b;
  }
}

function area3(a: number, b?: number): number {
  if (typeof b === undefined) {
    return a * a;
  } else {
    return a * b;
  }
}

console.log(area(13));
console.log(area2(13));
console.log(area3(13));
console.log(area4(13));
console.log(area5(13));

let area6 = function (a: number, b?: number): number {
  if (typeof b === undefined) {
    return a * a;
  } else {
    return a * b;
  }
};

let area7: (a: number, b?: number) => number;

area7 = function (a: number, b?: number): number {
  if (typeof b === undefined) {
    return a * a;
  } else {
    return a * b;
  }
};

let area8: (a: number, b?: number) => number;
area8 = function (a, b) {
  if (typeof b === undefined) {
    return a * a;
  } else {
    return a * b;
  }
};

console.log(area6(13));
console.log(area7(13));

//* Functions- rest/spread

function mean(...values: number[]): number {
  const sum = values.reduce((a, b) => a + b);

  return sum / values.length;
}
