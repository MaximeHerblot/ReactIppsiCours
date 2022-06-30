import experiences from "../../data/experience.json";
import OneExperience from "./one_experience";

const Experiences = () => {
  return (
    <section>
      <div className="card">
        <h2>Mes expérience:</h2>
        <table>
          <tbody>
            <tr>
              <th>Nom du poste</th>
              <th>Type d'emploi</th>
              <th>Nom de l'entreprise</th>
              <th>Localisation</th>
              <th>Date de debut</th>
              <th>Date de fin</th>
              <th>Secteur</th>
              <th>Descriptif</th>
            </tr>
            {experiences.map((element) => {
              return <OneExperience information={element} />;
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Experiences;
