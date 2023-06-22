function receivesAFunction (spy) {
    spy();
    return spy;
}


function returnsANamedFunction () {
    const msg = function (name) {
        returns `Hello ${name} you are old;`
    }
    return msg('prince');
}
console.log(returnsANamedFunction());


function returnsAnAnonymousFunction() {
    return function() {
        console.log(`Big win!`);
    }
}
