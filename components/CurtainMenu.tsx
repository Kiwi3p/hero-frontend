import { useState } from "react";

export const CurtainMenuPage = ({ navData }: any) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <>
      <button
        onClick={toggle}
        className="block float-right text-4xl lg:hidden focus:outline-none focus:shadow"
      >
        &#8801;
      </button>
      <Menu open={open}>
        <button
          aria-label="Close"
          className="absolute top-3 right-3 text-5xl text-white cursor-pointer"
          onClick={toggle}
        >
          &times;
        </button>
        <MenuContainer>
          <MenuItem toggle={toggle} href="/">
            Home
          </MenuItem>
          {navData.map((item: any, index: any) => {
            return (
              <>
                <MenuItem toggle={toggle} href={item.url}>
                  {item.title}
                </MenuItem>
              </>
            );
          })}
        </MenuContainer>
      </Menu>
    </>
  );
};

/* Logic*/
const style = {
  container: `relative top-1/4 w-full text-center mt-8`,
  item: `telex whitespace-nowrap text-3xl text-white cursor-pointer hover:text-white`,
  menu: {
    open: `h-full w-full `,
    close: `w-0 h-full`,
    default: `overflow-x-hidden md:overflow-hidden transition-all duration-700 fixed z-10 top-0 left-0 bg-galaxy-purple`,
  },
};

function Menu({ children, open }: any) {
  return (
    <div
      className={`${style.menu.default} 
       ${open ? style.menu.open : style.menu.close}`}
    >
      {children}
    </div>
  );
}

function MenuContainer({ children }: any) {
  return <div className={style.container}>{children}</div>;
}

function MenuItem({ children, href, target, toggle }: any) {
  return (
    <div className="p-2">
      <a href={href} target={target} onClick={toggle} className={style.item}>
        {children}
      </a>
    </div>
  );
}
