
function AkanName(){
    let yearOfBirth = document.getElementById("year").value;
    let monthOfBirth = document.getElementById("month").value;
    let dayOfBirth = document.getElementById("day").value;
    let gender=document.getElementById("gender").value;

    //validating inputs
    if (yearOfBirth.lenght !==4){
        alert("invalid year")
    }
    
    if(parseInt(monthOfBirth) < 1||parseInt(monthOfBirth)>12) {
        alert("invalid month")

    }
    if (parseInt(dayOfBirth)<1 ||parseInt(dayOfBirth)>31) {
        alert("invalid date")

    }
     
    let CC=parseInt(yearOfbirth.substr(0,2));
    let YY=parseInt(yearOfBirth.substr(2,));
    let MM=parseInt(monthOfBirth);
    let DD=parseInt(dayoOfBirth);

    let d=Math ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) %7
    let daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    
    let akanMales = ["Kwasi","Kwado","Kwabena","Kwaku","Yawa","Kofi","Kwame"];

    let akanFemales = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
      
    let dayOfWeek=dayOfWeek[d];

    //calculate gender
    let name;
    if ( gender ==="male"){
        name=akanMales[d];
    }else if (gender ==="female"){
        name=akanFemales[d];
    } else {
        alert("Please select gender")
        }

        //let now dispaly to html
        document.getElementById("dayOfweek").InnerHTML = dayOfWeek [d];
        document.getElementById("akanName").InnerHTML = name;
}