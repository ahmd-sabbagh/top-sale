
import { useRef } from "react";

interface Props {
  state: boolean;
  children: React.ReactNode;
  hight: string;
  onClose?: () => void;
  Ref: React.RefObject<HTMLDivElement | null>;
}

const List = ({ state, children, hight, Ref, onClose }: Props) => {

  return (
    <>
    {state && <div className="fixed h-screen w-full bg-black opacity-70 top-0"></div> }
      <div
        className={`bg-white absolute w-full rounded-t-lg transition duration-700 bottom-0 h-[${hight}px] ${
          state ? " translate-y-0" : `translate-y-[424px]`
        }`}
        style={{ boxShadow: "0px 14px 20px #00000026" }}
        ref={Ref}
      >
        {children}
      </div>
    </>
  );
};

export default List;
