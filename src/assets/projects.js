const projects = [
  {
    "id": 15,
    "slug": "rcw",
    "title": "Corp Website",
    "thumbnail": "",
    "description": "Corporate website created with React. It was a great project to practice CSS animation, useEffect, useState, useRef and React Router. ",
    "siteUrl": "https://portfolio.pitju.hu/rcw/",
    "githubUrl": "https://github.com/tjupiter/react-corporate-website",
    "tags": "html, css, javascript, react"
  },
  {
    "id": 14,
    "slug": "gsap-landing-page",
    "title": "GSAP Landing Page",
    "thumbnail": "",
    "description": "Landing page animated with GSAP. A wonderful Javascript animation library built for professionals. A fantastic intro for elegant animations.",
    "siteUrl": "https://portfolio.pitju.hu/gsap-landing-page/",
    "githubUrl": "https://github.com/tjupiter/gsap-landing-page",
    "tags": "html, css, javascript, gsap"
  },
  {
    "id": 13,
    "slug": "meme-generator",
    "title": "Meme Generator",
    "thumbnail": "",
    "description": "I really enjoyed working on this project. It was created using React. It is to showcase my ability to use REST API (GET/POST) and async/await functions, manage States in React and to use UseEffect.",
    "siteUrl": "https://portfolio.pitju.hu/meme-generator/",
    "githubUrl": "https://github.com/tjupiter/meme-generator",
    "tags": "html, css, javascript, react"
  },
  {
    "id": 12,
    "slug": "watchlist-vanillajs",
    "title": "Movie Watch List",
    "thumbnail": "",
    "description": "This website was created using vanilla JavaScript. It fetches data from Open Movie Database API. The watchlist is stored in the localStorage. It was a fun project to work on and my plan is to rebuild the website using React and to add more functionality.",
    "siteUrl": "https://portfolio.pitju.hu/watchlist-vanillajs/",
    "githubUrl": "https://github.com/tjupiter/watchlist-vanillajs",
    "tags": "html, css, javascript"
  },
  {
    "id": 11,
    "slug": "react-todo-app",
    "title": "React Todo App",
    "thumbnail": "",
    "description": "Todo App created with React. A great project to practice creating and using components and to get familiar with React. Datepicker were added to day and time selection and Framer Motion was used to animate components. Future features to come, ie. countdown and task description.",
    "siteUrl": "https://portfolio.pitju.hu/react-todo-app/",
  "githubUrl": "https://github.com/tjupiter/react-todo-app",
    "tags": "html, css, javascript, react"
  },
  {
    "id": 10,
    "slug": "game-of-war",
    "title": "Game of War",
    "thumbnail": "",
    "description": "Game Of War Card Game consums data from Deck of Cards API. A classic card game where both player gets a card and the player with the highest card gets a point. The game continues until all the cards have been dealt. The player with the highest score wins.",
    "siteUrl": "https://portfolio.pitju.hu/game-of-war/",
  "githubUrl": "https://github.com/tjupiter/game-of-war",
    "tags": "html, css, javascript"
  },
  {
    "id": 9,
    "slug": "pendra",
    "title": "Online Hosting",
    "thumbnail": "",
    "description": "Mockup Online Hosting website created with HTML and CSS. This website was created based on a NetNinja tutorial. I really like the clean design of the site and it is my plan to implement more functionality into it over time.",
    "siteUrl": "https://portfolio.pitju.hu/pendra/",
  "githubUrl": "https://github.com/tjupiter/pendra-mockup-site",
    "tags": "html, css"
  },
  {
    "id": 8,
    "slug": "alpinejs",
    "title": "Alpine.js Demo Site",
    "thumbnail": "",
    "description": "This site was created to practice using Alpine.js. I really enjoy that library, really lightweight, easy to use and shows many resembelance to Vue.js. This is somthing I definitely will use in future projects.",
    "siteUrl": "https://portfolio.pitju.hu/alpinejs/",
    "githubUrl": "https://github.com/tjupiter/alpinejs-demosite",
    "tags": "html, css, apline.js"
  },
  {
    "id": 7,
    "slug": "wbb",
    "title": "WelcomeBabyBags",
    "thumbnail": "",
    "description": "That was the first real life project that I could work on as a freelancer, thanks for my friend. It was created using Laravel and was styled with TailwindCss. It was a great project and I am proud of making several pages of the whole site.",
    "siteUrl": "https://www.welcomebabybags.de",
    "githubUrl": "",
    "tags": "html, tailwind, laravel"
  },
  {
    "id": 6,
    "slug": "ea",
    "title": "Evas Arche",
    "thumbnail": "",
    "description": "It was an amazing feeling working on another real life project. Apart from 'Veranstaltungen' page it was my job to create the whole site. It was a challenging project as it was built using Laravel.",
    "siteUrl": "https://www.evas-arche.de",
    "githubUrl": "",
    "tags": "html, css, laravel"
  },
  {
    "id": 5,
    "slug": "blog",
    "title": "Personal Blog ",
    "thumbnail": "",
    "description": "Practicing responsive web design by creating a mokcup personal website. It was created using a FreeCodeCamp tutorial. It was amongst the very first projects I worked at. It is my plan to re-vamp the page at some point and implement all the things I've learnt so far.",
    "siteUrl": "https://portfolio.pitju.hu/blog",
    "githubUrl": "",
    "tags": "html, css"
  },
  {
    "id": 4,
    "slug": "vtd",
    "title": "Todo App With Vue.js",
    "thumbnail": "",
    "description": "This one page app was created using Vue.js styled with TailwindCSS. It was an exciting project to work on as it helped me to understand how Vue works in general, to learn to set up routing and a backend JSON server for data handling.",
    "siteUrl": "https://portfolio.pitju.hu/vtd/",
    "githubUrl": "https://github.com/tjupiter/vue-todo-app",
    "tags": "html, tailwindcss, vue.js"
  },

  {
    "id": 3,
    "slug": "fav-books",
    "title": "Books with Vue.js",
    "thumbnail": "",
    "description": "A little project created with Vue.js. This gave me a great opportunity to get understand Vue.js as a framework more and to learn creating components, setting up routing, passing props and getting familiar with directives such as v-for.",
    "siteUrl": "https://portfolio.pitju.hu/fav-books/",
  "githubUrl": "https://github.com/tjupiter/fav-books",
    "tags": "html, css, vue.js"
  },
  {
    "id": 2,
    "slug": "2d-breakout",
    "title": "2D Breakout Game",
    "thumbnail": "",
    "description": "An early project where I learnt how to build a 2d breakout ball game using vanilla javascript. I really enjoyed that project and it made me wanting to fine tune the project and to learn more about games ran in web browsers.",
    "siteUrl": "https://portfolio.pitju.hu/2d-breakout/",
    "githubUrl": "",
    "tags": "html, css, javascript"
  },
  {
    "id": 1,
    "slug": "ball-game",
    "title": "Ball Game",
    "thumbnail": "",
    "description": "An early project where I learnt how to build a 2d breakout ball game using vanilla javascript. I really enjoyed that project and it made me wanting to fine tune the project and to learn more about games ran in web browsers.",
    "siteUrl": "https://portfolio.pitju.hu/ball-game/",
    "githubUrl": "",
    "tags": "html, css, javascript"
  }
]

export default projects;