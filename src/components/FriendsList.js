import Friend from "./Friend";
function FreindsList({ freinds, onSelection, selectedFriend }) {
  return (
    <ul>
      {freinds.map((friend) => (
        <Friend
          onSelection={onSelection}
          selectedFriend={selectedFriend}
          friend={friend}
          key={friend.id}
        />
      ))}
    </ul>
  );
}

export default FreindsList;
