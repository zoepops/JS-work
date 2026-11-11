let studnm = prompt("Enter your name")
let studsc = Number(prompt("Enter your score"))

if(studsc < 70){
    console.log(studnm + " Very GOOD-B");
}else if(studsc < 60){
    console.log(studnm + " GOOD-C");
}else if( studsc < 50){
    console.log(studnm + " PASS-D");
}else if (studsc < 1) {
    console.log(studnm + " FAIL-F");   
}else if (studsc < 0 || studsc > 100){
    console.log("INVALID SCORE");    
}else{
    console.log(studnm + " A ")
}

