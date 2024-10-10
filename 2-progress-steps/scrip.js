const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1
next.addEventListener('click', () => {
    currentActive++
    if(currentActive > circles.length){
        currentActive = circles.length
    }
    update()
    
})
prev.addEventListener('click', () => {
    currentActive--
    if(currentActive < 1 ){
        currentActive = 1
    }
   update()
})
function update() {
    circles.forEach((circle, idx) => {
        if (idx < currentActive){
            circle.classList.add('active')
        } else{
            circle.classList.remove('active')
        }
    })

    /*Con esto vamos a hacer la barra de detrás de progreso
    primero miro cuantos actives hay y cuantos hay en total,
    multiplicado por tres me da el %, en el css width esta a 0%
    como hay un espacio menos que círculos es que hago el -1*/
    const actives   = document.querySelectorAll('.active')
    progress.style.width = (actives.length -1) / (circles.length -1) * 100 +'%'

    if(currentActive === 1){
        prev.disabled = true
    }
    else if (currentActive ==circles.length){
        next.disabled = true
    } else{
        prev.disabled = false
        next.disabled = false
    }
}
