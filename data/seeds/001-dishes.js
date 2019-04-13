
exports.seed = function(knex) {

      return knex('dishes').insert([
        { name: 'tacos' },
        { name: 'pizza' },
        { name: 'burgers' },
        { name: 'sushi' }
      ]);
};
