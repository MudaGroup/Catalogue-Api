"use strict";

/**
 * product controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::product.product", ({ strapi }) => ({
  async find(ctx) {
    // Ambil semua produk dengan gambar
    const { data, meta } = await super.find(ctx);
    return { data, meta };
  },

  async findOne(ctx) {
    // Ambil produk berdasarkan ID dengan gambar
    const { id } = ctx.params;
    const entity = await strapi.entityService.findOne("api::product.product", id, {
      populate: ["Image"],
    });
    return entity;
  },

  async create(ctx) {
    // Tambahkan produk baru
    const response = await super.create(ctx);
    return response;
  },

  async update(ctx) {
    // Update produk berdasarkan ID
    const { id } = ctx.params;
    const response = await super.update(ctx);
    return response;
  },

  async delete(ctx) {
    // Hapus produk berdasarkan ID
    const { id } = ctx.params;
    const response = await super.delete(ctx);
    return response;
  },
}));
