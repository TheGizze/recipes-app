recipes = {
          "1": {"name": "template_name",
          "description": "some neat description of the dish",
          "ingredients": [{"ingredient_name": "tomato", "measurement": "1"}]
          "steps": ["step 1", "step 2", "step 3", "step 4"],
          "tags": ["tag 1", "tag 2"]}
}

next_id = 2


def get_recipe(id):
    return recipes[id], 200


def delete_recipe(id):
    recipes.pop(id)
    return 200


def put_recipe(id, req_body):
    recipes.update(id, req_body)
    return 200


def post_recipe(req_body):
    recipes[str(next_id)] = req_body
    next_id += 1
    return 200


def get_recipes():
    return recipes, 200