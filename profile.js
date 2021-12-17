console.log('in profile')

const color = document.getElementById('color')
const place = document.getElementById('place')
const ritual = document.getElementById('ritual')

color.addEventListener('click',(e)=>{
    //console.log('e is', e)
    alert('my favorite color is BLUE')
})

place.addEventListener('click',(e)=>{
    //console.log('e is', e)
    alert('favorite place is NYC')
})

ritual.addEventListener('click',(e)=>{
    //console.log('e is', e)
    alert('favorite ritual is walking benny and making morning coffee')
})