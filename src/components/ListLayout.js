import { ListItem, UnorderedList } from "@chakra-ui/react";

export default function ListLayout({ items, onItemClick }) {
  return (
    <UnorderedList>
      {items.map((item) => (
        <ListItem key={item.id} onClick={() => onItemClick(item)}>
          <span>{item.name}</span> <img src={item.image} alt={item.name} />
        </ListItem>
      ))}
    </UnorderedList>
  );
}
