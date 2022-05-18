import Image from "next/image";

const myLoader = ({ src, width, quality }: any) => {
  return `/img/${src}?w=${width}&q=${quality || 75}`;
};

const PlanetBlock = (props: any) => (
  <>
    {props.align === "left" ? (
      <div className="m-14 flex lg:flex-row flex-col">
        <div className="flex flex-col">
          {props.smallHeader ? (
            <h2 className="text-2xl my-5 flex items-center telex">
              {props.header}
            </h2>
          ) : (
            <h2 className="text-4xl my-5 flex items-center telex">
              {props.header}
            </h2>
          )}

          <p className="text-3xl flex items-center">{props.content}</p>
        </div>
        <div className="pl-10 flex justify-center">
          {props.data((item:any, index:any) => {
            return (
              <img src={item.IMAGE} alt={item.ALT} key={index} />
            )
          })}
        </div>
      </div>
    ) : (
      <div className="m-14 flex lg:flex-row flex-col">
        <div className="pr-10 flex justify-center">
        {props.data((item:any, index:any) => {
            return (
              <img src={item.IMAGE} alt={item.ALT} key={index} />
            )
          })}
        </div>
        <div className="flex flex-col">
          {props.smallHeader ? (
            <h2 className="text-2xl my-5 flex items-center telex">
              {props.header}
            </h2>
          ) : (
            <h2 className="text-4xl my-5 flex items-center telex">
              {props.header}
            </h2>
          )}
          <p className="text-3xl flex items-center">{props.content}</p>
        </div>
      </div>
    )}
  </>
);

export default PlanetBlock;
