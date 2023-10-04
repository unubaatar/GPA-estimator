// gpa estimator
var counter = 0;
var mainGpa = 0;
var totalCredit = 0;
var totalGpa = 0;


document.getElementById("add").addEventListener("click" , function() {
    var tempGpa;
    const id = document.getElementById("container");
    var data = {
        tempName : document.getElementById("idName").value,
        tempDun : document.getElementById("idDun").value,
        tempCredit : document.getElementById("idCredit").value
    }
    if(data.tempDun >= 95) {
        tempGpa = 4;
    } else if(data.tempDun >= 90) {
        tempGpa = 3.7;
    } else if(data.tempDun >= 87) {
        tempGpa = 3.3;
    } else if(data.tempDun >= 83) {
        tempGpa = 3;
    } else if(data.tempDun >=80) {
        tempGpa = 2.7
    } else if(data.tempDun >=77) {
        tempGpa = 2.3; 
    } else if(data.tempDun >=73) {
        tempGpa = 2;
    } else if(data.tempDun >=70) {
        tempGpa = 1.7;
    } else if(data.tempDun >=65) {
        tempGpa = 1.3;
    } else if(data.tempDun >=60) {
        tempGpa = 1;
    } else tempGpa = 0;
    let html = '<br><div class = "container"><input type="text" value = "$$Name$$" disabled ><input type="text" class="dun" value = "$$Dun$$" disabled ><input type="text" name="" class="credit" value = "$$Credit$$" disabled><input type="text" class="gpa" disabled value = "$$Gpa$$"></div>'
    html = html.replace("$$Name$$" , data.tempName);
    html = html.replace("$$Dun$$" , data.tempDun);
    html = html.replace("$$Credit$$" , data.tempCredit);
    html = html.replace("$$Gpa$$" , tempGpa);
    if(data.tempName != "" && data.tempCredit != "" && data.tempDun != "") {
        id.insertAdjacentHTML('beforeend' , html);
        totalCredit += parseInt(data.tempCredit);
        totalGpa  = totalGpa + tempGpa * parseInt(data.tempCredit);
        mainGpa = (totalGpa / totalCredit).toFixed(1);
        console.log(totalCredit);
        console.log(totalGpa);
        console.log(mainGpa);

        document.getElementById("idName").value = "";
        document.getElementById("idDun").value = "";
        document.getElementById("idCredit").value = "";

        document.getElementById("resultCredit").value = totalCredit;
        document.getElementById("resultGPA").value = mainGpa;
    }
})