import { FC, memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { IDataResponse } from "@/utils/common-models";
import { IRecipe } from "@/components/modules/home/models";

type Props = {
  recipe: IDataResponse<IRecipe>;
};

const RecipeCard: FC<Props> = ({ recipe }) => {
  const { title, content, cover } = recipe.attributes;
  return (
 <div>Recipe Card {title} {content}</div>
  );
};

export default memo(RecipeCard);
