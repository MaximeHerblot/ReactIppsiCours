import photo_id from "../../img/identity_shoot.png"

const AboutMe = () => {
    return (
        <section>
            <div className="card">
                <h2>A propos de moi</h2>
                <div className="about_me">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum, felis et sodales vehicula, magna velit egestas diam, non auctor tellus tellus id turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent lacus ante, tempor vel lorem vel, iaculis posuere lacus. Cras pharetra pretium.</p>
                    <img src={photo_id} alt="Photos ID" width="auto" height="100px" ></img>
                </div>
            </div>
        </section>
    )
}

export default AboutMe