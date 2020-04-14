//Functional Approach
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

const changePlantState = (state, prop, value) => {
  return {
    ...state,
    [prop]: (state[prop] || 0) + value
  }
}



> let plant = { soil: 0, light: 0, water: 0 }
> changePlantState(plant, "soil")
{soil: 1, light: 0, water: 0}
 