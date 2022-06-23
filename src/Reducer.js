let rootReducer=(initialState,action)=>{
    let newState = initialState;
    switch(action.type){
        case "ADD_FUND":
          newState += action.amount;
          break;
        case "WITHDRAW_FUND":
          newState -= action.amount
          break;
        default:    
    }
    return newState
  }
  export default rootReducer;