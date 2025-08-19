import { Badge } from "@/components/shadcn-ui/badge";
import { cn } from "@/lib/utils";
import { HTMLProps } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/shadcn-ui/card";

export interface ListItemProps {
  headerLabel: string;
  content: React.ReactNode;
  headerBadge?: React.ReactElement<typeof Badge>;
  footerContent?: React.ReactNode;
  componentStyles?: HTMLProps<HTMLElement>["className"];
  onClick?: () => void;
}

const ListItem: React.FC<ListItemProps> = ({
  headerLabel,
  headerBadge,
  content,
  footerContent,
  componentStyles,
  onClick,
}) => {
  return (
    <Card className={cn("w-full gap-2", componentStyles)} onClick={onClick}>
      {/* Header */}
      <CardHeader className="flex flex-row items-center">
        <CardTitle>{headerLabel}</CardTitle>
        {headerBadge}
      </CardHeader>
      {/* Content */}
      <CardContent>{content}</CardContent>
      <div className="border-t my-1 mx-6" /> {/* Divider */}
      {/* Divider + Footer */}
      {footerContent && (
        <>
          <CardFooter> {footerContent}</CardFooter>
        </>
      )}
    </Card>
  );
};

export default ListItem;
