import team from "../data/team.json";

const Team = () => {
  return (
    <>
      <div className="flex justify-center  my-8">
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-2 justify-self-center">
          {team.map((item, index) => {
            return (
              <div
                key={index}
                className="lg:mx-0 mx-1 w-auto flex flex-col  items-center"
              >
                <div className="lg:w-96 w-auto flex justify-center">
                  <img className="w-36" src={item.IMAGE} alt={`${item.NAME} photo`} />
                </div>
                <div className="flex flex-col m-10 items-center">
                  <h1 className="text-center text-2xl my-4" >{item.NAME}</h1>
                  <p className="text-center text-3xl leading-5">{item.DESCRIPTION}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Team;
