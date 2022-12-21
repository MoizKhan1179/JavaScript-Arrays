// let abc =["headphones",5560,"Assasins creed",true,false,undefined,NaN,90.87]

// let abc=[];
// abc [0]="PlayStation"
// abc[2]=567
// abc[4]=true
// abc[6]=false



// document.write(abc)
// console.log(abc)



// let products=["https://picsum.photos/200/300/?blur","https://picsum.photos/200/300?grayscale","https://picsum.photos/seed/picsum/200/300",]

// for(i=0; i<=products.length ;i++){

// document.write(`<img src="${products[i]}>`)
// }

// let userImage;
// let products=[];


// for(j=0; j<3; j++){
//     let userImage= prompt("Enter Image URL");
//     for(k=0; k<3; k++){
//         products[j] = userImage
//     }
    
// }


// let products=[];

// for(i=0; i<=products.length ;i++){

//     document.write(`<img src="${products[i]}>`)
//     }



// let abc =["headphones",5560,"Assasins creed",true,false,undefined,NaN,90.87]

// let bd = [];

// bd = [ ...abc ]

// console.log("abc 1st : " + abc)
// console.log("bd 1st : " + bd)

// bd[0]=42

// console.log("abc 2st : " + bd)
// console.log("bd 2st : " + bd)



// let numbers = [45,36,35,78,95,85]

// console.log("before : " + numbers)

// // numbers[1] = "Hello"

// // numbers.push(45)  end ma insert

// // numbers.pop(1)  end se delete

// // delete numbers[3]

// // document.write(numbers)

// console.log("after : " + numbers)






// ********array se pehly add kre ga***********




// let numbers = [45,36,35,78,95,85]

// console.log("before : " + numbers)

// numbers.shift(4)

// console.log("after : " + numbers)



// let numbers = [45,36,35,78,95,85]

// console.log("before : " + numbers)

// numbers.unshift(99)


// console.log("after : " + numbers)







// ****SORT*****



// let numbers = [45,36,5,35,10,10,9,78,95,85]
// // let numbers = ["Arham","Shayan","Moiz","Fariz"]
// console.log("before : " + numbers)

// // numbers.sort()

// // function

// numbers.sort((a,b)=>{return a-b})


// console.log("after : " + numbers)



// *****SLICE******

// let numbers = [45,36,35,78,95,85]

// console.log("before : " + numbers)

// let abc = numbers.slice(0,3)

// console.log("after : " + numbers)

// console.log("ABC : " + abc)


// *****SPLICE******

// let numbers = [45,36,35,7,78,95,8,85,2,11,22]

// console.log("before : " + numbers)

// numbers.splice(1,3)

// console.log("after : " + numbers)

// numbers.splice(4,3)

// console.log("after1 : " + numbers)

// *********ConCat********

// let carArrays = [];
// console.log("before : " + carArrays)

// let carArrays2= ["Supra","Rx7","SkyLine"]
// let carArrays3= ["Supra22","Rx7V12","SkyLine1970"]
// // let carArrays4 = ["Honda","Toyota","Bugatti","Lamborghini","Mazda"]

// // carArrays = carArrays2.concat(carArrays3,carArrays4)

// // console.log("after : " + carArrays)


// // *****JOIN*****


// let Arrays3 = carArrays3.join("-")

// console.log(Arrays3)



// ******IsArray****** array identify krne k lye

// let car= ["Supra","Rx7","SkyLine","Cheverolette"]

// console.log(car)


// console.log(Array.isArray(car))






// ********InDexOf Array********

// let car= ["Supra","Rx7","SkyLine","Cheverolette","Supra","Charger","Viper"];
// console.log(car)

// console.log(car.indexOf("Supra",1));

// console.log(car.indexOf("Supra"));



// ********LastInDexOf Array********

// let cars= ["Supra","Rx7","SkyLine","Cheverolette","Supra","Charger","Viper"];

// console.log(cars.lastIndexOf("Supra"));



// ***********toString*************  <Array ko String ma Convert kre ga>;


// let cars= ["Supra","Rx7","SkyLine","Cheverolette","Supra","Charger","Viper"];
// console.log(cars)
// console.log(cars.toString())

// let a= cars.toString();
// console.log(a)



// ******Fill******  <Array ko replace krde ga>;

// let cars= ["Supra","Rx7","SkyLine","Cheverolette","Supra","Charger","Viper"];
// console.log(cars.fill(78))




// ***********MultiDimensional Array***********



// let b = [[5000,5.5],
//         [6000,3.5],
//         [4500,6.5],
//         [9000,9.5],
//         [3000,8.5]
// ];

// for(i=0; i < b.length; i++ ){
//     document.write(b[i][0] + "<br>")
//     console.log(b[i][0])

// }







// let products = [
//     ["https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71KER-Giw5L._AC_UY218_.jpg","Audionic Headphone","SteelSeries New Arctis Nova 7X Wireless Multi-Platform Gaming & Mobile Headset — Nova Acoustic System — Simultaneous Wireless 2.4GHz + Bluetooth — 38Hr Battery — USB-C —",5.5,5000],["https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51--TfLUpEL._AC_UY218_.jpg","Razor Headphone","SteelSeries New Arctis Nova 7X Wireless Multi-Platform Gaming & Mobile Headset — Nova Acoustic System — Simultaneous Wireless 2.4GHz + Bluetooth — 38Hr Battery — USB-C —",4.5,4500],
//     ["https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81SvodUkcuL._AC_UY218_.jpg","Samsung Headphone","SteelSeries New Arctis Nova 7X Wireless Multi-Platform Gaming & Mobile Headset — Nova Acoustic System — Simultaneous Wireless 2.4GHz + Bluetooth — 38Hr Battery — USB-C —",7.5,3500],
//     ["https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81MztoQMa8L._AC_UY218_.jpg","Apple Headphone","SteelSeries New Arctis Nova 7X Wireless Multi-Platform Gaming & Mobile Headset — Nova Acoustic System — Simultaneous Wireless 2.4GHz + Bluetooth — 38Hr Battery — USB-C —",9.5,8500]
// ];

// document.write(`<img src='${products[0][0]}'> <h1>${products[0][1]}</h1> <h3>${products[0][2]}</h3> <div>${products[0][3]}</div> <div>${products[0][4]}</div>`)

// for(i=0; i < products.length; i++ ){
//     document.write( products +  "<br>")

// }







