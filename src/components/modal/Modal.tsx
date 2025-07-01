import { cn } from "@/lib/utils";
import React, { ReactNode, Ref } from "react";
interface Props {
  children: ReactNode;
  ref?: Ref<HTMLDivElement >;
  width: string;
}

const Modal = ({ children, ref, width }: Props) => {
  return (
    <div className="fixed h-screen w-full top-0 start-0 z-[3000] bg-[#00000082] flex-c p-4">
      <div
        ref={ref}
        className={cn(`grow md:grow-0 max-w-[${width}]`)}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
