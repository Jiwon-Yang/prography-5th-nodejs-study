const connector = require('../connector')

class BaseRepository {
  constructor(columnName) {
    this.columnName = columnName;
    this.models = connector.get(this.columnName);
  }

  create(data) {
    return this.models.push(data).write();
  }

  find() {
    return this.models.value();
  }

  findById(id) {
    return this.models.find({ id }).value();
  }

  update(id, data) {
    return this.models.find({ id }).assign(data).write();
  }

  delete(id) {
    return this.models.remove({ id }).write();
  }
}

module.exports = BaseRepository;
