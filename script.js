const greetings = [
    "Good morning! I hope you're ready for a productive day.",
    "Hello there! I trust you had a great evening.",
    "Welcome back! I'm excited to see what we can accomplish today.",
    "Hi! I hope you had a refreshing weekend.",
    "Good to have you here! Let's make this day count.",
    "Greetings! I trust you're ready to dive into work.",
    "Hello! I hope you're feeling energized and ready to go.",
    "Welcome! I hope you had a restful night.",
    "Good morning! Let's tackle our tasks with enthusiasm.",
    "Hi there! I trust you're feeling motivated today.",
    "Greetings! Let's make this a day full of achievements.",
    "Hello! I hope you're prepared for a productive day ahead.",
    "Welcome back! Let's hit the ground running.",
    "Good to see you! Let's start this day on a positive note.",
    "Hi! I trust you had a good night's sleep.",
    "Hello there! I hope you're feeling focused and determined.",
    "Welcome! Let's make the most of our time together.",
    "Good morning! I'm excited to work with you today.",
    "Hi! I hope you had a pleasant journey to work.",
    "Greetings! Let's make today a day of progress.",
    "Hello! I trust you're feeling refreshed and ready to excel.",
    "Welcome back! I hope you had a wonderful break.",
    "Good to have you here! Let's conquer new challenges together.",
    "Hi there! I trust you had a great evening.",
    "Hello! I hope you're feeling optimistic and ready to succeed.",
    "Welcome! Let's make today a day of accomplishments.",
    "Good morning! I'm glad to have you on our team.",
    "Hi! I hope you had a restful night's sleep.",
    "Greetings! Let's make this day a stepping stone to success.",
    "Hello! I trust you're ready to make a difference today.",
    "Welcome back! Let's continue our journey toward excellence.",
    "Good to see you! I hope you're ready for an amazing day.",
    "Hi! I trust you had a smooth commute.",
    "Hello there! I hope you're feeling determined and focused.",
    "Welcome! Let's strive for greatness together today.",
    "Good morning! I'm thrilled to have you as part of our team.",
    "Hi! I hope you had an enjoyable evening.",
    "Greetings! Let's make today an exceptional day.",
    "Hello! I trust you're feeling inspired and ready to shine.",
    "Welcome back! Let's keep pushing boundaries.",
    "Good to have you here! Let's make today memorable.",
    "Hi there! I trust you had a good night's rest.",
    "Hello! I hope you're feeling motivated and eager to excel.",
    "Welcome! Let's make today a day of remarkable achievements.",
    "Good morning! I'm excited to see what we can accomplish together.",
    "Hi! I hope you had a pleasant journey to the office.",
    "Greetings! Let's make today a day of breakthroughs.",
    "Hello! I trust you're feeling determined and unstoppable.",
    "Welcome back! Let's continue our quest for success.",
    "Good to see you! I hope you're ready for a productive day.",
    "Hi! I trust you had a peaceful night's sleep.",
    "Hello there! I hope you're feeling positive and ready to conquer.",
    "Welcome! Let's strive for excellence today.",
    "Good morning! I'm delighted to have you as part of our team.",
    "Hi! I hope you had a wonderful evening.",
    "Greetings! Let's make today an extraordinary day.",
    "Hello! I trust you're feeling inspired and ready to make an impact.",
    "Welcome back! Let's chase greatness together.",
    "Good to have you here! Let's make today count.",
    "Hi there! I trust you had a restful night.",
    "Hello! I hope you're feeling motivated and determined to succeed.",
    "Welcome! Let's make today a day of outstanding accomplishments.",
    "Good morning! I'm thrilled to be working with you today.",
    "Hi! I hope you had a pleasant evening.",
    "Greetings! Let's make today a day of immense achievements.",
    "Hello! I trust you're feeling enthusiastic and ready to shine.",
    "Welcome back! Let's continue our journey toward greatness.",
    "Good to see you! I hope you're ready for a successful day.",
    "Hi! I trust you had a smooth commute this morning.",
    "Hello there! I hope you're feeling focused and driven.",
    "Welcome! Let's aim for excellence together today.",
    "Good morning! I'm excited to have you as part of our team.",
    "Hi! I hope you had an enjoyable night.",
    "Greetings! Let's make today an exceptional day of progress.",
    "Hello! I trust you're feeling empowered and ready to excel.",
    "Welcome back! Let's keep pushing boundaries and surpassing expectations.",
    "Good to have you here! Let's make today remarkable.",
    "Hi there! I trust you had a good night's sleep.",
    "Hello! I hope you're feeling motivated and prepared for success.",
    "Welcome! Let's make today a day of extraordinary achievements.",
    "Good morning! I'm thrilled to embark on another day of work with you.",
    "Hi! I hope you had a peaceful evening.",
    "Greetings! Let's make today a day of significant breakthroughs.",
    "Hello! I trust you're feeling determined and ready to conquer new heights.",
    "Welcome back! Let's continue our pursuit of excellence.",
    "Good to see you! I hope you're ready to make great strides today.",
    "Hi! I trust you had a restful night's rest.",
    "Hello there! I hope you're feeling motivated and ready to thrive.",
    "Welcome! Let's strive for greatness and surpass our goals.",
    "Good morning! I'm excited to have you as part of our team today.",
    "Hi! I hope you had a wonderful night.",
    "Greetings! Let's make today an extraordinary day of achievements.",
    "Hello! I trust you're feeling inspired and prepared to make a difference.",
    "Welcome back! Let's keep pushing boundaries and setting new records.",
    "Good to have you here! Let's make today memorable and impactful.",
    "Hi there! I trust you had a good night's sleep.",
    "Hello! I hope you're feeling motivated and ready to conquer challenges.",
    "Welcome! Let's make today a day of remarkable success.",
    "Good morning! I'm thrilled to have you as part of our team.",
    "Hi! I hope you had a pleasant evening.",
    "Greetings! Let's make today an exceptional day of accomplishments.",
    "Hello! I trust you're feeling inspired and ready to shine brightly.",
    "Welcome back! Let's continue our journey toward greatness.",
    "Good to see you! I hope you're ready for a productive day.",
    "Hi! I trust you had a smooth commute.",
];
const admirationMessages = [
    "Your dedication and hard work are truly inspiring.",
    "Your creativity and innovative thinking have made a significant impact.",
    "You consistently go above and beyond what is expected.",
    "Your positive attitude is contagious and uplifts the team.",
    "Your attention to detail is impeccable.",
    "You have a remarkable ability to solve complex problems.",
    "Your work ethic is truly commendable.",
    "Your contributions have greatly contributed to our success.",
    "You consistently exceed expectations and set the bar high.",
    "Your commitment to excellence is unwavering.",
    "You handle challenging situations with grace and professionalism.",
    "Your ideas and suggestions have greatly improved our processes.",
    "You are a natural leader and inspire others to do their best.",
    "Your teamwork and collaboration skills are outstanding.",
    "You consistently deliver exceptional results.",
    "Your passion for your work is evident in everything you do.",
    "You have a remarkable ability to adapt to change.",
    "Your dedication to continuous learning is admirable.",
    "You consistently demonstrate initiative and take ownership of tasks.",
    "Your attention to quality sets you apart.",
    "You have a gift for simplifying complex concepts.",
    "Your commitment to meeting deadlines is impressive.",
    "You consistently display professionalism in all interactions.",
    "Your positive energy and enthusiasm are contagious.",
    "You have a natural talent for building strong relationships.",
    "Your ability to remain calm under pressure is commendable.",
    "You consistently deliver work of the highest caliber.",
    "Your willingness to help others is truly appreciated.",
    "You have a strong sense of accountability and take responsibility for your actions.",
    "Your commitment to personal growth and development is inspiring.",
    "You consistently demonstrate a strong work ethic.",
    "Your problem-solving skills are second to none.",
    "You have a keen eye for detail and catch things others might miss.",
    "Your ability to prioritize tasks effectively is impressive.",
    "You consistently display a positive and can-do attitude.",
    "Your ability to motivate and inspire others is exceptional.",
    "You have a talent for simplifying complex ideas.",
    "Your dedication to customer satisfaction is outstanding.",
    "You consistently produce high-quality work.",
    "Your ability to handle criticism with grace and learn from it is admirable.",
    "You have a knack for finding creative solutions to challenges.",
    "Your commitment to teamwork is exemplary.",
    "You consistently demonstrate exceptional organizational skills.",
    "Your strong communication skills make working with you a pleasure.",
    "You have an incredible ability to think outside the box.",
    "Your attention to detail is exceptional.",
    "You consistently strive for excellence in everything you do.",
    "Your professionalism and integrity are highly valued.",
    "You have a natural talent for inspiring and motivating others.",
    "Your ability to juggle multiple tasks is impressive.",
    "You consistently exceed expectations.",
    "Your commitment to personal and professional growth is inspiring.",
    "You have an innate ability to lead and inspire a team.",
    "Your dedication to continuous improvement is commendable.",
    "You consistently demonstrate strong problem-solving skills.",
    "Your willingness to take on new challenges is admirable.",
    "You have a remarkable ability to remain calm in high-pressure situations.",
    "Your commitment to delivering exceptional customer service is appreciated.",
    "You consistently produce work that is of the highest quality.",
    "Your ability to adapt to change is commendable.",
    "You have a talent for simplifying complex concepts and making them accessible to others.",
    "Your dedication and passion for your work are evident.",
    "You consistently go above and beyond to deliver outstanding results.",
    "Your positive attitude and enthusiasm are infectious.",
    "You have a natural ability to build and maintain strong relationships.",
    "Your attention to detail sets you apart from others.",
    "You consistently demonstrate exceptional leadership skills.",
    "Your commitment to excellence is unwavering.",
    "You have a remarkable ability to inspire and motivate others.",
    "Your problem-solving skills are top-notch.",
    "You consistently display a strong work ethic and dedication.",
    "Your ability to think critically and analyze situations is impressive.",
    "You have a natural talent for finding innovative solutions to challenges.",
    "Your commitment to personal and professional growth is commendable.",
    "You consistently demonstrate exceptional communication skills.",
    "Your willingness to take on new responsibilities is admirable.",
    "You have a remarkable ability to remain calm under pressure.",
    "Your dedication to providing exceptional service is valued.",
    "You consistently produce work that exceeds expectations.",
    "Your ability to adapt to change is highly appreciated.",
    "You have a gift for explaining complex ideas in a way that is easy to understand.",
    "Your dedication to continuous learning is inspiring.",
    "You consistently demonstrate a strong sense of accountability.",
    "Your problem-solving skills are outstanding.",
    "You have a keen eye for detail and catch errors that others might miss.",
    "Your ability to manage time effectively is commendable.",
    "You consistently display a positive and can-do attitude.",
    "Your ability to motivate and inspire others is exceptional.",
    "You have a natural talent for simplifying complex concepts.",
    "Your commitment to customer satisfaction is outstanding.",
    "You consistently deliver work of the highest quality.",
    "Your ability to handle feedback constructively is admirable.",
    "You have a knack for finding creative solutions to challenges.",
    "Your commitment to collaboration and teamwork is exemplary.",
    "You consistently demonstrate exceptional organizational skills.",
    "Your strong communication skills make working with you a pleasure.",
    "You have an incredible ability to think outside the box.",
    "Your attention to detail is exceptional.",
    "You consistently strive for excellence in all aspects of your work.",
    "Your professionalism and integrity are highly regarded.",
    "You have a natural talent for inspiring and motivating others.",
    "Your ability to multitask effectively is impressive.",
    "You consistently exceed expectations.",
    "Your commitment to personal and professional development is inspiring.",
    "You have an innate ability to lead and inspire a team.",
    "Your dedication to continuous improvement is commendable.",
    "You consistently demonstrate strong problem-solving abilities.",
    "Your willingness to take on new challenges is admirable.",
    "You have a remarkable ability to remain calm in high-pressure situations.",
    "Your commitment to delivering exceptional customer service is appreciated.",
    "You consistently produce work of the highest caliber.",
    "Your ability to adapt to change is commendable.",
    "You have a talent for simplifying complex ideas and making them accessible.",
    "Your dedication and passion for your work are evident.",
    "You consistently go above and beyond to deliver outstanding results.",
    "Your positive attitude and enthusiasm are infectious.",
    "You have a natural ability to build and maintain strong relationships.",
    "Your attention to detail sets you apart from others.",
    "You consistently demonstrate exceptional leadership skills.",
    "Your commitment to excellence is unwavering.",
    "You have a remarkable ability to inspire and motivate others.",
    "Your problem-solving skills are exceptional.",
    "You consistently display a strong work ethic and dedication.",
    "Your ability to think critically and analyze situations is impressive.",
    "You have a natural talent for finding innovative solutions to challenges.",
    "Your commitment to personal and professional growth is commendable.",
    "You consistently demonstrate exceptional communication skills.",
    "Your willingness to take on new responsibilities is admirable."
];

