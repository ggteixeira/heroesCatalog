# HEROES CATALOG

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
- [ ] ESlint
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

## Day 3/6: (Thursday)

Today I took a programming logic test. Since I was a bit ahead of time, I decided to spend the few hours left in the day to review the code to improve my understanding about the code introduced in the technical interview.

But I made some improvements, though. I added some custom colors do Tailwind to resemble a Printi-ish color pallete, and I've made some README updates.

## Day 4/6: (Friday)

I spent the friday evening studying and trying to figure out how to display fetched data from Marvel's API into dinamically-generated HTML. Minor progress today.

## Day 5/6: (Saturday)

I've managed to display all the fetched content into the main page! :tada:

The next step is to show details about each character based on their id.

I have to be **sincerely clear** about something: I've received a little help from [a friend](https://github.com/vitorprado/). Although is **definetely** not like he's coded something instead of me. All the code was ready and done by me; he just helped me to figure out what's wrong was going on with Axios, and the way it fetches and treats data. 100% of the job has done by me, he **literally** just helped me with switching from Axios to Fetch, [as this three lines shows](https://github.com/guiemi/heroesCatalog/commit/8e1f4671003e41cf693e96d4d322485a7a08e4be?diff=split#diff-0a237517b01d7169dc1d20d2ecd0570bR18). 

* Initially, I've displayed all details in the main page (names, descriptions, thumbnails, number of comics), but then I figured out that it there'd be no reason for a details page if all the details were there, so I sticked to the provided checklist.

- [ ] I tried to deploy the app in **Heroku** as well, but couldn't accomplish it yet unfortunately. Minor issues to  be solved later.

## Day 6/6

- [ ] Colocar todas as referências no README
- [ ] Colocar o logo da Marvel no README
- [ ] Give to the user the choice of loading a number of heroes (since pagination isn't possible within the remaining time)

* I've got another **error 429** at 2pm, so I started to do some other things.

***

## Bibliografia e Referências

* Coder une application React.js de A à Z [ Débutants FR ]: https://www.youtube.com/watch?v=NJ-XG6aq-I0&list=PLmYBIzXGbEzKPQCyvuKU4Lkmn17gx9EEz
* How to work with Mavel API: https://www.youtube.com/playlist?list=PLaEFB-zhBL5of8Dks-GrZrx7y4gfK6yvX
* How to fetch data with React Hooks?: https://www.robinwieruch.de/react-hooks-fetch-data
* 