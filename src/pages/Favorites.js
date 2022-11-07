import { useContext } from "react";
import FavoriteContext from "../store/favorites-context";
import  MeetupList from "../components/meetups/MeetupList/meetupList";
function FavoritePage(){
    const favoriteCtx =  useContext(FavoriteContext)
    let content;
    if(favoriteCtx.favoriteCount===0){

        content = <p>you have no favorites yet, start adding some</p>
    } else{
        content = <MeetupList meetup={favoriteCtx.favorite}/>
    }
    return(
        <section>
             <h1>My favorite</h1>
                {content}
        </section>
    )
}

export default FavoritePage;