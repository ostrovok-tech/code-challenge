let curry = function (fn) {
    let arity = fn.length;
    return function f1(...args){
        if (args.length >= arity){
            return fn (...args)
        } else{
            return function f2(...moreArgs) {
                let newArgs = args.concat(moreArgs)
                return f1(...newArgs)
            }
        }
    }
}

function abc(a, b, c) {
  return a + b + c;
}

abc.curry = curry(abc);

function abcdef(a, b, c, d, e, f) {
  return a + b + c + d + e + f;
}

abcdef.curry = curry(abcdef);

function assert (a, b) {
  if (a !== b) {
    throw new Error();
  }
}
assert(abc.curry('A', 'B', 'C'), 'ABC');
assert(abc.curry('A')('B')('C'), 'ABC');
assert(abc.curry('A', 'B')('C'), 'ABC');
assert(abcdef.curry('A')('B')('C')('D')('E')('F'), 'ABCDEF');
assert(abcdef.curry('A', 'B', 'C')('D', 'E', 'F'), 'ABCDEF');
