// let a = {
//     name : "Harry"
// }
// console.log(a)

// let p = {
//     run:()=>{
//         alert("run")
//     }
// }
// a.__proto__ = p;
// a.run();



// Every JavaScript object has a prototype: Har object ka apna ek prototype hota hai, jo wo inherit karta hai.
// Prototype Chain: Jab aap kisi property ko access karte ho, JavaScript pehle us object mein check karta hai. Agar woh wahan nahi milti, to woh uske prototype mein check karta hai, aur phir uske prototype ke prototype mein, aur yeh chain tab tak chalti hai jab tak null nahi milta.
// Constructor Functions and Prototypes: JavaScript mein constructor functions ka use karke objects create kiye jaate hain, aur unke prototypes pe methods aur properties ko define kiya jata hai.
// Modifying Prototypes: Aap run-time mein kisi bhi object ke prototype ko modify kar sakte hain aur naye methods add kar sakte hain.



// Prototype ek object hota hai jo class ke objects ke beech properties aur methods ko share karta hai.
// Prototype Chain ek mechanism hai jisme object apne prototype se properties aur methods inherit karta hai.
// Aap prototypes ko dynamically modify kar sakte hain aur object-level inheritance ka use kar sakte hain, jo JavaScript mein OOPs (Object-Oriented Programming) ko implement karne ka tareeka hai.



function time(){
    setInterval(()=>{
//        let i=0;
//         while(i<5){
// console.log(i)
//         }
//         i++;
    } , 1000)
}
time();