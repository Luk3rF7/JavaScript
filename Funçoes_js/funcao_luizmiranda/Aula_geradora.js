function* geradora1(){
    //codigo
    yield "valor 1";
    //codigo
    yield "valor 2";
    //codigo
    yield "valor 3";
}

const g1 = geradora1();
for(let valor of g1){
    console.log(valor);
}


function * gerador2(){
    let i =0;
    while(true){
        yield i;
        i++;
    }
}
const g2 =gerador2();
console.log(g2.next().value)

function* gerador3(){
    yield 0;
    yield 1;
    yield 2;
    yield 3;
}
function* gerdaor4(){
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();
for(let valor of g4){
    console.log(valor);
}

function* gerador5(){
    yield function(){
        console.elog('vim do y1')
    }

    // return function(){ * ele termina yield *
    //     console.log('vim do returndo');
    // }
    //..
    yield function(){
        console.log('vim do y2')
    }
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
func1()
func2()