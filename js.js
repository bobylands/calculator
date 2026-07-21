const buttons = document.querySelectorAll(".buttons div")
const screen = document.querySelector(".bigScreen")
const smallScreen = document.querySelector(".smallScreen")
let operator = ""
let num1 = 0
let num2 = 0
let total = 0

buttons.forEach((button)=>{
    let i = 0
    button.addEventListener("click",(e)=>{
        switch(true){
            case  e.target.classList.contains("signe"):
            recalculate()
            operator = e.target.textContent
            screen.textContent += e.target.textContent
            console.log(operator)
            break

            case e.target.classList.contains("multiplication"):
            recalculate()
            operator = "*"
            screen.textContent += "*"
            console.log(operator)
            break

            case e.target.classList.contains("division"):
            recalculate()
            operator = "/"
            screen.textContent += "÷"
            console.log(operator)
            break

            case e.target.classList.contains("AC"):
            operator = ""
            screen.textContent = ""
            smallScreen.textContent = ""
            num1 = 0
            num2 = 0
            total = 0
            console.log(operator)
            console.log(num1)
            console.log(num2)
            console.log(total)
            break

            // case e.target.classList.contains("paranthese"):
            // if(i === 0){
            //     operator = "("
            //     screen.textContent += "("
            //     i++
            // console.log(operation)}
            // else if(i === 1){
            //     operator = ")"
            //     screen.textContent += ")"
            //     i--
            // console.log(operator)}
            // break

            // case e.target.classList.contains("pourcentage"):
            // operator += "/100"
            // screen.textContent += "%"
            // console.log(operator)
            // break

            

            //pas encore fini
            case e.target.classList.contains("return"):
                if(num2 !== ""){
                    num2 = num2.slice(0, -1)
                    console.log("num2 is " + num2)
                }
                else if(num2 == "" && operator !== ""){
                    operator = ""
                    console.log(operator)
                }
                else{
                    num1 = num1.slice(0, -1)
                    console.log("num1 is " + num1)
                }
            console.log(total)
            screen.textContent = screen.textContent.slice(0,-1)
            break








            case e.target.classList.contains("answer"):
            operate()
            num2 = ""
            num1 = total
            screen.textContent = total
            console.log("num 1 is " + num1)
            console.log("num2 is " + num2)
            console.log("total is " + total)
            console.log("the operator is " + operator)
            break

            default :
            if(operator == "" && num1 == 0){
                num1 = e.target.textContent}
            else if(operator == ""){
                num1 += e.target.textContent
            }
            else if(operator !== "" && num2==0){
                num2 = e.target.textContent
                operate()
                smallScreen.textContent = total}
            else{
                num2 += e.target.textContent
                operate()
                smallScreen.textContent = total
            }
            screen.textContent += e.target.textContent
            console.log("this is num 1 " + num1)
            console.log("this is num 2 " + num2)
            break
        }
        })
})

const add = (a, b) => a + b;
const subtract = (a,b) => a-b
const multiply = (a,b) => a*b
const divide = (a,b) => a/b


const operate = ()=>{
    num1 = Number(num1)
    num2 = Number(num2)
    switch(operator){
    case "*": 
    total= Math.round(multiply(num1,num2)*1000)/1000
    break
    case "/":
    total = Math.round(divide(num1,num2)*1000)/1000
    break
    case "+" :
    total = Math.round(add(num1,num2)*1000)/1000
    break
    case "-" :
    total = Math.round(subtract(num1,num2)*1000)/1000
    break
    }
    num1 = String(num1)
    num2 = String(num2)


}

const recalculate = () => {
    if (operator !== "") {
        if (num2 !== "") { 
            operate()
        }
        smallScreen.textContent = total
        operator = ""
        num2 = ""
        num1 = total
    }
}