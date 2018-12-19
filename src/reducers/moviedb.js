let initialState = {
  favourites : [
    {
      "id" : 1,
      "type" : 'MOVIES',
      "name" : 'AVENGERS ENDGAME',
      "date" : 2019
    },
    {
      "id" : 2,
      "type" : "TV",
      "name" : 'NAGIN',
      "date" : 2018
    }
  ],
  view : {
    "id" : 1,
    "type" : 'MOVIES',
    "name" : 'AVENGERS ENDGAME',
    "year" : 2019,
    "genre" : 'FUN',
    "description" : "avengers last part!"
  }
}

export default (state = initialState, action) => {
  switch(action.type) {
    
    case 'ADD_FAVOURITES':
      //let id = state.favourites[state.favourites.length - 1].id + 1;
      state.favourites.map((fav) => {
        if (fav.name == action.favourites.name) {
          return state;
        }
      });
      let adder = {
        id : action.favourites.id,
        type : action.favourites.type,
        name : action.favourites.name,
        date : action.favourites.date
      };
      return ({
        ...state,
        favourites : [
          ...state.favourites,
          adder
        ]
      });

    case 'CHANGE_VIEW':
      return ({
        ...state,
        view : {
          id : action.view.id,
          type : action.view.type,
          name : action.view.name,
          year : action.view.year,
          genre : action.view.genre,
          description : action.view.description
        } 
      });

    default:
      return state;
      
/*    case 'CHANGE_VIEW':

    case 'DELETE_FAVOURITES':
*/
  }
};