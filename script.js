const quotes = [
  "I love the thought of a car drifting apparently endlessly through space and perhaps being discovered by an alien race millions of years in the future.",
  "I think it is possible for ordinary people to choose to be extraordinary.",
  "The key test for an acronym is to ask whether it helps or hurts communication.",
  "One word: Doge.",
  "To make an embarrassing admission, I like video games. That's what got me into software engineering when I was a kid. I wanted to make money so I could buy a better computer to play better video games. Nothing like saving the world.",
  "There are some important differences between me and Tony Stark, like I have five kids, so I spend more time going to Disneyland than parties.",
  "With artificial intelligence, we are summoning the demon. In all those stories where there's the guy with the pentagram and the holy water, it's like, yeah, he's sure he can control the demon. Didn't work out.",
  "The path to the CEO's office should not be through the CFO's office, and it should not be through the marketing department. It needs to be through engineering and design.",
  "Optimism, pessimism, f**k that; we're going to make it happen. As God is my bloody witness, I'm hell-bent on making it work.",
  "Every 5000th buyer of our boringly boring hat will get a free hat signed by the delivery guy.",
  "You could power the entire United States with about 150 to 200 square kilometers of solar panels, the entire United States. Take a corner of Utah... there's not much going on there, I've been there. There's not even radio stations.",
  "I'm nauseatingly pro-American. I would have come here from any country. The U.S. is where great things are possible.",
  "Any product that needs a manual to work is broken.",
  "It's OK to have your eggs in one basket as long as you control what happens to that basket.",
  "When Henry Ford made cheap, reliable cars people said, 'Nah, what's wrong with a horse?' That was a huge bet he made, and it worked.",
  "If you go back a few hundred years, what we take for granted today would seem like magic -- being able to talk to people over long distances, to transmit images, flying, accessing vast amounts of data like an oracle. These are all things that would have been considered magic a few hundred years ago.",
  "I've always wanted to be part of something that would radically change the world ...  People forget the power of inspiration. All of humanity went to the moon with the Apollo missions. The issue was cost. There was no chance to build a base and create frequent flights. That's the problem I would like to solve.",
  "I'm personally a moderate and a registered independent, so I'm not strongly Democratic or strongly Republican.",
  "In the past I voted Democrat, because they were (mostly) the kindness party. But they have become the party of division & hate, so I can no longer support them and will vote Republican. Now, watch their dirty tricks campaign against me unfold...",
  "We have a strict 'no a-hole policy' at SpaceX. And we fire people that are. I mean, we give them a little bit of warning. But if they continue to be an a-hole, then they're fired.",
  "Entrepreneurship is like eating glass and walking on hot coals at the same time.",
  "Failure is an option here. If things are not failing, you are not innovating enough.",
  "And we need things in life that are exciting and inspiring. It can't just be about solving some awful problem. There have to be reasons to get up in the morning.",
  "Ancient Greece had it all & then committed suicide. Nobody digs your grave better than yourself.",
  "To our knowledge, life exists on only one planet, Earth. If something bad happens, it's gone. I think we should establish life on another planet--Mars in particular--but we're not making very good progress. SpaceX is intended to make that happen.",
  "I'm actually making history tonight as the first person with Asperger's to host SNL. Or at least the first to admit it. So I won't make a lot of eye contact with the cast tonight. But don't worry, I'm pretty good at running human and emulation mode.",
  "Should prob articulate philosophy underlying my actions. It's pretty simple & mostly influenced by Douglas Adams & Isaac Asimov.",
  "There's nothing -- I've bought everything I want. I don't like yachts or anything; you know, I'm not a yacht person, and I've got pretty much the nicest plane I'd want to have.",
  "Some people don't like change, but you need to embrace change if the alternative is disaster.",
  "When I was in college, I wanted to be involved in things that would change the world.",
  "I think life on Earth must be about more than just solving problems ... It's got to be something inspiring, even if it is vicarious.",
  "That's my lesson for taking a vacation: Vacation will kill you.",
  "I don't spend my time pontificating about high-concept things; I spend my time solving engineering and manufacturing problems.",
  "Nobody wants to buy a $60,000 electric Civic. But people will pay $90,000 for an electric sports car.",
  "I think that's the single best piece of advice: Constantly think about how you could be doing things better and questioning yourself.",
  "You need to live in a dome initially but over time you could terraform Mars to look like Earth and eventually walk around outside without anything on. ... So it's a fixer-upper of a planet.",
  "Ultimately, the downfall of the Freemasons was giving away their stonecutting services for nothing.",
  "Am considering taking Tesla private at $420. Funding secured.",
  "If humanity doesn't land on Mars in my lifetime, I would be very disappointed.",
  "I'd like to dial it back 5% or 10% and try to have a vacation that's not just e-mail with a view.",
  "I would only call someone an idiot if people were mistakenly under the impression that the person was smart.",
  "Taking Twitter private at $54.20 should be up to shareholders, not the board.",
  "I just want to retire before I go senile because if I don't retire before I go senile, then I'll do more damage than good at that point.",
  "I voted for Mayra Flores -- first time I ever voted Republican. Massive red wave in 2022.",
  "Patience is a virtue, and I'm learning patience. It's a tough lesson.",
  "If you had to buy a new plane every time you flew somewhere, it would be incredibly expensive.",
  "Engineering is the closest thing to magic that exists in the world.",
  "An asteroid or a supervolcano could certainly destroy us, but we also face risks the dinosaurs never saw: An engineered virus, nuclear war, inadvertent creation of a micro black hole, or some as-yet-unknown technology could spell the end of us.",
  "I would like to die on Mars. Just not on impact.",
  "For my part, I will never give up, and I mean never.",
];

const quoteDisplay = document.querySelector("#quote");
const generateButton = document.querySelector("#button");

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteDisplay.textContent = quotes[randomIndex];
}

function fadeInText() {
  const quote = document.getElementById("quote");
  if (quote.classList.contains("visible")) {
    quote.classList.remove("visible");
    quote.classList.add("hidden");
  } else {
    quote.classList.add("visible");
  }
}

generateButton.addEventListener("click", generateQuote);
