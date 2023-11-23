let m = document.getElementById("Money");
let re_m = document.getElementById("Money1")
console.log(re_m);
let re_t = document.getElementById("tax-money");
console.log(re_t);
let re_total = document.getElementById("Money-price");


function MoneyPro(){
    let m1 = m.value;
    re_m.innerHTML = "เงินเดือน : "+m1+" บาท";
    console.log("Money = " , m1);
    if (m1 < 15000){
        let tax1 = m1*3/100;
        console.log("Tax 3% = " , tax1);
        re_t.innerHTML = "ภาษี = "+tax1+" บาท"
        let tax2 = m1-tax1;
        console.log("total = " , tax2);
        re_total.innerHTML = "เงินเดือนหลังหักภาษี : "+tax2+" บาท";

    }
    else if (m1 < 100000){
        let tax1 = m1*5/100;
        console.log("Tax 5% = " , tax1);
        re_t.innerHTML = "ภาษี = "+tax1+" บาท"
        let tax2 = m1-tax1
        console.log("total = " , tax2)
        re_total.innerHTML = "เงินเดือนหลังหักภาษี : "+tax2+" บาท";
    }
    else {
        let tax1 = m1*10/100
        console.log("Tax 10% = " , tax1);
        re_t.innerHTML = "ภาษี = "+tax1+" บาท"
        let tax2 = m1-tax1
        console.log("total = " , tax2)
        re_total.innerHTML = "เงินเดือนหลังหักภาษี : "+tax2+" บาท";
    }
}

function ResetData(){
    m.value = "";
    re_m.innerHTML = "";
    re_t.innerHTML = "";
    re_total.innerHTML = "";
}