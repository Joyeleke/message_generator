const bibleVerses = [
  "John 3:16: For God so loved the world",
  "Psalm 23:1: The Lord is my shepherd; I shall not want",
  "Proverbs 3:5-6: Trust in the Lord with all your heart",
  "Philippians 4:13: I can do all things through Christ",
  "Romans 8:28: And we know that in all things God works for the good",
  "Matthew 28:19-20: Go and make disciples of all nations",
  "Genesis 1:1: In the beginning, God created the heavens and the earth",
  "1 Corinthians 13:4-7: Love is patient, love is kind",
  "Isaiah 40:31: But those who hope in the Lord will renew their strength",
  "Ephesians 2:8-9: For it is by grace you have been saved",
  "Jeremiah 29:11: For I know the plans I have for you",
  "Matthew 11:28: Come to me, all who labor and are heavy laden",
  "Proverbs 16:9: The heart of man plans his way",
  "1 Peter 5:7: Cast all your anxiety on him because he cares for you",
  "Romans 12:2: Do not be conformed to this world",
  "John 14:6: Jesus said to him, 'I am the way, and the truth, and the life'",
  "Psalm 46:10: Be still, and know that I am God",
  "Galatians 5:22-23: But the fruit of the Spirit is love, joy, peace",
  "Romans 8:38-39: For I am convinced that neither death nor life",
  "Psalm 119:105: Your word is a lamp for my feet, a light on my path",
  "John 16:33: I have told you these things, so that in me you may have peace",
  "Psalm 19:14: May these words of my mouth and this meditation of my heart be pleasing",
  "1 John 4:7: Dear friends, let us love one another, for love comes from God",
  "Proverbs 4:23: Above all else, guard your heart, for everything you do flows from it",
  "James 1:5: If any of you lacks wisdom, you should ask God, who gives generously to all without finding fault, and it will be given to you",
  "Psalm 34:8: Taste and see that the Lord is good; blessed is the one who takes refuge in him",
  "2 Timothy 1:7: For the Spirit God gave us does not make us timid, but gives us power, love, and self-discipline",
  "Matthew 6:33: But seek first his kingdom and his righteousness, and all these things will be given to you as well",
  "Romans 15:13: May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit",
  "Psalm 37:4: Delight yourself in the Lord, and he will give you the desires of your heart",
  "Proverbs 3:5: Trust in the Lord with all your heart",
];

const dailyQuotes = [
  "Today is the beginning of the rest of your life. Make it count.",
  "Chase your dreams, not your tail.",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Every day is a new opportunity to change your life.",
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "The future depends on what you do today. - Mahatma Gandhi",
  "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "The best time to plant a tree was 20 years ago. The second best time is now.",
  "You miss 100% of the shots you don't take. - Wayne Gretzky",
  "Dream big and dare to fail. - Norman Vaughan",
  "The biggest risk is not taking any risk. In a world that is changing quickly, the only strategy that is guaranteed to fail is not taking risks. - Mark Zuckerberg",
  "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "The only thing that stands between you and your dream is the will to try and the belief that it is actually possible. - Joel Brown",
  "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
  "Don't count the days, make the days count. - Muhammad Ali",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "It does not matter how slowly you go as long as you do not stop. - Confucius",
  "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "The best way to predict the future is to create it. - Peter Drucker",
  "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Today is the beginning of the rest of your life. Make it count.",
];

const dailyVerseAndQuoteGenerator = () => {
  randomIndexOne = Math.floor(Math.random() * 31);
  randomIndexTwo = Math.floor(Math.random() * 31);
  return [bibleVerses[randomIndexOne], dailyQuotes[randomIndexTwo]];
};

const todayVerseAndQuote = dailyVerseAndQuoteGenerator();
console.log(`Here is today's verse - ${todayVerseAndQuote[0]}`);
console.log(`Here is today's quote - ${todayVerseAndQuote[1]}`);
