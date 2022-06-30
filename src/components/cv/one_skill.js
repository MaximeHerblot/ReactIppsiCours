
const OneSkill = (props) => {
    let information = props.information
    return (
        <tr>
            <td>{information['nom competence']}</td>
            <td>{information['niveau']}</td>
        </tr>
    )
}

export default OneSkill