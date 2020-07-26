# HEROES CATALOG 🦸🏾‍♂️

## The heroes' database you were looking for

[![GitHub issues](https://img.shields.io/github/issues/guiemi/heroesCatalog)](https://github.com/guiemi/heroesCatalog/issues) [![GitHub forks](https://img.shields.io/github/forks/guiemi/heroesCatalog)](https://github.com/guiemi/heroesCatalog/network) [![GitHub stars](https://img.shields.io/github/stars/guiemi/heroesCatalog)](https://github.com/guiemi/heroesCatalog/stargazers) [![GitHub license](https://img.shields.io/github/license/guiemi/heroesCatalog)](https://github.com/guiemi/heroesCatalog)


![](https://github.com/guiemi/Heroes_Catalog/blob/master/media/marvel-logo.svg)

# Resume

Heroes Catalog is a React application that fetches data directly from [Marvel API](https://developer.marvel.com/) and displays some interesting basic infos about characters, such like name, description, image, and the number of comics belonging to them. You can either access it online through Heroku or follow the next topic, installation.

Access it by clicking here: https://heroescatalog.herokuapp.com/

# Installation & Requirements

Installation of **Heroes Catalog** is pretty straightforward, since you have `node` and `npm` installed in your machine. If you haven't already, simply follow the instructions in [Node.js website](https://nodejs.org/en/download/). 

Afterwards you should install Yarn (package manager). Follow [their installation guide](https://classic.yarnpkg.com/en/docs/install#mac-stable) for specific instructions for your OS.

With both `npm`  and `yarn`installed, these commands will be useful:

* `npm install`: Install all dependencies needed to run the app
* `yarn start`: Start the local server
  * To access the local server, just visit `http://localhost:8080/` to see **Heroes Catalog** running locally. It has **hot reload** activated by default, so it refreshes every time a change is made in the code. Be aware of that, and enjoy.

# How it works

# What I've learned / What I've done on each day

## Must-haves

- [x] React, Redux, React-router, ECMA6+ (BabelJS)
  - [x] React,
  - [ ] Redux
  - [x] React-router (react-router-dom)
  - [x] ECMAScript 6+ (BabelJS)
- [x] Responsive (FlexBox, CSS Grid or both)
  - [x] Responsiveness + CSS ([Tailwindcss](https://tailwindcss.com/))
- [x] Configure your own webpack
- [x] **Do not** use `create-react-app` command (set up the project manually)
- [x] Clean and readable code (english-only variable names)
- [ ] SEO: Semantic HTML
- [ ] Avoid uneeded renders in order to achieve a good performance
- [x] Create a README written in english
- [ ] Use BitBucket
- [ ] Deploy the application (Heroku)

## Recommended

- [ ] Styled-components or emotion
- [x] ESlint
- [ ] Unit tests and integration tests
- [ ] Flow type

***

## Day 1/6: Manually setting up the project (Tuesday)

Today I learned how to manually set up the React project. It wasn't easy, but I enjoyed accomplishing the task. It felt good to see everything working by my own hands. In order to save time I decided to use [TailwindCSS](https://tailwindcss.com/) for styling.

### Progress

- [x] Babel
- [x] Webpack
- [x] React, React DOM, React Router, Redux
- [x] Tailwind (CSS framework)

## Day 2/6: Building all pages and navigation between them (Wednesday)

* Homepage/Character Screen
  * [x] Homepace/Character Screen
  * [x] Header
  * [x] Footer
* [ ] Login Screen
* [x] About Page



**PLUS**: I've managed to sucessfully fetch Marvel's API! It shortens one of the next steps, that is displaying all the data gathered into the main page. :tada: 

## Day 3/6 (Thursday)

Today I took a programming logic test. Since I was a bit ahead of time, I decided to spend the few hours left in the day to review the code to improve my understanding about the code introduced in the technical interview.

But I made some improvements, though. I added some custom colors do Tailwind to resemble a Printi-ish color pallete, and I've made some README updates.

## Day 4/6: Studying useEffects and another Hooks (Friday)

I spent the friday evening studying and trying to figure out how to display fetched data from Marvel's API into dinamically-generated HTML. Minor progress today.

## Day 5/6: Displaying fetched data (Saturday)

I've managed to display all the fetched content into the main page! :tada:

The next step is to show details about each character based on their id.

I have to be **sincerely clear** about something: I've received a little help from [a friend](https://github.com/vitorprado/). Although is **definetely** not like he's coded something instead of me. All the code was ready and done by me; he just helped me to figure out what's wrong was going on with Axios, and the way it fetches and treats data. 100% of the job has done by me, he **literally** just helped me with switching from Axios to Fetch, [as this three lines shows](https://github.com/guiemi/heroesCatalog/commit/8e1f4671003e41cf693e96d4d322485a7a08e4be?diff=split#diff-0a237517b01d7169dc1d20d2ecd0570bR18). 

* Initially, I've displayed all details in the main page (names, descriptions, thumbnails, number of comics), but then I figured out that it there'd be no reason for a details page if all the details were there, so I sticked to the provided checklist.

- [ ] I tried to deploy the app in **Heroku** as well, but couldn't accomplish it yet unfortunately. Minor issues to  be solved later.

## Day 6/6: (Sunday)

- [x] Add all references into the README
- [x] Add Marvel logo into the README
- [ ] Give to the user the choice of loading a number of heroes (since pagination isn't possible within the remaining time)
- [ ] **Add a screenshot** of the main page in the README
- [ ] **body background color!**

* I've got another **error 429** at 2pm, so I started to do some other things.

***

## References & Bibliography

### YouTube Videos

* [Coder une application React.js de A à Z [ Débutants FR ]](https://www.youtube.com/watch?v=NJ-XG6aq-I0&list=PLmYBIzXGbEzKPQCyvuKU4Lkmn17gx9EEz) (Donkey Geek)
* [How to work with Marvel API](https://www.youtube.com/playlist?list=PLaEFB-zhBL5of8Dks-GrZrx7y4gfK6yvX) (Mintra Ruensuk)
* [ReactJS para iniciantes](https://www.youtube.com/playlist?list=PLv2oOZboUtKMMszyFDrMz-cVs4pKqDssM) (Vinicius Dacal)
* [A High Level Overview of React](https://www.youtube.com/watch?v=FRjlF74_EZk) (Zac Gordon)
* [React JS Crash Course](https://www.youtube.com/watch?v=sBws8MSXN7A&t=1000s) (Traversy Media)
* [React Crash Course 2020](https://www.youtube.com/watch?v=mACw_G-okPE&list=PL41lfR-6DnOqPIIdmbl_RMS-c09M2m8XN&index=2&t=6013s) (Quentin Watt Tutorials)
* [Diferentes maneiras de usar o console no JavaScript](https://www.youtube.com/watch?v=BRprc9g6j3c) (BrazilJS)
* [React Crash Course with the Marvel API](https://www.youtube.com/playlist?list=PLWWyzc5ehM92Sp4T1NE1-_lELthtR1Wgz) (Coding Blocks)
* [Create a simple login system](https://www.youtube.com/watch?v=4BhhGs0PFHU) (FullStack Development)
* [React Hooks Tutorial - 12 - Fetching data with useEffect Part 1](https://www.youtube.com/watch?v=bYFYF2GnMy8) (Codevolution)
* [O que é API? (CONSUMINDO A API DA MARVEL)](https://www.youtube.com/watch?v=kHjnnEBVgw4&t=1110s) (Sou Programador)
* [WEB APP REACTJS POKEMON API](https://www.youtube.com/watch?v=n1UJQK6tqHM) (Raphael de Falco Ayres)
* [React Axios | Tutorial for Axios with ReactJS for a REST API](https://www.youtube.com/watch?v=12l6lkW6JhE&t=108s) (Adrian Twarog)
* [React Hooks - usEffect for Async - Axios fetch data](https://www.youtube.com/watch?v=3d5czfqXjlU) (Alex the Entreprenerd)
* [How to build an app with Marvel's API](https://www.youtube.com/watch?v=gar-ROuyIK0&t=559s) (Coder Foundry)
* [JavaScript Array map method](https://www.youtube.com/watch?v=hfYa4ugeyuc&t=46s) (Steven Griffith)
* [React #5 - Como consumir dados da API com React](https://www.youtube.com/watch?v=vfrEAz0BSbA&t=628s) (Celke)
* [Fetching Data from an API with React Hooks useEffect](https://www.youtube.com/watch?v=k0WnY0Hqe5c&t=369s) (Ben Awad)
* [React router with hooks (useHistory useParam useLocation)](https://www.youtube.com/watch?v=CZeulkp1ClA) (techsith)



### Texts/Tutorials

* [How to fetch data with React Hooks?](https://www.robinwieruch.de/react-hooks-fetch-data) (Robin Wieruch)
* [Fazendo o deploy de uma aplicação React Para o Heroku](https://medium.com/@becosta/https-medium-com-becosta-fazendo-deploy-de-um-app-react-para-o-heroku-45ff30003c4a) (Betina Costa)
* [Fetching Data and Updating State with Hooks](https://www.pluralsight.com/guides/fetching-data-updating-state-hooks) (Marques Woodson)
* [How to Deploy Your React App to Heroku](https://medium.com/better-programming/how-to-deploy-your-react-app-to-heroku-aedc28b218ae) (Daniel Stoica)
* [How to use Flexbox to create a modern CSS card design layout](https://getflywheel.com/layout/flexbox-create-modern-card-design-layout/) (Abbey Fitzgerald)
* [react-marvel (GitHub repository)](https://github.com/OmerHerera/react-marvel) (Omer Herera)
* [React Native: Consumindo a API da Marvel](https://medium.com/@ecavalcanti/react-native-consumindo-a-api-da-marvel-c444e0bc1c8a) (Eric Cavalcanti)
* [React onClick Event Handling (With Examples)](https://upmostly.com/tutorials/react-onclick-event-handling-with-examples) (Upmostly)
* [Usando Effect Hook (Hook de Efeito)](https://pt-br.reactjs.org/docs/hooks-effect.html) (reactjs.org)
* [Semantic HTML](https://www.pluralsight.com/guides/semantic-html) (Miroslav Gajic)
* [React Hooks and functional programming for the lazy developer](https://codeburst.io/react-hooks-and-functional-programming-for-the-lazy-developer-e207a526b0f5) (Sezgi Uluçam)
* [React Hooks and a Cache from Scratch](https://medium.com/@ni3t/caching-api-results-client-side-with-react-hooks-5f3070d6bdaa) (Nick Bell)
* [Marvel Developer Portal](https://developer.marvel.com/) (Marvel Documentation)
* [JavaScript's Lambda and Arrow Functions](https://www.vinta.com.br/blog/2015/javascript-lambda-and-arrow-functions/) (Vinta)
* [How to use Axios with React (Everything you need to know)](https://designrevision.com/react-axios/) (Catalin Vasile)
* [How to Load Data from a REST API with React Hooks](https://www.andreasreiterer.at/rest-api-react-hooks/) (Andreas Reiterer)
* [How to fetch data in React](https://www.robinwieruch.de/react-fetching-data) (Robin Wieruch)
* [Hoisting](https://developer.mozilla.org/pt-BR/docs/Glossario/Hoisting) (MDN web docs (Mozilla))
* [Fetch Marvel API Heroes with MD5 Hash](https://developer.apple.com/forums/thread/125394) (Apple Developer)
* [Fetching Data and Updating State in a React Class](https://www.pluralsight.com/guides/fetching-data-updating-state-react-class) (PluralSight)
* [Fetch data with loading and error state in React Hooks](https://andrewmmc.com/blog/2020/handle-fetch-state-in-react-hooks/) (Andrew Mok)
* [Fetch an API with React Hooks](https://levelup.gitconnected.com/fetch-an-api-with-react-hooks-79d509a052a0) (Preston Elliott)
* [Falsy Values in JavaScript](https://www.freecodecamp.org/news/falsy-values-in-javascript/) (FreeCodeCamp)
* [Entendendo React e Redux de uma vez por todas](https://medium.com/@hliojnior_34681/entenda-react-e-redux-de-uma-vez-por-todas-c761bc3194ca) (Hélio Kröger)
* [Entendendo a Context API do React: criando um componente de loading](https://medium.com/reactbrasil/entendendo-a-context-api-do-react-criando-um-componente-de-loading-a84f84007dc7) (William Queiroz)
* [Deploying React with Zero Configuration](https://blog.heroku.com/deploying-react-with-zero-configuration) (Mars Hall)
* [CSS Flexbox #14: How to Build a Card Layout in Flexbox](https://www.ostraining.com/blog/webdesign/card-layout-using-flexbox/) (OsTraining)
* [Criando seus próprios Hooks](https://pt-br.reactjs.org/docs/hooks-custom.html) (Reactjs.org)
* [Create a React project from scratch (without create-react-app)](https://medium.com/@tim.givois.mendez/create-a-react-project-from-scratch-without-create-react-app-f02fce4e05b) (Tim Givois)
* [Consumo de APIs em .NET Core: utilizando a Marvel Comics API](https://medium.com/@renato.groffe/consumo-de-apis-em-net-core-utilizando-a-marvel-comics-api-ebe9cc858589) (Renato Groffe)
* [Consuming REST APIs In React With Fetch And Axios](https://www.smashingmagazine.com/2020/06/rest-api-react-fetch-axios/) (Shedrack Akintayo)
* [Consumindo uma API](https://alefesouza.github.io/workshop-react/api/) (Alefe Souza)
* [A Complete Beginner's Guide to React Router (Including Router Hooks)](https://www.freecodecamp.org/news/a-complete-beginners-guide-to-react-router-include-router-hooks/) (Ibrahima Ndaw)

### Books/Chapters/Articles

* [Eloquent JavaScript](https://eloquentjavascript.net/) (Marijn Haverbeke)
