recipes = {
          "1": {
  "recipe_description": "some neat description",
  "recipe_directions": [
    {
      "step_directions": "string",
      "step_order": 0
    }
  ],
  "recipe_ingredients": [
    {
      "ingridient_name": "Tomato",
      "measurement": "1"
    }
  ],
  "recipe_name": "Tomato on the table",
  "recipe_tags": [
    "vegan"
  ]
}}


next_id = 2


def get_recipe(recipe_id):
    if recipe_id in recipes:
        return recipes[recipe_id], 200
    else:
        return 404


def delete_recipe(recipe_id):
    recipes.pop(recipe_id)
    return 200


def put_recipe(recipe_id, request_body):
    if recipe_id in recipes:
        recipes[recipe_id] = request_body
        return {recipe_id: request_body}, 200
    else:
        return 404


def post_recipe(request_body):
    global next_id
    recipes[str(next_id)] = request_body
    next_id += 1
    return 200


def get_recipes():
    return recipes, 200