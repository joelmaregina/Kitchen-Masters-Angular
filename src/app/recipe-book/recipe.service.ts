import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Pão caseiro',
       'Rápido e fofo',
        'https://img.itdg.com.br/tdg/images/recipes/000/178/357/328308/328308_original.jpg?mode=crop&width=710&height=400',
        [
          new Ingredient('Xícara de leite morno', 1),
          new Ingredient('Xícara de óleo', 1/2),
          new Ingredient('Ovos', 2),
          new Ingredient('Pacote fermento biológico', 1),
          new Ingredient('Xícara de trigo', 3),
          new Ingredient('Colher (chá) de sal', 1),
          new Ingredient('Xícara de açúcar', 1/4),
        ]),
    new Recipe(
      'Mousse de maracujá',
       'Doce e azedinho',
      'https://img.itdg.com.br/tdg/images/recipes/000/001/599/361922/361922_original.jpg?mode=crop&width=710&height=400',
      [
        new Ingredient('Lata de leite condensado', 1),
        new Ingredient('Suco de maracujá', 320),
        new Ingredient('Lata de creme de leite sem soro', 1)
      ]),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
