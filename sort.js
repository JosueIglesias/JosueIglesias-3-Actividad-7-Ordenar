
let v1 = []
let v2 = []

for(let i = 0; i < 20; i++){
    let ran1 = Math.round(Math.random() * 30)
    let ran2 = Math.round(Math.random() * 30)
    v1[i] = ran1
    v2[i] = ran2
}

v1.sort(function(a,b){ return a-b})
v2.sort(function(a,b){ return a-b})


//let v1 = [20,19,18,17,16,15,14,13,12,11,5,4,3,2,1,50,50,50,50,50];
//let v2 = [1,2,3,4,5,6,7,8,9,10,25,26,27,28,29,30,21,22,23,24];

//let v1 = [20, 19, 1, 11, 11, 15, 14, 13, 12, 11, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//let v2 = [2,2,2,2, 29, 22, 24, 26, 28, 30, 10, 9, 8, 7, 6, 5, 40,40,40,40]

v1.sort(function(a,b){ return a-b})
v2.sort(function(a,b){ return a-b})

console.log('----- ORDENADOS -----')

console.log(v1)
console.log(v2)

let v3 = []

let i = 0
let i1 = 0
let i2 = 0

while(i < 40){
   
    if (v1[i1] <= v2[i2]){
        v3.push(v1[i1])
        i1++
    } else if (v1[i1] >= v2[i2]){
        v3.push(v2[i2])
        i2++
    }  else if (v2[i2] === undefined){
        v3.push(v1[i1])
        i1++
    } else {
        v3.push(v2[i2])
        i2++
    } 

    i++
 
}

console.log('----- RESULTADO -----')
console.log(v3)

