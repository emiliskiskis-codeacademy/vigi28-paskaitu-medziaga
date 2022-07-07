function removeDuplicates(numbers) {
  // lyginti su praeitu elementu, jeigu sutampa, šalinti
  // problema: jei pasikartoja, bet ne praeitas elementas?
  //
  // for ciklas, elementą lyginti su visais kitais
  // jeigu nėra kito tokio pačio, tada dėti į naują masyvą
  let unique = [];

  numbers.forEach(value => {
    if (!unique.includes(value)) {
      unique.push(value);
    }
  });

  return unique;
}

class MySet {
  elements = [];

  constructor(array) {
    // array - neprivalomas (gali būti undefined)
    // sukuria MySet iš array, išimant pasikartojančius elementus

    if (array) {
      array.forEach(element => this.add(element));
    }
  }

  add(element) {
    // prideda elementą tik jeigu jo nėra
    // neįdėti neprimityvių reikšmių (object, function, undefined)

    if (["object", "function", "undefined"].includes(typeof element)) {
      return;
    }

    if (!this.has(element)) {
      this.elements.push(element);
    }
  }

  remove(element) {
    // išima elementą tik jeigu jis yra
  }

  has(element) {
    // ar yra toks elementas? true/false

    return this.elements.includes(element);
  }
}

let fullArr = [1, 3, 2, 3, 1, 5, 2, 5, 5, 3, 1];
console.log(removeDuplicates(fullArr));

const set1 = new MySet(fullArr);
console.log(set1.elements); // [1, 3, 5]

const set2 = new MySet();
set2.add(1); // [1]
console.log(set2.elements);
set2.add(2); // [1, 2]
console.log(set2.elements);
set2.add("aaa"); // [1, 2, 'aaa']
console.log(set2.elements);
set2.add({}); // [1, 2, 'aaa']
console.log(set2.elements);
set2.add(2); // [1, 2, 'aaa']
console.log(set2.elements);

set2.remove(1); // [2, 'aaa'];
console.log(set2.elements);
set2.remove(3); // [2, 'aaa'];
console.log(set2.elements);

console.log(set2.has(1)); // false
console.log(set2.has(2)); // true
