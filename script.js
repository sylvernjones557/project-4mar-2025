function cal_bmi()
{
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);
     
    if(isNaN(weight) || isNaN(height) || weight <=0 || height <=0)
    {
        document.getElementById("bmi").innerHTML = "PLEASE ENTER PROPER WEIGHT AND HEIGHT";
    }

    else{
    let heightM = height / 100;

    let BMI = weight / (heightM * heightM);

    document.getElementById("bmi").innerText = "YOUR BMI IS " + BMI.toFixed(2);
    }
}