
function inIframe () { try { return window.self !== window.top; } catch (e) { return true; } }

$(document).ready(function(){
  
  function getQuotes() {
    
    var quotes = ["Quebrei 3 ovos e dois eram double gema!", "Dia de dropar chaos e bless a vontade.", "Uso isso no meio das gay, o circo pega fogo.", "Gayzolas mesmo.", "Desenhar rola é o tipo de atitude que vem sendo executada há milhares de anos pelos homens.", "Tem que chupar muita rola pra chegar nesse nível.", "Vagabundo já me mandou até foto dele morto", "Que negócio escroto esse tal de bife de fígado. Só chupador de rola que come essa merda do caralho.", "Amor.", "Será que é melhor do que usar uma bengala?", "é só seguir reto até o fim e virar à esquerda, não?", "Uma orgia com esses elementos é o tipo de grau que preciso nas punhetas de hoje em dia.", "Mas orgia com 5 putas>>>>", "Eu já vi esse imbecil ser humilhado pelo Arthur varias vezes.", "Não sei dar nome nem para os meus gatos.", "Lembram do mouse da Logitech que eu comprei pra jogar CS?", "Não tô criticando, arrombado.", "Quer que eu leia bukowski de primeira filho da puta?", "Lembrei que minha bicicleta é infantil.", "Dei mole.", "Pescoço, clavícula, ombro, coluna, lombar, virilha, joelho, tornozelo etc arrebentou o cara inteiro!!", "Gosto é igual cu.", "Desconheço a voz real do Lil Wayne.", "Mds.", "Algumas cores são ruins de ler"];
    
    var author = ["-Otavio Oliveira", "-Julian Gheraldi", "-Julian Gheraldi", "-Matheus Quirino", "-Matheus Quirino", "-Fernando Tavares", "-William Meireilles", "-Fernando Tavares", "-Rafael Rodrigues", "-Gustavo Rodrigues", "-Gustavo Rodrigues", "-Fernando Tavares", "-Arthur Sasaki", "-Julian Gheraldi", "-Arthur Sasaki", "-Gustavo Rodrigues", "-William Meirelles", "-Julian Gheraldi", "-Gustavo Rodrigues", "-Julian Gheraldi", "-Willian Urban", "-William Meirelles", "-William Meirelles", "-Arthur Sasaki", "-William Meireles"]
    
    var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
    
    var randomNum = Math.floor((Math.random()*quotes.length));
    var currentQuote = quotes[randomNum];
    var currentAuthor = author[randomNum];
   
    $(".quote").text(currentQuote);
    $(".author").text(currentAuthor);
    

  if(inIframe())
  {
    $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
  }
    
    var color = Math.floor(Math.random() * colors.length);
  $("html body").animate(
    {
      backgroundColor: colors[color],
      color: colors[color]
    },
    1000
  );
  $(".btn").animate(
    {
      backgroundColor: colors[color]
    },
    1000
  );
    
    $("#text").animate(
    {
      color: colors[color]
    },
    1000
  );
    
    $("#author").animate(
    {
      color: colors[color]
    },
    1000
  );
    
    $(".quote-figure").animate(
    {
      color: colors[color]
    },
    1000
  );
    
  }
  
  $(document).ready(function() {
    getQuotes();
  });
  
  $("#new-quote").on("click", function(){
    getQuotes()
  })
  
  $('#tweet-quote').on('click', function() {
    if(!inIframe()) {
      openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
    }
  });
  
});