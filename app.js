document.addEventListener("DOMContentLoaded", function () {
    // Console log para verificar se o conteúdo foi carregado
    console.log("Rock Band Portfolio loaded!");

    // Efeito de animação dos elementos na tela
    const elements = document.querySelectorAll(".overlay h2, .overlay p");
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.transition = "opacity 1s ease-out, transform 1s ease-out";
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }, index * 500); // Atraso entre cada elemento
    });
    // Efeito de digitação no footer
    const footer = document.querySelector(".footer-container");
    const typingElement = document.getElementById("typing-text");
    const text = "Nos siga nas redes!";
    let i = 0;

    function efeitoDigitacao() {
        if (typingElement && i < text.length) {
            typingElement.textContent += text.charAt(i);
            i++;
            setTimeout(efeitoDigitacao, 100);
        }
    }

    // Animação do footer e chamada do efeito de digitação
    function verificarVisibilidadeDoRodape() {
        let footerPosition = footer.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.2;

        if (footerPosition < screenPosition) {
            footer.classList.add("show");
            efeitoDigitacao(); // Inicia a animação de digitação quando o footer aparece
            window.removeEventListener("scroll", verificarVisibilidadeDoRodape);
        }
    }

    // Verifica se o footer está visível ao rolar a página
    verificarVisibilidadeDoRodape();
    window.addEventListener("scroll", verificarVisibilidadeDoRodape);

    // Animação do título
    const title = document.querySelector("#info-banda h2");
    title.classList.add("animate-title");

    // Efeito de fade-in nos integrantes
    const members = document.querySelectorAll(".integrante h3");
    window.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY;
        members.forEach(integrante => {
            const offsetTop = integrante.offsetTop;
            if (scrollPosition > offsetTop - window.innerHeight + 100) {
                integrante.classList.add("fade-in");
            }
        });
    });

    // Carrossel
    const carrossel = document.querySelector(".carrossel");
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const slides = document.querySelectorAll('.show');
    let index = 0;

    const totalSlides = slides.length;
    const slideWidth = slides[0].offsetWidth + 20; // Considerando o gap entre os slides

    // Função para atualizar o carrossel
    function atualizarCarrossel() {
        carrossel.style.transform = `translateX(${-index * slideWidth}px)`;
    }

    // Evento para o botão "Anterior"
    prevButton.addEventListener('click', () => {
        index = (index > 0) ? index - 1 : totalSlides - 1;
        atualizarCarrossel();
    });

    // Evento para o botão "Próximo"
    nextButton.addEventListener('click', () => {
        index = (index < totalSlides - 1) ? index + 1 : 0;
        atualizarCarrossel();
    });

    // Ajustar a largura do carrossel para acomodar todos os slides
    function definirLarguraCarrossel() {
        const totalWidth = slides.length * (slides[0].offsetWidth + 20);
        carrossel.style.width = `${totalWidth}px`;
    }

    // Ajustar a largura ao carregar e ao redimensionar
    window.addEventListener('load', definirLarguraCarrossel);
    window.addEventListener('resize', definirLarguraCarrossel);
});
