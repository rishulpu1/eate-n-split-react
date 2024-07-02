import Button from "./Button";
function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <label>Bill Value</label>
      <input type="text" />

      <label>Your Expense</label>
      <input type="text" />
      <label>X's Expense</label>
      <input type="text" disabled />
      <label>Who is paying the bill</label>
      <select>
        <option value="you">You</option>
        <option value="friend">X</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}

export default FormSplitBill;
