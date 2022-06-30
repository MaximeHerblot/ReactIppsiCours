const OneExperience = (props) => {
  return (
    <tr>
      {Object.values(props.information).map((information) => {
        return <td>{information}</td>;
      })}
    </tr>
  );
};

export default OneExperience;
