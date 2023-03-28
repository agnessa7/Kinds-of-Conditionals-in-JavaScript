function isPip(slime){
  if (slime === 'pip'){
    return 'Good morning Pip!' //Lines 1-3 Just an If statement
  } else if(typeof slime === 'string'){
      return `Good day   
       ${slime}!`
  } else {
      return 'Sorry, something went wrong! Please enter a valid slime name.'
  }
}
function isDucky(bird){
  bird === 'ducky'?'Hi Ducky, you are cute!' :`Hi ${bird}!`
}//Ternary lines 11-13
function isPoogie(pig){
  switch(pig){
    case 'poogie':
      return 'Hi Poogie, you are adorable!'
    case 'kris p. bacon':
      return 'Hello dinner!'
    default:
      return `Hi ${pig}!`
  }
}//Switch lines 14-23

//in the console type the function name('') ex: isPip('pip') to get started!
console.log('Hello there traveler! please feel free to try out the functions in the console!!!')