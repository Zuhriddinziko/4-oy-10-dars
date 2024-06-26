// 4-oy 10-dars vazifa.
// Obyektlar aloqador masalala.

// masala 1
// 1. **Odam Obyekti Yaratish:**
// const person = {
//     name: 'Zuhriddin',
//     year: 1993,
//     yourFrom: 'Uzbekistan',
//     status: ['uylangan', 'ichmaydi','chekmaydi']
// }
// console.log(person);


// masala 2
// const person = {
//     name: 'Zuhriddin',
//     year: 1993,
//     yourFrom: 'Uzbekistan',
//     status: ['uylangan', 'ichmaydi','chekmaydi']
// }
// person.name = 'Vali'
// console.log(person)


// masala 3
// const person = {
//     name: 'Vali',
//     year: 1993,
//     yourFrom: 'Uzbekistan',
//     status: ['uylangan', 'ichmaydi','chekmaydi']
// }
// person.manzil = 'Uzbekistan Fargana'
// console.log(person)


// // masala 4
// const person = {
//     name: 'Vali',
//     kasbi: `o'qituvchi`,
//     year: 1993,
//     yourFrom: 'Uzbekistan',
//     status: ['uylangan', 'ichmaydi','chekmaydi']
// }
// person.manzil = 'Uzbekistan Fargana';
// delete person.kasbi;

// console.log(person)


// masala 5
// const person = {
//     name: 'Vali',
//     kasbi: `o'qituvchi`,
//     year: 1993,
//     yourFrom: 'Uzbekistan',
//     status: ['uylangan', 'ichmaydi','chekmaydi'],
//     manzil: 'Uzbekistan Fargana',
//     telefoni: {nomi:'samsung',
//                yili: 2022,
//                xotirasi: 256

//  }

// }
// console.log(person)


// masala 6
// const person = {
//     name: 'Vali',
//     kasbi: `o'qituvchi`,
//     year: 1993,
//     yourFrom: 'Uzbekistan',
//     status: ['uylangan', 'ichmaydi','chekmaydi'],
//     manzil: 'Uzbekistan Fargana',
//     telefoni: {nomi:'samsung',
//                yili: 2022,
//                xotirasi: 256

//  }

// }
// for (const itertor in person) {
//   console.log(`${itertor}: ${person[itertor]}`)
// }



// masala 7
// const person = {
//         name: 'Vali',
//         kasbi: `o'qituvchi`,
//         year: 1993,
//         yourFrom: 'Uzbekistan',
//         status: ['uylangan', 'ichmaydi','chekmaydi'],
//         manzil: 'Uzbekistan Fargana',
//         telefoni: {nomi:'samsung',
//                    yili: 2022,
//                    xotirasi: 256
    
//      }
    
//     }
//     console.log(person.name)


// masala 8
// const person = {
//         name: 'Vali',
//         kasbi: `o'qituvchi`,
//         year: 1993,
//         yourFrom: 'Uzbekistan',
//         status: ['uylangan', 'ichmaydi','chekmaydi'],
//         manzil: 'Uzbekistan Fargana',
//         telefoni: {nomi:'samsung',
//                    yili: 2022,
//                    xotirasi: 256
    
//      }
    
//     }
 

                    //    Umumlashtiruvchi masalalar.
//   masala 1
//  const number = '1236543213633';
//  let res= number.split('');
//  let sum=0;
//  res=res.filter(function(value){
//     if(value==3){
//         sum++
//     }
//     return sum
//  })    
 
//  console.log(sum)


// masala 2
// let n = +prompt("sonni kiriting")
// let mas = [];
// for (let i=1; i<=n; i++){
//   mas.push(i);
// }

// console.log(mas)


// masala 3
// function origin (str){
//     return str.replaceAll(/\*/g,'');
// }
// let string = 'g*ffff*r*d*af';
// console.log(origin(string))

// masala 4
// function qirqish (str){
//    let res= str.substr(2);
//     return res;

// }
// let a = 'eshon';
// console.log(qirqish(a))


// masala 5
// function big (arr){
  
//     let res=Math.max(...arr);
 
//    return String(res).charCodeAt();
// }
// let a =[1,2,3,4,5,6,7,8,9];
// console.log(big(a))


// masala 6
// function srting (str){
//     let res=str.split('');
//     return res;
// }
// let a = 'salom';
// console.log(srting(a))


// masala 7
// function srting (arr){
//     let res=arr.toString();
//     return res;
// }
// let a = ['salom','balli','olga'];
// console.log(srting(a))


// masala 8
// function srting (str){
//     let res=str.split('');
//     return res;
// }
// let a = 'salom';
// console.log(srting(a))


// MASALA 9
// function marta (str){
//     let res= str.split('');
//     let sum=0;
//     res.forEach(function(value){
//         if(value==value){
//             sum++
//         }
//        return sum
//     })
//     return sum;
// }
// let a="salom bolalar";
// console.log(marta(a))


// masala 10
// function sting (arr){
//     let res=[];
//     arr.forEach(function(value){
//         if(typeof value=='string'){
//             res.push(value)
//         }
//         return res
//     })
//     return res.join(' ')
    
// }
// let rrrr = ['salom','hamma',8, 'tanishlar',4557, 'yaxshimisizlar'];
// console.log(sting(rrrr))


// masala 11
// function long (arr){
//     arr.forEach(function(value){
//         let res =value.split()
//         let a=res.filter(function(valuee,index){
//             let b=Math.max(...index)
//             return b
//         })
//         return b;
//     })
//     return b;
// }
// let rrrr = ['salom','hamma',8, 'tanishlar',4557, 'yaxshimisizlar'];
// console.log(long(rrrr))

// masala 12
// function teskari (arr){
//     let res=[]
//     arr.map(function(value){
//    res.unshift(value);
//    return res
//     })
//     return res.join(' ');
// }

// let rrrr = ['salom','hamma',8, 'tanishlar',4557, 'yaxshimisizlar'];
// console.log(teskari(rrrr))

// masala 13
// function sitinson(str){
//     let res=str.split(' ')
//     return res;
// }
// let a = 'yaxshimisizlar 4557 tanishlar 8 hamma salom'
// console.log(sitinson(a))

// masala 14
// function teskari (arr){
//     res =[]; 
//     arr.map(function(value){
//         let b = value.reverse()
//         return res.push(b)
        
//     })
//     return res;
// }
// let rrrr = ['salom','hamma',8, 'tanishlar',4557, 'yaxshimisizlar'];

// console.log(teskari(rrrr))


// masala 15
