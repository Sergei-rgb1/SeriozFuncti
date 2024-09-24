var migrating = true;

var fly = function(num) { 
    var sound = "Flying!";
    function wingFlapper() {
        console.log(sound);
}
    for (var i = 0; i < num; i++) {
        wingFlapper();
}
};

function quack(num) {
var sound = "Quack";
var quacker = function() {
    console.log(sound);
};
    for (i = 0; i < num; i++) {
        quacker();
    }
}

if (migrating) {
    quack(4);
    fly(4);
}

var justAvar = "Oh, don't you worry about it, I'm GLOBAL";

function whereAreYou() {
    var justAvar = "Just an every day LOCAL";
    
    function inner() {
        return justAvar;
    }

    return inner;
}

var innerT = "TEST"
function innerFunction() {
    var innerT = "Just an every day UPDATE";
    
    function inner() {
        return innerT;
    }

    return inner;
}

var result = whereAreYou();
var result = innerFunction();
console.log(result);