const Examples = [
  {
    name:'Waggle',
    image: '/assets/Waggle/SearchResultsPage.png',
    imgHover: '/assets/Waggle/LandingPageBrunch.png',
    aboutBody: 'A location-based, social-media app that allows you to search for dog-friendly places, find cute dogs, and meet other local dog-lovers!',
    url: 'http://_waggle.surge.sh/',
    githubUrl: 'https://github.com/shannonriester/Waggle',
    day: 'Day 44',
    length: '20 days',
    prompt: 'The purpose of the final project is to showcase your abilities as a developer, not to create the Next Big Thing (if you can do both, kudos). Make sure to decide beforehand what you think your greatest strengths are and use your application and presentation as a platform to showcase those strengths. Together, your final project and portfolio should tell a story about what sets you apart from other developers so that you can stand out when seeking employment.',
    approach: '',
    best: 'The most satisfying part of Waggle was successfully uniting my race conditions into a cohesive result. The asynchronousity of 4 APIs can make things challenging...Most of my methods on my collections are Promises—the only assured way I could do in order to get the information I needed from Yelp/Google/Geo–based location. It took a very long time. Probably a week. But I was finally able to render my GoogleMap–React component with the corresponding place–markers, indicating the Yelp coordinates/location from the search results that the user queried in the search bar. I had to do all of this after I successfully got the user’s location using my geo-location API. If just one of these was off, the project would crash. I can’t underestimate how exciting and vindicating it felt to see the Search–Results–Page come together for the first time.'
    hardest: 'The hardest part was probably the best part as well. I really enjoyed this project, especially because it was all mine: my idea, my code, my design, everything. One of the hardest parts was presenting Waggle to employers on Demo Day, and knowing there were a lot of bugs I needed to fix, design elements I wanted to change, or more features I wanted to add. We were on a code-freeze, so I technically wasn\'t allowed to touch my code until after my presentation. There are too many horror stories of previous students changing just a little CSS here and there and then their entire project crashes on the worst day possible. Demo day went great for me however!',
  },
  {
    name:'BeatTheBands',
    image: '/assets/BeatTheBands/SearchPage.png',
    imgHover: '/assets/BeatTheBands/VoteModal.png',
    aboutBody: 'Beat the Bands, was built using Spotify\'s API. Users can vote up/down which artist they\'d prefer see visit their city.',
    url: 'https://shannonriester.github.io/Beat-The-Bands-day-38/',
    githubUrl: 'https://github.com/shannonriester/Beat-The-Bands-day-38',
    day: 'Day 38',
    length: '1 week',
    prompt: 'A local music venue has asked you to build a promotional app: Bring The Band! Bring the band will allow users to vote for musicians they want to see at the venue. The venue hopes to gain a following, and boost their patron engagement by tracking popular bands, and trends in their market share.',
    approach: '',
    best: 'By day 38, I was feeling confident using React, Backbone, various APIs and writing custom functions to perform more complicated tasks. I loved working with the Spotify API—their docs are easy to read and understand, so I was able to start playing with their data rather quickly (about half an hour!). The best part was finally getting my \'voteToggle\' method on my VotedCollection to work. At first, it was a complicated conditional statement to take into account. If a user had already voted on that band, I wanted them to \'unvote\' by clicking on the vote button; if a user had NOT yet voted on that band, then his/her vote should be cast as contributing a single vote; and if the band had not been voted for by any user yet, I needed to create a new vote–model and add it to my collection. This is one single function that includes three separate functions that either add, destory, or create a vote–model to my backend.'
    hardest: 'Testing was the hardest part, but also the most helpful. We had just learned about unit testing the day before, so just the execution and syntax alone were daunting enough. I quickly realized that a tests are only as good as the operation it performs. Testing if an element is indeed a <div> is helpful, but testing whether or not a method resolves a promise is a lot more helpful for me.',
  },
  {
    name:'PokemonBattleGame',
    imgHover: '/assets/PokemonGame/LandingPage.png',
    image: '/assets/PokemonGame/BattlePage.png',
    aboutBody: 'Collaborating on a team can be hard, but my peers and I really pulled together, having so much fun pair-programming, and built this awesome game!',
    url: 'https://marklyck.github.io/Pokemon/',
    githubUrl: 'https://github.com/MarkLyck/Pokemon',
  },
  {
    name:'JeopardyGame',
    imgHover: '/assets/Jeopardy/QuestionModal.png',
    image: '/assets/Jeopardy/Gameboard.png',
    aboutBody: 'My Jeopardy game renders random categories and questions from actual Jeopardy clues and questions. Play for yourself!',
    url: 'http://jeopardy_sriester.surge.sh/',
    githubUrl: 'https://github.com/shannonriester/Day-33-Jeopardy',
  },
]

export default Examples;
