import hobbies from "../../data/hobbies.json";
import OneHobbie from "./one_hobbie";

const Hobbies = () => {
  return (
    <>
      <section>
        <div className="card">
          <h2>Mes hobbies</h2>
          <table>
            <tbody>
              <tr>
                <th>Type d'activité</th>
                <th>Niveau</th>
                <th>Fréquence</th>
              </tr>
              {hobbies.map((hobbie) => (
                <OneHobbie information={hobbie} />
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Hobbies;
