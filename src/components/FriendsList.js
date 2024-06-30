import Friend from "./Friend";
function FreindsList({freinds}){
    return(
        <ul>
            {freinds.map((friend) => <Friend friend={friend} key={friend.id} />)}
        </ul>
    );
}

export default FreindsList;