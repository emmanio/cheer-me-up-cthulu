exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('people').del()
    .then(function () {
      // Inserts seed entries
      return knex('people').insert([
        {id: 1, name: 'Aimee'},
        {id: 2, name: 'Amy'},
        {id: 3, name: 'Alisa'},
        {id: 4, name: 'Bryce'},
        {id: 5, name: 'Don'},
        {id: 6, name: 'Dougal'},
        {id: 7, name: 'Emma'},
        {id: 8, name: 'Emily'},
        {id: 9, name: 'George'},
        {id: 10, name: 'James'},
        {id: 11, name: 'Lauren'},
        {id: 12, name: 'Lisa'},
        {id: 13, name: 'Marion'},
        {id: 14, name: 'James'},
        {id: 15, name: 'Tom'},
        {id: 16, name: 'Zaine'},
        {id: 17, name: 'Rich'}
      ])
    })
}
