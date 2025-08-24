import { cn } from "@/lib/utils";
import { HTMLProps } from "react";

interface PageContainerProps {
  className?: HTMLProps<HTMLElement>["className"];
  children: React.ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({
  className,
  children,
}) => {
  return <div className={cn("p-4", className)}>{children}</div>;
};

export default PageContainer;
