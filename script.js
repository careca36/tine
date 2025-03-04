// Abre o lightbox com a imagem clicada
function openLightbox(img) {
    var lightbox = document.getElementById('lightbox');
    var lightboxImage = document.getElementById('lightbox-image');
    
    // Exibe o lightbox
    lightbox.style.display = 'flex';  
    lightboxImage.src = img.src;     // Define a imagem do lightbox
}

// Fecha o lightbox ao clicar fora da imagem
function closeLightbox() {
    var lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';  // Esconde o lightbox
}



// script.js

// script.js

// Seleciona os elementos do HTML
const declareButton = document.getElementById('declareButton'); // Botão de se declarar
const declarationText = document.getElementById('declarationText'); // Área de texto
const submitDeclarationButton = document.getElementById('submitDeclaration'); // Botão de enviar declaração

// Texto pré-definido para a declaração
const textoPronto = "Oi, espero que você tenha gostado desse pequeno 'projeto' meu, sei que as coisas não vão muito bem ultimamente então pensei em mostrar um pouco do meu amor por você e pensei porque não fazer um site pra vc? Já peço desculpas de antemão pois ainda estou no começo da minha jornada na programação mas eu espero que isso mostre como eu te amo muito ";

// Função que exibe a declaração pronta ao clicar no botão
declareButton.addEventListener('click', function() {
    // Exibe o texto pronto na área de texto
    declarationText.style.display = 'block'; // Exibe a área de texto onde a declaração será mostrada
    declarationText.value = textoPronto; // Preenche a área de texto com a declaração pronta

    // Oculta o botão de enviar (caso não queira mais)
    submitDeclarationButton.style.display = 'none'; 

    // Oculta o botão de se declarar
    declareButton.style.display = 'none'; 
});
