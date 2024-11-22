// ! Feel free to explore this file, but do not modify anything here!
const pokemon = [
    { number: 1, name: 'Bulbasaur', type: 'grass', hp: 45, starter: true },
    { number: 2, name: 'Ivysaur', type: 'grass', hp: 60, starter: false },
    { number: 3, name: 'Venusaur', type: 'grass', hp: 80, starter: false },
    { number: 4, name: 'Charmander', type: 'fire', hp: 39, starter: true },
    { number: 5, name: 'Charmeleon', type: 'fire', hp: 58, starter: false },
    { number: 6, name: 'Charizard', type: 'fire', hp: 78, starter: false },
    { number: 7, name: 'Squirtle', type: 'water', hp: 44, starter: true },
    { number: 8, name: 'Wartortle', type: 'water', hp: 59, starter: false },
    { number: 9, name: 'Blastoise', type: 'water', hp: 79, starter: false },
    { number: 10, name: 'Caterpie', type: 'bug', hp: 45, starter: false },
    { number: 11, name: 'Metapod', type: 'bug', hp: 50, starter: false },
    { number: 12, name: 'Butterfree', type: 'bug', hp: 60, starter: false },
    { number: 13, name: 'Weedle', type: 'bug', hp: 40, starter: false },
    { number: 14, name: 'Kakuna', type: 'bug', hp: 45, starter: false },
    { number: 15, name: 'Beedrill', type: 'bug', hp: 65, starter: false },
    { number: 16, name: 'Pidgey', type: 'normal', hp: 40, starter: false },
    { number: 17, name: 'Pidgeotto', type: 'normal', hp: 63, starter: false },
    { number: 18, name: 'Pidgeot', type: 'normal', hp: 83, starter: false },
    { number: 19, name: 'Rattata', type: 'normal', hp: 30, starter: false },
    { number: 20, name: 'Raticate', type: 'normal', hp: 55, starter: false },
    { number: 21, name: 'Spearow', type: 'normal', hp: 40, starter: false },
    { number: 22, name: 'Fearow', type: 'normal', hp: 65, starter: false },
    { number: 23, name: 'Ekans', type: 'poison', hp: 35, starter: false },
    { number: 24, name: 'Arbok', type: 'poison', hp: 60, starter: false },
    { number: 25, name: 'Pikachu', type: 'electric', hp: 35, starter: true },
    { number: 26, name: 'Raichu', type: 'electric', hp: 60, starter: false },
    { number: 27, name: 'Sandshrew', type: 'ground', hp: 50, starter: false },
    { number: 28, name: 'Sandslash', type: 'ground', hp: 75, starter: false },
    { number: 29, name: 'Nidoran♀', type: 'poison', hp: 55, starter: false },
    { number: 30, name: 'Nidorina', type: 'poison', hp: 70, starter: false },
    { number: 31, name: 'Nidoqueen', type: 'poison', hp: 90, starter: false },
    { number: 32, name: 'Nidoran♂', type: 'poison', hp: 46, starter: false },
    { number: 33, name: 'Nidorino', type: 'poison', hp: 61, starter: false },
    { number: 34, name: 'Nidoking', type: 'poison', hp: 81, starter: false },
    { number: 35, name: 'Clefairy', type: 'fairy', hp: 70, starter: false },
    { number: 36, name: 'Clefable', type: 'fairy', hp: 95, starter: false },
    { number: 37, name: 'Vulpix', type: 'fire', hp: 38, starter: false },
    { number: 38, name: 'Ninetales', type: 'fire', hp: 73, starter: false },
    { number: 39, name: 'Jigglypuff', type: 'normal', hp: 115, starter: false },
    { number: 40, name: 'Wigglytuff', type: 'normal', hp: 140, starter: false },
    { number: 41, name: 'Zubat', type: 'poison', hp: 40, starter: false },
    { number: 42, name: 'Golbat', type: 'poison', hp: 75, starter: false },
    { number: 43, name: 'Oddish', type: 'grass', hp: 45, starter: false },
    { number: 44, name: 'Gloom', type: 'grass', hp: 60, starter: false },
    { number: 45, name: 'Vileplume', type: 'grass', hp: 75, starter: false },
    { number: 46, name: 'Paras', type: 'bug', hp: 35, starter: false },
    { number: 47, name: 'Parasect', type: 'bug', hp: 60, starter: false },
    { number: 48, name: 'Venonat', type: 'bug', hp: 60, starter: false },
    { number: 49, name: 'Venomoth', type: 'bug', hp: 70, starter: false },
    { number: 50, name: 'Diglett', type: 'ground', hp: 10, starter: false },
    { number: 51, name: 'Dugtrio', type: 'ground', hp: 35, starter: false },
    { number: 52, name: 'Meowth', type: 'normal', hp: 40, starter: false },
    { number: 53, name: 'Persian', type: 'normal', hp: 65, starter: false },
    { number: 54, name: 'Psyduck', type: 'water', hp: 50, starter: false },
    { number: 55, name: 'Golduck', type: 'water', hp: 80, starter: false },
    { number: 56, name: 'Mankey', type: 'fighting', hp: 40, starter: false },
    { number: 57, name: 'Primeape', type: 'fighting', hp: 65, starter: false },
    { number: 58, name: 'Growlithe', type: 'fire', hp: 55, starter: false },
    { number: 59, name: 'Arcanine', type: 'fire', hp: 90, starter: false },
    { number: 60, name: 'Poliwag', type: 'water', hp: 40, starter: false },
    { number: 61, name: 'Poliwhirl', type: 'water', hp: 65, starter: false },
    { number: 62, name: 'Poliwrath', type: 'water', hp: 90, starter: false },
    { number: 63, name: 'Abra', type: 'psychic', hp: 25, starter: false },
    { number: 64, name: 'Kadabra', type: 'psychic', hp: 40, starter: false },
    { number: 65, name: 'Alakazam', type: 'psychic', hp: 55, starter: false },
    { number: 66, name: 'Machop', type: 'fighting', hp: 70, starter: false },
    { number: 67, name: 'Machoke', type: 'fighting', hp: 80, starter: false },
    { number: 68, name: 'Machamp', type: 'fighting', hp: 90, starter: false },
    { number: 69, name: 'Bellsprout', type: 'grass', hp: 50, starter: false },
    { number: 70, name: 'Weepinbell', type: 'grass', hp: 65, starter: false },
    { number: 71, name: 'Victreebel', type: 'grass', hp: 80, starter: false },
    { number: 72, name: 'Tentacool', type: 'water', hp: 40, starter: false },
    { number: 73, name: 'Tentacruel', type: 'water', hp: 80, starter: false },
    { number: 74, name: 'Geodude', type: 'rock', hp: 40, starter: false },
    { number: 75, name: 'Graveler', type: 'rock', hp: 55, starter: false },
    { number: 76, name: 'Golem', type: 'rock', hp: 80, starter: false },
    { number: 77, name: 'Ponyta', type: 'fire', hp: 50, starter: false },
    { number: 78, name: 'Rapidash', type: 'fire', hp: 65, starter: false },
    { number: 79, name: 'Slowpoke', type: 'water', hp: 90, starter: false },
    { number: 80, name: 'Slowbro', type: 'water', hp: 95, starter: false },
    { number: 81, name: 'Magnemite', type: 'electric', hp: 25, starter: false },
    { number: 82, name: 'Magneton', type: 'electric', hp: 50, starter: false },
    { number: 83, name: "Farfetch'd", type: 'normal', hp: 52, starter: false },
    { number: 84, name: 'Doduo', type: 'normal', hp: 35, starter: false },
    { number: 85, name: 'Dodrio', type: 'normal', hp: 60, starter: false },
    { number: 86, name: 'Seel', type: 'water', hp: 65, starter: false },
    { number: 87, name: 'Dewgong', type: 'water', hp: 90, starter: false },
    { number: 88, name: 'Grimer', type: 'poison', hp: 80, starter: false },
    { number: 89, name: 'Muk', type: 'poison', hp: 105, starter: false },
    { number: 90, name: 'Shellder', type: 'water', hp: 30, starter: false },
    { number: 91, name: 'Cloyster', type: 'water', hp: 50, starter: false },
    { number: 92, name: 'Gastly', type: 'ghost', hp: 30, starter: false },
    { number: 93, name: 'Haunter', type: 'ghost', hp: 45, starter: false },
    { number: 94, name: 'Gengar', type: 'ghost', hp: 60, starter: false },
    { number: 95, name: 'Onix', type: 'rock', hp: 35, starter: false },
    { number: 96, name: 'Drowzee', type: 'psychic', hp: 60, starter: false },
    { number: 97, name: 'Hypno', type: 'psychic', hp: 85, starter: false },
    { number: 98, name: 'Krabby', type: 'water', hp: 30, starter: false },
    { number: 99, name: 'Kingler', type: 'water', hp: 55, starter: false },
    { number: 100, name: 'Voltorb', type: 'electric', hp: 40, starter: false },
    { number: 101, name: 'Electrode', type: 'electric', hp: 40, starter: false },
    { number: 102, name: 'Exeggcute', type: 'grass', hp: 60, starter: false },
    { number: 103, name: 'Exeggutor', type: 'grass', hp: 95, starter: false },
    { number: 104, name: 'Cubone', type: 'ground', hp: 50, starter: false },
    { number: 105, name: 'Marowak', type: 'ground', hp: 60, starter: false },
    { number: 106, name: 'Hitmonlee', type: 'fighting', hp: 50, starter: false },
    { number: 107, name: 'Hitmonchan', type: 'fighting', hp: 50, starter: false },
    { number: 108, name: 'Lickitung', type: 'normal', hp: 90, starter: false },
    { number: 109, name: 'Koffing', type: 'poison', hp: 40, starter: false },
    { number: 110, name: 'Weezing', type: 'poison', hp: 65, starter: false },
    { number: 111, name: 'Rhyhorn', type: 'ground', hp: 80, starter: false },
    { number: 112, name: 'Rhydon', type: 'ground', hp: 105, starter: false },
    { number: 113, name: 'Chansey', type: 'normal', hp: 250, starter: false },
    { number: 114, name: 'Tangela', type: 'grass', hp: 65, starter: false },
    { number: 115, name: 'Kangaskhan', type: 'normal', hp: 105, starter: false },
    { number: 116, name: 'Horsea', type: 'water', hp: 30, starter: false },
    { number: 117, name: 'Seadra', type: 'water', hp: 55, starter: false },
    { number: 118, name: 'Goldeen', type: 'water', hp: 45, starter: false },
    { number: 119, name: 'Seaking', type: 'water', hp: 80, starter: false },
    { number: 120, name: 'Staryu', type: 'water', hp: 30, starter: false },
    { number: 121, name: 'Starmie', type: 'water', hp: 60, starter: false },
    { number: 122, name: 'Mr. Mime', type: 'psychic', hp: 40, starter: false },
    { number: 123, name: 'Scyther', type: 'bug', hp: 70, starter: false },
    { number: 124, name: 'Jynx', type: 'ice', hp: 65, starter: false },
    { number: 125, name: 'Electabuzz', type: 'electric', hp: 65, starter: false },
    { number: 126, name: 'Magmar', type: 'fire', hp: 65, starter: false },
    { number: 127, name: 'Pinsir', type: 'bug', hp: 65, starter: false },
    { number: 128, name: 'Tauros', type: 'normal', hp: 75, starter: false },
    { number: 129, name: 'Magikarp', type: 'water', hp: 20, starter: false },
    { number: 130, name: 'Gyarados', type: 'water', hp: 95, starter: false },
    { number: 131, name: 'Lapras', type: 'water', hp: 130, starter: false },
    { number: 132, name: 'Ditto', type: 'normal', hp: 48, starter: false },
    { number: 133, name: 'Eevee', type: 'normal', hp: 55, starter: false },
    { number: 134, name: 'Vaporeon', type: 'water', hp: 65, starter: false },
    { number: 135, name: 'Jolteon', type: 'electric', hp: 130, starter: false },
    { number: 136, name: 'Flareon', type: 'fire', hp: 65, starter: false },
    { number: 137, name: 'Porygon', type: 'normal', hp: 65, starter: false },
    { number: 138, name: 'Omanyte', type: 'rock', hp: 35, starter: false },
    { number: 139, name: 'Omastar', type: 'rock', hp: 70, starter: false },
    { number: 140, name: 'Kabuto', type: 'rock', hp: 30, starter: false },
    { number: 141, name: 'Kabutops', type: 'rock', hp: 60, starter: false },
    { number: 142, name: 'Aerodactyl', type: 'rock', hp: 80, starter: false },
    { number: 143, name: 'Snorlax', type: 'normal', hp: 160, starter: false },
    { number: 144, name: 'Articuno', type: 'ice', hp: 90, starter: false },
    { number: 145, name: 'Zapdos', type: 'electric', hp: 90, starter: false },
    { number: 146, name: 'Moltres', type: 'fire', hp: 90, starter: false },
    { number: 147, name: 'Dratini', type: 'dragon', hp: 41, starter: false },
    { number: 148, name: 'Dragonair', type: 'dragon', hp: 61, starter: false },
    { number: 149, name: 'Dragonite', type: 'dragon', hp: 91, starter: false },
    { number: 150, name: 'Mewtwo', type: 'psychic', hp: 106, starter: false },
    { number: 151, name: 'Mew', type: 'psychic', hp: 100, starter: false },
  ];
  
  const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  }

  console.dir(pokemon, { maxArrayLength: null })

  console.log(game)

  /*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/

game.difficulty = ["Easy", "Med" , "Hard"]

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/

let addStarter = pokemon[0]
console.log(addStarter)

game.party.push(addStarter)

console.log(game.party)

/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/
//game.party.push(pokemon[3])
//game.party.push(pokemon[6])

game.party.splice(1,0,pokemon[3],pokemon[6])

console.log(game.party)

/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/

game.gyms.forEach(function (eachGame){
    
    if(eachGame.difficulty < 3)
       eachGame.completed = true
})

console.log(game.gyms)

/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/

pokemon.splice(0,2,pokemon[1],pokemon[4],pokemon[7])

console.log(game.party)

/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/

game.party.forEach(function (onePokemon2){
    console.log(onePokemon2.name)
})

/*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 9 here:
*/
pokemon.forEach(function (starterPokemon){
    if(starterPokemon.starter = true){
        console.log(starterPokemon)
    }
})

