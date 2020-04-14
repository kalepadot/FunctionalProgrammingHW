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

//Refactor v2

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
 