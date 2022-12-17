'use strict';

/**
 * main-chapter service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::main-chapter.main-chapter');
