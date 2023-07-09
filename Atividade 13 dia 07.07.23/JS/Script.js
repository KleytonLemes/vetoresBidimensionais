const formulario = document.querySelector('form');
const nomeFantasma = document.getElementById('saidaNomeFantasma');
const fotoFantasma = document.getElementById('saidaFotoFantasma');
const caracteristicasFantasma = document.getElementById('saidaCarac');
const descricaoFantasma1 = document.getElementById('saidaComoCombater1');
const descricaoFantasma2 = document.getElementById('saidaComoCombater2');
const descricaoFantasma3 = document.getElementById('saidaComoCombater3');
const descricaoFantasma4 = document.getElementById('saidaComoCombater4');

const personagens = [
  ['Senhora Slimer', 'Ela é um fantasma adorável, com uma personalidade única e um charme travesso. Sua aparência icônica, energia vibrante e hábito de devorar comida fazem dela um personagem inesquecível no universo dos Caça-Fantasmas. Ela representa um lado mais leve e divertido do mundo espectral, e sua presença sempre traz uma dose extra de encanto e humor para qualquer cena em que ela aparece.', '1. Proton Pack', '2. Estudo do Ectoplasma', '3. Equipamentos de Medição Especiais','4. Armadilha de Fantasmas', 'https://cdn4.whatculture.com/images/2017/01/8a87f426f9b222c5-600x338.jpg'],
  ['Fantasma Eletrocutado', 'ele é uma entidade espectral eletrizante e formidável. Com sua aparência intensamente energizada, poderes elétricos devastadores e comportamento agressivo, ele representa uma ameaça séria para os Caça-Fantasmas. Sua aura de instabilidade e resistência a ataques convencionais tornam cada encontro com ele uma batalha eletrizante e emocionante. Enfrentar o Fantasma Eletrocutado é um verdadeiro desafio, exigindo habilidade e coragem para superar sua poderosa presença.', '1. Trajes de Isolamento Elétrico', '2. Armas de Captura Especiais', '3. Neutralização da Fonte de Energia','4. Armas de Captura Especiais', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD8sJz46a8QnnjnAegJEnehMVBrmfdLa3upjOmkMjVEo8vdLN-QZCZ8dGW_dguRr4hgIU&usqp=CAU'],
  ['Fantasma Gângster', 'Este fantasma é conhecido por sua personalidade astuta e perspicaz. Ele era um gangster durão em vida e mantém essa natureza mesmo após sua morte. O Fantasma Gangster Ghost é um mestre da manipulação e do engano, usando sua inteligência afiada para planejar e executar seus esquemas nefastos.', '1. Proton Pack', '2. Estudo do Ectoplasma', '3. Estratégia de Atração','4. Equipamentos de Detecção', 'https://cdnb.artstation.com/p/assets/images/images/008/733/031/large/tully-summers-char-ts-old-gangsterghost-v1cu-02242015.jpg?1514943185'],
  ['Slimer Sobrenatural', 'é uma adição intrigante ao universo dos Caça-Fantasmas. Sua origem alienígena, aparência distintiva e comportamento travesso o tornam uma presença cativante. Enquanto os Caça-Fantasmas tentam compreender sua natureza e capturá-lo, o Slimer Sobrenatural continua a espalhar sua diversão extraterrestre por onde quer que vá.', '1. Proton Pack', '2. Estudo do Ectoplasma', '3. Armadilhas de Fantasmas Modificadas','4. Equipamentos de Detecção Avançados', 'https://cdna.artstation.com/p/assets/images/images/008/733/092/large/tully-summers-cha-ts-slimer-v1-022615.jpg?1514943695'],
  ['Geleia', 'Sua aparência única, personalidade travessa e paixão por comida o tornam um fantasma adorável e carismático. Apesar de suas brincadeiras, ele se torna um aliado dos Caça-Fantasmas, acrescentando um toque de diversão e imprevisibilidade às suas aventuras sobrenaturais.', '1. Proton Packs', '2. Estudo do Ectoplasma', '3. Armadilhas Personalizadas','4. Paciência e Persistência', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Jw1yq_lAa3FNvVu2EOIzrCS2TVSQ1ARMAnEwnYtHzSFiAj4EchFLAkUO6byz7Hh2is4&usqp=CAU'],
]

formulario.onsubmit = (evento) => {
  const inputs = new FormData(evento.target);
  const nomeDoPersonagem = inputs.get('busca').toUpperCase()
  let encontrouPersonagem = false;

  for (let i = 0; i < personagens.length; i++) {
    if (nomeDoPersonagem == personagens[i][0].toUpperCase()) {
        nomeFantasma.textContent = personagens[i][0];
        caracteristicasFantasma.textContent = personagens[i][1];
        descricaoFantasma1.textContent = personagens[i][2];
        descricaoFantasma2.textContent = personagens[i][3];
        descricaoFantasma3.textContent = personagens[i][4];
        descricaoFantasma4.textContent = personagens[i][5];

        fotoFantasma.src = personagens[i][6];
        encontrouPersonagem = true;
    }
  }

  !encontrouPersonagem && alert('Personagem não encontrado!');
  return false;
}