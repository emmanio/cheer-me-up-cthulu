exports.up = function (knex, Promise) {
  return knex.schema.createTable('compliments', function (table) {
    table.increments('id').primary()
    table.string('phrase')
    table.integer('receiver_id').references('people.id')
  })
}
exports.down = function (knex, Promise) {
  return knex.schema.dropTable('compliments')
}
