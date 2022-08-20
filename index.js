const cats = ["Milo", "Otis", "Garfield"];

// destructivelyAppendCat(name)
function destructivelyAppendCat(name) {
  cats.push("Ralph");
  return cats;
}

// destructivelyPrependCat(name)
function destructivelyPrependCat(name) {
  cats.unshift("Bob");
  return cats;
}

//destructivelyRemoveLastCat()
function destructivelyRemoveLastCat(name) {
  cats.pop(name);
}

// destructivelyRemoveFirstCat()
function destructivelyRemoveFirstCat(name) {
  cats.shift(name);
  return cats;
};

//  appendCat(name)
function appendCat(name) {
  const appendCat = [...cats, 'Broom'];
  return appendCat;
};

// prependCat(name)
function prependCat(name) {
    const prependCat = ['Arnold', ...cats];
    return prependCat;
};

// removeLastCat()
function removeLastCat(name) {
    const removeLastCat = cats.slice(0, -1);
    return removeLastCat;
};

// removeFirstCat()

function removeFirstCat() {
    const removeFirstCat = cats.slice(1);
    return removeFirstCat;
};
