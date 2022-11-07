
import {createContext, useState} from 'react'

const FavoriteContext = createContext({
    favorite: [],
    favoriteCount   : 0,
    addFavorite: (favoriteMeetup)=>{},
    removeFavorite: (meetupId)=>{},
    isFavorite: (meetupId)=>{}
});



export  function FavoriteContextProvider(props){

 const [userFavorite, setUserFav]=useState([])

function addFavoriteHandler(favoriteMeetup){
    setUserFav((prevUserFavorite)=>{
        return prevUserFavorite.concat(favoriteMeetup);
    });
}
function removeFavoriteHandler(meetupId){
    setUserFav((prevUserFavorite)=>{
        return prevUserFavorite.filter(meetup => meetup.id !== meetupId)
    })
}
function isFavoriteHandler(meetupId){
    return userFavorite.some(meetup => meetup.id === meetupId)
}

    const context ={
        favorite: userFavorite,
        favoriteCount: userFavorite.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        isFavorite: isFavoriteHandler
    };
    return (
    <FavoriteContext.Provider value={context}>
        {props.children}
    </FavoriteContext.Provider>
     )
}


export default FavoriteContext;