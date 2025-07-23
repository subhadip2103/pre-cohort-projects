
const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why don't skeletons fight each other? They don't have the guts.",
    "What do you call fake spaghetti? An impasta!",
    "Why did the bicycle fall over? It was two-tired!",
    "Why can't your nose be 12 inches long? Because then it would be a foot!",
    "What do you call cheese that isn't yours? Nacho cheese!",
    "How do you organize a space party? You planet!",
    "Why did the math book look sad? Because it had too many problems.",
    "What do you call a bear with no teeth? A gummy bear!",
    "Why don't programmers like nature? It has too many bugs.",
    "How do you comfort a JavaScript bug? You console it!",
    "Why was the computer cold? It left its Windows open!",
    "Why do programmers prefer dark mode? Because light attracts bugs!",
    "Why did the coffee file a police report? It got mugged.",
    "What do you call a factory that makes okay products? A satisfactory!",
    "What did one ocean say to the other ocean? Nothing, they just waved.",
    "Why did the golfer bring an extra pair of pants? In case he got a hole in one!",
    "Why can't you give Elsa a balloon? Because she will let it go.",
    "What do you call a snowman with a six-pack? An abdominal snowman!",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "What did the zero say to the eight? Nice belt!",
    "Why don't eggs tell jokes? They might crack up.",
    "What does a baby computer call its father? Data!",
    "Why did the picture go to jail? Because it was framed!",
    "Why don't fish play basketball? They're afraid of the net.",
    "How do trees get online? They log in.",
    "Why can't you trust stairs? They're always up to something.",
    "What do you call a group of musical whales? An orca-stra.",
    "Why did the banana go to the doctor? It wasn't peeling well.",
    "Why did the frog take the bus? His car got toad away!",
    "Why did the computer go to the therapist? It had too many tabs open.",
    "Why are ghosts such bad liars? Because you can see right through them!",
    "What did the grape do when it got stepped on? It let out a little wine.",
    "Why don’t crabs give to charity? Because they’re shellfish.",
    "What kind of music do mummies like? Wrap music.",
    "Why did the man put his money in the blender? He wanted liquid assets!",
    "Why was the big cat disqualified from the race? Because it was a cheetah.",
    "Why don't teddy bears eat dessert? Because they're stuffed.",
    "How does the moon cut its hair? Eclipse it.",
    "What do you call an alligator in a vest? An investigator.",
    "What’s orange and sounds like a parrot? A carrot.",
    "Why did the stadium get hot? All the fans left.",
    "What do you call a boomerang that doesn’t come back? A stick.",
    "Why was the math book unhappy? It had too many problems.",
    "Why did the mushroom go to the party? Because he was a fungi.",
    "Why did the chicken go to the séance? To talk to the other side.",
    "Why don’t skeletons ever start fights? They don’t have the guts.",
    "What do you call a magic dog? A labracadabrador."
];
function displayJokes() {

    let randomIndex = Math.floor(Math.random() * jokes.length);
    let randomJokes = jokes[randomIndex];


    document.querySelector('.jokeDisplay').innerHTML = randomJokes;
   
}

let button =document.querySelector('button')
button.addEventListener('click',displayJokes)