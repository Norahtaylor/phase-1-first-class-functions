const receivesAFunction = (cb) =>
    cb();


// function returnsANamedFunction() {
//     return namedFun()
// }
// namedFun()

const returnsANamedFunction = () => {
    return function namedFun() {}
}

// const returnsAnAnonymousFunction= () => {return function () }

function returnsAnAnonymousFunction() {
    return () => console.log("hello") }
