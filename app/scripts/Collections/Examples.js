let projects = [
  {
    name:'Waggle',
    image: '/assets/Waggle/SearchResultsPage.png',
    imgHover: '/assets/Waggle/LandingPageBrunch.png',
    projectImages: ['/assets/Waggle/LandingPageBrunch.png', '/assets/Waggle/MatchedView.png', '/assets/Waggle/MobileMapView.png', '/assets/Waggle/SearchResultsPage.png', '/assets/Waggle/Code_GoogleAPI.png'],
    aboutBody: 'A location-based, social-media app that allows you to search for dog-friendly places, find cute dogs, and meet other local dog-lovers!',
    url: 'http://_waggle.surge.sh/',
    githubUrl: 'https://github.com/shannonriester/Waggle',
    day: 'Day 44',
    length: '20 days',
    prompt: 'The purpose of the final project is to showcase your abilities as a developer, not to create the Next Big Thing (if you can do both, kudos). Make sure to decide beforehand what you think your greatest strengths are and use your application and presentation as a platform to showcase those strengths. Together, your final project and portfolio should tell a story about what sets you apart from other developers so that you can stand out when seeking employment.',
    best: 'The most satisfying part of Waggle was successfully uniting my race conditions into a cohesive result. The asynchronousity of 4 APIs can make things challenging...Most of my methods on my collections are Promises—the only assured way I could do in order to get the information I needed from Yelp/Google/Geo–based location. It took a very long time. Probably a week. But I was finally able to render my GoogleMap–React component with the corresponding place–markers, indicating the Yelp coordinates/location from the search results that the user queried in the search bar. I had to do all of this after I successfully got the user’s location using my geo-location API. If just one of these was off, the project would crash. I can’t underestimate how exciting and vindicating it felt to see the Search–Results–Page come together for the first time.',
    hardest: 'The hardest part was probably the best part as well. I really enjoyed this project, especially because it was all mine: my idea, my code, my design, everything. One of the hardest parts was presenting Waggle to employers on Demo Day, and knowing there were a lot of bugs I needed to fix, design elements I wanted to change, or more features I wanted to add. We were on a code-freeze, so I technically wasn\'t allowed to touch my code until after my presentation. There are too many horror stories of previous students changing just a little CSS here and there and then their entire project crashes on the worst day possible. Demo day went great for me however!',
  },
  {
    name:'BeatTheBands',
    image: '/assets/BeatTheBands/SearchPage.png',
    imgHover: '/assets/BeatTheBands/VoteModal.png',
    projectImages: ['/assets/BeatTheBands/SearchPage.png', '/assets/BeatTheBands/VoteModal.png', '/assets/BeatTheBands/LoginModal.png', '/assets/BeatTheBands/Code_VoteToggle.png'],
    aboutBody: 'Beat the Bands, was built using Spotify\'s API. Users can vote up/down which artist they\'d prefer see visit their city.',
    url: 'https://shannonriester.github.io/Beat-The-Bands-day-38/',
    githubUrl: 'https://github.com/shannonriester/Beat-The-Bands-day-38',
    day: 'Day 38',
    length: '1 week',
    prompt: 'A local music venue has asked you to build a promotional app: Bring The Band! Bring the band will allow users to vote for musicians they want to see at the venue. The venue hopes to gain a following, and boost their patron engagement by tracking popular bands, and trends in their market share.',
    code: '/assets/BeatTheBands/Code_VoteToggle.png',
    best: 'By day 38, I felt confident using React, Backbone, manipulating data from APIs, and writing custom functions. I loved working with the Spotify API! Their docs are easy to read and understand, so I was able to start playing with data rather quickly. The best part was getting my \'voteToggle\' method on my VotedCollection to work. It was a complicated conditional statement: if a user had already voted on that band, I wanted them to \'unvote\' by toggling the vote button, which destroyed the vote model on the server (if the votes had reached 0); or if the band had not been voted for by any user yet, I needed to create a new vote–model and add it to my collection.',
    hardest: 'Testing was the hardest part, but also the most helpful. We had just learned about unit testing the day before, so just the execution and syntax alone were daunting enough. I quickly realized that a tests are only as good as the operation it performs. Testing if an element is indeed a <div> is helpful, but testing whether or not a method resolves a promise is a lot more helpful for me.',
  },
  {
    name:'PokemonBattleGame',
    imgHover: '/assets/PokemonGame/LandingPage.png',
    image: '/assets/PokemonGame/BattlePoints.png',
    projectImages: ['/assets/PokemonGame/LandingPage.png', '/assets/PokemonGame/BattlePoints.png', '/assets/PokemonGame/PickPokemon.png', '/assets/PokemonGame/Victory.png'],
    aboutBody: 'Collaborating on a team can be hard, but my peers and I really pulled together, having so much fun pair-programming, and built this awesome game!',
    url: 'https://marklyck.github.io/Pokemon/',
    githubUrl: 'https://github.com/MarkLyck/Pokemon',
    best: 'I absolutely love working in a team, especially the team I was assigned for this weekend project. My two teammates are among the hardest-workin in the class, so we stayed late at school, all weekend, until the assignment was finished to the best of our abilities. One team member in particular was rather advanced at coding; he already knew swift and has worked with HTML and CSS for years. I had heard that pair–programming is a great way to accelerate your coding skills, but I hadn\'t anticipated to grow so much. From making a modal, to incorporating sounds effects and just general JavaScript learning, I imporoved on everything I had learned and more.',
    hardest: 'The hardest part of this project was figuring out how to communicate with my teammates. Initially I struggled with the technical jargon and relaying what it was I wanted the code to do. Saying it outloud and using the right words is tough for a beginner. Talking about how we were going to animate one pokemon "attacking" the other, or why we needed to make a new constructor for each step of the way really solidified my understanding of how JavaScript works.',
  },
  {
    name:'Jeopardy',
    imgHover: '/assets/Jeopardy/QuestionModal.png',
    image: '/assets/Jeopardy/GameBoardCurr.png',
    projectImages: ['/assets/Jeopardy/QuestionModal.png', '/assets/Jeopardy/QuestionModalOld.png', '/assets/Jeopardy/GameBoardCurr.png', '/assets/Jeopardy/Login.png', '/assets/Jeopardy/JeopardyAPI_Function.png'],
    aboutBody: 'My Jeopardy game renders random categories and questions from actual Jeopardy clues and questions. Play for yourself!',
    url: 'http://jeopardy_sriester.surge.sh/',
    githubUrl: 'https://github.com/shannonriester/Day-33-Jeopardy',
    day: 'Day 33',
    length: '1 week',
    best: 'The most satisfying part of this project was realizing I was becomming a real programmer. I knew I was going to make it. It felt so good to think that I can depend on myself and build something from nothing. Jeopardy\'s API was not an easy API for work with, so the end result of a functioning game felt amazing to know every single line of code was mine. This game also really helped my fellow calssmates to really open up with one another. We would randomly quiz each other on the categories that we were currently viewing and then help one another immediately when something would go wrong. It was also really great to see my process and design development—recently I went back to change around some of the styles...seeing the before and after is as satisfying as it is embarassing...',
    hardest: 'The Jeopardy API was the hardest part about this project. I was able to generate random categories farily easily, but then I had to filter though each individual category, and only select/display the categories with the correct score values (e.g.$200, $400, $800, etc.). Most of the categories don\'t have every value available or have several of the same values. I\'m most proud of my function that calls to the Jeopardy API and filters through to get the desired, random results.',
  },
]

projects.map((project, i) => {
  let imgSrcArr = project.projectImages.map((imgSrc, i) => {
    let image = new Image();
    image.src = imgSrc;
    return image.src;
  });
  project.projectImages = imgSrcArr;
});

export default projects;
