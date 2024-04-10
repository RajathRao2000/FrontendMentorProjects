import React from "react";
import classes from "./RecipePage.module.css";
import omellete from "./image-omelette.jpeg"

function RecipePage() {
  return (
    <div className={classes.body}>
      <div className={classes["main-card"]}>
        <div className={classes["image-container"]}>
          <img src={omellete} />
        </div>

        <h1>Simple Omelette Recipe</h1>

        <p>
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>
        <section className={classes["prep-time"]}>
          <h1>Preparation time</h1>
          <ul>
            <li><span className={classes["bold-title"]}>Total</span>: Approximately 10 minutes</li>
            <li><span className={classes["bold-title"]}>Preparation</span>: 5 minutes</li>
            <li><span className={classes["bold-title"]}>Cooking</span>: 5 minutes</li>
          </ul>
        </section>
        <section className={classes.ingredients}>
          <h1>Ingredients</h1>
          <ul>
            <li>2-3 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ul>
        </section>
        <div className={classes.line}></div>
        <section className={classes.instructions}>
          <h1>Instructions</h1>
          <ol>
            <li>
            <span className={classes["bold-title"]}>Beat the eggs</span>: In a bowl, beat the eggs with a pinch of salt and
              pepper until they are well mixed. You can add a tablespoon of
              water or milk for a fluffier texture.
            </li>

            <li>
            <span className={classes["bold-title"]}>Heat the pan</span>: Place a non-stick frying pan over medium heat and
              add butter or oil.
            </li>

            <li>
            <span className={classes["bold-title"]}>Cook the omelette</span>: Once the butter is melted and bubbling, pour in
              the eggs. Tilt the pan to ensure the eggs evenly coat the surface.
            </li>

            <li>
            <span className={classes["bold-title"]}>Add fillings (optional)</span>: When the eggs begin to set at the edges
              but are still slightly runny in the middle, sprinkle your chosen
              fillings over one half of the omelette.
            </li>

            <li>
            <span className={classes["bold-title"]}>Fold and serve</span>: As the omelette continues to cook, carefully lift
              one edge and fold it over the fillings. Let it cook for another
              minute, then slide it onto a plate.
            </li>

            <li>
            <span className={classes["bold-title"]}>Enjoy</span>: Serve hot, with additional salt and pepper if needed.
            </li>
          </ol>
        </section>
        <div className={classes.line}></div>

        <section className={classes.nutrition}>
          <h1>Nutrition</h1>{" "}
          <p>
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
          <table className={classes.table}>
            <tbody>
              <tr>
                <td>Calories</td>
                <td> 277kcal</td>
              </tr>

              <tr>
                <td>Carbs</td>
                <td> 0g</td>
              </tr>

              <tr>
                <td>Protein</td>
                <td> 20g</td>
              </tr>

              <tr>
                <td style={{border: "none"}}>Fat</td>
                <td style={{border: "none"}}> 22g</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}

export default RecipePage;
