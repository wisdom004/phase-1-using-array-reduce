const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const batteryReducer = (state = 0, action) => {
    switch (action.type) {
      case 'ADD_BATTERIES':
        return state + action.payload;
      default:
        return state;
    }
  };

  const totalBatteries = batteryReducer(0, { type: 'ADD_BATTERIES', payload: 31});

console.log(totalBatteries);