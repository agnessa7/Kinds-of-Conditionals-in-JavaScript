function isPip(slime){
  if (slime === 'pip'){
    return 'Good morning Pip!' 
  } else if(typeof slime === 'string'){
      return `Good day ${slime}!`
  } else {
      return 'Sorry, something went wrong! Please enter a valid slime name.'
  }
}
function isDucky(bird){
  bird === 'ducky'?'Hi Ducky, you are cute!' :`Hi ${bird}!`
}
function isPoogie(pig){
  switch(pig){
    case 'poogie':
      return 'Hi Poogie, you are adorable!'
    case 'kris p. bacon':
      return 'Hello dinner!'
    default:
      return `Hi ${pig}!`
  }
}


console.log('Hello there traveler! please feel free to try out the functions in the console!!!')

//in the console type the function name('') ex: isPip('pip') to get started!
//Lines 1-3 Just an If statement
//Ternary lines 11-13
//Switch lines 14-23