/* =========================================================
   CONFIG — edit everything personal here. Nothing else needs touching.
   Use {her} and {me} inside any text to insert the names below.
   ========================================================= */
const CONFIG = {
  herName: "Zyra",
  myName: "Dean",
  anniversary: "November 24, 2025",

  music: { file: "assets/music.mp3", title: "Our Song", volume: 0.6 },

  // Photos: change "src" to your filenames. Missing photos show a heart placeholder.
  photos: [
    { src: "assets/photos/photo1.jpg",  date: "Day one",      caption: "Where it all started" },
    { src: "assets/photos/photo2.jpg",  date: "Week one",     caption: "Nervous and happy" },
    { src: "assets/photos/photo3.jpg",  date: "First month",  caption: "Our first real date" },
    { src: "assets/photos/photo4.jpg",  date: "Beach",       caption: "Golden hour with you" },
    { src: "assets/photos/photo5.jpg",  date: "Mountain",       caption: "That road trip" },
    { src: "assets/photos/photo6.jpg",  date: "Coffee",       caption: "Coffee and you" },
    { src: "assets/photos/photo7.jpg",  date: "Hugs",       caption: "Cold hands, warm hugs" },
    { src: "assets/photos/photo8.jpg",  date: "My birthday", caption: "Candles and a wish" },
    { src: "assets/photos/photo9.jpg",  date: "Random skincare night",   caption: "Just us being silly" },
    { src: "assets/photos/photo10.jpg", date: "Random Tuesday", caption: "My favorite view" },
    { src: "assets/photos/photo11.jpg", date: "Today",        caption: "Still choosing you" },
    { src: "assets/photos/photo12.JPG", date: "Always",       caption: "Us" }
  ],
  coverPhoto: 11,   // index into photos (0 = first). Used on cover + final page.

  cover: {
    title: "Our Little Universe",
    subtitle: "A collection of moments, memories, and everything I love about us.",
    button: "Open Our Scrapbook"
  },

  // --- Page content (photo numbers are indexes into photos above) ---
  story: {
    title: "How It All Began",
    photos: [0, 1],
    text: [
      "It all started with a little encouragement from a friend we both knew. They thought we should try talking, so I took the chance and sent you that first message, not knowing what would come out of it. They thought we should start talking, so I took the chance and sent you that first message, not knowing.",
      "I never imagined that a simple introduction from a mutual friend would lead me to someone who would become such an important part of my life."
    ],
    caption: "Every beautiful story has a beginning. And somehow, ours became my favorite story to tell."
  },
  firstMemories: {
    title: "The First Memories",
    items: [ { photo: 1, date: "First week" }, { photo: 2, date: "First date" }, { photo: 3, date: "Beach Trip" }, { photo: 0, date: "First photo" } ]
  },
  favoriteMoments: { title: "Our Favorite Moments", photos: [3, 4, 5, 6, 7] },
  littleThings: {
    title: "The Little Things",
    intro: "Little things I love about you, {her}:",
    items: [
      "Your smile, especially the surprised one",
      "Your laugh that gets louder when you try to hold it in",
      "The way you tell stories with your whole face with a matching eyebrow movements",
      "Your random chikas",
      "How you make ordinary days feel special",
      "The comfort of simply being with you"
    ],
    secret: "P.S. You are the best part of every day I have."
  },
  adventures: {
    title: "Our Adventures",
    photos: [4, 5, 6],
    timeline: [ "First food trip", "Beach days", "Road trips", "Movie nights", "Birthday surprise", "Coffee Dates", "Trying out Airbnbs", "Hiking", "Required Eat Outs on Paydays", "Discovering New Coffee Shops", "Spontaneous Dates", "Trying new restaurants", "Balut Dates", "Shopping", "Doing things for the first time together", "Random cravings that turn into dates", "Steak Nights"]
  },
  thinkOfYou: {
    title: "Things That Make Me Think of You",
    items: [
      { icon: "🎵", text: "Our song: Palagi by TJ Monterde? AHHAHAH", }, { icon: "☕", text: "Coffee: Seasalt Latte as always" },
      { icon: "🍜", text: "Late-night canton with boiled egg" }, { icon: "🌅", text: "Golden-hour skies along the beaches" },
      { icon: "🧸", text: "Panda stuffed toy" }, { icon: "📍", text: "Our first long ride together: Dalaguete" }
    ]
  },
  funny: {
    title: "Our Funny Moments",
    photos: [8, 9],
    notes: [ "The time when you fell asleep on my chest", "“I'm not hungry.” (pero mokaon ug apil)", "Your 'serious' face, every time" ]
  },
  favoritesOfHer: {
    title: "My Favorite Photos of Us",
    photos: [9, 10, 11, 3],
    caption: "I could look at these all day, and I do."
  },
  timelineTitle: "Our Timeline",
  milestones: [
    { date: "The day I messaged you", text: "Just a little 'Hiii.' Without  knowing that message will turn into something I couldn't dream of." },
    { date: "Our first date", text: "I was so nervous. You were perfect. Finally asked you that I would court you" },
    { date: "We became official", text: "The easiest yes of my life." },
    { date: "First anniversary", text: "One year, and I'd do every day again." },
    { date: "Favorite trip", text: "Different place, same favorite person." },
    { date: "Today", text: "Still writing our story." }
  ],
  reasonsTitle: "Reasons Why I Love You",
  reasons: [
    // Add up to 100 — just add more lines.
    "You make me laugh on my worst days.",
    "You are kind to everyone, even when it's hard.",
    "You remember the little things.",
    "You believe in me louder than I do.",
    "Home feels like wherever you are.",
    "You're beautiful in a way you don't even notice.",
    "You make plain Tuesdays feel like holidays.",
    "You stayed, even through the hard parts."
  ],
  future: {
    title: "Things I Want to Do With You",
    columns: [
      { heading: "Places", items: ["Go to Japan together", "Bukidnon with you", "Travel the world"] },
      { heading: "Dates", items: ["Discover new coffee shops", "Cook meals for you", "Camping with you"] },
      { heading: "Dreams", items: ["A home full of our photos", "Growing old, still laughing", "Memories we haven't made yet"] }
    ]
  },
  letterPage: {
    title: "A Letter to You",
    paragraphs: [
      "Dear {her},",
      "Happy Anniversary My Love!",
      "Kahibaw ka, usahay maka-amaze jud hunahunaon how everything started. Tungod ra sa referral nila Harold nga mag-try daw ta og chat, I sent you that first message without knowing asa ta padulong. Wala jud ko nag-expect nga ang simple nga conversation mahimong something so special, something nga eventually would mean this much to me.",
      "Looking back sa tanan natong memories, maka-smile jud ko. From our first conversations, sa mga dates nato, sa mga random moments, sa atong mga katawa, sa mga stories nga ato ra ang nakasabot, hangtod sa mga moments nga dili kaayo easy for both of us. All of those memories became part of our story, and I'm grateful nga ikaw akong kauban sa tanan.",
      "I don't say it enough, so I'm writing it down: thank you. Thank you for being part of my life. Thank you sa happiness nga imong dala, sa mga moments nga makapakatawa ka nako without even trying, sa mga little things nga imong ginabuhat nga basin wala ka kabalo how much they mean to me. Thank you for being you, and for letting me be part of your life pud.",
      "Kabalo ko dili perfect atong relationship. We have our misunderstandings, our difficult days, and moments nga dili ta always magkasinabot. Sometimes things get complicated, and sometimes dili nato ma-express properly atong feelings. But despite everything, I still treasure what we have. I know love isn't always about having everything figured out or always getting things right. Sometimes it's about learning to understand each other better, growing together, and choosing to make things work despite the challenges.",
      "I want you to know how much I appreciate you, not just because of what you do for me, but because of who you are. I love your personality, your little habits, your random thoughts, your laughter, and all the little things that make you uniquely you. I love that ikaw akong girlfriend, and I'm genuinely happy nga ikaw ang person nga nakasabay nako sa mga memories nga ato nang nahimo.",
      "As we celebrate another year of us, I hope daghan pa kaayo ta og memories nga mahimo together. I hope we get to experience more adventures, visit places we've always wanted to go, try new things, and have more ordinary days nga mahimong special simply because we're together. I hope we continue to grow, not just individually, but as partners pud. And I hope bisan unsa pa ang challenges nga moabot, we continue to learn how to love each other better.",
      "If I could go back to that day nga nag-send ko sa akong first message nimo, knowing everything I know now, I would still do it. I'd still take that chance. I'd still want to get to know you. And I'd still choose you.",
      "Thank you for being my favorite person, my love, and one of the most beautiful parts of my life.",
      "Whatever we do, I'm happiest when it's with you.",
      "Happy Anniversary, lovee. Here's to us, sa tanan memories nga ato nang nahimo, sa love nga atoang gina-share, and sa tanan pang moments nga naghuwat nato sa future.",
      "Iloveeeeyoualwaysssssss ❤️",
      "Always yours,\n{me}"
    ]
  },
  secretMessage: "You found the secret! I love you more than I can fit on a page.",

  // --- Final page ---
  final: {
    headline: "Happy Anniversary, My Love.",
    message: "Today is for celebrating you, us, and how far we've come. Thank you for every memory.",
    button: "Read My Letter",
    letter: [
      "My {her},",
      "I'm so grateful you're in my life. I think about how ordinary days turned into my favorite memories simply because you were there, and I never take that for granted.",
      "You changed me. You made me better, you made me wake up everyday, you are the reason why life is better. I appreciate everything you do, even the things you think I don't notice.",
      "We aren't perfect, and we've had hard days. But I'd choose you through all of it, every time. Loving you is the easiest thing I do.",
      "I hope for a future full of ordinary mornings and big adventures with you. I promise to keep making memories with you, to keep showing up, and to keep choosing you.",
      "Forever yours,\n{me}"
    ],
    closing: "Happy Anniversary, My Love.",
    closing2: "Here's to us, to every memory we've made, and to all the beautiful moments still waiting for us."
  }
};
