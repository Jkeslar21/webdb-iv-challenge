
exports.seed = function(knex) {
      return knex('recipes').insert([
        {name: 'tacos_1', dish_id: 1},
        {name: 'tacos_2', dish_id: 1},
        {name: 'pizza_1', dish_id: 2},
        {name: 'pizza_2', dish_id: 2},
        {name: 'pizza_3', dish_id: 2},
        {name: 'burger_1', dish_id: 3},
        {name: 'burger_2', dish_id: 3},
        {name: 'burger_3', dish_id: 3},
        {name: 'sushi_1', dish_id: 4},
        {name: 'sushi_2', dish_id: 4},
        {name: 'sushi_3', dish_id: 4},
      ]);
};
