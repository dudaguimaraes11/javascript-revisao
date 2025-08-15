// 1. CRIAÇÃO DAS VARIÁVEIS PRINCIPAIS

let nome = "Ártemis"; 
let classe = "Guerreira"; 
let nivel = 15; 
let vida = 100; 
let ouro = 50; 
let xp = 80; 

// 2. DEFINIÇÃO DE CONSTANTES MÁGICAS

const NOME_ARMA = "Arco da Lua Cristalina"; 
let danoBase = 100; 
const NOME_ARMADURA = "Manto da Caçadora"; 
const DEFESA_BASE = "30"; 

console.log (`🏹 Arma:${NOME_ARMA}`);
console.log (`🎇 Dano Base: ${danoBase}`); 
console.log (`👑 Nome da armadura: ${NOME_ARMADURA}`); 
console.log (`🗡 Defesa Base: ${DEFESA_BASE}`); 

// 3. APLICAÇÃO DE OPERADORES DE ATRIBUIÇÃO

//xp += 150; // O personagem treinou e ganhou pontos de experiência.
ouro -= 30; // Comprou poção por 30 moedas de ouro. 
vida += 40; // Usou a poção e recuperou pontos de vida.  
danoBase *= 2 // A arma foi encantada e seu dano foi dobrado.  

// Resultado Final
console.log (`Relatório da Jornada:`); 
console.log (`🧚‍♀️ Herói: ${nome}`); 
console.log (`⚔ Nível: ${nivel}`); 
console.log (`🎇 XP: ${xp}`); 
console.log (`✨ Ouro: ${ouro}`); 
console.log (`💖 Vida: ${vida}`); 
console.log (`🗡 Dano Base: ${danoBase}`); 

// 4. CÁLCULO DE ATRIBUTOS FINAIS

let ataqueTotal;
let defesaTotal;

ataqueTotal = nivel + danoBase;
defesaTotal = DEFESA_BASE + (nivel / 2);

console.log (`🎇O atributo total de ataque é:${ataqueTotal};`);
console.log (`🎇 O atributo total de defesa é: ${defesaTotal}.`);

// 5. AVALIAÇÃO DE PRONTIDÃO COM OPERADORES LÓGICOS

let vidaSuficiente = vida > 70;
let ataqueForte = ataqueTotal > 60;
let nivelAvancado = nivel >= 10;
let podeEnfrentarGuardiao = vidaSuficiente && (ataqueForte || nivelAvancado);


// 6. GERAÇÃO DA LORE DO PERSONAGEM

console.log (`LORE DA HEROINA: ${nome} 🌟`);
console.log (`Na alvorada do Reino de Thalendor, quando as estrelas ainda sussurravam segredos aos ventos antigos, nasceu uma ${classe} marcada pela lua. ${nome} não veio da realeza, mas sim da sombria floresta de Mystic Falls, vinda de uma longa linhagem de caçadoras comprometidas a manter o equilíbrio entre a luz e as trevas.`);
console.log (`Desde jovem, era uma arqueira talentosa. Seu destino, porém, foi selado ao encontrar o ${NOME_ARMA}, uma relíquia ancestral forjada por elfos na era das constelações, séculos antes de seu nascimento. Dizem que ele só se revela àquelas que carregam em si a coragem da noite e a delicadeza dos seres mais belos da floresta.`);
console.log (`No coração ancestral da floresta encantada, onde ${nome} descansa sob a sombra das raízes e ávidamente escuta o canto da lua, a guerreira mira em direção a seu futuro: uma grande mudança se aproxima.`);
console.log (`Após semanas de treino no Vale das Águas Cristalinas, onde a natureza escolhe apenas os mais fortes e os ventos sopram implacavelmente, ${nome} desafiou os próprios limites. Cada um dos seus movimentos de batalha se tornaram tão naturais quanto o curso do rio que se embrenhava nas sombras místicas daquele reino.`);
console.log (`${nome}, em posse do ${NOME_ARMADURA}, e com a mente afiada, ela gastou 30 de suas barras de ouro, comprou a Poção da Vida e a recuperou totalmente, alcançando ${vida} de vida. À caminho de sua missão, reconhecendo sua bondade, uma ninfa reconheceu seu arco sem exigir nada em troca. Agora, o Arco da Lua Cristalina possui ${danoBase} de dano Base, o bastante para derrotar o maior e mais forte ser das trevas e o cegá-lo completamente com o reflexo da luz viva da lua. Ao todo, Artemis segue com nível ${nivel}, xp ${xp}, e ${ouro} barras de ouro.`);
console.log (`Mas a paz foi breve. A Ordem de Arkenfell caiu e um novo regime foi instituído. Agora resta à ${nome} restaurar a paz de seu reino. Será que ela cumprirá sua missão?`); 


