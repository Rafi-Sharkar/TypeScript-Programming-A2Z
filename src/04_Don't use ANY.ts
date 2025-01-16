// Don't user ANY type.
/**
 * When you don't specify a type and TS can't infer it from context, the compiler will typically default to any.
 * You usually want to avoid this, though, because an isn't type checked.
 * 
 */
let hero = "Iron man";

function getHero(){
    return "thor"
}

hero = getHero()

console.log(hero)
