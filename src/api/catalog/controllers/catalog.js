"use strict";

/**
 * catalog controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::catalog.catalog", ({ strapi }) => ({
  async find(ctx) {
    // Panggil method bawaan untuk mengambil semua data
    const { data, meta } = await super.find(ctx);
    return { data, meta };
  },

  async findOne(ctx) {
    // Ambil berdasarkan ID
    const { id } = ctx.params;
    const entity = await strapi.entityService.findOne("api::catalog.catalog", id, {
      populate: ["Image"],
    });
    return entity;
  },

  async create(ctx) {
    // Buat catalog baru
    const response = await super.create(ctx);
    return response;
  },

  async update(ctx) {
    // Update catalog berdasarkan ID
    const { id } = ctx.params;
    const response = await super.update(ctx);
    return response;
  },

  async delete(ctx) {
    // Hapus catalog berdasarkan ID
    const { id } = ctx.params;
    const response = await super.delete(ctx);
    return response;
  },
}));
