//default book list, any books added, will not be update here that will be stored in user local storage.
const BooksList = () => {
  const books = [
    {
      id: 1,
      bookname: "The Silent Patient",
      bookauthor: "Alex Michaelides",
      booktitle: "A psychological thriller full of twists",
      bookprice: 399,
      bookpublished: 2019,
      category: "Thriller",
      rating: 9.2,
      bookimage: "https://m.media-amazon.com/images/I/81JJPDNlxSL._SL1500_.jpg",
      description: `Alicia Berenson is a celebrated London painter with what seems to be the perfect life: a beautiful home, a successful career, and a husband she adores. Yet, one evening, after her husband Gabriel returns home from a fashion shoot, Alicia shoots him five times in the face—and then never speaks another word. Her sudden and complete silence transforms her into a figure of mystery and obsession for the public and media alike. She is admitted to a secure psychiatric unit, The Grove, where she remains mute and withdrawn for years. 

Theo Faber, a psychotherapist who has followed Alicia’s case from the beginning, becomes determined to treat her. His fascination is partly professional curiosity and partly personal—a reflection of his own broken past and desire for redemption. As Theo begins working at The Grove, he slowly pieces together Alicia’s history through her art, her diary, and the people who knew her. Each discovery leads to new questions about her marriage, her mental state, and the people surrounding her life. 

What follows is a tense unraveling of truth and deception. Theo’s search for understanding becomes an obsession, blurring the boundaries between therapist and patient. The novel builds toward a shocking revelation that redefines everything the reader believes about Alicia’s silence, turning the entire story inside out. “The Silent Patient” is not only a gripping thriller but also a haunting study of trauma, guilt, and the power of the human mind to protect itself from unbearable pain. It explores the fragility of perception and how the truth can be both a weapon and a salvation.`,
    },
    {
      id: 2,
      bookname: "Atomic Habits",
      bookauthor: "James Clear",
      booktitle: "An Easy & Proven Way to Build Good Habits & Break Bad Ones",
      bookprice: 499,
      bookpublished: 2018,
      category: "Self-Help",
      rating: 9.7,
      bookimage:
        "https://m.media-amazon.com/images/I/81bGKUa1e0L._AC_UF1000,1000_QL80_.jpg",
      description: `“Atomic Habits” by James Clear is a transformative exploration of how small, incremental changes can produce extraordinary results. The book begins with Clear’s own story of recovery from a severe injury in high school that left him struggling to rebuild his identity and confidence. Through small, consistent habits, he redefined his future—this personal journey becomes the foundation for his philosophy that tiny habits, when compounded, yield remarkable outcomes.

Clear argues that success isn’t about massive overnight transformations, but about the power of marginal gains—improving just 1% each day. He introduces a four-step model of habit formation: cue, craving, response, and reward. Understanding this process allows individuals to consciously design habits that work for them rather than against them. He emphasizes the importance of systems over goals, urging readers to focus on the processes that lead to results rather than the results themselves.

Throughout the book, Clear breaks down practical strategies to create good habits, eliminate bad ones, and master the small behaviors that lead to long-term success. He shows how environment shapes behavior, how identity is built through repeated actions, and how to use habit stacking, cues, and accountability to ensure consistency. 

What sets “Atomic Habits” apart is its clarity and scientific grounding. Drawing from psychology, neuroscience, and real-world examples, Clear demonstrates that anyone can reprogram their behavior by focusing on the smallest units of change—atomic habits. Ultimately, the book delivers a deeply empowering message: that lasting change is not a matter of willpower, but of smart design. By making tiny adjustments to one’s routine, anyone can transform not just their performance, but their identity and future.`,
    },
    {
      id: 3,
      bookname: "The Alchemist",
      bookauthor: "Paulo Coelho",
      booktitle: "A fable about following your dream",
      bookprice: 299,
      bookpublished: 1988,
      category: "Fiction",
      rating: 8.9,
      bookimage:
        "https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UF1000,1000_QL80_.jpg",
      description: `“The Alchemist” follows the journey of Santiago, a young Andalusian shepherd who dreams of discovering treasure hidden near the Egyptian pyramids. Dissatisfied with a life of predictability, Santiago sells his flock and embarks on a quest driven by faith, curiosity, and the belief that his dreams carry a divine message. Along the way, he meets a series of mentors—the mysterious Melchizedek, the Englishman obsessed with alchemy, and the wise Alchemist himself—each teaching him lessons about fate, persistence, and the language of the universe.

Through deserts, oases, and moments of hardship, Santiago learns that true treasure lies not in gold but in self-discovery. His encounters with love, uncertainty, and destiny reveal the importance of listening to one’s heart and following the “Personal Legend” that defines every soul’s path. Coelho uses this journey as an allegory for spiritual awakening, reminding readers that the universe conspires to help those who pursue their true purpose.

Written in simple yet poetic prose, the novel transcends cultural boundaries, merging mysticism, philosophy, and adventure into a timeless tale of hope and fulfillment. “The Alchemist” remains one of the most beloved books worldwide, urging readers to seek the extraordinary in the ordinary and to never abandon their dreams, no matter how distant or impossible they may seem.`,
    },
    {
      id: 4,
      bookname: "The Psychology of Money",
      bookauthor: "Morgan Housel",
      booktitle: "Timeless lessons on wealth, greed, and happiness",
      bookprice: 450,
      bookpublished: 2020,
      category: "Finance",
      rating: 9.1,
      bookimage:
        "https://m.media-amazon.com/images/I/81Lb75rUhLL._AC_UF1000,1000_QL80_.jpg",
      description: `Morgan Housel’s “The Psychology of Money” challenges the traditional view of wealth as a purely mathematical or strategic pursuit. Instead, it reveals that our relationship with money is deeply emotional, shaped by experiences, fears, and the stories we tell ourselves. Housel uses engaging anecdotes—from the frugality of Warren Buffett to the recklessness of lottery winners—to show that financial success is less about knowledge and more about behavior.

The book emphasizes that everyone views money through the lens of their personal history. Two people in the same financial situation can make drastically different choices, because money decisions are influenced by psychology rather than logic. Housel highlights concepts such as “Enough,” the illusion of control, and the role of luck in wealth creation. Through 19 short, thought-provoking chapters, he demonstrates how humility, patience, and rational restraint often outperform intelligence and technical expertise.

Ultimately, the book delivers a refreshing perspective: managing money is not about mastering spreadsheets, but mastering yourself. True wealth is the freedom to live life on one’s own terms. By exploring how people think, panic, and hope around money, “The Psychology of Money” becomes a mirror that reflects our deepest values and vulnerabilities. It’s a book not just about finance—but about human nature, happiness, and the quiet power of contentment.`,
    },
    {
      id: 5,
      bookname: "The 5 AM Club",
      bookauthor: "Robin Sharma",
      booktitle: "Own your morning, elevate your life",
      bookprice: 350,
      bookpublished: 2018,
      category: "Motivation",
      rating: 8.0,
      bookimage:
        "https://m.media-amazon.com/images/I/81N7FmJhbhL._AC_UF1000,1000_QL80_.jpg",
      description: `Robin Sharma’s “The 5 AM Club” blends fiction and self-improvement into a motivational guide about transforming life through the power of early rising. The story begins with an eccentric billionaire mentoring two struggling individuals—a disheartened artist and an unfulfilled entrepreneur. The billionaire introduces them to a simple but profound philosophy: waking up at 5 AM to dedicate the first hour of the day to self-mastery, health, reflection, and growth.

Through the 20/20/20 formula—20 minutes of movement, 20 minutes of reflection, and 20 minutes of learning—Sharma demonstrates how the quiet hours before dawn hold the key to unlocking productivity and peace. The book combines storytelling with neuroscience, philosophy, and practical routines that help readers create sustainable discipline. 

As the characters travel from Mauritius to Rome and South Africa, they experience personal transformation, proving that greatness is built in solitude, long before the world wakes up. Beyond time management, Sharma’s message is about reclaiming control of life, protecting one’s mind from distraction, and nurturing creativity. 

“The 5 AM Club” is ultimately a fable about potential—about the daily choices that separate mediocrity from mastery. It inspires readers to rise before sunrise, not just to start the day, but to start living deliberately and powerfully.`,
    },
    {
      id: 6,
      bookname: "Ikigai",
      bookauthor: "Héctor García & Francesc Miralles",
      booktitle: "The Japanese secret to a long and happy life",
      bookprice: 299,
      bookpublished: 2016,
      category: "Philosophy",
      rating: 8.6,
      bookimage:
        "https://m.media-amazon.com/images/I/71tbalAHYCL._AC_UF1000,1000_QL80_.jpg",
      description: `“Ikigai” invites readers into the serene rhythm of Okinawa, the Japanese island famed for longevity and contentment. 
    Authors Héctor García and Francesc Miralles explore how the island’s residents nurture vitality not through wealth or luxury but through balance—purposeful work, strong community, healthy food, and constant curiosity. 
    Through interviews with centenarians, the writers uncover daily habits that combine mindfulness with motion: people garden, walk, share laughter, and keep learning well past a hundred. 
    The book intertwines cultural observation with scientific insight, revealing that the word *ikigai* means “a reason for being.” 
    Each person’s ikigai lies where passion, mission, vocation, and profession intersect.  
    García and Miralles translate this abstract concept into small, practical rituals—morning gratitude, moderate diet, gentle exercise, and deep friendships. 
    As the narrative flows between philosophy and real lives, it paints a world where time slows down and joy is handcrafted in ordinary moments. 
    “Ikigai” ultimately becomes less a manual and more a meditation: a quiet reminder that the secret to a fulfilling life is not found in haste or accumulation but in finding harmony between what we love, what the world needs, and what gives us meaning every day.`,
    },
    {
      id: 7,
      bookname: "Deep Work",
      bookauthor: "Cal Newport",
      booktitle: "Rules for focused success in a distracted world",
      bookprice: 399,
      bookpublished: 2016,
      category: "Productivity",
      rating: 9.0,
      bookimage:
        "https://m.media-amazon.com/images/I/61kq6Zy6X2L._AC_UF1000,1000_QL80_.jpg",
      description: `Cal Newport’s “Deep Work” is both a manifesto and a roadmap for reclaiming attention in an era of endless noise. 
    Newport defines deep work as the ability to focus without distraction on cognitively demanding tasks—a skill he argues is becoming rare yet invaluable. 
    The narrative moves between striking examples: Carl Jung retreating to the woods to write, Woody Allen releasing a film every year without social media, and modern programmers who carve out “monk mode” hours to build world-changing software. 
    Newport contrasts these with the shallow busyness that consumes most professionals—constant emails, meetings, and scrolling—that leaves little space for creativity or mastery.  
    Through four rules, he teaches how to cultivate depth: work deeply, embrace boredom, quit social media, and drain the shallows. 
    He offers rituals for scheduling uninterrupted blocks, measuring progress, and designing environments that make focus the default. 
    Beyond productivity, “Deep Work” explores meaning—how craftsmanship and sustained attention turn work into art. 
    Newport’s tone is analytical yet inspiring, blending neuroscience with timeless wisdom: to produce something of true value, one must first learn the art of being undistracted.`,
    },
    {
      id: 8,
      bookname: "Can't Hurt Me",
      bookauthor: "David Goggins",
      booktitle: "Master your mind and defy the odds",
      bookprice: 550,
      bookpublished: 2018,
      category: "Autobiography",
      rating: 9.3,
      bookimage:
        "https://m.media-amazon.com/images/I/81bGKUa1e0L._AC_UF1000,1000_QL80_.jpg",
      description: `David Goggins’ “Can’t Hurt Me” reads like a battle cry carved out of pain and persistence. 
    Born into poverty and abuse, Goggins faced racism, bullying, and failure before transforming himself into a U.S. Navy SEAL and world-record-holding endurance athlete. 
    His story is told in raw, unflinching detail—each chapter a confrontation with weakness and the limits of human will.  
    Goggins introduces the concept of the “40 Percent Rule”: when the mind tells you you’re done, you’ve only reached forty percent of your capacity. 
    Through freezing runs, brutal SEAL training, and ultramarathons that shred his body, he proves the mind can command the flesh far beyond pain’s threshold. 
    Yet beneath the toughness lies introspection; Goggins writes about fear, loneliness, and the fight for self-respect with startling honesty.  
    The book alternates memoir and manual—every ordeal accompanied by a “challenge” that urges readers to face their own limits. 
    “Can’t Hurt Me” ultimately becomes a meditation on mental resilience: the idea that suffering, when confronted head-on, can forge invincible character and transform trauma into triumph.`,
    },
    {
      id: 9,
      bookname: "Rich Dad Poor Dad",
      bookauthor: "Robert T. Kiyosaki",
      booktitle: "What the rich teach their kids about money",
      bookprice: 399,
      bookpublished: 1997,
      category: "Finance",
      rating: 9.0,
      bookimage:
        "https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UF1000,1000_QL80_.jpg",
      description: `Robert Kiyosaki’s “Rich Dad Poor Dad” contrasts two philosophies of life and money through the voices of two fathers—his educated but financially struggling biological father (“Poor Dad”) and the entrepreneurial father of his best friend (“Rich Dad”). 
    The narrative unfolds in Hawaii, where young Robert absorbs conflicting lessons: one values job security and academic success, the other preaches financial literacy, risk, and asset building.  
    Through anecdotes about learning to run a business, investing in real estate, and questioning traditional education, Kiyosaki exposes the gap between working for money and making money work for you.  
    The book’s storytelling simplicity hides its radical message: schools train people to be employees, not owners. 
    By understanding cash flow, assets, and liabilities, anyone can break free from the “rat race.” 
    Kiyosaki doesn’t romanticize wealth; he insists financial independence demands courage to think differently, to face failure, and to keep learning.  
    “Rich Dad Poor Dad” endures as a parable that changed millions of mindsets—transforming fear of money into curiosity, and work into a tool for freedom.`,
    },
    {
      id: 10,
      bookname: "Sapiens",
      bookauthor: "Yuval Noah Harari",
      booktitle: "A brief history of humankind",
      bookprice: 499,
      bookpublished: 2011,
      category: "History",
      rating: 9.5,
      bookimage:
        "https://m.media-amazon.com/images/I/713jIoMO3UL._AC_UF1000,1000_QL80_.jpg",
      description: `Yuval Noah Harari’s “Sapiens” compresses 70 000 years of human history into a sweeping, provocative narrative. 
    Beginning with the Cognitive Revolution, when Homo sapiens learned to imagine gods, nations, and stories, Harari explains how shared myths allowed humans to cooperate on a massive scale. 
    He traces the Agricultural Revolution that bound people to land and hierarchy, the Scientific Revolution that unleashed discovery, and the capitalist forces that now shape global society.  
    Blending anthropology, biology, and philosophy, Harari challenges readers to question progress itself—has comfort made us happier, or merely busier?  
    His tone is both scholarly and lyrical, moving from prehistoric caves to Silicon Valley with ease, exposing how imagined orders—from religion to money—govern every aspect of modern life.  
    “Sapiens” concludes by pondering humanity’s next leap: genetic engineering and artificial intelligence, technologies that may render Homo sapiens obsolete.  
    More than a history, it is a mirror that reflects our species’ triumphs and follies, asking not only how we came to dominate the planet, but whether we are wise enough to continue doing so.`,
    },
    {
      id: 11,
      bookname: "Educated",
      bookauthor: "Tara Westover",
      booktitle: "A memoir of a girl who sought education against all odds",
      bookprice: 450,
      bookpublished: 2018,
      category: "Biography",
      rating: 8.9,
      bookimage:
        "https://m.media-amazon.com/images/I/81WojUxbbFL._AC_UF1000,1000_QL80_.jpg",
      description: `Tara Westover’s memoir “Educated” is a searing journey from ignorance to illumination. 
    Born in rural Idaho to a survivalist family, Tara grows up isolated from society—her father distrusts the government, schools, and hospitals, and her mother practices unlicensed herbal medicine. 
    The children work in the family junkyard, surrounded by danger and denial. Tara’s childhood is shaped by violence, fear, and loyalty to her father’s paranoid worldview.  
    Yet within her grows an unexplainable hunger—to know, to understand, to learn.  
    Without formal schooling, she begins self-education, teaching herself algebra and grammar from discarded books.  
    Against immense resistance, she gains admission to Brigham Young University, where she confronts a world she has never imagined. There, she discovers not only history and science but also the painful truth about her own upbringing.  
    Her path takes her to Cambridge and Harvard, but “Educated” is not merely about academic success—it’s about the emotional cost of self-liberation. 
    Westover’s prose captures the dissonance of loving a family that denies reality and the grief of building a self separate from one’s roots.  
    “Educated” is ultimately a story about reclaiming identity and the radical, redemptive power of knowledge.`,
    },
    {
      id: 12,
      bookname: "The Power of Now",
      bookauthor: "Eckhart Tolle",
      booktitle: "A guide to spiritual enlightenment",
      bookprice: 375,
      bookpublished: 1997,
      category: "Spirituality",
      rating: 8.7,
      bookimage:
        "https://m.media-amazon.com/images/I/61v6d93xT0L._AC_UF1000,1000_QL80_.jpg",
      description: `Eckhart Tolle’s “The Power of Now” is both a spiritual awakening and a call to consciousness. 
    The book opens with Tolle’s own transformation—after years of depression and despair, he experiences a profound internal shift one night, realizing that his suffering stemmed from identification with his thoughts. 
    This awakening becomes the foundation for his central message: true peace and freedom exist only in the present moment.  
    Tolle guides readers through concepts like the “pain-body,” the ego, and the illusion of time, teaching that anxiety and regret arise from living in the past or future. 
    By observing the mind without judgment and surrendering to the “Now,” individuals can dissolve suffering and experience the stillness of pure awareness.  
    Written as a series of dialogues, “The Power of Now” feels meditative—each sentence encourages slowing down, breathing, and seeing beyond mental noise. 
    Tolle draws from Zen Buddhism, Christian mysticism, and Advaita philosophy, yet his language is simple and accessible.  
    The book’s wisdom lies not in theory but in practice: every moment holds the potential for awakening. 
    It’s a guide not to religion, but to presence—a manual for stepping beyond thought into the luminous quiet of being.`,
    },
    {
      id: 13,
      bookname: "Start With Why",
      bookauthor: "Simon Sinek",
      booktitle: "How great leaders inspire everyone to take action",
      bookprice: 420,
      bookpublished: 2009,
      category: "Leadership",
      rating: 8.8,
      bookimage:
        "https://m.media-amazon.com/images/I/71vNfZxJRAL._AC_UF1000,1000_QL80_.jpg",
      description: `“Start With Why” by Simon Sinek explores the unseen force that drives the world’s most influential leaders and organizations. 
    The book’s premise is deceptively simple: people don’t buy what you do—they buy why you do it.  
    Using examples like Apple, Martin Luther King Jr., and the Wright brothers, Sinek explains how visionary leaders inspire loyalty and innovation by communicating purpose before product.  
    He introduces the “Golden Circle” model: Why, How, and What. 
    Most companies focus on what they do, but only those that start with “Why”—a clear belief or cause—create lasting impact.  
    Through psychology and storytelling, Sinek shows how aligning action with purpose creates authenticity and trust.  
    The book’s examples are both corporate and deeply human: it’s as much about self-leadership as it is about management.  
    “Start With Why” challenges readers to look inward—to ask why they wake up each morning, why their work matters, and how to lead with conviction rather than manipulation.  
    Sinek’s conversational tone and memorable examples turn theory into inspiration, making this a manifesto for anyone seeking meaning beyond metrics. 
    Ultimately, it’s a book about belief—about finding the courage to lead from the inside out.`,
    },
    {
      id: 14,
      bookname: "Thinking, Fast and Slow",
      bookauthor: "Daniel Kahneman",
      booktitle: "The two systems that drive the way we think",
      bookprice: 480,
      bookpublished: 2011,
      category: "Psychology",
      rating: 9.1,
      bookimage:
        "https://m.media-amazon.com/images/I/71Yz7U5Ck9L._AC_UF1000,1000_QL80_.jpg",
      description: `Daniel Kahneman’s “Thinking, Fast and Slow” is a tour of the mind’s hidden machinery, written by a Nobel Prize-winning psychologist whose research reshaped economics and human behavior theory. 
    Kahneman divides the brain into two systems: System 1, fast, intuitive, and emotional; and System 2, slow, deliberate, and logical.  
    He shows how these systems interact—and often mislead us—in everyday judgments, from financial decisions to moral choices.  
    Through decades of experiments with Amos Tversky, Kahneman reveals how biases like overconfidence, loss aversion, and anchoring distort our perception of truth and risk.  
    What makes the book powerful is its humility; even Kahneman admits he cannot escape the illusions he describes.  
    “Thinking, Fast and Slow” is not just a psychology book but a meditation on the limits of human rationality.  
    It helps readers recognize mental shortcuts and challenge their assumptions, bridging the gap between intuition and reasoning.  
    The narrative weaves science with storytelling—parables of gamblers, investors, and policymakers—to illustrate that understanding bias is the first step to wisdom.  
    By the end, readers see the mind as both marvelous and flawed: a paradoxical instrument of brilliance and blindness.`,
    },
    {
      id: 15,
      bookname: "Becoming",
      bookauthor: "Michelle Obama",
      booktitle: "The memoir of the former First Lady of the United States",
      bookprice: 520,
      bookpublished: 2018,
      category: "Biography",
      rating: 9.4,
      bookimage:
        "https://m.media-amazon.com/images/I/81h2gWPTYJL._AC_UF1000,1000_QL80_.jpg",
      description: `Michelle Obama’s “Becoming” is an intimate, moving chronicle of a woman who grew from a working-class Chicago girl into one of the most admired figures in the world. 
    The memoir is divided into three sections—Becoming Me, Becoming Us, and Becoming More—each tracing a stage of identity.  
    In her early years, Michelle Robinson learns diligence and determination from her parents in a cramped South Side apartment. 
    At Princeton and Harvard Law School, she faces subtle and overt racism but learns to define herself by excellence rather than expectation.  
    Her life intertwines with Barack Obama’s—a partnership that evolves through shared purpose and challenge.  
    When she becomes First Lady, her world expands from private struggles to public responsibilities: balancing motherhood, politics, and the scrutiny of millions.  
    Yet the heart of “Becoming” lies not in the White House but in the quiet reflections—on marriage, motherhood, and self-worth.  
    Michelle’s voice is warm, candid, and human; she writes not as an icon but as a woman in progress.  
    Her journey from doubt to confidence becomes a universal story about resilience, integrity, and grace.  
    “Becoming” is both personal narrative and collective mirror—reminding readers that our lives are works in progress, always unfolding, always becoming.`,
    },
    {
      id: 16,
      bookname: "The Subtle Art of Not Giving a F*ck",
      bookauthor: "Mark Manson",
      booktitle: "A counterintuitive approach to living a good life",
      bookprice: 399,
      bookpublished: 2016,
      category: "Self-Help",
      rating: 8.5,
      bookimage:
        "https://m.media-amazon.com/images/I/71QKQ9mwV7L._AC_UF1000,1000_QL80_.jpg",
      description: `Mark Manson’s “The Subtle Art of Not Giving a F*ck” is both irreverent and deeply philosophical—a modern guide to meaning through acceptance rather than denial. 
    Manson opens with an unflinching premise: life is not about being positive all the time. Pain, struggle, and disappointment are unavoidable; what matters is choosing what to care about. 
    Using humor and raw honesty, he dismantles the self-help obsession with constant happiness, arguing instead that real freedom comes from embracing limits and responsibility.  
    The narrative is part memoir, part existential reflection. 
    Manson shares his personal failures, from career disasters to broken relationships, showing that growth often comes from loss rather than success. 
    He explores how entitlement, social media validation, and toxic positivity distort our sense of self, and he calls for a return to humility and self-awareness.  
    Each chapter reframes traditional advice: failure is not the opposite of success but its foundation; suffering is not to be avoided but chosen wisely.  
    Manson’s blunt, profane humor is disarming—it breaks the reader’s defenses, making profound truths feel both relatable and liberating.  
    Beneath the shock value lies a timeless message: happiness is not found in more, but in less—in caring only about what truly aligns with one’s values. 
    “The Subtle Art of Not Giving a F*ck” ultimately becomes a spiritual text for a skeptical generation, teaching that maturity begins when we stop trying to be extraordinary and start living authentically.`,
    },
    {
      id: 17,
      bookname: "The Lean Startup",
      bookauthor: "Eric Ries",
      booktitle: "How today's entrepreneurs use continuous innovation",
      bookprice: 450,
      bookpublished: 2011,
      category: "Business",
      rating: 8.9,
      bookimage:
        "https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UF1000,1000_QL80_.jpg",
      description: `Eric Ries’ “The Lean Startup” revolutionized the way businesses and entrepreneurs think about innovation. 
    Drawing on his experience as a Silicon Valley founder, Ries introduces a scientific approach to building startups—one that values learning over luck and iteration over perfection.  
    The core idea is simple: instead of building a full product based on assumptions, entrepreneurs should create a “minimum viable product” (MVP), test it with real users, and adapt quickly. 
    This process of Build-Measure-Learn forms the heartbeat of the lean methodology.  
    Through vivid case studies—from software startups to corporate innovators—Ries demonstrates how feedback loops, validated learning, and pivoting save time, money, and effort.  
    The book challenges the myth of the genius entrepreneur, suggesting that success comes not from grand vision alone but from disciplined experimentation.  
    Ries writes with clarity and urgency, blending engineering logic with human insight.  
    Beyond startups, his principles apply to anyone creating something new—artists, educators, nonprofits, even governments.  
    “The Lean Startup” transforms entrepreneurship from gamble to craft.  
    Its message is as philosophical as it is practical: progress is born not from certainty but from humility—the courage to learn faster than the world changes.`,
    },
    {
      id: 18,
      bookname: "Zero to One",
      bookauthor: "Peter Thiel",
      booktitle: "Notes on startups, or how to build the future",
      bookprice: 420,
      bookpublished: 2014,
      category: "Entrepreneurship",
      rating: 8.8,
      bookimage:
        "https://m.media-amazon.com/images/I/61v+5vhg3fL._AC_UF1000,1000_QL80_.jpg",
      description: `“Zero to One” by Peter Thiel, co-founder of PayPal and early Facebook investor, is a manifesto for innovation in its purest sense: creating something truly new rather than competing to make something slightly better.  
    Thiel challenges conventional startup wisdom, arguing that progress comes not from competition but from monopoly—doing what others cannot.  
    The title itself reflects his belief that true innovation takes us from zero (nothing) to one (something unique), whereas copying only takes us from one to many.  
    Through sharp, contrarian essays, Thiel examines the psychology and strategy of entrepreneurs who redefine industries.  
    He critiques the culture of incrementalism, calling for bold thinking and secret knowledge—the hidden insights that lead to breakthroughs.  
    The book moves seamlessly between philosophy, economics, and technology, weaving lessons from Silicon Valley with reflections on history and human ambition.  
    Thiel’s tone is confident, provocative, and often polarizing, but his vision is clear: the future depends on creators who dare to think for themselves.  
    “Zero to One” is not just about startups—it’s about a mindset of progress.  
    It urges readers to stop competing in crowded spaces and instead build the foundations of tomorrow by asking the hardest question of all: “What valuable company is nobody building?”`,
    },
    {
      id: 19,
      bookname: "Dune",
      bookauthor: "Frank Herbert",
      booktitle: "A science fiction saga set on the desert planet Arrakis",
      bookprice: 499,
      bookpublished: 1965,
      category: "Science Fiction",
      rating: 9.3,
      bookimage:
        "https://m.media-amazon.com/images/I/91A6QmJ+3LL._AC_UF1000,1000_QL80_.jpg",
      description: `Frank Herbert’s “Dune” is a monumental epic of politics, ecology, and destiny set on the desert world of Arrakis, the only source of the universe’s most valuable substance: the spice melange.  
    The story follows Paul Atreides, heir to House Atreides, whose family is granted stewardship of Arrakis by a treacherous emperor.  
    When betrayal strikes and his family is destroyed, Paul escapes into the deep desert, where he unites with the native Fremen—fierce warriors who have adapted to the planet’s harsh sands.  
    Through visions and prophecy, Paul’s destiny unfolds as he becomes the messianic figure “Muad'Dib,” leading a revolution that will reshape empires.  
    “Dune” weaves themes of power, religion, survival, and ecology into a dense, immersive world.  
    Herbert’s prose is both poetic and precise, describing not just interstellar politics but the psychology of prophecy and leadership.  
    Every grain of sand feels alive with meaning: water is sacred, loyalty is fragile, and destiny is a burden as much as a gift.  
    Beyond its science-fiction frame, “Dune” explores humanity’s eternal struggle with greed and the desire for control.  
    It remains a towering achievement—a saga that feels as prophetic today as it did sixty years ago, warning of what happens when empires chase power at the expense of balance.`,
    },
    {
      id: 20,
      bookname: "The Hobbit",
      bookauthor: "J.R.R. Tolkien",
      booktitle: "A fantasy adventure preceding The Lord of the Rings",
      bookprice: 350,
      bookpublished: 1937,
      category: "Fantasy",
      rating: 9.6,
      bookimage:
        "https://m.media-amazon.com/images/I/81t2CVWEsUL._AC_UF1000,1000_QL80_.jpg",
      description: `J.R.R. Tolkien’s “The Hobbit” is a timeless adventure that bridges fairy tale and epic mythology.  
    It follows Bilbo Baggins, a comfort-loving hobbit who is unexpectedly thrust into an expedition with the wizard Gandalf and a band of dwarves seeking to reclaim their homeland from the dragon Smaug.  
    Reluctant and fearful at first, Bilbo gradually discovers courage, wit, and resourcefulness he never knew he possessed.  
    The journey takes him through forests of trolls, riddles with Gollum, and battles with goblins, each episode revealing another layer of Tolkien’s rich imagination.  
    Beneath its whimsy lies a deeper meditation on heroism and greed—Bilbo’s growth contrasts sharply with the destructive lust for treasure that consumes others.  
    Tolkien’s world is detailed with mythic depth: songs, languages, and lore that breathe life into every page.  
    “The Hobbit” stands on its own as a charming tale of adventure but also foreshadows the grand saga of “The Lord of the Rings.”  
    It’s a story of transformation—of how the smallest, most unlikely person can shape the fate of worlds.  
    Through Bilbo’s eyes, Tolkien reminds readers that courage is not the absence of fear but the quiet decision to act in spite of it.`,
    },
    {
      id: 21,
      bookname: "To Kill a Mockingbird",
      bookauthor: "Harper Lee",
      booktitle: "A novel about racial injustice and moral growth",
      bookprice: 320,
      bookpublished: 1960,
      category: "Classic",
      rating: 9.7,
      bookimage:
        "https://m.media-amazon.com/images/I/81OdwZ9WELL._AC_UF1000,1000_QL80_.jpg",
      description: `Harper Lee’s “To Kill a Mockingbird” is an enduring portrait of childhood innocence and moral courage set in the racially divided American South during the 1930s.  
    The story unfolds through the eyes of young Scout Finch, a spirited girl growing up in Maycomb, Alabama, alongside her brother Jem and their wise, compassionate father, Atticus Finch.  
    When Atticus, a lawyer, takes on the case of Tom Robinson—a Black man falsely accused of raping a white woman—he stands alone against the deep-seated prejudice of his community.  
    Through the trial and its aftermath, Scout and Jem witness the harsh realities of racism, hypocrisy, and injustice.  
    Yet amid the ugliness, the novel celebrates empathy and decency, embodied by Atticus’s lesson: “You never really understand a person until you climb into his skin and walk around in it.”  
    The book intertwines themes of innocence lost, moral awakening, and the resilience of conscience.  
    Harper Lee’s prose is graceful yet piercing, filled with humor, tenderness, and quiet wisdom.  
    More than a story of racial injustice, “To Kill a Mockingbird” is a meditation on the human condition—on how compassion, courage, and integrity can persist even in the face of cruelty.  
    It remains a timeless appeal to empathy, reminding readers that morality is not inherited but chosen, one act of kindness at a time.`,
    },
    {
      id: 22,
      bookname: "1984",
      bookauthor: "George Orwell",
      booktitle: "A dystopian tale of totalitarianism and surveillance",
      bookprice: 299,
      bookpublished: 1949,
      category: "Dystopian",
      rating: 9.4,
      bookimage:
        "https://m.media-amazon.com/images/I/71kxa1-0mfL._AC_UF1000,1000_QL80_.jpg",
      description: `George Orwell’s “1984” is one of the most haunting dystopian novels ever written—a grim vision of a world stripped of freedom, truth, and individuality.  
    The story follows Winston Smith, a weary bureaucrat living under the omnipresent eye of Big Brother, in a society where every thought and emotion is monitored by the Party.  
    The world of Oceania is one of perpetual war, historical revisionism, and psychological control.  
    Even language itself is weaponized through “Newspeak,” designed to eliminate rebellious thought.  
    Winston’s quiet rebellion begins with small acts—keeping a forbidden diary, falling in love with Julia, daring to hope for freedom.  
    Yet as he is drawn deeper into defiance, he discovers that the Party’s power is absolute, capable not only of controlling behavior but of rewriting reality itself.  
    Orwell’s prose is sharp and prophetic, dissecting the mechanics of totalitarianism and mass manipulation.  
    The novel’s most chilling idea—that truth can be erased and history rewritten—feels more relevant with every generation.  
    “1984” is more than political fiction; it is a warning about the fragility of freedom and the ease with which fear can enslave the mind.  
    In its bleak ending, Orwell leaves readers not with despair but with the haunting question of whether humanity can ever truly remain free.`,
    },
    {
      id: 23,
      bookname: "The Catcher in the Rye",
      bookauthor: "J.D. Salinger",
      booktitle: "A story of teenage rebellion and alienation",
      bookprice: 280,
      bookpublished: 1951,
      category: "Classic",
      rating: 8.4,
      bookimage:
        "https://m.media-amazon.com/images/I/71SMr+ZgnSL._AC_UF1000,1000_QL80_.jpg",
      description: `J.D. Salinger’s “The Catcher in the Rye” captures the restless voice of youth with raw honesty and enduring relevance.  
    The novel follows Holden Caulfield, a sixteen-year-old expelled from prep school, as he wanders through New York City over a few turbulent days.  
    Narrating in his cynical, slang-filled voice, Holden exposes the phoniness of the adult world while grappling with grief, confusion, and loneliness.  
    Beneath his sarcasm lies deep sensitivity and moral idealism—he longs to preserve innocence, especially that of his younger sister, Phoebe.  
    His fantasy of being “the catcher in the rye,” saving children from falling into corruption, symbolizes his desperate wish to stop time and protect purity.  
    Salinger’s prose captures the stream-of-consciousness of adolescence—funny, erratic, and painfully real.  
    The book became both a literary classic and a cultural symbol of rebellion, resonating with readers who feel alienated in a conformist world.  
    Yet at its heart, it’s not a story of defiance but of vulnerability—the ache of growing up, the fear of losing innocence, and the search for genuine connection.  
    “The Catcher in the Rye” remains timeless because every generation rediscovers Holden’s voice within themselves: confused, defiant, and yearning for meaning in a world that doesn’t listen.`,
    },
    {
      id: 24,
      bookname: "The Great Gatsby",
      bookauthor: "F. Scott Fitzgerald",
      booktitle: "A tragic tale of love and the American Dream",
      bookprice: 310,
      bookpublished: 1925,
      category: "Classic",
      rating: 9.1,
      bookimage:
        "https://m.media-amazon.com/images/I/71FTb9X6wsL._AC_UF1000,1000_QL80_.jpg",
      description: `F. Scott Fitzgerald’s “The Great Gatsby” is a glittering elegy to the American Dream and the human yearning for love and belonging.  
    Set in the Jazz Age of the 1920s, it tells the story of Jay Gatsby, a mysterious millionaire known for his lavish parties but haunted by a single desire—to win back Daisy Buchanan, the woman he loved and lost.  
    Narrated by the observant Nick Carraway, the novel unfolds on Long Island’s opulent West Egg, where excess masks emptiness and glamour conceals decay.  
    Gatsby’s obsession with Daisy, symbolized by the green light across the bay, drives him to recreate the past through wealth and illusion.  
    But in the glittering world of privilege and moral indifference, dreams are fragile and corruptible.  
    Fitzgerald’s prose is lyrical and hypnotic, weaving images of champagne and despair into a haunting meditation on hope and disillusionment.  
    “The Great Gatsby” captures the paradox of modern life—the pursuit of happiness that leads to heartbreak, the longing for meaning in a world built on illusion.  
    Gatsby’s tragic end reveals not only the cost of his own dream but the spiritual emptiness at the heart of a society obsessed with wealth.  
    Nearly a century later, it still shimmers as America’s most enduring mirror—beautiful, tragic, and endlessly new.`,
    },
    {
      id: 25,
      bookname: "The Kite Runner",
      bookauthor: "Khaled Hosseini",
      booktitle:
        "A story of friendship, betrayal, and redemption in Afghanistan",
      bookprice: 399,
      bookpublished: 2003,
      category: "Drama",
      rating: 9.2,
      bookimage:
        "https://m.media-amazon.com/images/I/81l0ky7+e0L._AC_UF1000,1000_QL80_.jpg",
      description: `Khaled Hosseini’s “The Kite Runner” is a deeply moving tale of friendship, betrayal, and the search for forgiveness, set against the turbulent backdrop of Afghanistan’s modern history.  
    The novel follows Amir, a privileged boy from Kabul, and his loyal friend Hassan, the son of his father’s servant.  
    Their bond, though strong, is tested by Amir’s jealousy and fear, culminating in an act of betrayal that haunts him for decades.  
    As Afghanistan descends into war and exile, Amir builds a new life in America but remains burdened by guilt.  
    When he receives a call urging him to return to Taliban-controlled Kabul to rescue Hassan’s son, he confronts the ghosts of his past.  
    Hosseini’s storytelling is intimate yet epic, blending personal emotion with historical tragedy.  
    His descriptions of pre-war Afghanistan are filled with color and nostalgia, making its destruction all the more heartbreaking.  
    Themes of sin and redemption, love and loss, run through every page.  
    “The Kite Runner” is not just about one man’s atonement—it’s about the possibility of grace amid suffering, about how broken relationships can still be mended through courage.  
    In the end, Amir’s whispered words—“For you, a thousand times over”—echo as both confession and salvation.  
    This novel remains one of the most emotional explorations of loyalty and forgiveness in contemporary literature.`,
    },
    {
      id: 26,
      bookname: "A Thousand Splendid Suns",
      bookauthor: "Khaled Hosseini",
      booktitle: "A tale of two women and their struggle for freedom",
      bookprice: 420,
      bookpublished: 2007,
      category: "Drama",
      rating: 9.3,
      bookimage:
        "https://m.media-amazon.com/images/I/81VStYnDGrL._AC_UF1000,1000_QL80_.jpg",
      description: `Khaled Hosseini’s “A Thousand Splendid Suns” is a sweeping, heartbreaking saga of love, endurance, and the unbreakable bond between two Afghan women whose lives are scarred by war and patriarchy.  
    The story spans three decades of turmoil—from the Soviet invasion to Taliban rule—through the intertwined destinies of Mariam and Laila.  
    Mariam, born illegitimate and shunned by her father’s family, is forced into marriage with Rasheed, an older, abusive shoemaker in Kabul.  
    Years later, Laila, a bright and hopeful young girl, loses her family in a bombing and is coerced into the same household.  
    Initially divided by jealousy and pain, the two women gradually form a sisterhood stronger than blood.  
    Together, they face unimaginable hardship and cruelty, finding solace only in each other’s compassion.  
    Hosseini’s prose is lyrical yet devastating, capturing both the brutality of oppression and the resilience of the human spirit.  
    Through Mariam’s quiet courage and Laila’s fierce hope, the novel becomes a tribute to the sacrifices women make for love and freedom.  
    The title, drawn from a Persian poem, speaks to Kabul’s lost beauty—its thousand splendid suns dimmed by conflict.  
    Yet amid ruin, Hosseini offers redemption: love that defies death, and dignity that endures even when the world collapses.  
    It is not merely a story of survival, but of grace—the light that persists even in the darkest times.`,
    },
    {
      id: 27,
      bookname: "Harry Potter and the Sorcerer’s Stone",
      bookauthor: "J.K. Rowling",
      booktitle: "The first book in the Harry Potter series",
      bookprice: 450,
      bookpublished: 1997,
      category: "Fantasy",
      rating: 9.8,
      bookimage:
        "https://m.media-amazon.com/images/I/81YOuOGFCJL._AC_UF1000,1000_QL80_.jpg",
      description: `J.K. Rowling’s “Harry Potter and the Sorcerer’s Stone” (also known as “Philosopher’s Stone”) begins one of the most beloved sagas in literary history—a story of friendship, courage, and the enduring magic of love.  
    The novel introduces Harry Potter, an orphan living a miserable life with his cruel aunt and uncle, unaware that he is destined for greatness.  
    On his eleventh birthday, a giant named Hagrid arrives with astonishing news: Harry is a wizard, and he has been accepted into Hogwarts School of Witchcraft and Wizardry.  
    At Hogwarts, Harry finds his first true home and loyal friends—Ron Weasley and Hermione Granger.  
    As he learns spells and plays Quidditch, he also uncovers the mystery of his parents’ death and the dark wizard who tried to kill him as a baby: Lord Voldemort.  
    Beneath its magical setting, the book explores themes of identity, bravery, and the battle between good and evil.  
    Rowling’s world is richly imagined, filled with whimsical details and moral depth.  
    Each charm, creature, and corridor of Hogwarts carries both wonder and danger.  
    Harry’s journey from lonely boy to reluctant hero resonates with readers young and old because it captures something timeless—the belief that love and loyalty are the greatest forms of magic.  
    “The Sorcerer’s Stone” isn’t just a beginning; it’s an invitation into a universe where courage is born from kindness and destiny from choice.`,
    },
    {
      id: 28,
      bookname: "The Da Vinci Code",
      bookauthor: "Dan Brown",
      booktitle: "A symbologist uncovers a secret hidden for centuries",
      bookprice: 430,
      bookpublished: 2003,
      category: "Mystery",
      rating: 8.9,
      bookimage:
        "https://m.media-amazon.com/images/I/91Q5dCjc2KL._AC_UF1000,1000_QL80_.jpg",
      description: `Dan Brown’s “The Da Vinci Code” is a fast-paced thriller that fuses art, religion, and history into a modern mystery of staggering proportions.  
    Harvard symbologist Robert Langdon is called to the Louvre Museum in Paris after the curator is found murdered, his body arranged in a bizarre pose with cryptic symbols surrounding him.  
    With the help of cryptologist Sophie Neveu, Langdon deciphers clues hidden in Leonardo da Vinci’s artwork, uncovering a centuries-old secret guarded by a shadowy order.  
    Their pursuit leads them through cathedrals, castles, and coded manuscripts across Europe, revealing connections between the Holy Grail, Mary Magdalene, and the Church’s suppressed history.  
    As the chase unfolds, Langdon and Sophie confront both deadly enemies and moral dilemmas, questioning faith, truth, and power.  
    Brown’s meticulous blending of real-world art and fictional intrigue gives the novel a thrilling sense of plausibility—each symbol and secret feels tantalizingly possible.  
    Beneath the suspense, the book wrestles with deeper questions about belief and the human need for mystery.  
    “The Da Vinci Code” captivated millions not merely because of its puzzles but because it reimagined history as a living, breathing riddle, where faith and reason are forever intertwined.  
    It’s an exhilarating journey through the corridors of art and the labyrinth of the human soul.`,
    },
    {
      id: 29,
      bookname: "The Girl on the Train",
      bookauthor: "Paula Hawkins",
      booktitle: "A psychological thriller about memory and truth",
      bookprice: 380,
      bookpublished: 2015,
      category: "Thriller",
      rating: 8.3,
      bookimage:
        "https://m.media-amazon.com/images/I/81wZt+z5y1L._AC_UF1000,1000_QL80_.jpg",
      description: `Paula Hawkins’ “The Girl on the Train” is a psychological thriller that unravels through fractured memory and unreliable perception.  
    The story follows Rachel Watson, a lonely, alcoholic commuter whose daily train ride becomes an escape from her failed marriage and stagnant life.  
    Every morning, she passes the same suburban houses and fixates on a seemingly perfect couple she sees through the window—until one day, the woman disappears.  
    Drawn into the investigation, Rachel becomes entangled in a web of deceit, violence, and self-delusion, unsure of what is real and what her intoxicated mind has imagined.  
    The novel unfolds through shifting perspectives—Rachel, Megan, and Anna—each voice revealing new pieces of a dark puzzle.  
    Hawkins masterfully plays with tension and ambiguity, creating a world where memory lies and trauma distorts truth.  
    As Rachel’s obsession deepens, she is forced to confront not only the crime but her own buried pain and culpability.  
    “The Girl on the Train” explores addiction, loneliness, and the haunting ways people reinvent reality to survive it.  
    Its claustrophobic narrative mirrors the confinement of Rachel’s life—the rumbling carriage, the blurred glass, the repetitive motion of denial.  
    By its shocking end, the book delivers not just a revelation of guilt but an awakening: that redemption begins only when illusion ends.`,
    },
    {
      id: 30,
      bookname: "The Midnight Library",
      bookauthor: "Matt Haig",
      booktitle: "A story about regrets, hope, and infinite lives",
      bookprice: 410,
      bookpublished: 2020,
      category: "Fiction",
      rating: 9.0,
      bookimage:
        "https://m.media-amazon.com/images/I/81AzcAMe4zL._AC_UF1000,1000_QL80_.jpg",
      description: `Matt Haig’s “The Midnight Library” is a tender, philosophical novel about regret, possibility, and the meaning of a life well lived.  
    Nora Seed, overwhelmed by loneliness and failure, decides to end her life—but instead of death, she finds herself in the Midnight Library, a liminal space between life and death where every book represents a different version of her life.  
    Guided by the enigmatic librarian Mrs. Elm, Nora explores these alternate realities—one where she is a glaciologist, another where she is a rock star, a mother, a swimmer, a philosopher.  
    Each life begins full of wonder but reveals its own emptiness, teaching her that perfection is an illusion.  
    Through these journeys, Nora confronts her deepest regrets and learns that even her most ordinary existence holds infinite worth.  
    Haig’s storytelling is gentle yet profound, weaving metaphysics with compassion.  
    He transforms a tale of despair into a celebration of second chances and small joys.  
    The novel reminds readers that no life is wasted if it contains kindness, connection, and the courage to keep going.  
    “The Midnight Library” is both melancholy and luminous—a love letter to possibility, reminding us that hope can exist in the quietest moments, and that sometimes, the life we want most is the one we already have.`,
    },
  ];
  return books;
};
export default BooksList;
