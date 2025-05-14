"use client";
import { cn } from "@/lib/utils";
import { ReactNode, RefObject } from "react";

interface BottomSheetProps {
  open: boolean;
  children: ReactNode;
  height?: string;
  Ref?: React.RefObject<HTMLDivElement | null>;
}

const BottomSheet = ({
  open,
  children,
  height = "h-[300px]",
  Ref,
}: BottomSheetProps) => {
  return (
    <div
      className={cn(
        "fixed h-screen w-full start-0 bg-[#000000B2] top-0 z-[2000] transition-opacity duration-500",
        open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      )}
    >
      <div className="h-screen relative">
        <div
          ref={Ref}
          className={cn(
            "w-full bg-white absolute bottom-0 start-0 rounded-t-xl transition-transform duration-700",
            height,
            open ? "translate-y-0" : "translate-y-[424px]"
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default BottomSheet;