// === CONTINUAÇÃO DA SUA JORNADA DO NÍVEL 1 ===
// Dados do personagem anterior:

/* nomePersonagem = "Ártemis";
classe = "Guerreira"; 
nivel = 15;
xp = 230;
ouro = 20; */

// Dados adicionados: 

let vidaAtual = 140;
let vidaMaxima = 200;
let manaAtual = 50;
let manaMaxima = 50;
let energia = 100; 

// Novos atributos para batalha
let forca = 20;
let defesa = 40;
let agilidade = 15;
let combatesVencidos = 13;

// Estado atual da história (continue de onde parou no Nível 1)
let localAtual = "Floresta de Mystic Falls";
let missaoAtual = "Restaurar a Ordem de Arkenfell";

// ESTRUTURA NARRTIVA OBRIGATÓRIA 
// Prólogo
console.log (`🌟 PRÓLOGO: No Reino de Thalendor, Ártemis, ágil caçadora da natureza, precisá enfrentar diversos desafios para restaurar a ordem de Arkenfell em seu amado reino. Com a ajuda de seu encantado ${NOME_ARMA} e sua armadura ${NOME_ARMADURA} forjados há séculos, destinados a acompanhá-la em sua missão e guiá-la em direção à glória, ela explorará a floresta Mystic Falls em busca de respostas e aliados. Será que ela se revelará a grande heroina do reino?`);

// Capítulo I 

console.log (`🌟 CAPÍTULO I: Ao se embrenhar na misteriosa floresta de Mystic Falls, Ártemis se depara com três animais cujo nome ela não tinha ideia, mas uma coisa era certa: eram perigosos. Em uma fusão de escorpião com jaguar, as bestas de cinco metros, no mínimo, espumavam de raiva. Embora a heroina não estivesse com medo, escondeu-se atrás de uma grande rocha para que pudesse preparar seu arco com precisão. Assim, trocou suas flechas convencionais por flechas venenosas. Ártemis só tinha uma opção para continuar seu caminho: matá-los. Assim ela poderá ganhar 200xp e prosseguir sua jornada.`);

let matarBesta = true 
if (matarBesta) {
    xp +=100; 
    console.log (`Em golpes ágeis, Ártemis matou as três bestas e agora, com a recente adição de 200xp, acumulava um total de ${xp} xp.`);
}

let descansar = true 
if (descansar) {
    vida += 20
    if (vida > vidaMaxima) vida = vidaMaxima; 
    console.log (`Tendo cumprido sua missão diária, pôde parar para descansar na sombra de um grande carvalho e recuperar sua vida, que agora estava em ${vida}.`);
}

// Capítulo II
console.log (`🌟 CAPÍTULO II: Ao amanhecer do segundo dia de sua missão, ${nome} se levantou com os músculos ainda tenso, mas revitalizada. A noite fora tranquila e ela esperava que o dia que se seguisse revelasse grandes vitórias. Ao arrumar seus itens, a caçadora partiu para mais um dia de aventura. Após uma longa caminhada entre raíses e folhas úmidas, ${nome} se deparou com um dos piores destinos da floresta encantada: a Encruzilhada dos Lamentos. As lendas, mitos e boatos que ouvira sobre os três caminhos que estendiam-se a sua frente fizeram-na estremecer. Mas uma escolha tinha que ser feita, pois não restava alternativa.`);

