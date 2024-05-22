let mainContainerPontos = document.getElementById('mainContainerPontoTuristico')

let pontosTuristicos = [
  {
    titulo: 'Igreja São Francisco',
    imagem: './images/igreja-sao-francisco.jpg',
    textoPreview:
      'A Igreja de São Francisco de Assis, em São João del-Rei, Minas Gerais, foi fundada pela Venerável Ordem Terceira de São Francisco de Assis...',
    texto:
      'A Igreja de São Francisco de Assis, em São João del-Rei, Minas Gerais, foi fundada pela Venerável Ordem Terceira de São Francisco de Assis. Iniciada em 1774, é um destacado exemplo da arte colonial brasileira, notável por sua arquitetura, talha ornamentada e contribuição do mestre Aleijadinho, embora tenha sido posteriormente alterada por Francisco Cerqueira. Reconhecida por sua importância, foi protegida pelo Instituto do Património Histórico e Artístico Nacional (IPHAN) juntamente com seu acervo.',
    localizacao:
      'https://www.google.com/maps/place/Igreja+de+S%C3%A3o+Francisco+de+Assis/@-21.1429669,-44.263958,15z/data=!4m6!3m5!1s0xa1c8913b7ba8ff:0x19e5306116e6c567!8m2!3d-21.1387641!4d-44.2601814!16s%2Fg%2F1tj4j8n6?entry=ttu',
  },
  {
    titulo: 'Ponte da Cadeia',
    imagem: './images/ponte-da-cadeia.jpg',
    textoPreview:
      'Construida em 1798, diz a história que a ordem para a construção da ponte da Cadeia foi dada depois que a ponte de madeira existente no mesmo local ruiu, quando por ela passava uma pequena procissão...',
    texto:
      'Construida em 1798, diz a história que a ordem para a construção da ponte da Cadeia foi dada depois que a ponte de madeira existente no mesmo local ruiu, quando por ela passava uma pequena procissão. Em estilo romano, foi construída com pedras rejuntadas com óleo de baleia e inicialmente era chamada de ponte nova ou de ponte que vai para a Independência (A Real Intendência do ouro funcionava onde hoje é a Escola Municipal Maria Teresa. Era o local onde se pesava e se "quintava" o ouro. Junto da casa da Intendência funcionava a casa de fundição). Com a construção do prédio da prefeitura para ser sede do Senado da Câmara (andar superior) e da cadeia da cidade (andar inferior), passou a ser conhecida pela denominação atual.',
    localizacao:
      'https://www.google.com/maps/place/Igreja+de+S%C3%A3o+Francisco+de+Assis/@-21.1429669,-44.263958,15z/data=!4m6!3m5!1s0xa1c8913b7ba8ff:0x19e5306116e6c567!8m2!3d-21.1387641!4d-44.2601814!16s%2Fg%2F1tj4j8n6?entry=ttu',
  },
  {
    titulo: 'Maria Fumaça',
    imagem: './images/maria-fumaca.jpg',
    textoPreview:
      'A mais antiga maria-fumaça em operação no Brasil nunca parou de trabalhar, desde o ano 1881 — quando foi inaugurada a “Estrada de Ferro d’Oeste”. ',
    texto:
      'A mais antiga maria-fumaça em operação no Brasil nunca parou de trabalhar, desde o ano 1881 — quando foi inaugurada a “Estrada de Ferro d’Oeste”. Hoje, o pequeno trecho turístico dessa via férrea — que já fez parte de uma ferrovia que chegou a atingir 684 km de extensão —, entre Tiradentes e São João del-Rei, é percorrido em cerca de 50 minutos de uma belíssima viagem que resgata uma grandiosa história. Por essa razão, é um grande atrativo turístico: só no ano de 2017, mais de 135 mil pessoas viajaram na maria-fumaça entre as duas cidades históricas.',
    localizacao:
      'https://www.google.com/maps/place/Esta%C3%A7%C3%A3o+Ferrovi%C3%A1ria+de+S%C3%A3o+Jo%C3%A3o+del+Rei+(antiga+EFOM)/@-21.1337807,-44.2601492,17z/data=!3m1!4b1!4m6!3m5!1s0xa1c88f8b88e389:0xb255d5543bf8f6a1!8m2!3d-21.1337857!4d-44.2575743!16s%2Fg%2F11cn6mjpm2?entry=ttu',
  },
  {
    titulo: 'Memorial Tancredo Neves',
    imagem: './images/memorial-tancredo-neves.jpg',
    textoPreview:
      'O memorial Tancredo Neves foi construido em dezembro de 1990, e tem como objetivo preservar a historia do ex-presidente Tancredo Neves, impossibilitado de empossar seu cargo devido sua morte, depois de mais de 20 anos de ditadura militar...',
    texto:
      'O memorial Tancredo Neves foi construido em dezembro de 1990, e tem como objetivo preservar a historia do ex-presidente Tancredo Neves, impossibilitado de empossar seu cargo devido sua morte, depois de mais de 20 anos de ditadura militar. Localizado em um casarão do século XVIII, o Memorial Tancredo Neves narra a trajetória do homem que dedicou a sua vida à construção de um país democrático. Tancredo Neves começou a carreira como vereador, foi deputado federal durante a ditadura militar, tornou-se um símbolo na luta pelas eleições diretas e foi a peça chave no processo de redemocratização do Brasil.',
    localizacao:
      'https://www.google.com/maps/place/Memorial+Tancredo+Neves/@-21.1373615,-44.2647724,17z/data=!4m10!1m2!2m1!1smemorial+tancredo+neves!3m6!1s0xa1c924df7b7b9b:0xe4fa6d072356a73c!8m2!3d-21.1373666!4d-44.2621516!15sChdtZW1vcmlhbCB0YW5jcmVkbyBuZXZlc5IBBm11c2V1beABAA!16s%2Fg%2F11thghjsgk?entry=ttu',
  },
  {
    titulo: 'Museu da FEB',
    imagem: './images/museu-feb.jpg',
    textoPreview:
      'O Museu da FEB é uma atração interessantíssima em São João del Rei, ali podemos conhecer um pedaço da nossa história.',
    texto:
      'O Museu da FEB é uma atração interessantíssima em São João del Rei, ali podemos conhecer um pedaço da nossa história. O Museu é dedicado à participação do Brasil na II Guerra Mundial, onde estão expostos objetos originais utilizados nas batalhas, como armas, fardas, objetos pessoais, bandeiras, fotos, etc. Vale muito a pena a visita, principalmente para conhecermos o lado mais humano dos nossos pracinhas. Os guias dão uma aula à parte, contando com muita empolgação as histórias por trás dos objetos. Há também na parte de baixo do Museu da FEB o Museu do Montanhismo, que também vale muito conhecer.',
    localizacao:
      'https://www.google.com.br/maps/place/Museu+da+FEB+(CeSC)/@-21.135495,-44.2601337,18z/data=!4m6!3m5!1s0xa1c89031dbf767:0x5424755dddb95972!8m2!3d-21.1353846!4d-44.2591512!16s%2Fg%2F11b77d3j_d?entry=ttu',
  },
  {
    titulo: 'Catedral Basílica de Nossa Senhora do Pilar',
    imagem: './images/catedral.jpg',
    textoPreview:
      'A Catedral Basílica de Nossa Senhora do Pilar em São João del Rei, Minas Gerais, é uma impressionante construção barroca do século XVIII, conhecida por sua arquitetura imponente e rica decoração interior.',
    texto:
      'A Catedral Basílica de Nossa Senhora do Pilar em São João del Rei, Minas Gerais, é uma impressionante construção barroca do século XVIII, conhecida por sua arquitetura imponente e rica decoração interior. Destacam-se sua fachada esculpida em pedra e seu Altar de São Miguel Arcanjo, uma obra-prima do barroco mineiro. Além de ser um local de devoção, a catedral abriga o Museu de Arte Sacra, expondo relíquias e peças litúrgicas.',
    localizacao:
      'https://www.google.com/maps/place/Catedral+Bas%C3%ADlica+de+Nossa+Senhora+do+Pilar/@-21.1355739,-44.2625433,19z/data=!4m6!3m5!1s0xa1c8918b32d007:0xd2f41a267457e36c!8m2!3d-21.1352571!4d-44.2618534!16s%2Fg%2F1n3dwdcf8?entry=ttu',
  },
  {
    titulo: 'Museu Regional',
    imagem: './images/museu-regional.jpg',
    textoPreview:
      'Inaugurado em 1947, o museu está instalado em um prédio histórico, o Solar da Baronesa, que por si só já é uma atração arquitetônica.',
    texto:
      'Inaugurado em 1947, o museu está instalado em um prédio histórico, o Solar da Baronesa, que por si só já é uma atração arquitetônica. O edifício foi construído no século XIX e possui características da arquitetura colonial brasileira, com seus azulejos, sacadas e janelas ornamentadas. Dentro do Museu Regional, os visitantes podem explorar uma variedade de exposições permanentes e temporárias, que abrangem desde arte sacra até artefatos históricos relacionados à época colonial. Entre os destaques do acervo estão objetos religiosos, móveis antigos, utensílios domésticos, documentos históricos e obras de arte de artistas locais e regionais.',
    localizacao:
      'https://www.google.com/maps/dir//R.+Mal.+Deodoro,+12+-+Centro,+S%C3%A3o+Jo%C3%A3o+del+Rei+-+MG,+36300-074/@-21.1358665,-44.3437014,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0xa1c8919a5a8bc5:0x1dc7693d06366164!2m2!1d-44.2612997!2d-21.1358864?entry=ttu',
  },
  {
    titulo: 'Igreja das Mercês',
    imagem: './images/igreja-merces.jpeg',
    textoPreview:
      'A Igreja de Nossa Senhora das Mercês, formada por negros libertos e crioulos, inicia em 1751 a construção de sua igreja, que se estende até 1853.',
    texto:
      'A Igreja de Nossa Senhora das Mercês, formada por negros libertos e crioulos, inicia em 1751 a construção de sua igreja, que se estende até 1853. Sua fachada elegante é marcada por uma única torre afastada do alinhamento. Ao lado da igreja, suspenso na paisagem, o cruzeiro expressa fé popular na dor e paixão de Cristo. Do alto da escadaria tem-se uma vista panorâmica da cidade.',
    localizacao:
      'https://www.google.com/maps/dir//Igreja+de+Nossa+Senhora+das+Merc%C3%AAs,+106,+R.+Ant%C3%B4nio+Cirino+Rodrigues,+74+-+Alto+das+Merc%C3%AAs,+S%C3%A3o+Jo%C3%A3o+del+Rei+-+MG,+36300-220/@-21.1337817,-44.3050462,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0xa1c8926f7048cd:0x542b4c9c90c8d629!2m2!1d-44.2638196!2d-21.1338886?entry=ttu',
  },
  {
    titulo: 'Chafariz da Legalidade',
    imagem: './images/chafariz-da-legalidade.jpg',
    textoPreview:
      'No ano de 1834, fora construído um chafariz no Largo do Tamandaré, denominado Chafariz da Legalidade, pelo fato histórico da Vila de São João del-Rei ter sido consagrada capital da Província de Minas Gerais, durante a Revolta da Fumaça.',
    texto:
      'No ano de 1834, fora construído um chafariz no Largo do Tamandaré, denominado Chafariz da Legalidade, pelo fato histórico da Vila de São João del-Rei ter sido consagrada capital da Província de Minas Gerais, durante a Revolta da Fumaça. No Largo não havia muita água, por isso foi construído um aqueduto, que ia até a Ponte do Rosário, todo feito de tijolos e pedras, para facilitar o acesso das lavadeiras ao córrego do Lenheiro. O Chafariz, junto ao aqueduto, foram demolidos em 1895. Atualmente, ele encontra-se reconstruído, na Praça dos Expedicionários.',
    localizacao:
      'https://www.google.com/maps/dir/-21.13536,-44.2564608/Chafariz+da+Legalidade/@-21.1361015,-44.2600154,17z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0xa1c8905de72491:0x4bae5c1ce2150bf9!2m2!1d-44.2584201!2d-21.1368745?entry=ttu',
  },
  {
    titulo: 'Teatro Municipal',
    imagem: './images/teatro-municipal-sjdr.jpg',
    textoPreview:
      'Com uma imponente fachada em estilo greco-romano, o Teatro Municipal de São João del-Rei é um dos mais importantes teatros do interior brasileiro. Inaugurado em 1839, ele está localizado no centro da cidade e foi palco de grandes acontecimentos artísticos.',
    texto:
      'Com uma imponente fachada em estilo greco-romano, o Teatro Municipal de São João del-Rei é um dos mais importantes teatros do interior brasileiro. Inaugurado em 1839, ele está localizado no centro da cidade e foi palco de grandes acontecimentos artísticos. Sua arquitetura também chama atenção, em sua fachada é possível perceber rostos esculpidos que representam o drama, a comédia e a tragédia. Em seu interior encontra-se 480 poltronas estofadas, 190 em madeira e dez camarotes.',
    localizacao:
      'https://www.google.com/maps/place/Teatro+Municipal/@-21.1347945,-44.2585798,15z/data=!4m6!3m5!1s0xa1c88fdeed34df:0xa356fbbe06c0a322!8m2!3d-21.1347945!4d-44.2585798!16s%2Fg%2F1vg6vzbp?hl=pt-BR&entry=ttu',
  },
]

function geraPontoTuristico() {
  pontosTuristicos.forEach((ponto, index) => {
    mainContainerPontos.innerHTML += `
            <div class="container-pontos">
                <div class="container-pontos-image">
                    <img src="${ponto.imagem}" alt="Foto do ponto túristico ${ponto.titulo}" title="${ponto.titulo}" />
                </div>
                <div class="container-pontos-conteudo">
                    <h3>${ponto.titulo}</h3>
                    <p>${ponto.textoPreview}</p>
                    <div class="container-btn">
                        <button id="${index}" onclick="abrirModal(event)">Ver História</button>
                        <a class="btn-mapa" href="${ponto.localizacao}" target="_blank">Veja no mapa</a>
                    </div>
                </div>
            </div>
        `
  })
}

let modal = document.getElementById('myModal')

function abrirModal(e) {
  let id = e.target.id
  document.getElementById('myModal').style.display = 'block'
  document.getElementById(
    'titulo-modal'
  ).innerHTML = `${pontosTuristicos[id].titulo}`

  document.getElementById(
    'texto-modal'
  ).innerHTML = `${pontosTuristicos[id].texto}`
}

function fecharModal() {
  document.getElementById('myModal').style.display = 'none'
}

window.addEventListener('load', geraPontoTuristico)
