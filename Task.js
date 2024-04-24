
function greaterScores(testScores){
    return testScores.filter((num) => num >= 70)
}

function addFiveToScores(scores){
    return scores.map((num) => num + 5);

}

function squaresOfNumber(number){
    return number.map((num) => num * num)
}
function afternoonClasses(times){
    if(times == "12:00PM" || times == "1:00PM" || times == "2:00PM" || times == "3:00PM" || times == "4:00PM" || times == "5:00PM"){
        return times
    }
}

function afternoonClass(time){
    return time.filter(times => afternoonClasses(times))
    
} 
module.exports = {addFiveToScores,squaresOfNumber,greaterScores,afternoonClass}

let array = [85,92,78,88,95]
let answer = array.map((num) => num + 5);
console.log(answer);

// let testScores = ["9:00AM","11:OOAM","1:00PM","3:00PM","5:00PM"]
// let answer1 = testScores.((num) => num >= 70)
// console.log(answer1)

let squares = [2,4,6,8,10]
let answer2 = squares.map((num) => num * num)
console.log(answer2)

// let members =["Emily","jack","sohia","Daniel"]
// let book = [book1,book2,book3,book4]

// for(const index of members){
//     index.book = book
//     console.log(members)
// }
