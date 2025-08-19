import ListItem, { ListItemProps } from "@/components/reusable/list/list-item";
import { cn } from "@/lib/utils";
import { HTMLProps } from "react";

interface ListProps {
  items: ListItemProps[];
  componentStyles?: HTMLProps<HTMLElement>["className"];
  listItemStyles?: HTMLProps<HTMLElement>["className"];
}

const List: React.FC<ListProps> = ({
  items,
  componentStyles,
  listItemStyles,
}) => {
  return (
    <ul className={cn("space-y-4", componentStyles)}>
      {items.map((item, index) => (
        <ListItem key={index} {...item} componentStyles={listItemStyles} />
      ))}
    </ul>
  );
};

export default List;
