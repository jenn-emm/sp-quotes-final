const quotes = [
  {
    key: 1,
    quote:
      "I'll have you know I stubbed my toe last week while watering my spice garden, and I only cried for twenty minutes.",
    by: "Spongebob",
    imgURL: "https://i.ytimg.com/vi/Jj2ma1zQEA4/mqdefault.jpg"
  },
  {
    key: 2,
    quote: "I need... a tailor... because I ripped my pants!",
    by: "Spongebob",
    imgURL: "https://i.ytimg.com/vi/qF47zsExh38/maxresdefault.jpg"
  },
  {
    key: 3,
    quote:
      "If you believe in yourself and with a tiny pinch of magic, all your dreams can come true.",
    by: "Spongebob",
    imgURL: "https://artworks.thetvdb.com/banners/episodes/75886/739081.jpg"
  },
  {
    key: 4,
    quote: "Firmly grasp it!",
    by: "Patrick",
    imgURL:
      "https://static.wikia.nocookie.net/f9b2415f-ec18-4703-843e-0bc8475e52c9/scale-to-width/755"
  },
  {
    key: 5,
    quote: "Look at all the hip young people eating sal-ads.",
    by: "Spongebob",
    imgURL:
      "https://preview.redd.it/ee0o15nzmg041.jpg?auto=webp&s=3eec762808393379893d50c4716704bfc59e1df6"
  },
  {
    key: 6,
    quote:
      "Do you smell it? That smell, the kind of smelly smell. A smelly smell that smells… smelly.",
    by: "Mr. Krabs",
    imgURL:
      "https://media2.giphy.com/media/J2gHlRQQvFamqOWlJF/giphy-downsized-large.gif"
  },
  {
    key: 7,
    quote:
      "Come on. You know, I wumbo, you wumbo, he/she/me wumbo. Wombology, the study of wumbo! It’s first grade Spongebob!",
    by: "Patrick",
    imgURL: "https://i.ytimg.com/vi/W43nWg8N-H8/maxresdefault.jpg"
  },
  {
    key: 8,
    quote: "The inner machinations of my mind are an enigma.",
    by: "Patrick",
    imgURL: "https://i.ytimg.com/vi/KNZSXnrbs_k/hqdefault.jpg"
  },
  {
    key: 9,
    quote: "Is Mayonnaise an instrument?",
    by: "Patrick",
    imgURL: "https://i.ytimg.com/vi/d1JA-nh0IfI/hqdefault.jpg"
  },
  {
    key: 10,
    quote:
      "F is for fire that burns down the whole town, U is for Uranium…bombs! N is for no survivors!",
    by: "Plankton",
    imgURL: "https://pbs.twimg.com/media/De8CUxAX4AAzAyT.jpg"
  },
  {
    key: 11,
    quote: "The best time to wear a striped sweater...is all the time.",
    by: "Spongebob",
    imgURL:
      "https://nick-intl.mtvnimages.com/uri/mgid:file:gsp:scenic:/international/nickelodeon.com.au/NickAU-HERO-tile-1024x576-SBstripedjumper.jpg?quality=0.80"
  },
  {
    key: 12,
    quote: "Goodbye everyone, I’ll remember you all in therapy.",
    by: "Plankton",
    imgURL:
      "https://pbs.twimg.com/ext_tw_video_thumb/1423390447720976398/pu/img/ENUrfv28lgckd2hl.jpg"
  },
  {
    key: 13,
    quote:
      "Hello, we’re with the pet hospital down the street, and I understand you have a dying animal on the premises.",
    by: "Dr. Gill Gilliam",
    imgURL: "https://i.ytimg.com/vi/Zu5DvNpih7U/hqdefault.jpg"
  },
  {
    key: 14,
    quote: "We should take Bikini Bottom and push it somewhere else!",
    by: "Patrick",
    imgURL: "sp-patrick-push-it.jpg"
  },
  {
    key: 15,
    quote: "The Krusty Krab pizza is the pizza for you and me.",
    by: "Spongebob",
    imgURL:
      "https://i.pinimg.com/originals/b8/83/b5/b883b5c6be5f6bd9212ac0215c8089c2.jpg"
  },
  {
    key: 16,
    quote:
      "This is not your average, everyday darkness. This is… ADVANCED darkness.",
    by: "Spongebob",
    imgURL: "https://pbs.twimg.com/media/DhykBfiXcAEbTI8.jpg"
  },
  {
    key: 17,
    quote: "Don't you dare take the name of Texas in vain!",
    by: "Sandy",
    imgURL:
      "https://y.yarn.co/9cfcdd3b-7550-4352-9c4e-256249d17cb1_screenshot.jpg"
  },
  {
    key: 18,
    quote:
      "Well, it’s no secret that the best thing about a secret is secretly telling someone your secret, thereby, secretly adding another secret to their secret collection of secret, secretly.",
    by: "Spongebob",
    imgURL: "sp-secret.jpg"
  },
  {
    key: 19,
    quote:
      "So you mean to say they've taken what we thought we think and make us think we thought our thoughts we've been thinking our thoughts we think we thought? I think…",
    by: "Patrick",
    imgURL:
      "https://preview.redd.it/munfikrafd7y.png?width=640&crop=smart&auto=webp&s=bdcbbfcb2bd73f76e6d45f9d4caf17fe424815c7"
  },
  {
    key: 20,
    quote: "Tomorrow for sure.",
    by: "Narrator",
    imgURL: "https://i.ytimg.com/vi/uHqCuVrrePo/maxresdefault.jpg"
  },
  {
    key: 21,
    quote: "Too bad that didn't kill me.",
    by: "Squidward",
    imgURL:
      "https://www.sinclairclarion.com/home/wp-content/uploads/2019/03/Screen-Shot-2018-11-29-at-3.45.47-PM-768x539.png"
  },
  {
    key: 22,
    quote: "No, this is Patrick! I am not a Krusty Krab!",
    by: "Patrick",
    imgURL:
      "https://64.media.tumblr.com/c8dd50e8a33ecc4c21c4cbaed64f295d/tumblr_oib1dicSIr1tkb2p0o2_500.gifv"
  },
  {
    key: 23,
    quote: "It's not just a boulder. It's a rock!",
    by: "Spongebob",
    imgURL:
      "https://c.tenor.com/8je_ZaQ5WJoAAAAd/its-not-just-a-boulder-its-a-rock.gif"
  },
  {
    key: 24,
    quote: "All hail the magic conch!",
    by: "Spongebob, Patrick, & Squidward",
    imgURL: "sp-magic-conch.jpg"
  },
  {
    key: 25,
    quote: "Why must every eleven minutes of my life be filled with misery?",
    by: "Squidward",
    imgURL: "sp-misery.jpg"
  },
  {
    key: 26,
    quote:
      "Aw, cheer up, Squid, it could be worse! Yeah, you could be bald and have a big nose.",
    by: "Spongebob & Patrick",
    imgURL: "sp-bald-nose.jpg"
  },
  {
    key: 27,
    quote: "I’m hotter than a hickory smoked sausage!",
    by: "Sandy",
    imgURL: "https://pbs.twimg.com/tweet_video_thumb/EvLfhnDWgAMspzv.jpg"
  },
  {
    key: 28,
    quote: "I'm ugly and I'm proud!",
    by: "Spongebob",
    imgURL:
      "http://78.media.tumblr.com/aa44657f1dc7c136c9530186156ab22c/tumblr_p21t8hltaT1tdymm0o1_500.gif"
  },
  {
    key: 29,
    quote: "My name’s not RIIIIIIIIIIIICK!",
    by: "Patrick",
    imgURL: "https://i.ytimg.com/vi/0jNghWqRBKw/maxresdefault.jpg"
  },
  {
    key: 30,
    quote: "CHOCOLATE!!!",
    by: "Tom",
    imgURL: "https://media.giphy.com/media/3oxOCqY7aKRESAP26s/giphy.gif"
  },
  {
    key: 31,
    quote: "My leg!",
    by: "Fred",
    imgURL:
      "https://c.tenor.com/tk8cpRd3Q8kAAAAC/spongebob-squarepants-fred.gif"
  },
  {
    key: 32,
    quote: "Who you calling pinhead?",
    by: "Patrick",
    imgURL: "sp-pinhead.jpg"
  },
  {
    key: 33,
    quote: "OVERTIME?!?!",
    by: "Spongebob",
    imgURL: "https://c.tenor.com/cId228T1GRcAAAAC/spongebob-overtime.gif"
  },
  {
    key: 34,
    quote: "Everything is chrome in the future.",
    by: "Spongetron",
    imgURL: "https://sb129.files.wordpress.com/2012/03/sb-129.jpg"
  },
  {
    key: 35,
    quote: "FUTURE!!!",
    by: "Squidward",
    imgURL: "https://i.redd.it/qbg6rwp3ebb01.jpg"
  },
  {
    key: 36,
    quote: "You need six hundred to pass, you got six.",
    by: "Mrs. Puff",
    imgURL: "https://i.ytimg.com/vi/3eDPWsRZfEg/hqdefault.jpg"
  },
  {
    key: 37,
    quote: "I can't *pbbft* understand *pbbft* your accent.",
    by: "Tiff",
    imgURL: "https://i.ytimg.com/vi/LkNuo1P7M0s/maxresdefault.jpg"
  },
  {
    key: 38,
    quote:
      "Once upon a time there was an ugly barnacle. He was so ugly that everyone died. The end.",
    by: "Patrick",
    imgURL: "https://pbs.twimg.com/media/DbO86lXVwAE7OGb.jpg"
  },
  {
    key: 39,
    quote:
      "The sash-ringing the trash-singing mash-flinging the flash-stringing ringing crash-dinging...",
    by: "Spongebob",
    imgURL: "https://pbs.twimg.com/media/B0_bDUPIYAAeq1F?format=jpg&name=small"
  },
  {
    key: 40,
    quote:
      "Aren't you Patrick Star? - Yup. - And this is your ID. - Yup. - I found this ID in this wallet. And if that's the case, this must be your wallet. - That makes sense to me. - Then take it. - It's not my wallet. - You dim-bulb! Take back your wallet or I'll rip your arms off!",
    by: "Patrick & Man Ray",
    imgURL: "sp-wallet.jpg"
  },
  {
    key: 41,
    quote: "Fine dining and breathing are all I know how to do.",
    by: "Spongebob",
    imgURL:
      "https://c.tenor.com/kXe3azPgky0AAAAC/spongebob-squarepants-waiter.gif"
  },
  {
    key: 42,
    quote: "Can I be excused for the rest of my life?",
    by: "Spongebob",
    imgURL: "https://pbs.twimg.com/media/D50_RwFW4AE3lN1.jpg"
  },
  {
    key: 43,
    quote: "I don't wanna grow up! I want cookies, and milky!",
    by: "Spongebob",
    imgURL: "https://i.gifer.com/WrdR.gif"
  },
  {
    key: 44,
    quote: "Hello. You’ve reached the house of unrecognized talent.",
    by: "Squidward",
    imgURL: "https://i.ytimg.com/vi/Ld0mklUuXPs/hqdefault.jpg"
  },
  {
    key: 45,
    quote: "He was number one!",
    by: "Spongebob",
    imgURL: "sp-smitty.jpg"
  },
  {
    key: 46,
    quote: "FINLAND!",
    by: "Patrick",
    imgURL: "https://c.tenor.com/dcPQoajjHLoAAAAC/spongebob-finland.gif"
  },
  {
    key: 47,
    quote: "You took my only food. Now I'm gonna starve.",
    by: "Patrick",
    imgURL: "https://c.tenor.com/QLqPQ0pYK2sAAAAC/patrick-starve.gif"
  },
  {
    key: 48,
    quote:
      "Want to see me run to that mountain and back? You want to see me do it again?",
    by: "The Quickster",
    imgURL: "https://pbs.twimg.com/media/D9saN1pVUAErB3Q.jpg"
  },
  {
    key: 49,
    quote: "Uh, I can explain",
    by: "Kid #1",
    imgURL:
      "https://media3.giphy.com/media/IcfstflmwEvHdc5cCk/giphy.gif?cid=82a1493bsfo1zxypf8881zlaggt9896fnw71txsshyikix77&rid=giphy.gif&ct=v"
  },
  {
    key: 50,
    quote:
      "I couldn't afford a present this year, so I got you this box. That's what I got you!",
    by: "Random Two Fishes",
    imgURL: "https://i.ytimg.com/vi/6mz-kJJWxuY/maxresdefault.jpg"
  },
  {
    key: 51,
    quote: `No, man. You're thinking of "bee-boo-boo-bop, boo-boo-bop."'`,
    by: "KRUM radio station DJ",
    imgURL: "https://i.ytimg.com/vi/M_i4FbzaYww/maxresdefault.jpg"
  },
  {
    key: 52,
    quote: "What I learned in boating school is... blankety blankety BLANK. ",
    by: "Mrs. Puff",
    imgURL:
      "https://64.media.tumblr.com/8d03a29841bba5a3b232636bfdf575a1/tumblr_oxoppjKeNy1tkb2p0o1_500.gifv"
  },
  {
    key: 53,
    quote: "HOOPLA!",
    by: "Hoopla fish",
    imgURL:
      "https://64.media.tumblr.com/24d633cdf2915b7044b3fd29dd9f711e/tumblr_p1wlfrVHs01vqc713o1_400.gifv"
  },
  {
    key: 54,
    quote: "Leedle-leedle-leedle-lee!",
    by: "Patrick",
    imgURL: "https://c.tenor.com/rz8esLmSoQMAAAAC/spongebob-patrick.gif"
  },
  {
    key: 55,
    quote: "I love you.",
    by: "Patrick",
    imgURL:
      "https://i.pinimg.com/originals/76/ee/75/76ee75e2b985a8a965c6e89cc4935d0a.jpg"
  },
  {
    key: 56,
    quote: `East? I thought you said "weast".`,
    by: "Patrick",
    imgURL: "https://i.ytimg.com/vi/cUunst9lSmQ/hqdefault.jpg"
  },
  {
    key: 57,
    quote: "You forgot the pickles!",
    by: "Bubble Bass",
    imgURL:
      "https://m.media-amazon.com/images/M/MV5BYTlkZTI4YTAtNmFhMC00YWU1LWI4NjUtOTZjMGU5NjlhMjAxXkEyXkFqcGdeQXVyMTM1NTIzOTI1._V1_FMjpg_UX1000_.jpg"
  },
  {
    key: 58,
    quote: "I'm Dirty Dan!",
    by: "Spongebob & Patrick",
    imgURL:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f8786c4c-0f33-4d07-9fb8-9b5da6c6c5b6/dc8jpiy-fdffdad3-6a84-4528-b22b-f5f850726536.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y4Nzg2YzRjLTBmMzMtNGQwNy05ZmI4LTliNWRhNmM2YzViNlwvZGM4anBpeS1mZGZmZGFkMy02YTg0LTQ1MjgtYjIyYi1mNWY4NTA3MjY1MzYuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.dU2x6iXu6agm3m_pfWH3T7_UsgbWfwGjqrqSn2aHPOc"
  },
  {
    key: 59,
    quote: "When in doubt, pinky out.",
    by: "Patrick",
    imgURL:
      "https://y.yarn.co/ef39b6a5-2786-45a8-8c86-c8fe117db349_screenshot.jpg"
  },
  {
    key: 60,
    quote:
      "I've gotta embrace the marble! I've gotta sniff the marble! I've gotta lick the marble! I've gotta wash the marble! I've gotta date the marble! I've gotta BE the marble!",
    by: "Spongebob",
    imgURL: "https://i.imgur.com/LAX7W1i.gif"
  },
  {
    key: 61,
    quote:
      "I order the food, you cook the food, the customer gets the food. We do that for 40 years and then we die.",
    by: "Squidward",
    imgURL: "sp-squidward.jpg"
  },
  {
    key: 62,
    quote: "No you won't. I can't hang out here all night. I've got a life.",
    by: "Squidward",
    imgURL: "https://i.gifer.com/Tdsi.gif"
  },
  {
    key: 63,
    quote: "Ravioli, ravioli, give me the formuoli.",
    by: "Spongebob & Robot Krabs",
    imgURL:
      "https://hips.hearstapps.com/hmg-prod/images/11g9n3ms0fw01-1552404796.gif?crop=1xw:1xh;center,top&resize=480"
  },
  {
    key: 64,
    quote: "I've got you now spongebob!",
    by: "Patrick",
    imgURL: "https://i.ytimg.com/vi/sI1uQ_VPvmQ/hqdefault.jpg"
  },
  {
    key: 65,
    quote: "Wa wa wa. Will you cut that out?!",
    by: "Kevin & Jellyspotter",
    imgURL: "sp-wa-wa-wa.gif"
  },
  {
    key: 66,
    quote: "Plankton. One percent evil, 99% hot gas.",
    by: "Karen",
    imgURL:
      "https://external-preview.redd.it/O8PJ-c_YyPJXH0VXrgt3ArfHJFLQVl8PrlWSRUW_Lyo.png?auto=webp&s=d45d6a73a496a4627869fdd1d6cd02390f92ca71"
  }
];
export default quotes;