const quotes = [
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    "Believe you can and you're halfway there.",
    "The only way to do great work is to love what you do.",
    "Don't watch the clock; do what it does. Keep going.",
    "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
    "The future depends on what you do today.",
    "The only place where success comes before work is in the dictionary.",
    "Opportunities don't happen. You create them.",
    "Don't be afraid to give up the good to go for the great.",
    "The harder you work for something, the greater you'll feel when you achieve it.",
    "Don't wish it were easier, wish you were better.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "I find that the harder I work, the more luck I seem to have.",
    "The secret of getting ahead is getting started.",
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    "The biggest risk is not taking any risk. In a world that's changing really quickly, the only strategy that is guaranteed to fail is not taking risks.",
    "The best time to plant a tree was 20 years ago. The second best time is now.",
    "The way to get started is to quit talking and begin doing.",
    "You don't have to be great to start, but you have to start to be great.",
    "Success is not in what you have, but who you are.",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
    "It does not matter how slowly you go as long as you do not stop.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "Don't be afraid to give up the good to go for the great.",
    "You miss 100% of the shots you don't take.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The only way to do great work is to love what you do.",
    "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got this.",
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    "You can never cross the ocean until you have the courage to lose sight of the shore.",
    "Hardships often prepare ordinary people for an extraordinary destiny.",
    "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
    "It's not about the cards you're dealt, but how you play the hand.",
    "You are never too old to set another goal or to dream a new dream.",
    "The biggest adventure you can take is to live the life of your dreams.",
    "The harder you work for something, the greater you'll feel when you achieve it.",
    "Believe you can and you're halfway there.",
    "Do not wait for opportunity. Create it.",
    "Your time is limited, don't waste it living someone else's life.",
    "Success is not just about making money. It's about making a difference.",
    "A year from now you may wish you had started today.",
    "I find that the harder I work, the more luck I seem to have.",
    "Don't let yesterday take up too much of today.",
    "Success usually comes to those who are too busy to be looking for it.",
    "Don't be afraid to give up the good to go for the great.",
    "The future depends on what you do today.",
    "The only place where success comes before work is in the dictionary.",
    "Success is not the key to happiness. Happiness is the key to success.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "Believe you can and you're halfway there.",
    "The best revenge is massive success.",
    "You miss 100% of the shots you don't take.",
    "The only way to do great work is to love what you do.",
    "Don't watch the clock; do what it does. Keep going.",
    "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
    "The future depends on what you do today.",
    "The only place where success comes before work is in the dictionary.",
    "Opportunities don't happen. You create them.",
    "Don't be afraid to give up the good to go for the great.",
    "The harder you work for something, the greater you'll feel when you achieve it.",
    "Don't wish it were easier, wish you were better.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "I find that the harder I work, the more luck I seem to have.",
    "The secret of getting ahead is getting started.",
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    "The biggest risk is not taking any risk. In a world that's changing really quickly, the only strategy that is guaranteed to fail is not taking risks.",
    "The best time to plant a tree was 20 years ago. The second best time is now.",
    "The way to get started is to quit talking and begin doing.",
    "You don't have to be great to start, but you have to start to be great.",
    "Success is not in what you have, but who you are.",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
    "It does not matter how slowly you go as long as you do not stop.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "Don't be afraid to give up the good to go for the great.",
    "You miss 100% of the shots you don't take.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The only way to do great work is to love what you do.",
    "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got this.",
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    "You can never cross the ocean until you have the courage to lose sight of the shore.",
    "Hardships often prepare ordinary people for an extraordinary destiny.",
    "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
    "It's not about the cards you're dealt, but how you play the hand.",
    "You are never too old to set another goal or to dream a new dream.",
    "The biggest adventure you can take is to live the life of your dreams.",
    "The harder you work for something, the greater you'll feel when you achieve it.",
    "Believe you can and you're halfway there.",
    "Do not wait for opportunity. Create it.",
    "Your time is limited, don't waste it living someone else's life.",
    "Success is not just about making money. It's about making a difference.",
    "A year from now you may wish you had started today.",
    "I find that the harder I work, the more luck I seem to have.",
    "Don't let yesterday take up too much of today.",
    "Success usually comes to those who are too busy to be looking for it.",
    "Don't be afraid to give up the good to go for the great.",
    "The future depends on what you do today.",
    "The only place where success comes before work is in the dictionary.",
    "Success is not the key to happiness. Happiness is the key to success.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "Believe you can and you're halfway there.",
    "The best revenge is massive success.",
    "You miss 100% of the shots you don't take.",
    "The only way to do great work is to love what you do.",
    "Don't watch the clock; do what it does. Keep going.",
    "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
    "The future depends on what you do today.",
    "The only place where success comes before work is in the dictionary.",
    "Opportunities don't happen. You create them.",
    "Don't be afraid to give up the good to go for the great.",
    "The harder you work for something, the greater you'll feel when you achieve it.",
    "Don't wish it were easier, wish you were better.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "I find that the harder I work, the more luck I seem to have.",
    "The secret of getting ahead is getting started.",
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    "The biggest risk is not taking any risk. In a world that's changing really quickly, the only strategy that is guaranteed to fail is not taking risks.",
    "The best time to plant a tree was 20 years ago. The second best time is now.",
    "The way to get started is to quit talking and begin doing.",
    "You don't have to be great to start, but you have to start to be great.",
    "Success is not in what you have, but who you are.",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
    "It does not matter how slowly you go as long as you do not stop.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "Don't be afraid to give up the good to go for the great.",
    "You miss 100% of the shots you don't take.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The only way to do great work is to love what you do.",
    "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got this.",
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    "You can never cross the ocean until you have the courage to lose sight of the shore.",
    "Hardships often prepare ordinary people for an extraordinary destiny.",
    "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
    "It's not about the cards you're dealt, but how you play the hand.",
    "You are never too old to set another goal or to dream a new dream.",
    "The biggest adventure you can take is to live the life of your dreams.",
    "The harder you work for something, the greater you'll feel when you achieve it.",
    "Believe you can and you're halfway there.",
    "Do not wait for opportunity. Create it.",
  ];
  