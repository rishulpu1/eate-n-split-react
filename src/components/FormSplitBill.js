import Button from "./Button";
function FormSplitBill({ selectedFriend }) {
  return (
    <form className="form-split-bill">
      <h2>Split bill with {selectedFriend.name}</h2>
      <label>Bill Value</label>
      <input type="text" />

      <label>Your Expense</label>
      <input type="text" />
      <label>{selectedFriend.name}'s Expense</label>
      <input type="text" disabled />
      <label>Who is paying the bill</label>
      <select>
        <option value="you">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}

export default FormSplitBill;
