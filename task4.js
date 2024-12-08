function area(length, width) {
    if (width === undefined) {
        return length * length; 
    }
    return length * width;
}
alert(area(3, 10));
alert(area(7));