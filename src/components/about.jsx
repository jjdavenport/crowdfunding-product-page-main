import Pledge from "./pledge";

const About = ({ onClick }) => {
  return (
    <>
      <article className="flex w-10/12 max-w-screen-md flex-col gap-10 rounded-xl bg-white p-8 shadow-md">
        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-bold text-black">About this project</h2>
          <div className="flex flex-col gap-4">
            <p className="text-darkGray">
              The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
              platform that elevates your screen to a more comfortable viewing
              height. Placing your monitor at eye level has the potential to
              improve your posture and make you more comfortable while at work,
              helping you stay focused on the task at hand.
            </p>
            <p className="text-darkGray">
              Featuring artisan craftsmanship, the simplicity of design creates
              extra desk space below your computer to allow notepads, pens, and
              USB sticks to be stored under the stand.
            </p>
          </div>
        </div>
        <ul className="flex flex-col gap-8">
          <Pledge
            title="Bamboo Stand"
            pledge="$25"
            paragraph="You get an ergonomic stand made of natural bamboo. You've helped us
            launch our promotional campaign, and you’ll be added to a special
            Backer member list."
            amount="101"
            onClick={() => onClick("bamboo stand")}
          />
          <Pledge
            title="Black Edition Stand"
            pledge="$75"
            paragraph="You get a
            Black Special Edition computer stand and a personal thank you. You’ll be
            added to our Backer member list. Shipping is included."
            amount="64"
            onClick={() => onClick("black edition")}
          />
          <Pledge
            title="Mahogany Special Edition"
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
