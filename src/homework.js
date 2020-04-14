//Functional Approach

// //No refactoring v0:

// const hydrate = (plant) => {
//   return {
//     ...plant,
//     water: (plant.water || 0) + 1
//   }
// };

// const feed = (plant) => {
//   return {
//     ...plant,
//     soil: (plant.soil || 0) +1
//   }
// };

// > let plant = { soil: 0, light: 0, water: 0 }
// > changePlantState(plant, "soil")
// {soil: 1, light: 0, water: 0}

// //Refactor v1:

// const changePlantState = (state, prop, value) => {
//   return {
//     ...state,
//     [prop]: (state[prop] || 0) + value
//   }
// }

//Refactor v2 (function factory example)

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    })
  }
}

const feed = changState("soil");
const hydrate = changeState("water");
const giveLight = changeState("light");
///additional examples:
const blueFood = changeState("soil")(5)
const greenFood = changeState("soil")(10)
const yuckyFood = changeState("soil")(-5)
 

//  function for storing state

const storeState = () => {  
  let currentState = {};    //storeState's only job is to store the currentState of an object
  return (stateChangeFunction) => {   //will specify the exact change that should be made to currentState
    const newState = stateChangeFunction(currentState); //creates a new version of currentState specific to what its doing
    currentState = {...newState};   //each time our annon function is called (inner function stateChangeFunction) our currentState (inner function of our outer function storeState) will be mutated // updates currentState. makes a copy of newState and assignes it to currentState using spread opperator
    return newState;   //a newState is returned by our inner function
  }
}
// Theroy: Functional programming allows us to build out template to be used in many different cases. 
// Step one seems to be: build a template, 2: build a new version of that function to have a specific use. 

const stateChanger = storeState();

(stateaChangerFunction) => {
  const newState = stateChangeFunction(currentState);
  currentState = {...newState};
  return newState;
}