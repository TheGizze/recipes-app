recipes ={"item": "test"}

def get_recipe():
    return recipes["item"], 200

def remove_recipe():
    recipes.clear()
    return 200
