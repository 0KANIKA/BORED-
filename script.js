function giveIdea() {
  const ideas = [
    "🎨 Try to draw something with your eyes closed.",
    "🍳 Invent a weird food combo and taste it. Brave?",
    "🎧 Listen to a genre of music you usually hate.",
    "✍️ Write a fake diary entry from the year 2080.",
    "📚 Read the first Wikipedia article you see.",
    "🧘 Try a 2-minute meditation. Just breathe.",
    "🎬 Watch the most random YouTube short ever.",
    "💃 Learn a random TikTok dance (and don't post it).",
    "🛋️ Rearrange one thing in your room. Just one.",
    "🔮 Ask ChatGPT a really weird question. 👀",
     "🍛 Try making maggi in a new way. Add random spices. Become a chef or regret it.",
      "💃 Try a Bollywood hook step and record it in 0.5x slow-mo for cinematic drama.",
      "📱 Watch 1 random Instagram reel and then recreate it exactly. Full commitment.",
      "🔮 Ask ChatGPT: ‘What’s my daily horoscope if I were a paneer tikka?’",
      "☕ Make chai and rate it like a food critic. Use words like ‘aromatic undertones.’",
      "🎧 Listen to an old Yo Yo Honey Singh song and pretend you’re in 2012.",
      "🎤 Hum a random Bollywood song until someone joins you or tells you to stop.",
      "🚪 Knock on your roommate’s door and say ‘intermission over’ without context.",
      "🧹 Clean your room like it’s a reality show transformation episode.",
      "📞 Call a friend and ask, 'Bro, serious question: Why do we never see baby pigeons?'",
      "🪑 Sit cross-legged on the floor and pretend you're a spiritual guru giving TED Talks.",
      "🍲 Rate hostel mess food like MasterChef judges. Add fake applause sound.",
      "🧳 Plan a fake Goa trip for the 83rd time. Make a full itinerary. Never go.",
      "🛒 Add 15 random things to your Flipkart cart you’ll never buy.",
      "🎓 Try to write a deep poem about attendance shortage. Post it nowhere.",
    "📝 Write down 5 random startup ideas you'd pitch on Shark Tank India.",
      "🍽️ Try cooking one hostel/mess dish your way and give it a fancy name.",
      "🎬 Watch a 90s Bollywood thriller and write a modern review like a film critic.",
      "🛍️ Go through your wardrobe and build an outfit you’ve *never* worn before.",
      "🎨 Try a free AI art generator and describe your dream vacation spot.",
      "📱 Call your mom and ask for one childhood story you’ve never heard.",
      "🪔 Rearrange your desk or shelf desi-style — with fairy lights, diyas, etc.",
      "📖 Read your old school WhatsApp groups and find one cringy message you sent.",
      "💻 Learn one HTML tag and use it to build a super simple personal webpage.",
      "🗣️ Imitate your professor giving a lecture in Shahrukh Khan’s voice.",
      "🪙 Flip a coin. If heads: Clean your room. If tails: Pretend you cleaned it.",
      "🧠 Write down one cool idea for a short film set in your college.",
      "🎧 Make a playlist called ‘Midnight Autos in Monsoon’ and only add vibey songs.",
      "📷 Take aesthetic pics of your chai/coffee and give it a name like ‘Mood Brew.’",
      "🪞 Sit in front of a mirror and act out a fake Oscars speech for winning ‘Best Coder with No Code.’"
  
  ];

  const randomIndex = Math.floor(Math.random() * ideas.length);
  document.getElementById("idea").innerText = ideas[randomIndex];
}