if (classe === "Guerreira") {
    console.log(" O poder de seus antepassados, os mais poderosos guerreiros, flui através de suas veias incentivando-a a honrá-los. Com coragem no coração e mente aberta, ela seguiu em direção ao seu destino, confiante de que o legado de sua linhagem a guiaria.");
}

if (xp >= 100) {
console.log(`A experiência adquirida em seus ${combatesVencidos} combates anteriores revelou-se valiosa. Procurando rapidamente por sinais que a instruissem sobre o caminho correto, ela os encontrou. Sinais de proteção das dríades da natureza marcados nas árvores da primeira trilha.`); 
nivel++; 
xp += 100; 
vida =  vidaMaxima; 
console.log (`Ela subiu para o próximo nível (nível ${nivel}).`)

} else {
    console.log (`${nome} ainda não havia experiência o sufiente para tomar essa decisão. No entanto, seguiu pelo caminho do meio e deparou-se com um nevoeiro mágico que a desorientou. ${nome} perdeu vida e energia.`);
    vida -=30; 
    energia -=40; 
}

let encontrouAliado = true; 

if (encontrouAliado) {
    console.log (`Após inúmeras horas caminhando, ${nome} chegou a uma clareira. Saindo das sombras, o Ansião Andarilho, conhecido no reino como Ledgher ofereceu a guerreira uma poção de advertência sobre os perigos que se seguiriam à frente. Hesitou em aceitar. Mas, seguindo o seu coração, tomou a poção. Ganhou 50xp. Em seguida, o Ansião entregou-lhe uma chava. Mesmo sem entender, ${nome} confiou e seguiu seu caminho.`);
    xp+=50; 
} else {
    console.log (`A heroina seguiu seu caminho pela floresta úmida e escura confiando em seus instintos, acreditando que logo chegaria à reposta que salvaria o reino.`)
}

// CAPÍTULO III 
let repostaEnigma = "tempo"; 
let temChave = true; 
let famaEntrePovos = 7;
let inimigosPerseguindo = false; 

console.log (`🌟 CAPÍTULO III: Ártemis, chegando diante do antigo templo da Ordem de Arkenfell, agora corrompido pelas sombras estava sob domínio de Malakar, o Ansião do Mal e seus comensais. O portão sagrado estava selado por uma magia poderosa que somente uma chave encantada poderia abrir. `)

if (!temChave) {
    console.log (`Sem a chave em mãos, Ártemis era incapaz de atravessar o portal mágico. O mal continuaria a crescer e sua confiança diminuia a cada segundo. `);
} else {
    console.log (` ${nome}, pensando que não poderia ser conhecidência, lembrou-se da chave que o Ansião Andarilho havia lhe entregado na clareira. Utilizando a chave, ela foi recebida por um brilho intenso. Ela entrou no templo determinada a cumprir sua missão.`);
}

console.log (`No coração do antigo santuário, a batalha foi intensa. Ártemis, apesar de poderosa, não conseguiria vencer a batalha contra tantos comensais e o poderoso Malakar sozinha.`); 

