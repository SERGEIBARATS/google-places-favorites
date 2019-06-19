import { ADD_PLACE, DELETE_PLACE, ADD_FAVORITE, DELETE_FAVORITE} from './actionTypes';

export const addPlace = (Contact) => {
    return {
        type: ADD_PLACE,
        Contact: Contact
    };
};

export const deletePlace = (Contactkey) => {
    return {
        type: DELETE_PLACE,
        Contactkey: Contactkey
    };
};



export const addFavorite = (Favoritekey) => {
    return {
        type: ADD_FAVORITE,
        Favoritekey: Favoritekey
    };
};

export const deleteFavorite = (Favoritekey) => {
    return {
        type: DELETE_FAVORITE,
        Favoritekey: Favoritekey
    };
};