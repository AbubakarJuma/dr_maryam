const MyTable = () => {
  const mylist = ["Juma", "Fuoni", "Tanzania"];

  return (
    <div>
      <h1>Hellow BITAM</h1>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Nationality</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {mylist.map(item => (
          <tr>
            <td>{item}</td>
            <td>{item}</td>
            <td>{item}</td>
            <td>
              <button
                type="submit"
                style={{ "background-color": "blue", width: "80px" }}
              >
                Edit
              </button>
              <button
                type="submit"
                style={{ "background-color": "red", width: "80px" }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))};
        </tbody>
      </table>
    </div>
  );
};

export default MyTable;