if (famaEntrePovos >= 7) {
    console.log (`Subitamente, de todas as direções, guerreiros fiéis aos Poderes da Natureza que protegiam as terras próximas sentiram a luz cirada por ${nome} e se juntaram a ela na batalha. Com corações puros e armas afiadas, expulsaram todas as sombras do mal que lá habivam, restaurando a antiga Ordem de Arkenfell.`);
    xp+= 100; 
    nivel++;
} else if (famaEntrePovos >=5 && !inimigosPerseguindo) {
    console.log (`Subitamente, apesar de cautelosos, guerreiros que protegiam as terras próximas notaram o brilho intenso e seguiram seu caminho. Encontraram Ártemis e sentindo sua aura pura, perceberam que deviam ajudá-la.`);
    xp+= 50; 
} else if (famaEntrePovos <6 && inimigosPerseguindo) {
    console.log (`Com inimigos perseguindo-a e o brilho intenso indicando seu caminho, ${nome} foi encontrada e atingida por uma lança. Rapidamente correndo e escondendo-se, conseguiu escapar, mas falhou em sua missão.`);
    vida -=30; 
} else {
    console.log (`Exausta, não notando que tinha a chave em mãos e cercada de inimigos à espreita, Ártemis desistiu e durante a noite foi atacada por seus inimigos. Não percebeu que ainda havia esperança e que estava diante da vitória. Fracassou em sua missão.`); 
    vida -= 50; 
}

// EPÍLOGO 

console.log (`🌟 PRÓLOGO: Com a queda das sombras lideradas pelo Ansião Malakar e a restauração de Arkenfell, uma nova era começava em seu reino. A escuridão que uma vez assolou os cidadãos de Thalendor havia sido substituída pela luz.`); 
console.log (`${nome}, agora reconhecida pelo rei como heroina do reino, sabia que sua história não havia chegado ao fim. Era seu destino proteger o reino de todos os males. Enquanto as bandeiras de Thalendor tremulavam ao suave vento, ${nome} sentia que a natureza logo lhe traria outra missão, pois sua intuição a avisava de uma nova ameaça que começava a se formar entre as sombras. Será que o mal realmente tinha sido exterminado? `);
console.log (`Mas por enquanto só restava aos cidadãos aproveitarem a paz enquanto Arkenfell era restituído. A heroína teria seu merecido descanso. Olhando para o horizonte com esperança, ${nome} cochilou sob a sombra de um carvalho.`); 

// NOVOS ELEMENTOS PARA O CASTELO DOS ARRAYS - CONTINUIDADE ÉPICA 

// Inventário, aliados, inimigos e salas
let inventario = ["Pedra da Lua", "Espada Encantada", "Chave dourada", "Pena do Ancião", "Armadura de Fogo", "Poção da Sorte", "Poção da Vida", "Arco da Lua Cristalina", "Manto da Caçadora"]; 
let aliados = ["Ancião Andarilho", "Arqueiro Félix", "Guerreira Ophélia", "Fada dos Campos Floridos", "Guerreiro Estevão", "Rainha de Thalendor"]; 
let inimigos = ["Rei das Trevas", "Comensal Líder das Sombras", "Tropa de comensais", "Espírito Sombrio", "Sombras da Morte", "Vulto Sem rosto", "Devorador de Almas", "Senhor do Abismo", "Fantasma do Calabouço"]; 
let salasDoCastelo = ["Portal Secreto", "Biblioteca Mágica", "Torres Místicas", "Calabouço das Trevas", "Sala das Sombras", "Sala das Poções"]; 

console.log(`🏰 === ${nome} adentra ao Castelo dos Arrays ===`);
console.log(`Após as vitórias dos níveis anteriores, a heroina chega ao castelo lendário para uma nova missão...`);
console.log(`Inventário inicial: ${inventario}`);

// CAPÍTULO I

console.log (`🌟 CAPÍTULO IV: Ao receber uma nova missão da Rainha de Thalendor semanas após o desfecho da Batalha de Arkenfell, ${nome} sentiu-se útil para o reino novamente. Próximo ao Vilarejo das Hárpias havia um castelo e ela deveria explorá-lo, pois aquele era um local suspeito de conter magia negra. Aterrorizada com a ideia da Ordem ser tomada novamente pelas sombras, a Rainha confiou a missão à mais brava das heroinas. A rainha lhe apresentou seu inventário incial:`);
console.log (`${inventario}`);
console.log (`🧚🏻‍♀️ Juntos à Ártemis, os aliados ${aliados.join(",")} adentraram ao castelo.`)

let pocoesEncontradas = [];
let armadilhas = []; 

