import team from "../data/teamBio.json";

const TeamBio = () => {
  return (
    <>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {team.map((item, index) => {
          return (
            <>
              <div className="bg-white rounded-lg p-6" data-aos="fade-up">
                <div
                  className="flex items-center space-x-6 mb-4"
                  data-aos="zoom-in-up"
                  data-aos-duration="500"
                >
                  <img
                    className="h-28 w-28 object-cover object-center rounded-full"
                    src={item.IMAGE}
                    alt={`${item.NAME} photo`}
                  />
                  <div>
                    <p className="text-5xl text-gray-700 font-normal mb-1">
                      {item.NAME}
                    </p>
                    <p className="text-4xl text-blue-600 font-normal">
                      {item.DESCRIPTION}
                    </p>
                    <a
                      href="https://www.linkedin.com/feed/"
                      className="hover:cursor-pointer hover:text-blue-500"
                    >
                      <button className="bg-blue-600 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                        <svg
                          className="w-5 h-5 fill-current"
                          role="img"
                          viewBox="0 0 256 256"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g>
                            <path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"></path>
                          </g>
                        </svg>
                      </button>
                    </a>
                    <a
                      href="mailto:info@heroGalaxy.io"
                      className="hover:cursor-pointer hover:text-blue-500"
                    >
                      <button className="bg-blue-600 mx-2 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="18"
                          fill="currentColor"
                          className="bi bi-envelope"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                        </svg>
                      </button>
                    </a>
                  </div>
                </div>
                <div>
                  <p
                    className="text-gray-400 leading-normal font-normal text-2xl"
                    data-aos="zoom-in-up"
                    data-aos-duration="500"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default TeamBio;
