'use strict';

var fastObjects = [],
    slowObjects = [];


function calculateTotalFast(purchase) {
    purchase.total = purchase.units * purchase.price;
}

function calculateTotalSlow(purchase) {
    purchase.total = purchase.units * purchase.price;
}

function slowPurchase(units, price) {
    var slowObject = new SlowPurchase(units, price);
    delete slowObject.x;
    return slowObject;
}

function SlowPurchase(units, price) {
    this.units = units;
    this.price = price;
    this.total = 0;
    this.x = 1;
}

function FastPurchase(units, price) {
    this.units = units;
    this.price = price;
    this.total = 0;
    this.x = 1;
}

function createObjects() {
    console.info("create start");
    var i;
    for (i = 0; i < 300000; i++) {
        fastObjects.push(new FastPurchase(i, 10));
        slowObjects.push(slowPurchase(i, 10));
    }
    console.info("create end");
}


function calculate() {
    var fastStart, slowStart, fastEnd, slowEnd;
    fastStart = performance.now();
    fastObjects.forEach(calculateTotalFast);
    fastEnd = performance.now();
    slowStart = performance.now();
    slowObjects.forEach(calculateTotalSlow);
    slowEnd = performance.now();
    document.getElementById("innerTime").innerHTML = "FastPurchase : " + (fastEnd - fastStart) + " ms";
    document.getElementById("slowTime").innerHTML  = "SlowPurchase : " + (slowEnd - slowStart) + " ms";
}