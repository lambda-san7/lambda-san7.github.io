skills_list = document.getElementById("skills_list")
projects = document.getElementById("projects")

function dateCalc(date) {
    const oneDay = 24 * 60 * 60 * 1000;
    const currentDate = new Date();
    const diffDays = Math.floor(Math.abs((currentDate - date) / oneDay));
    thisThing = "< Month"
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

const pythonDate = new Date('2022-10-17');
const htmlDate = new Date('2018-6-03');
const cssDate = new Date('2022-2-11');
const jsDate = new Date('2022-2-10');
const javaDate = new Date('2023-1-6');
const cDate = new Date('2023-6-21');
const cppDate = new Date('2023-9-6');
const csDate = new Date('2023-6-25');

/*
let pythonBox = document.getElementById("python");
let htmlBox= document.getElementById("html");
let cssBox= document.getElementById("css");
let jsBox= document.getElementById("js");
let javaBox= document.getElementById("java");

pythonBox.innerHTML = dateCalc(pythonDate)

htmlBox.innerHTML = dateCalc(htmlDate)

cssBox.innerHTML = dateCalc(cssDate)

jsBox.innerHTML = dateCalc(jsDate)

javaBox.innerHTML = dateCalc(javaDate)
*/

class lang{
    constructor(lang_name,mastery,date,color){
        this.list_item = document.createElement("li")
        this.list_item.id = `${lang_name.toLowerCase()}Li`
        
        this.title = document.createElement("h4")
        this.title.style = `display:inline; color:${color};`
        this.title.innerText = `${lang_name} `
        for(let i = 0; i < mastery; i++){
            this.title.innerText += "\u2605"
        }
        for(let i = 0; i < 3 - mastery; i++){
            this.title.innerText += "\u2730"
        }
        this.title.innerText += " "

        this.date_box = document.createElement("h4")
        this.date_box.classList.add("text")
        this.date_box.id = `${lang_name}`
        this.date_box.style = "display:inline;"
        this.date_box.innerHTML = dateCalc(date)

        this.list_item.appendChild(this.title)
        this.list_item.appendChild(this.date_box)
        skills_list.appendChild(this.list_item)
    }
}

new lang("Python", 3, pythonDate, "#4c93ce")
new lang("HTML", 3, htmlDate, "#ff572d")
new lang("CSS", 1, cssDate, "#946ad3")
new lang("JS", 2, jsDate, "#F0E05B")
new lang("Java", 1, javaDate, "#ff0e12")
new lang("C", 1, cDate, "#649AD2")
new lang("C++", 1, cppDate, "#649AD2")
new lang("C#", 1, csDate, "#BE5BB6")

class project{
    constructor(project_name,link,src){
        this.main = document.createElement("div")
        this.main.classList.add("box")
        this.main.onclick = function(){
            window.open(link)
        }

        this.title = document.createElement("h4")
        this.title.classList.add("text")
        this.title.innerHTML = project_name

        this.icon = document.createElement("img")
        this.icon.classList.add("icon")
        this.icon.src = src
        this.icon.width = "100"
        this.icon.height = "100"

        this.main.appendChild(this.icon)
        this.main.appendChild(this.title)
        projects.appendChild(this.main)
    }
}

new project("Rat Fight.","https://github.com/lambda-san7/Rat-Fighter","assets/rat fighter classic.png")
new project("RF Classic","https://github.com/lambda-san7/Rat-Fighter-Classic","assets/rat fighter classic.png")
new project("Checklist","https://lambda-san7.github.io/checklist","assets/checklistlogo.png")
new project("DVD","https://lambda-san7.github.io/dvd","assets/dvd bounce.png")