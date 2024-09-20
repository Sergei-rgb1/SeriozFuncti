var migrating = true;

function quack(num) {
    for (i = 0; i < num; i++) {
        console.log("Quack!");
    }
}

var fly = function(num) {
    for (i = 0; i < num; i++) {
        console.log("Flying!");
    }
};

if (migrating) {
    quack(4);
    fly(4);
}