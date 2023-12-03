//  Объектные типы данных

// Объектные типы делятся на:

// - Объекты - полноценная структура данных

// - Специальные объекты - в основном, функции и массивы (есть и другие)

//  Массив создается в квадратных скобках []

const numbers = [1, 2, 3, 4, 5]

console.log (numbers)

// так тоже можно, но лучше записывать в массив один и тот же тип данных

numbers[4] = 6

console.log (numbers)



const num = [1, 2, 3, 4, 5]

for (let i = 0; i < numbers.length; i++) {
    console.log (num[i] + 1)
}


console.log('i + 1 each')


const players = [3, 4, 6, 7, 9, 10, 11, 13, 14, 15, 16, 17, 18]

for (let i = 0; i < players.length; i++) {
    if ((players[i] % 2) === 0) {
        console.log(players[i])
    }
}

console.log('Random massive even nums')


let rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

console.log(rainbow.reverse())


console.log('Method array.reverse()')



rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

for (i = 6; i >= 0; i--) {
    console.log(rainbow[i])
}


console.log('For rainbow reverse')



rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

for (i = rainbow.length; i >= 0; i--) {
    console.log(rainbow[i])
}

console.log('If array will change its amount of elements')