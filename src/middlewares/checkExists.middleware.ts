import recipeService from "../services/recipe.service.ts";
const checkExists = async (req, res, next) => {
  const recipe = await recipeService.getById(req.params.id);
   if (!recipe) {
       return res.status(404).json({
         message: "Recipe not found",
       });
   }
   req.recipe = recipe;
   next();
};
export default { checkExists };