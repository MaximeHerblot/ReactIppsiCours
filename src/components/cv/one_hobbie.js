
const OneHobbie = (props) => {
  return (
    <tr>
      {Object.values(props.information).map((information)=> <td>{information}</td>)}
    </tr>
  );
};

export default OneHobbie;