/*
Exercise 10
Create a method called `catchPokemon` and add it to the `game` object. You should not need to edit the original game object directly. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 10 here:
*/

 game.catchPokemon = function catchPokemon(pokemonObj){
    game.party.push(pokemonObj)

}


/*
Exercise 11
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 11 here:
*/


game.catchPokemon = function catchPokemon(pokemonObj){
    
    game.party.push(pokemonObj)
    game.items[1].quantity -=1

}

console.log(game.items[1].quantity) // pokeballs befor call
console.log(game.party) // array objects of pokemons before call
game.catchPokemon(pokemon[10]) // calling pokemon object
console.log(game.party) // pokemon objects in part after call
console.log(game.items[1].quantity) // pokeballs after call

/*
Exercise 12
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 12 here:
*/


game.gyms.forEach(function (eachGame){
    
    if(eachGame.difficulty < 6){
       eachGame.completed = true
    }
})

console.log(game.gyms)

/*
Exercise 13
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 13 here:
*/

const gymTally = {
    completed : 0,
    incomplete : 0
}


game.gymStatus = function gymStatus(){
    game.gyms.forEach(function (oneGym, completeGym, notCompleteGym){
        if(oneGym.completed = true){
            gymTally.completed+=1
        }
        else if(oneGym.completed = false){
             gymTally.incomplete+=1
        }

    })
}

game.gymStatus()
console.log(gymTally)
console.log(game.gyms)

/*
Exercise 14
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.

Solve Exercise 14 here:
*/

let partyPokemonCounter = 0
game.partyCount = function partyCount(){
    game.party.forEach(function (eachPartyPokemon, partyPokemonCounter){
        partyPokemonCounter +=1

    })
    return partyPokemonCounter

}

console.log(game.partyCount())

/*
Exercise 15
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 15 here:
*/

game.gyms.forEach(function (eachGame){
    
    if(eachGame.difficulty < 8)
       eachGame.completed = true
})

console.log(game.gyms)

/*
Exercise 16
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.


Solve Exercise 16 here:
*/

console.log(game)