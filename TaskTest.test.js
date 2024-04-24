let {addFiveToScores,squaresOfNumber,greaterScores,afternoonClass} = require("./Task.js")
test("squaring number", () => {
    let arraySquare = [2,4,6,8,10]
    let result = squaresOfNumber(arraySquare)
    expect(result).toEqual([4,16,36,64,100])
})

test("adding five to scores", () => {
    let studentScores = [85,92,78,88,95]
    let result = addFiveToScores(studentScores)
    expect(result).toEqual([90,97,83,93,100])
})

test("getting greater scores", () => {
    let scores = [70,24,80,67,80,89,34,78,90,89]
    let reult = greaterScores(scores)
    expect(reult).toEqual([70,80,80,89,78,90,89])
})

test("schedule planner", () => {
    let time = ["9:00AM","11:00AM","1:00PM","3;00PM","5:00PM"]
    let answer = ["1:00PM","3:00PM","5:00PM"]
    let result = afternoonClass(time)
    expect(result).toEqual(answer)
})