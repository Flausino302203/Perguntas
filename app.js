function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'

    cartao.innerHTML = `
    <div class="cartao__conteudo">
        <h3 class="cartao__titulo">${categoria}</h3>
        <div class="cartao__conteudo__pergunta">
            <p>${pergunta}</p>
        </div>
        <div class="cartao__conteudo__resposta">
            <p>${resposta}</p>
        </div>
    </div>
    `

    let respostaEstaVisivel = false

    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel
        cartao.classList.toggle('active', respostaEstaVisivel)

        const titulo = cartao.querySelector('.cartao__titulo')
        if (respostaEstaVisivel) {
            titulo.style.display = 'none'
        } else {
            titulo.style.display = 'block'
        }
    }
    
    cartao.addEventListener('click', viraCartao)

    container.appendChild(cartao)
}
