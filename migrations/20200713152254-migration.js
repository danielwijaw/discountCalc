'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  return db.createTable('tb_item', {
    item_id: { type: 'int', primaryKey: true, autoIncrement: true },
    name: { type: 'string', length: 50 },
    discount_code: { type: 'smallint', notNull: true, defaultValue: 0 },
    price: { type: 'int', notNull: true, defaultValue: 0 },
  });
};

exports.down = function(db) {
  return db.dropTable('tb_item');
};

exports._meta = {
  "version": 1
};
