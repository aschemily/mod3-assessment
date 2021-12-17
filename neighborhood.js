console.log('connected to neighborhood')

const restaurantBtn = document.querySelectorAll('.restaurant-link')
const randomBtn = document.getElementById('random-btn')


let randomArray = []
for(let i = 0; i < restaurantBtn.length; i++){
  //  console.log('buttons', restaurantBtn[i].textContent)
  randomArray.push(restaurantBtn[i].textContent)
    
}

//console.log('random array', randomArray)

const randomRestaurant = (array) =>{
    let randomElement = array[Math.floor(Math.random() * array.length)];

    randomBtn.addEventListener('click', (e)=>{
        console.log('random element', randomElement)
        let h2 = document.getElementById('random-restaurant')
        h2.style.display = 'block';
        h2.textContent = randomElement
    })

}

randomRestaurant(randomArray)


// randomBtn.addEventListener('click', (e)=>{
//     console.log('e', e)
// })