// Call stack
function f1() {
  console.log('Hi by f1!');
}
  
function f2() {
  f1();
  console.log('Hi by f2!');
}
f2();

// Output: 
// Hi by f1!
// Hi by f2!