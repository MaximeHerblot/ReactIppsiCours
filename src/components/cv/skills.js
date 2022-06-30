import skills from "../../data/competences.json"
import OneSkill from "./one_skill"

const Skills = () => {
    return (
        <section>
            <div className="card">
                <h2>Mes compétences</h2>
                <table>
                    <tbody>
                        <tr>
                            <th>Nom de la compétence</th>
                            <th>Niveau</th>
                        </tr>
                        {skills.map((skill)=>{
                            return <OneSkill information={skill} />
                        })}
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default Skills