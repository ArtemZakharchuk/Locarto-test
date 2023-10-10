import { Grid, GridItem } from "@chakra-ui/react";

export default function GridLayout({ items, onItemClick }) {
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={6} w={"100%"}>
      {items.map((item) => {
        return (
          <GridItem key={item.id} onClick={() => onItemClick(item)} cursor={"pointer"}>
            <span>{item.name}</span>
            <img src={item.image} alt={item.name} title="Click on image to see full info" />
          </GridItem>
        );
      })}
    </Grid>
  );
}
