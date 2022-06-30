const OneDiplome = (props) => {
    
    return (
        <tr>
            {Object.values(props.information).map((information)=> <td> {information} </td>)}
        </tr>
    )
}

export default OneDiplome