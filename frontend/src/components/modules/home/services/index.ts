import { IGenericResponse } from "@/utils/common-models";
import { http, PostsController } from "@/config/services";
import { IRecipe } from "@/components/modules/home/models";

const getRecipes = async () => {
  const { data } = await http.get<IGenericResponse<IRecipe>>(
    PostsController.POSTS
  );
  return data;
};

const homeService = {
  getRecipes,
};

export default homeService;
