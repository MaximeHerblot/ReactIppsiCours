import diplomes from "../../data/diplomes.json";
import OneDiplome from "./one_diplome";

const Diplomes = () => {
  return (
    <>
      <section>
        <div className="card">
          <h2>Mes diplomes/ Certificats</h2>
          <table>
            <tbody>
              <tr>
                <th>Nom de l'école</th>
                <th>Diplome</th>
                <th>Date de réception</th>
                <th>Resultat</th>
              </tr>
              {diplomes.map((diplome) => (
                <OneDiplome information={diplome} />
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Diplomes;
