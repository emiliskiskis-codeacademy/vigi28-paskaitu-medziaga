function createFlexItem(i) {
  const el = document.createElement('div')
  el.innerText = i + 1
  el.setAttribute('class', 'item')
  // el.setAttribute('draggable', 'true')
  return el
}

function repeat(n, cb) {
  for (let i = 0; i < n; i++) {
    cb(i)
  }
}

function repeatArr(n, cb) {
  const arr = []
  repeat(n, i => arr.push(cb(i)))
  return arr
}

document.querySelector('.container').append(
  // Pakeiskite 10 į kitokį skaičių!
  ...repeatArr(10, createFlexItem)
)