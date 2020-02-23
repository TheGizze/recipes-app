recipes ={"item": "test"}

def get_recipe():
    return recipes["item"], 200

def delete_recipe():
    recipes.clear()
    return 200

def put_recipe():
    return 200

def post_recipe():
    return 200

def get_recipes():
    return 200