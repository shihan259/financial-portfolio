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
    <div className={cn("", componentStyles)}>
      {items.map((item, index) => (
        <ListItem
          key={index}
          {...item}
          componentStyles={cn("", listItemStyles)}
        />
      ))}
    </div>
  );
};

export default List;
