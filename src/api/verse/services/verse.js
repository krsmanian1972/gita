'use strict';

/**
 * verse service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::verse.verse');