console.log (`Ao passar pelas grandes portas do Castelo Abandonado, ${nome} quase caiu em uma armadilha, o Poço Sem Fim, mas conseguiu se equilibrar graças a ajuda ${aliados [2]}. Ao explorarem as salas mais misteriosas, como as ${salasDoCastelo[2]}, encontraram uma vasta quantidade de poções encantadas. Ártemis as incluiu em seu inventário. Ao longo da sua busca por itens sombrios, a guerreira perdeu sua preciosa protetora, ${inventario[0]}.`); 

// Atualiza inventário de poções 
armadilhas.push("Poço Sem Fim");
pocoesEncontradas.push ("Poção Polissulco", "Elixir da Aurora", "Gota de Éter", "Elixir do Véu Místico", "Soro da Sombra", "Infusão do sol interior")
console.log (`💖 Novas poções no inventário: ${pocoesEncontradas};`)
console.log (`🚩 Oh, oh! Armadilhas encontradas:${armadilhas.join(",")}`); 

// Remove item do inventário 
inventario.splice(inventario.indexOf("Pedra da Lua"), 1);
console.log (`⚡ Oh, não! Um item foi perdido: ${inventario[0]}`);

// CAPÍTULO II 
console.log(`🌟 CAPÍTULO II: Explorando as salas do castelo: ${salasDoCastelo.join(",")}. ${nome} e seus ${aliados.length} aliados decidiram se dividir para explorar cada uma das salas.`) 

for (let i = 0; i < salasDoCastelo.length; i++) {
console.log("🚪 Sala " + (i + 1) + ": " + salasDoCastelo[i]);

// Lógica diferente para cada sala baseada no índice
if (i === 0) {
console.log(`📖 Ao explorar a primeira sala, a ${salasDoCastelo[0]}, ${nome} encontrou um antigo grimório. Ganhou experiência.`);
xp += 100;
} else if (i === 1) {
console.log(`🎇 O aliado ${aliados[4]} seguiu por um dos corredores escuros do castelo e descobriu uma ${salasDoCastelo[1]}. Com o choque, deixou cair a ${inventario[1]} que empunhava, mas ganhou experiência.`);
inventario.push ("Espada Encantada");
xp += 70; 
} else {
console.log(`💣 Para os outros aliados, o ar ficou denso e pesado. Uma magia corrupta os assombrou e o tempo passou devagar enquanto a luz se esvaia do castelo.`);
vida -= 50;     
}
}; 

// CAPÍTULO III:
console.log (`🌟CAPÍTULO III: Com todos os aliados separados, a sombra se espalha rapidamente pelo castelo e uma força inesperada surge para ajudar.`); 
 
// O efeito das sombras cresce conforme os inimigos aparecem
for (let i = 0; i < inimigos.length; i++) {
    console.log (`🌑 Nas sombras, ${inimigos[i]} desafia ${aliados[i % aliados.length]} para lutar.`)
}

let danoDasSombras =  vidaMaxima/2; // dano progressivo
vida -= danoDasSombras; 
console.log (`☠ A energia do grupo é drenada em ${danoDasSombras} pontos. Mesmo com as vidas a ponto de colapsarem, os aliados não desistem.`); 


// Adiciona aliado
for (let i = 0; i < inimigos.length; i++) {
    if (i === 2 && !aliados.includes ("Dragão Glittering")) {
    aliados.push ("Dragão Glittering");
    console.log (`🐉 Das profundezas do ${salasDoCastelo[3]}, o poderoso Dragão Glittering, atraído pela bondade de ${nome} surge como reforço inesperado para o grupo.`)
    xp += 30; 
    vida = vidaMaxima; 
    }
}; 

// CAPÍTULO IV 
console.log (`🌟 CAPÍTULO IV: Com a nova adição aos aliados, o jogo virou. Assim, ${nome} reuniu os aliados para organizar novas estratégias e fortalecer a defesa antes da batalha decisiva.`); 

