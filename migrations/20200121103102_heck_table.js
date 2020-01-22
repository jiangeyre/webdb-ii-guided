
exports.up = function(knex) {
    // remember return
    return knex.schema.createTable('songs', tbl => {
        // id column, primary key, auto-increment
        tbl.increments();

        tbl.string('name', 255).index();

        tbl.integer('duration');

        tbl.string('artist').index();

        tbl.boolean('favorite').defaultTo(false);
        // most RDBMS store 1 for true and 0 for false
        tbl.timestamps(true, true); // adds created_at and upated_at columns
    })
};

exports.down = function(knex) {
  
};
