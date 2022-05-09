import { FC, memo } from "react";
import RecipeCard from "@/components/modules/home/recipe-card";
import { Box, Grid, GridItem } from "@chakra-ui/react";

type Props = {};

const Home: FC<Props> = () => {
  return (
    <div>
      <Box mb="4" mt={"4"}>
        <RecipeCard vertical={false} />
      </Box>
      <Box>
        <Grid
          gridGap="4"
          gridTemplateColumns="repeat(auto-fit,minmax(300px,1fr))"
        >
          {[1, 2].map((e) => (
            <GridItem key={e} display="flex" justifyContent="center">
              <RecipeCard vertical />
            </GridItem>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default memo(Home);
