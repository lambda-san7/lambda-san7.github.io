function dateCalc(date) {
    const oneDay = 24 * 60 * 60 * 1000;
    const currentDate = new Date();
    const diffDays = Math.floor(Math.abs((currentDate - date) / oneDay));
    if(diffDays >= 30){
        thisThing = "1 Month"
        if(diffDays >= 30){
            thisThing = `${Math.floor(diffDays / 30)} Months`
            if(diffDays >= 365){
                if(Math.floor(diffDays / 365) == 1){
                    thisThing = `${Math.floor(diffDays / 365)} Year`
                }
                if(Math.floor(diffDays / 365) > 1){
                    thisThing = `${Math.floor(diffDays / 365)} Years`
                }
            }
        }
    }
    return thisThing;
}

let pythonBox = document.getElementById("python");
let htmlBox= document.getElementById("html");
let cssBox= document.getElementById("css");
let jsBox= document.getElementById("js");
let javaBox= document.getElementById("java");
let cBox= document.getElementById("c");

const pythonDate = new Date('2022-10-17');
const htmlDate = new Date('2018-6-3');
const cssDate = new Date('2022-2-11');
const jsDate = new Date('2022-2-10');
const javaDate = new Date('2023-1-6');
const cDate = new Date('2023-29-6');

pythonBox.innerHTML = dateCalc(pythonDate)

htmlBox.innerHTML = dateCalc(htmlDate)

cssBox.innerHTML = dateCalc(cssDate)

jsBox.innerHTML = dateCalc(jsDate)

javaBox.innerHTML = dateCalc(javaDate)

cBox.innerHTML = dateCalc(cDate)
