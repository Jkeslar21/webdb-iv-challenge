
exports.seed = function(knex) {

      return knex('ingredients').insert([
        {name: 'ground beef'},
        {name: 'cheese'},
        {name: 'tomatoes'},
        {name: 'fish'},
        {name: 'rice'},
      ]);
};
