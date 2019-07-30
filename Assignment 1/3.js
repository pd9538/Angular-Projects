function DisplayFactors(no) {
    for (var i = 1; i < no; i++) {
        if (no % i == 0) {
            console.log(i);
        }
    }
}
DisplayFactors(20);
