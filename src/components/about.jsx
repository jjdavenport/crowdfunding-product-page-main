import Pledge from "./pledge";

const About = () => {
  return (
    <>
      <article>
        <h2>About this project</h2>
        <p>
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand.
        </p>
        <p>
          Featuring artisan craftsmanship, the simplicity of design creates
          extra desk space below your computer to allow notepads, pens, and USB
          sticks to be stored under the stand.
        </p>
        <ul>
          <Pledge
            title="Bamboo Stand Pledge"
            pledge="$25"
            paragraph="You get an ergonomic stand made of natural bamboo. You've helped us
            launch our promotional campaign, and you’ll be added to a special
            Backer member list."
            amount="101"
          />
          <Pledge
            title="Black Edition Stand Pledge"
            pledge="$75"
            paragraph="You get a
            Black Special Edition computer stand and a personal thank you. You’ll be
            added to our Backer member list. Shipping is included."
            amount="64"
          />
          <Pledge
            title="Mahogany Special Edition Pledge"
            pledge="$200"
            paragraph="You get two Special
            Edition Mahogany stands, a Backer T-Shirt, and a personal thank you.
            You’ll be added to our Backer member list. Shipping is included."
            amount="0"
          />
        </ul>
      </article>
    </>
  );
};

export default About;
