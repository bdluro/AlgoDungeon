import { SPRITE_SIZE } from '../../config/constants.js';

const initialState = {
  position: [SPRITE_SIZE, SPRITE_SIZE],
  // position: [0, 0],
  spriteLocation: '0px, 0px',
  direction: 'right',
  imageIndex: 0,
  enemyChallenged: true,
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MOVE_PLAYER':
      return {
        ...action.payload,
      };

    case 'PLAYER_CHALLENGED':
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

export default playerReducer;
