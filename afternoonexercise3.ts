// The scope of a variable depends on where it is defined.
// Global variables can be accessed from anywhere within your code.
// Local variables are accessible only within the construct where they are declared.


var n: number = 10; 

function example() {
    let m: number = 20;
}

console.log(n,m);

