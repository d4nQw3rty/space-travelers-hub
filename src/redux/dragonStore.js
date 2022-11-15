const GET_DRAGONS = 'spacehub/getDragons';
const SORT_DRAGONS = 'spacehub/sortDragons';
const RESERVE_DRAGONS = 'spacehub.reserveDragons';
const CANCEL_RESERVE = 'spacehub/cancelReservation';

const dragonReducer = (state = [], action) => {
  switch (action.type) {
    case GET_DRAGONS:
      return action.payload;
    case SORT_DRAGONS:
      return state.filter((state) => state.reserved === false)
    case RESERVE_DRAGONS:
      return state.map(dragon => {
        if (dragon.id === action.payload) return {...dragon, reserved: true};
        return rocket;
      });
    case CANCEL_RESERVE:
      return state.map(dragon => {
        if (dragon.id === action.payload) return {...dragon, reserved: false}
      });
    default:
      return state;
  }
}

const getDragons = (payload) => {
  type: GET_DRAGONS,
  payload,
}

const sortDragons = (payload) => {
  type:SORT_DRAGONS,
  payload,
}

const reserveDragons = (payload) ={
  type: RESERVE_DRAGONS,
  payload,
}

const cancelDragons = (payload) => {
  type: CANCEL_RESERVE,
  payload,
}

export { getDragons, sortDragons, reserveDragons, cancelDragons };
export default dragonReducer;
