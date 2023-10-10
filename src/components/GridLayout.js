import { Grid, GridItem } from "@chakra-ui/react";

export default function GridLayout({ items, onItemClick }) {
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={6}>
      {items.map((item) => {
        return (
          <GridItem key={item.id} onClick={() => onItemClick(item)}>
            <span>{item.name}</span>
            <img src={item.image} alt={item.name} />
          </GridItem>
        );
      })}
    </Grid>
  );
}
