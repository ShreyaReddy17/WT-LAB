function replace(arr,i,j){
    if(i<0){
        i = arr.length+i;
    }
    if(j<0){
        j = arr.length+j;
    }
    var removed = arr.splice(i,1);
    arr.splice(j,0,removed[0]);
    document.write(arr);
    document.write("<br>")
    console.log(arr);
}