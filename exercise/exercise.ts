//nomor 1
const rectangleLength = 5
const rectangleWidth  = 3

const rectangleArea = rectangleLength * rectangleWidth

console.log(rectangleArea)

//nomor 2
const rectangLength = 5
const rectangWidth  = 3

const rectangperimeter = 2*(rectangLength + rectangWidth)

console.log(rectangperimeter)

//nomor 3
const phi = 3.14
const radius = 5

const diameter = 2 * radius
const circumference = 2 * phi * radius
const area = phi * radius **2

console.log(diameter)
console.log(circumference)
console.log(area)

//nomor 4
const angle1 = 80
const angle2 = 65

const triangle = 180 -(angle1 + angle2)

console.log(triangle)

//nomor 5
const n: number = 400

const num: number = n % 365 // 35

const years: number = (n - num)/365
const months: number = Math.floor(num / 30)
const days: number = num % 30

console.log(`${n} days ${years} year, ${months} month, ${days} day`)

//nomor 6
const date1 = new Date("2022-01-20").getTime();
const date2 = new Date("2022-01-22").getTime();
const diffInDays = Math.abs((date2 - date1) / (1000 * 60 * 60 * 1000));

console.log(diffInDays);