for (let i = 0; i < aliados.length; i++) {
    console.log (`Aliado ${i + 1}: ${aliados[i]} se prepara para o combate, enfrentando o inimigo ${inimigos[i + 1]}.`)
}

// Calcular dano e efeitos conforme aliado e inimigo

let danoRecebido = Math.floor(Math.random() * 15) + 10; 
let danoCausado = Math.floor(Math.random() * 40) + 15; 
let xpGanho =  Math.floor(Math.random() * 30) + 20; 
let ouroGanho =  Math.floor(Math.random() * 50) + 5; 

// Efeito especial para o Dragão Glittering 

if (aliados.includes ("Dragão Glittering")) {
    console.log (`⚡ O poder ancestral do Dragão, aprisionado por 500 anos na ${salasDoCastelo[2]}, e libertado por ${aliados[3]}, eleva o dano causado e reduz o dano recebido! Com a ajuda de Glittering, fica cada vez mais improvável a vitória do ${inimigos[0]} e suas tropas.`)
    danoCausado += 20; 
    danoRecebido = Math.floor(danoRecebido/2); 
    xpGanho += 100; 
}; 

console.log (`💥Durante a batalha épica, ${nome} e ${aliados[2]} lutam juntas contra o ${inimigos[3]} e mandando-o para o ${salasDoCastelo[3]}, o aprizionaram para todo o sempre.`);
console.log (`⚔ ${aliados[1]}, lutando sozinho contra recém descobertos Zumbis Místicos, recebeu um dano de ${danoRecebido}.`); 
inimigos.push("Zumbis Místicos"); 

// CAPÍTULO V

console.log (`🌟CAPÍTULO FINAL (V): A Batalha dos Castelos dos Arrays Começa!`);

for (let i = 0; i < inimigos.length; i++) {
    if (i === 0) {
        console.log (` 🎇 Das profundezas do ${salasDoCastelo[0]}, surge novamente ${aliados[4]}, empunhando o lendário Coração de Éter, capaz de dissipar toda a magia negra que envolve o castelo e seus enconderijos mais profundos.`); 
        inventario.push ("Coração de Éter"); 
        console.log (`💖 Novo item Mágico no Inventário: ${inventario[9]}`)
        xp += 50; 
    }
    else if (i === 1) {
        console.log (`🌑 As sombras ainda avançam contra os aliados, porém ${nome} permance firme. No entanto, a guerreira perde 100 pontos de vida.`); 
        vidaMaxima -= 100; 
    }
    else if (i === inimigos.length - 1) {
        console.log (`🔥 Em chamas intermináveis, o céu se incendeia. Das nuvens, o brilhante ${aliados[6]} inrrompe magnificamente, rugindo tão alto que as estruturas das muralhas são abaladas.`)
        console.log (`💥 ${nome} e ${aliados[4]} unem suas forças, canalizando o poder do Coração de Éter para perfurar as escamas dos Inimigos das Trevas! Com um brilho extremo emanando do cajado ancestral, os aliados inferem um último golpe.`); 
        console.log (`🏆 Com último golpe, os herois do reino de Thalendor exterminam as trevas do castelo para todo o sempre. Vitória épica alcançada.`);
        vida = vidaMaxima; 
        xp += 200; 
    }
}

console.log (`🥇 Fim da batalha: ${xp} XP | ${vida} de vida | Inventário: ${inventario}. | Poções: ${pocoesEncontradas}`); 

// EPÍLOGO
console.log (`🌟 EPÍLOGO ÉPICO: Das ruinas do castelo, surgiu ${aliados[4]}, empunhando o Coração de Éter. Ao lado de ${nome}, o ${aliados[6]}, voa triunfantemente em direção ao Castelo de Thalendor.`); 
console.log (`🏰 A rainha concede títulos de cavalheiro a todos os aliados: ${aliados.join(",")}. A luz retorna ao reino, e ${nome} finalmente desfruta da paz.`);