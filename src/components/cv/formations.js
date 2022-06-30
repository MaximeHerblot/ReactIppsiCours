import formations from "../../data/formation.json";
import OneFormation from "./one_formation";

const Formations = () => {
  return (
    <section>
      <div className="card">
        <h2>Mes formations:</h2>
        <table>
          <tbody>
            <tr>
              <th>Nom</th>
              <th>Ecole</th>
              <th>Domaine</th>
              <th>Date de debut</th>
              <th>Date de fin</th>
              <th>Resultat</th>
            </tr>
            {formations.map((formation)=>{
                return <OneFormation information={formation}/>
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Formations;
