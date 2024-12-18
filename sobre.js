let container = document.querySelector('.container-md')

let div = document.querySelector('.btn')
let btnAnterior = document.querySelector('.anterior')
let btnProxima = document.querySelector('.proxima')

div.addEventListener('mouseenter', () => {
    btnAnterior.style.backgroundColor = '#99cd3294'
    btnProxima.style.backgroundColor = '#99cd3294'
    div.style.border = 'none'
})

btnAnterior.addEventListener('click', () => {
    btnAnterior.style.scale = '1.05'
    btnAnterior.style.color = '#fff'

    if(btnAnterior != btnProxima){
        btnProxima.style.scale = '1.0'
        btnProxima.style.color = '#000000'
        btnProxima.style.backgroundColor = '#99cd3294'
        btnAnterior.style.backgroundColor = '#9acd32'
        btnAnterior.style.textDecoration = 'underline'
    }

    btnAnterior.addEventListener('mouseout', ()=> {
        btnAnterior.style.textDecoration = 'none'
    })
})

btnProxima.addEventListener('click', () => {
    btnProxima.style.scale = '1.05'
    btnProxima.style.color = '#fff'
    btnProxima.style.backgroundColor = '#9acd32'
    if(btnProxima != btnAnterior){
        btnAnterior.style.color = 'black'
        btnAnterior.style.scale = '1.0'
        btnAnterior.style.backgroundColor = '#99cd3294'
        btnProxima.style.textDecoration = 'underline'
    }

    btnProxima.addEventListener('mouseout', ()=> {
        btnProxima.style.textDecoration = 'none'
    })
})
