//_proto_: object.prototype

const objB ={
    chaveB:'B'
    //_proto_: objA
}

const objA ={
    chaveA:'A'
    // _proto_: object.prototype
}

const objC = new Object();
    objC.chaveC = 'C'

    Object.setPrototypeOf(objB, objA);
    Object.setPrototypeOf(objC, objA);
    console.log(objC, objA);
