// Arquivo para salvar testes em javascript

function* geradora() {
    yield function () {
        console.log('eae1');
    }

    yield function() {
        console.log('eae2');
    }
}

g1 = geradora();
f1 = g1.next().value
f2 = g1.next().value
f1()
f2()