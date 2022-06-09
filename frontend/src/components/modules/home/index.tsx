import { FC, memo } from "react";
import RecipeCard from "@/components/modules/home/recipe-card";
import { IGenericResponse } from "@/utils/common-models";
import { IRecipe } from "@/components/modules/home/models";

type Props = {
  recipes: IGenericResponse<IRecipe>;
};

const Home: FC<Props> = ({ recipes }) => {
  return (
    <div>
      HOME

      {recipes.data.map(recipe=>(
        <div key={recipe.id}>
          <RecipeCard recipe={recipe}/>
          </div>
      ))}
      {/* <Box>
        <Grid gridGap="4" gridTemplateColumns="1fr" gridRowGap={10}>
          {recipes.data.map((recipe) => (
            <GridItem key={recipe.id} display="flex" justifyContent="center">
              <RecipeCard recipe={recipe} />
            </GridItem>
          ))}
        </Grid>
      </Box> */}
    </div>
  );
};

export default memo(Home);
