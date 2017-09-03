function gcd (a, b) {
    return b ? gcd (b, a%b) : a;
};

function lcm (a, b) {
    return (!a || !b) ? 0 : a * b / gcd (a, b);
}
  
function reduce (frac){  
    var GCD = gcd (frac[0], frac[1]);
    return [frac[0]/GCD, frac[1]/GCD];
}

function frAdd (a, b) {
    var LCM = lcm (a[1], b[1]);
    var m1 = LCM/a[1]; var m2 = LCM/b[1];
    return [a[0] * m1 + b[0] * m2, LCM];
}

function frSub (a, b) {
    return frAdd (a, [-b[0], b[1]]);
}

function frMul (a, b) {
    return [a[0] * b[0], a[1] * b[1]];
}

function frDiv (a, b) {
    return [a[0] * b[1], a[1] * b[0]];
}

function calc () {
    var resNumbers = [0, 1, 2, 3, 4];
    var R = [];
    for (var i = 0; i < 5; i++) {
        var r = parseInt (document.getElementById ("resInput" + i).value);
        r = r ? r : 1;
        R.push (r);
    }
    var sumR = R[0] + R[2] + R[3];
    var R03 = [R[0] * R[3], sumR];
    var R02 = [R[0] * R[2], sumR];
    var R23 = [R[2] * R[3], sumR];
    var R021 = [R02[0] + R[1] * R02[1], R02[1]];
    var R234 = [R23[0] + R[4] * R23[1], R23[1]];
    var result = reduce (frAdd (R03, frDiv (frMul (R021, R234), frAdd (R021, R234))));
    document.getElementById ("resOutputTop").innerHTML = result[0].toString ();
    document.getElementById ("resOutputBott").innerHTML = result[1].toString ();
    document.getElementById ("result").style.display = 'block';
}
