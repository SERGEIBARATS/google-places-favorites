import {
  ADD_PLACE,
  DELETE_PLACE,
  ADD_FAVORITE,
  DELETE_FAVORITE
} from "../actions/actionTypes";

const initialState = {
  Contacts: [],
  Favorites: [],
  selectedPlace: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        Contacts: state.Contacts.concat({
          key: (Math.random()).toString(),
          name: action.Contact.name,
          Phone: action.Contact.Phone,
          Address: action.Contact.Address,
        })
        
      };
    case DELETE_PLACE:
        console.log('this is my delete key');
        console.log(action.Contactkey);
      return {
        
        ...state,

        Contacts: state.Contacts.filter(place => {
          return place.key !== action.Contactkey;
        }),
        
        Favorites: state.Favorites.filter(place => {
          return place.key !== action.Contactkey;
        }),
      };

      case ADD_FAVORITE:
          return {
            ...state,
            Favorites: state.Favorites.concat(
              state.Contacts.filter(place => {
                return place.key === action.Favoritekey;
              })
            )
            
          };
          case DELETE_FAVORITE:

            return {
              
              ...state,
      
              Favorites: state.Favorites.filter(place => {
                return place.key !== action.Favoritekey;
              }),
            };

    default:
      return state;
  }
};

export default reducer;
