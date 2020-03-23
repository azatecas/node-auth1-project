
exports.seed = function(knex) {

  return knex('users').insert([
    {
      username: "luis",
      password: "super"
    },
    {
      username: "edvin",
      password: "superior"
    },
    {
      username: "josiah",
      password: "superduper"
    },
  ]);
    
};
