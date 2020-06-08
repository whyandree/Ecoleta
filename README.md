<h1 align="center"> 
Ecoleta
</h1>

<h3 align="center">
Marketplace para coletas de resíduos
</h3>

<p align="center">
#NextLevelWeek 🚀 Rocketseat
</p>

<h2>🛸 Sobre a aplicação </h2>
<blockquote>Projeto foi inteiramente produzido durante o evento #NextLevelWeek da RocketSeat.</blockquote>

<p align="justify">O <b>Ecoleta</b> tem como objetivo apresentar as pessoas novas formas de encontrar lugares
onde coletam resíduos que não podem ser descartados em lixos
comuns. Visto que hoje em dia o acumulo desse tipo de lixo tem sido
grande, buscamos alguma maneira de ajudar a preservar o meio ambiente
e facilitar a vida do usuário que busca por um ponto de coleta.</p>

<h1 align="center" >
 <img alt="Ecoletar" src="https://user-images.githubusercontent.com/62680019/84038303-275f1800-a976-11ea-86cf-28be93c1cf74.jpg" 
      width="620px"> 
</h1>

<p>O usuário que tem o
estabelecimento onde coleta resíduos pode fazer o cadastro através
do site, passando informações de contato, endereço e os itens que coleta.</p>
<br />
<p>Já o usuário comum pode procurar por pontos com base na sua localidade
através do dispositivo móvel.</p>

<h2>🔧 Ferramentas utilizadas </h2>
<p>Para o desenvolvimento do projeto, foram utilizados as principais ferramentas:</p>
<ul>
  <h4>Backend da aplicação:</h4>
    <li><a href="http://nodejs.org">NodeJS</a></li>
    <li><a href="https://sqlite.org/index.html">SQLite3</a></li>
    <li><a href="http://knexjs.org/">Knex</a></li>
  <h4>Frontend da aplicação:</h4>
    <li><a href="https://pt-br.reactjs.org/">ReactJS</a></li>
    <li><a href="https://github.com/axios/axios">Axios</a></li>
  <h4>Mobile da aplicação:</h4>
    <li><a href="https://reactnative.dev/">ReactNative</a></li>
    <li><a href="https://expo.io/">Expo</a></li>
</ul>

## ⚙ Rodando a aplicação ##
  - É **necessário** possuir o **[Node.js](https://nodejs.org/en/)** em sua máquina.
  - Também, é **preciso** ter um gerenciador de pacotes, seja o **[NPM](https://www.npmjs.com/)** ou **[Yarn](https://yarnpkg.com/)**.
  - E, é **essencial** ter o **[Expo](https://expo.io/)** instalado de forma global na máquina.
  - Por fim, para rodar a aplicação mobile no celular **você pode** instalar aplicativo do Expo. 
  
1. Clone o repositório em sua maquina utilizando :

```sh
  $ git clone https://github.com/vitorserrano/ecoleta.git
```
2. Instale as dependencias do projeto :
```sh
  $ npm install
```
3. Rode o projeto :
```sh
  # Rodando a criação do banco
  $ cd server
  $ npm run knex:migrate
  $ npm run knex:seed

  # Inicie a API
  $ npm run dev

  # Iniciando a aplicação Web
  $ cd web
  $ npm start

  # Iniciando a aplicação mobile
  $ cd mobile
  $ npm start
```

E pronto, a aplicação já estará rodando e será possivel vizualizar na web e a aplicação mobile no app do Expo.
<hr>
<h4 align="center">
    Feito com 💜 by <a href="https://www.linkedin.com/in/andreluizx/" target="_blank">André Luiz</a>
</h4>
