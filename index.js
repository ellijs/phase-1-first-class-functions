function receivesAFunction(myCallBack) {
  return myCallBack();
}

function callBack() {
  return "I was invoked!";
}

let returnsANamedFunction = () => namedFunction();

function namedFunction() {
  return callBack;
}

let returnsAnAnonymousFunction = () => () => x + y;
