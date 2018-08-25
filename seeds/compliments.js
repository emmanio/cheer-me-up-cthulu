exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('compliments').del()
    .then(function () {
      // Inserts seed entries
      return knex('compliments').insert([
        {id: 88001, phrase: 'I love how driven you are', receiver_id: 1},
        {id: 88002, phrase: 'You have a positive energy', receiver_id: 2},
        {id: 88003, phrase: 'Your laugh is contagious and makes me happy', receiver_id: 3},
        {id: 88004, phrase: 'You are very patient', receiver_id: 4},
        {id: 88005, phrase: 'You are kind to others', receiver_id: 5},
        {id: 88006, phrase: 'You are cheerful', receiver_id: 6},
        {id: 88007, phrase: 'You inspire others', receiver_id: 7},
        {id: 88008, phrase: 'You are a great listener', receiver_id: 8},
        {id: 88009, phrase: 'Your energy lights up the room', receiver_id: 9},
        {id: 88010, phrase: 'You have a great sense of humour', receiver_id: 10},
        {id: 88011, phrase: 'You are more fun than bubblewrap', receiver_id: 11},
        {id: 88012, phrase: 'I admire how brave you are', receiver_id: 12},
        {id: 88013, phrase: 'You are so thoughtful', receiver_id: 13},
        {id: 88014, phrase: 'Your perspective is refreshing', receiver_id: 14},
        {id: 88015, phrase: 'You are more helpful than you realise', receiver_id: 15},
        {id: 88016, phrase: 'You are a smart cookie', receiver_id: 16},
        {id: 88017, phrase: 'Everyone gets knocked down sometimes; only people like you get back up again and keep going', receiver_id: 17},
        {id: 88018, phrase: 'You have a positive energy', receiver_id: 1}
      ])
    })
}
