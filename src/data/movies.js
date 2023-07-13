const movies = [
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w300/oqP1qEZccq5AD9TVTIaO6IGUj7o.jpg",
    genre_ids: [14, 28, 12],
    id: 455476,
    original_language: "en",
    original_title: "Knights of the Zodiac",
    overview:
      "When a headstrong street orphan, Seiya, in search of his abducted sister unwittingly taps into hidden powers, he discovers he might be the only person alive who can protect a reincarnated goddess, sent to watch over humanity. Can he let his past go and embrace his destiny to become a Knight of the Zodiac?",
    popularity: 2233.242,
    poster_path:
      "https://image.tmdb.org/t/p/w300/tBiUXvCqz34GDeuY7jK14QQdtat.jpg",
    release_date: "2023-04-27",
    title: "Knights of the Zodiac",
    video: false,
    vote_average: 6.5,
    vote_count: 423,
    most_popular: true,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w300/woJbg7ZqidhpvqFGGMRhWQNoxwa.jpg",
    genre_ids: [28, 12, 878],
    id: 667538,
    original_language: "en",
    original_title: "Transformers: Rise of the Beasts",
    overview:
      "When a new threat capable of destroying the entire planet emerges, Optimus Prime and the Autobots must team up with a powerful faction known as the Maximals. With the fate of humanity hanging in the balance, humans Noah and Elena will do whatever it takes to help the Transformers as they engage in the ultimate battle to save Earth.",
    popularity: 2759.747,
    poster_path:
      "https://image.tmdb.org/t/p/w300/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
    release_date: "2023-06-06",
    title: "Transformers: Rise of the Beasts",
    video: false,
    vote_average: 7.3,
    vote_count: 719,
    most_popular: true,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w300/84cS9oEm33jD05T0p39TbwADY8.jpg",
    genre_ids: [28, 18],
    id: 678512,
    original_language: "en",
    original_title: "Sound of Freedom",
    overview:
      "The story of Tim Ballard, a former US government agent, who quits his job in order to devote his life to rescuing children from global sex traffickers.",
    popularity: 1877.321,
    poster_path:
      "https://image.tmdb.org/t/p/w300/mx4O9OEvIB265VM3UATLslsSW5t.jpg",
    release_date: "2023-07-03",
    title: "Sound of Freedom",
    video: false,
    vote_average: 8.2,
    vote_count: 45,
    most_popular: true,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w300/euO884625eFLfKLoc0MtFs5QiOS.jpg",
    genre_ids: [9648, 53, 28],
    id: 1070802,
    original_language: "en",
    original_title: "Confidential Informant",
    overview:
      "During a crack epidemic two narcotics agents hunting for a cop killer. Hoping for leads, Moran and Thorton pay off a junkie informant. To provide for his wife and son, Moran involves the stool pigeon in a deadly scheme. This causes the partners to come under the scrutiny of a suspicious internal affairs agent.",
    popularity: 1213.528,
    poster_path:
      "https://image.tmdb.org/t/p/w300/qyU7H6OIvojQW0pjgjZjyNCP343.jpg",
    release_date: "2023-06-27",
    title: "Confidential Informant",
    video: false,
    vote_average: 6.4,
    vote_count: 37,
    most_popular: true,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w300/qe0oK0A5ovrlgH39Ga13dxxw9MU.jpg",
    genre_ids: [28, 35, 80],
    id: 1130818,
    original_language: "en",
    original_title: "Sheroes",
    overview:
      "When four thick-as-thieves friends arrive in Thailand they quickly find themselves in over their heads. Fighting to stay alive they employ their unique set of skills and unleash their fierce loyalty in a heart-pumping battle for survival.",
    popularity: 1296.973,
    poster_path:
      "https://image.tmdb.org/t/p/w300/itUAkQmihFmRxMYTa3AkvIzMCV4.jpg",
    release_date: "2023-06-23",
    title: "Sheroes",
    video: false,
    vote_average: 5,
    vote_count: 31,
    most_popular: true,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w300/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg",
    genre_ids: [28, 12, 16, 878],
    id: 569094,
    original_language: "en",
    original_title: "Spider-Man: Across the Spider-Verse",
    overview:
      "After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.",
    popularity: 1244.005,
    poster_path:
      "https://image.tmdb.org/t/p/w300/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    release_date: "2023-05-31",
    title: "Spider-Man: Across the Spider-Verse",
    video: false,
    vote_average: 8.5,
    vote_count: 2170,
    most_popular: true,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w300/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg",
    genre_ids: [16, 10751, 12, 14, 35],
    id: 502356,
    original_language: "en",
    original_title: "The Super Mario Bros. Movie",
    overview:
      "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
    popularity: 1139.209,
    poster_path:
      "https://image.tmdb.org/t/p/w300/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
    release_date: "2023-04-05",
    title: "The Super Mario Bros. Movie",
    video: false,
    vote_average: 7.8,
    vote_count: 5553,
    most_popular: true,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w300/cSYLX73WskxCgvpN3MtRkYUSj1T.jpg",
    genre_ids: [16, 35, 10751, 14, 10749],
    id: 976573,
    original_language: "en",
    original_title: "Elemental",
    overview:
      "In a city where fire, water, land and air residents live together, a fiery young woman and a go-with-the-flow guy will discover something elemental: how much they have in common.",
    popularity: 984.278,
    poster_path:
      "https://image.tmdb.org/t/p/w300/8riWcADI1ekEiBguVB9vkilhiQm.jpg",
    release_date: "2023-06-14",
    title: "Elemental",
    video: false,
    vote_average: 7.5,
    vote_count: 421,
    most_popular: false,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w300/wRxLAw4l17LqiFcPLkobriPTZAw.jpg",
    genre_ids: [28, 53],
    id: 697843,
    original_language: "en",
    original_title: "Extraction 2",
    overview:
      "Tasked with extracting a family who is at the mercy of a Georgian gangster, Tyler Rake infiltrates one of the world's deadliest prisons in order to save them. But when the extraction gets hot, and the gangster dies in the heat of battle, his equally ruthless brother tracks down Rake and his team to Vienna, in order to get revenge.",
    popularity: 906.387,
    poster_path:
      "https://image.tmdb.org/t/p/w300/7gKI9hpEMcZUQpNgKrkDzJpbnNS.jpg",
    release_date: "2023-06-09",
    title: "Extraction 2",
    video: false,
    vote_average: 7.6,
    vote_count: 1278,
    most_popular: false,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w300/aO6hDsqTIAtQFUBoPWklmPFsSTW.jpg",
    genre_ids: [27, 9648, 53],
    id: 614479,
    original_language: "en",
    original_title: "Insidious: The Red Door",
    overview:
      "To put their demons to rest once and for all, Josh Lambert and a college-aged Dalton Lambert must go deeper into The Further than ever before, facing their family's dark past and a host of new and more horrifying terrors that lurk behind the red door.",
    popularity: 892.411,
    poster_path:
      "https://image.tmdb.org/t/p/w300/uS1AIL7I1Ycgs8PTfqUeN6jYNsQ.jpg",
    release_date: "2023-07-05",
    title: "Insidious: The Red Door",
    video: false,
    vote_average: 5.8,
    vote_count: 127,
    most_popular: false,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w300/fCw8CVgII6W7ALbIh0SgXax3Hsj.jpg",
    genre_ids: [12, 10751, 14, 10749],
    id: 447277,
    original_language: "en",
    original_title: "The Little Mermaid",
    overview:
      "The youngest of King Triton’s daughters, and the most defiant, Ariel longs to find out more about the world beyond the sea, and while visiting the surface, falls for the dashing Prince Eric. With mermaids forbidden to interact with humans, Ariel makes a deal with the evil sea witch, Ursula, which gives her a chance to experience life on land, but ultimately places her life – and her father’s crown – in jeopardy.",
    popularity: 654.856,
    poster_path:
      "https://image.tmdb.org/t/p/w300/ym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg",
    release_date: "2023-05-18",
    title: "The Little Mermaid",
    video: false,
    vote_average: 6.3,
    vote_count: 860,
    most_popular: false,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w300/bYJv39whWTAOWO0mv7oUija8GgM.jpg",
    genre_ids: [28, 12, 53],
    id: 575264,
    original_language: "en",
    original_title: "Mission: Impossible - Dead Reckoning Part One",
    overview:
      "Ethan Hunt and his IMF team embark on their most dangerous mission yet: To track down a terrifying new weapon that threatens all of humanity before it falls into the wrong hands. With control of the future and the world's fate at stake and dark forces from Ethan's past closing in, a deadly race around the globe begins. Confronted by a mysterious, all-powerful enemy, Ethan must consider that nothing can matter more than his mission – not even the lives of those he cares about most.",
    popularity: 764.705,
    poster_path:
      "https://image.tmdb.org/t/p/w300/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
    release_date: "2023-07-08",
    title: "Mission: Impossible - Dead Reckoning Part One",
    video: false,
    vote_average: 8.1,
    vote_count: 137,
    most_popular: false,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w300/yF1eOkaYvwiORauRCPWznV9xVvi.jpg",
    genre_ids: [878, 28, 12],
    id: 298618,
    original_language: "en",
    original_title: "The Flash",
    overview:
      "When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?",
    popularity: 617.493,
    poster_path:
      "https://image.tmdb.org/t/p/w300/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
    release_date: "2023-06-13",
    title: "The Flash",
    video: false,
    vote_average: 6.7,
    vote_count: 784,
    most_popular: false,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w300/8Y0RxH5cXiKV8C9Wyj6JkW9VYaG.jpg",
    genre_ids: [27],
    id: 994143,
    original_language: "en",
    original_title: "Skinamarink",
    overview:
      "Two children wake up in the middle of the night to find their father is missing, and all the windows and doors in their home have vanished.",
    popularity: 642.836,
    poster_path:
      "https://image.tmdb.org/t/p/w300/8qOTi8VXvnuLH0jijMBCyygtV9d.jpg",
    release_date: "2023-01-13",
    title: "Skinamarink",
    video: false,
    vote_average: 5.9,
    vote_count: 107,
    most_popular: false,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w300/lQzSMhkAl90iXPirjnLbRHkxApC.jpg",
    genre_ids: [27],
    id: 917007,
    original_language: "en",
    original_title: "Bed Rest",
    overview:
      "A pregnant woman on bed rest begins to wonder if her house is haunted or if it's all in her head.",
    popularity: 567.982,
    poster_path:
      "https://image.tmdb.org/t/p/w300/tiZF8b9T9fMcwvsEEkJ5ik1wCnV.jpg",
    release_date: "2022-12-08",
    title: "Bed Rest",
    video: false,
    vote_average: 6.6,
    vote_count: 91,
    most_popular: false,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w300/8FhKnPpql374qyyHAkZDld93IUw.jpg",
    genre_ids: [9648, 53, 878],
    id: 536437,
    original_language: "en",
    original_title: "Hypnotic",
    overview:
      "A detective becomes entangled in a mystery involving his missing daughter and a secret government program while investigating a string of reality-bending crimes.",
    popularity: 518.058,
    poster_path:
      "https://image.tmdb.org/t/p/w300/3IhGkkalwXguTlceGSl8XUJZOVI.jpg",
    release_date: "2023-05-11",
    title: "Hypnotic",
    video: false,
    vote_average: 6.3,
    vote_count: 295,
    most_popular: false,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w300/9t0tJXcOdWwwxmGTk112HGDaT0Q.jpg",
    genre_ids: [27, 53],
    id: 890771,
    original_language: "en",
    original_title: "The Black Demon",
    overview:
      "Oilman Paul Sturges' idyllic family vacation turns into a nightmare when they encounter a ferocious megalodon shark that will stop at nothing to protect its territory. Stranded and under constant attack, Paul and his family must somehow find a way to get his family back to shore alive before it strikes again in this epic battle between humans and nature.",
    popularity: 532.88,
    poster_path:
      "https://image.tmdb.org/t/p/w300/uiFcFIjig0YwyNmhoxkxtAAVIL2.jpg",
    release_date: "2023-04-26",
    title: "The Black Demon",
    video: false,
    vote_average: 6.2,
    vote_count: 289,
    most_popular: false,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w300/hiHGRbyTcbZoLsYYkO4QiCLYe34.jpg",
    genre_ids: [27, 53],
    id: 758323,
    original_language: "en",
    original_title: "The Pope's Exorcist",
    overview:
      "Father Gabriele Amorth, Chief Exorcist of the Vatican, investigates a young boy's terrifying possession and ends up uncovering a centuries-old conspiracy the Vatican has desperately tried to keep hidden.",
    popularity: 470.945,
    poster_path:
      "https://image.tmdb.org/t/p/w300/gNPqcv1tAifbN7PRNgqpzY8sEJZ.jpg",
    release_date: "2023-04-05",
    title: "The Pope's Exorcist",
    video: false,
    vote_average: 7.2,
    vote_count: 1578,
    most_popular: false,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w300/eTvN54pd83TrSEOz6wbsXEJktCV.jpg",
    genre_ids: [10752, 28, 53],
    id: 882569,
    original_language: "en",
    original_title: "Guy Ritchie's The Covenant",
    overview:
      "During the war in Afghanistan, a local interpreter risks his own life to carry an injured sergeant across miles of grueling terrain.",
    popularity: 454.923,
    poster_path:
      "https://image.tmdb.org/t/p/w300/kVG8zFFYrpyYLoHChuEeOGAd6Ru.jpg",
    release_date: "2023-04-19",
    title: "Guy Ritchie's The Covenant",
    video: false,
    vote_average: 7.8,
    vote_count: 1011,
    most_popular: false,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w300/o9bbojtrrpl0yriiTmzC3Lp3OhA.jpg",
    genre_ids: [28, 10752],
    id: 840326,
    original_language: "fi",
    original_title: "Sisu",
    overview:
      "Deep in the wilderness of Lapland, Aatami Korpi is searching for gold but after he stumbles upon Nazi patrol, a breathtaking and gold-hungry chase through the destroyed and mined Lapland wilderness begins.",
    popularity: 472.89,
    poster_path:
      "https://image.tmdb.org/t/p/w300/ygO9lowFMXWymATCrhoQXd6gCEh.jpg",
    release_date: "2023-01-27",
    title: "Sisu",
    video: false,
    vote_average: 7.5,
    vote_count: 944,
    most_popular: false,
  },
];

module.exports = { movies };
