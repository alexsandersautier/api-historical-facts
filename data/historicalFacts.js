const historicalFactsData = [
	{
		"year": 1920,
		"fact": "As mulheres ganham o direito ao voto nos EUA"
	},
	{
		"year": 1921,
		"fact": "O partido comunista chinês é fundado"
	},
	{
		"year": 1922,
		"fact": "O império britânico diminui"
	},
	{
		"year": 1923,
		"fact": "Ocorreu o grande terremoto na região de Kanto, no Japão"
	},
	{
		"year": 1924,
		"fact": "Joseph Stalin assume o lugar de Vladmir Lenin"
	},
	{
		"year": 1925,
		"fact": "O estado americano processa John Thomas Scopes por ensinar evolucionismo em uma escola do Tennessee."
	},
	{
		"year": 1926,
		"fact": "Os EUA iniciam o seu sistema de autoestradas numeradas"
	},
	{
		"year": 1927,
		"fact": "Charles Lindbergh se torna a primeira pessoa a pilotar um avião sobre o oceano atlântico sem escalas."
	},
	{
		"year": 1928,
		"fact": "Amelia Earhart se torna a primeira mulher a cruzar o atlântico pilotando um avião."
	},
	{
		"year": 1929,
		"fact": "Ocorre a quebra da bolsa de valores de Nova York."
	},
	{
		"year": 1930,
		"fact": "Ho Chi Minh funda o partido comunista do Vietnã"
	},
	{
		"year": 1931,
		"fact": "A construção do Empire State Building é concluída."
	},
	{
		"year": 1932,
		"fact": "Hitler renúcia a sua cidadania austríaca e se torna alemão"
	},
	{
		"year": 1933,
		"fact": "Franklin  D. Roosvelt é eleito presidente dos Estados Unidos"
	},
	{
		"year": 1934,
		"fact": "Hitler se consolida no poder."
	},
	{
		"year": 1935,
		"fact": "O presidente Franklin Roosvelt anuncia o New Deal, criando o primeiro sistema de seguro social para aposentados do país."
	},
	{
		"year": 1936,
		"fact": "O corredor Afro-Americano Jesse Owens ganha 4 medalhas de ouro nas olimpíadas de Berlim durante o nazismo de Hitler."
	},
	{
		"year": 1937,
		"fact": "Trabalhadores da General Motors protestam por 44 dias ocupando a fábrica da GM e conseguem uma aumento de 5% no pagamento."
	},
	{
		"year": 1938,
		"fact": "O movimento anti-semita se inicia na Alemanha durante o Nazismo de Hitler."
	},
	{
		"year": 1939,
		"fact": "Tem início a segunda guerra mundial"
	},
	{
		"year": 1940,
		"fact": "O McDonalds é fundado."
	},
	{
		"year": 1941,
		"fact": "Tropas japonesas atacam a base de Pearl Harbor"
	},
	{
		"year": 1942,
		"fact": "Tropas americanas chegam a Irlanda do Norte para lutar na guerra da Europa."
	},
	{
		"year": 1943,
		"fact": "O químico suíço Albert Hoffman descobre acidentalmente o LSD"
	},
	{
		"year": 1944,
		"fact": "Ocorre a invasão da Normandia pelas forças aliadas para tirar as tropas nazistas da França"
	},
	{
		"year": 1945,
		"fact": "A segunda guerra mundial termina com ataques atômicos a Hiroshima e Nagazaki, que causaram a rendição do Japão."
	},
	{
		"year": 1946,
		"fact": "Tem início a geração Baby Boom, só em 1946 foram mais de 3.4 milhões de crianças nascidas só nos EUA."
	},
	{
		"year": 1947,
		"fact": "A Índia consegue sua independência do império britânico, mas acaba divida e se torna duas nações, a Índia, para os Hindús e o Paquistão, para os muçulmanos."
	},
	{
		"year": 1948,
		"fact": "Acontece o nascimento do estado de Israel"
	},
	{
		"year": 1949,
		"fact": "É fundada a Organização do Tratado do Atlântico Norte, a OTAN, para combater a ameaça Soviética."
	},
	{
		"year": 1950,
		"fact": "Tem início a Guerra das Coréias, quando a Coréia do Norte invade a Coréia do Sul, despertando a resposta imediata dos Estados Unidos. A guerra dura três anos."
	},
	{
		"year": 1951,
		"fact": "Julius e Ethel Rosenberg são condenados a morte nos EUA por espionagem, após terem vazado informações sobre bombas atômicas para a União Soviética."
	},
	{
		"year": 1952,
		"fact": "Os Estados Unidos detonam a primeira bomba de hidrogênio."
	},
	{
		"year": 1953,
		"fact": "Os cientistas James Watson e Francis Crick, da Universidade de Cambridge, são os primeiros a explicar o funcionamento do DNA na replicação dos genes e a sua transmissão para as futuras gerações."
	},
	{
		"year": 1954,
		"fact": "Linda Brown vence a disputa contra o conselho de educação e a suprema corte americana julga inconstitucional a segregação racial em escolas."
	},
	{
		"year": 1955,
		"fact": "Rosa Parks faz história ao se recursas a se levantar e dar lugar a um branco no ônibus. Sua prisão leva a um boicote a empresa e a ascenção do Pastor Martin Luther King Jr."
	},
	{
		"year": 1956,
		"fact": "Protestos na Hungria por democracia acaba na morte de milhares após invasão do Exercito Vermelho da Comunista União Soviética."
	},
	{
		"year": 1957,
		"fact": "O president Dwight Eisenhower ordena as tropas federais que proteja 9 alunos afro-americanos que começaram a estudar no colégio Little Rock para alunos brancos, essa foi a primeira ação do governo federal contra a segregação racial no país."
	},
	{
		"year": 1958,
		"fact": "Os Estados Unidos lançam seu primeiro satélite, o Explorer 1."
	},
	{
		"year": 1959,
		"fact": "Fidel Castro invade cuba e se consolida no poder, dando início a ditadura comunista."
	},
	{
		"year": 1960,
		"fact": "O restaurante Woolworth se recusa a atender 4 jovens afro-americanos, desencadeando uma enorme onda de protestos que durou 6 meses e resultou no fim da segregação nos restaurantes."
	},
	{
		"year": 1961,
		"fact": "Ocorre a construção do muro de Berlin"
	},
	{
		"year": 1962,
		"fact": "A União Soviética testa misseis em Cuba, a 145km ao sul de Miami, dando início a resposta dos EUA sob o comando de John F Kennedy. A resposta de Kennedy faz a União Soviética remover os mísseis de Cuba."
	},
	{
		"year": 1963,
		"fact": "John F. Kennedy é assassinado."
	},
	{
		"year": 1964,
		"fact": "O presidente Lyndon Johnson dá inicio a sua 'Guerra à Pobreza', destacando a necessidade de reduzir a probreza, acabar acabar com a segregação racial e cuidar da saúde dos idosos do país. Lyndon Johnson criou ainda o ato dos direitos civis no mesmo ano."
	},
	{
		"year": 1965,
		"fact": "O assassinato de Jimmy Lee Jackson pelas tropas do Alabama desencadeia uma passeata em protesto. O evento ficou conhecido como Domingo Sangrento."
	},
	{
		"year": 1966,
		"fact": "Mao Zedong inicia o extermínio de seus rivais políticos. O líder comunista enviou diversos opositores para campos de reeducação e trabalho forçado, e assassinou diversos outros que se opuseram ao seu governo."
	},
	{
		"year": 1967,
		"fact": "Acontece a guerra dos seis dias. Síria, Jordânia, Iraque e Egito atacam Israel, a guerra termina em 6 dias, com um cessar fogo após Israel ocupar areas importantes dos 4 países."
	},
	{
		"year": 1968,
		"fact": "Martin Luther King é assassinado."
	},
	{
		"year": 1969,
		"fact": "Neil Armstrong, Buzz Aldrin e Michael Collins são as primeiras pessoas a pisarem na lua"
	},
	{
		"year": 1970,
		"fact": "A guerra na ásia aumenta e desperta protestos anti-guerra nos Estados Unidos dado o involvimento do país no continente."
	},
	{
		"year": 1971,
		"fact": "New York Times publica documentos sobre o envolvimento do governo amerino na guerra do Vietnã"
	},
	{
		"year": 1972,
		"fact": "O Presidente Anti-Comunista Richard Nixon faz sua primeira viagem oficial a China, com o objetivo de melhorar a relação entre os dois países."
	},
	{
		"year": 1973,
		"fact": "A suprema corte define que os estados podem impedir o aborto a partir do terceiro trimestre de gestação, exceto quando a gestação oferece risco a vida da mulher."
	},
	{
		"year": 1974,
		"fact": "O presidente Richard Nixon Renuncia durante o processo de impeachment causado pelo escandalo de Watergate."
	},
	{
		"year": 1975,
		"fact": "Dois anos depois as últimas tropas americanas deixarem o Vietnã, as tropas comunistas capturam Saigon."
	},
	{
		"year": 1976,
		"fact": "Dois jatos super-sônicos Concorde levatam voo simultâneamente. Um partindo de Londres para o Barein, e outro de Paris, para o Rio de Janeiro."
	},
	{
		"year": 1977,
		"fact": "Os primeiros computadores pessoais modernos começam a surgir"
	},
	{
		"year": 1978,
		"fact": "Mais de 900 pessoas morrem em um suícidio em massa promovido por um culto em Jonestown, promovido por Jim Jones."
	},
	{
		"year": 1979,
		"fact": "O Irã se torna uma república islâmica"
	},
	{
		"year": 1980,
		"fact": "Ronald Reagan é eleito presidente dos Estados Unidos."
	},
	{
		"year": 1981,
		"fact": "Surge a AIDS nos Estados Unidos"
	},
	{
		"year": 1982,
		"fact": "Governo Mexicano diz a reserva federal dos Estados Unidos que o país não consegue pagar o empréstimo de 80 bilhões de dólares."
	},
	{
		"year": 1983,
		"fact": "Acontece o nascimento da Internet"
	},
	{
		"year": 1984,
		"fact": "Desastre químico em Bophal, India, afeta mais de 600 mil pessoas, matando mais de 15 mil dessas."
	},
	{
		"year": 1985,
		"fact": "Ronald Reagan se encontra com o Secretário Geral da União Soviética, Mikhail Gorbachev"
	},
	{
		"year": 1986,
		"fact": "A nave Challenger exploduiu 73 segundos após decolar do Cabo Canaveral, causando a morte de 7 astronautas."
	},
	{
		"year": 1987,
		"fact": "A bolsa Dow Jones tem uma queda de 508 pontos, uma situação pior que a da quebra de 1929."
	},
	{
		"year": 1988,
		"fact": "O Tenente Coronel Oliver North e o Vice Almirante John Pointdexter são indiciados por conspiração após venderem armas para o Irã a fim de facilitar a soltura de reféns americanos."
	},
	{
		"year": 1989,
		"fact": "Acontece a queda do muro de Berlin."
	},
	{
		"year": 1990,
		"fact": "Com o enfraquecimento da União Soviética e do comunismo, a Polônia dissolve o partido comunista e elege seu primeiro presidente, Lech Walesa."
	},
	{
		"year": 1991,
		"fact": "Os Estados Unidos vão para a guerra do oriente médio após Sadam Hussain invadir o Kuait."
	},
	{
		"year": 1992,
		"fact": "A guerra fria entre Rússia e os EUA termina semanas após o fim da União Soviética."
	},
	{
		"year": 1993,
		"fact": "É criada a União Européia."
	},
	{
		"year": 1994,
		"fact": "O site Amazon.com é lançado"
	},
	{
		"year": 1995,
		"fact": "Ataque terrorista acontece em Olklahoma com a explosão de um caminhão-bomba."
	},
	{
		"year": 1996,
		"fact": "A ovelha Dolly é Clonada com sucesso"
	},
	{
		"year": 1997,
		"fact": "A IBM Deep Blue se tornou a primeira máquina a derrotar um campeão do Xadrez, derrotando Garry Kasparov duas vezes e empatando com ele três vezes em 6 partidas."
	},
	{
		"year": 1998,
		"fact": "É lançado o buscador Google"
	},
	{
		"year": 1999,
		"fact": "A OTAN inicia sua primeira campanha militar"
	},
	{
		"year": 2000,
		"fact": "A estação espacial internacional é inaugurada."
	},
	{
		"year": 2001,
		"fact": "As torres gêmeas do World Trade Center são derrubadas em um ataque terrorista"
	},
	{
		"year": 2002,
		"fact": "George W. Bush cria o departamento de segurança nacional."
	},
	{
		"year": 2003,
		"fact": "Os Estados Unidos inciam os ataques ao Iraque"
	},
	{
		"year": 2004,
		"fact": "O Facebook é fundado"
	},
	{
		"year": 2005,
		"fact": "o Furacão Katrina destrói New Orleans."
	},
	{
		"year": 2006,
		"fact": "Saddam Hussein é executado"
	},
	{
		"year": 2007,
		"fact": "Apple anuncia seu primeiro smartphone, o iPhone"
	},
	{
		"year": 2008,
		"fact": "O indicador Dow Jones despenca outra vez, dessa vez caindo 777 pontos."
	},
	{
		"year": 2009,
		"fact": "Barack Obama é eleito presidente dos Estados Unidos e se torna o primeiro presidente afro-americano do país."
	},
	{
		"year": 2010,
		"fact": "11 trabalhadores morrem e 17 ficam feridos em uma explosão na costa da Lousiana em uma exploração de óleo."
	},
	{
		"year": 2011,
		"fact": "Bin Laden é assassinado."
	},
	{
		"year": 2012,
		"fact": "Cientistas do CERN descobrem uma nova partícula através do colisor de hadrons que eles acreditam ser o Bóson de Higgs, a chamada 'Partícula de Deus'."
	},
	{
		"year": 2013,
		"fact": "Edward Snowden expões segredos de estado dos Estados Unidos e de governos europeus sobre espionagem de outros países."
	},
	{
		"year": 2014,
		"fact": "O Presidente Russo Vladmir Putin orquestra anexar a Crimeia à Rússia, causando sanções dos líderes mundiais ao país."
	},
	{
		"year": 2015,
		"fact": "A nave New Horizon se torna o primeiro objeto criado pela humanidade a passar por Plutão e observar o planeta de perto."
	},
	{
		"year": 2016,
		"fact": "Donald Trump é eleito presidente dos Estados Unidos"
	},
	{
		"year": 2017,
		"fact": "Em um espaço de 4 semanas, 3 furações atingem os Estados Unidos, Harvey, Irma e Maria atingiram o Texas, Florida e  o Caribe"
	},
	{
		"year": 2018,
		"fact": "Queimadas destroem a Carolina do Norte"
	},
	{
		"year": 2019,
		"fact": "Protestos ocorrem em Hong Kong contra tentativa da China de tirar a autonomia do país."
	},
	{
		"year": 2020,
		"fact": "Tem início a pandemia de COVID-19"
	}
]

exports.historicalFactsData = historicalFactsData;