function add(n1, n2, n3, n4) {
    if (n1 && n2 && n3 && n4) {
        return n1 + n2 + n3 + n4;
    }
    else if (n1 && n2 && n3) {
        return n1 + n2 + n3;
    }
    else {
        return n1 + n2;
    }
}
console.log(add(false, 9, "45", true));
console.log(add(true, true));
console.log(add(45, 32));
console.log(add("45", "32"));
