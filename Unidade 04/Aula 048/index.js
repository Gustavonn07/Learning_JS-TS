// Funções geradoras

// Use yield em vez de return.
// Funções que entregam valores pausadamente:
function* geradora() {
    yield 'valor01';
    yield 'valor02';
    yield 'valor03';
}

g1 = geradora()
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);

// Pode aninhas usando yield*:
function* geradora2() {
    yield* geradora()
    yield 'valor04';
    yield 'valor05';
}

g2 = geradora2()
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);