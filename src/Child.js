import "./styles.css";

function Child(props) {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Registration No</th>
            <th>Roll No</th>
          </tr>
          {props.student.map((item, i) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.reg}</td>
              <td>{item.roll}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Child;
