module.exports = class Schema {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    return await this.model.create(data);
  }
  async readAll(query) {
    return await this.model.findAll(query);
  }
  async readOne(id) {
    return await this.model.findByPk(id);
  }
  async updateOne(id, data) {
    return await this.model.update(data, { where: { id } });
  }
  async deleteOne(id) {
    return await this.model.destroy({ where: { id } });
  }
};
