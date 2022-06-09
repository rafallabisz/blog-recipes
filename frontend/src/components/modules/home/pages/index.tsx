import { FC, memo } from "react";
import RecipeCard from "@/components/modules/home/components/recipe-card";
import { IGenericResponse } from "@/utils/common-models";
import { IRecipe } from "@/components/modules/home/models";

type Props = {
  recipes: IGenericResponse<IRecipe>;
};

const Home: FC<Props> = ({ recipes }) => {
  return (
    <div>
      HOME PAGE
      {recipes.data.map((recipe) => (
        <div key={recipe.id}>
          <RecipeCard recipe={recipe} />
        </div>
      ))}
    </div>
  );
};

export default memo(Home);
