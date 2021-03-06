const ExtendableFunction = require('../../internal/ExtendableFunction');
const [PageHandler,] = require('../../internal/PageHandler');
const Search = require('../Search');

const _names = require('../../internal/names');

/**
 * An api adapter for dealing with a single item group, currently only
 * supporting fetching simple information.
 */
class Group {
  /**
   * Create a new Group for the given `api` provider and specific `groupId`.
   *
   * @param api {ApiProvider} The api provider used to generate web requests
   * @param groupId {Number} The group id that is used for all requests
   * @constructor
   */
  constructor(api, groupId) {
    this._api = api;
    this._id = groupId;
  }

  /**
   * Get an item groups's details from the ESI endpoint. This makes an HTTP
   * GET request to
   * [`/universe/groups/{id}`](https://esi.tech.ccp.is/latest/#!/Universe/get_universe_groups_group_id).
   * The request is returned as an asynchronous Promise that resolves to an
   * object parsed from the response JSON model. An example value looks like:
   *
   * ```
   * {
   *   "category_id": 6,
   *   "group_id": 25,
   *   "name": "Frigate",
   *   "published": true,
   *   "types": [
   *     587,
   *     586,
   *     585
   *   ]
   * }
   * ```
   *
   * @return {Promise} A Promise that resolves to the response of the request
   * @esi_link UniverseApi.getUniverseGroupsGroupId
   */
  info() {
    return this._api.universe()
    .newRequest('getUniverseGroupsGroupId', [this._id]);
  }
}

/**
 * An api adapter that provides functions for accessing item group information
 * via the [universe](https://esi.tech.ccp.is/latest/#/Universe) ESI end points.
 * You should not usually instantiate this directly as its constructor requires
 * an internal api instance.
 *
 * This is a function class so instances of `Groups` are functions and can be
 * invoked directly, besides accessing its members. Its default function action
 * is equivalent to {@link Groups#get get} or {@link Groups#all all} if no id is
 * provided.
 */
class Groups extends ExtendableFunction {
  /**
   * Create a new Groups instance using the given `api`.
   *
   * @param api {ApiProvider} The api provider
   * @constructor
   */
  constructor(api) {
    super(id => (id ? this.get(id) : this.all()));
    this._api = api;
    this._all = new PageHandler(page => this.all(page));
  }

  /**
   * Create a new Group end point targeting the particular group by `id`.
   *
   * @param id {Number} The group id
   * @returns {Group}
   */
  get(id) {
    return new Group(this._api, id);
  }

  /**
   * Get all item groups in the universe from the ESI endpoint. This makes an
   * HTTP GET request to
   * [`/universe/groups/`](https://esi.tech.ccp.is/latest/#!/Universe/get_universe_groups).
   * The request is returned as an asynchronous Promise that resolves to an
   * array parsed from the response JSON model. An example value looks like:
   *
   * ```
   * [
   *   1,
   *   2,
   *   3
   * ]
   * ```
   *
   * Technically, this end point is paginated by ESI. If invoked without a page
   * argument, the end point will be queried multiple times to fetch the
   * entirety of groups.
   *
   * @param page {Number} Optional; the page of groups to return, starting with
   *     page 1. If not provided, all groups are returned.
   * @return {Promise} A Promise that resolves to the response of the request
   * @esi_link UniverseApi.getUniverseGroups
   */
  all(page = 0) {
    if (page == 0) {
      return this._all.getAll();
    } else {
      return this._api.universe()
      .newRequest('getUniverseGroups', [], { page: page });
    }
  };
}

/**
 * An api adapter for dealing with a single item category, currently only
 * supporting fetching simple information.
 */
class Category {
  /**
   * Create a new Category for the given `api` provider and specific
   * `categoryId`.
   *
   * @param api {ApiProvider} The api provider used to generate web requests
   * @param categoryId {Number} The category id that is used for all requests
   * @constructor
   */
  constructor(api, categoryId) {
    this._api = api;
    this._id = categoryId;
  }

  /**
   * Get an item category's details from the ESI endpoint. This makes an HTTP
   * GET request to
   * [`/universe/categories/{id}`](https://esi.tech.ccp.is/latest/#!/Universe/get_universe_categories_category_id).
   * The request is returned as an asynchronous Promise that resolves to an
   * object parsed from the response JSON model. An example value looks like:
   *
   * ```
   * {
   *   "category_id": 6,
   *    "groups": [
   *      25,
   *      26,
   *      27
   *    ],
   *    "name": "Ship",
   *    "published": true
   * }
   * ```
   *
   * @return {Promise} A Promise that resolves to the response of the request
   * @esi_link UniverseApi.getUniverseCategoriesCategoryId
   */
  info() {
    return this._api.universe()
    .newRequest('getUniverseCategoriesCategoryId', [this._id]);
  }
}

/**
 * An api adapter that provides functions for accessing item category
 * information via the [universe](https://esi.tech.ccp.is/latest/#/Universe) ESI
 * end points. You should not usually instantiate this directly as its
 * constructor requires an internal api instance.
 *
 * This is a function class so instances of `Categories` are functions and can
 * be invoked directly, besides accessing its members. Its default function
 * action is equivalent to {@link Categories#get get} or {@link Categories#all
 * all} if no id is provided.
 */
class Categories extends ExtendableFunction {
  /**
   * Create a new Categories instance using the given `api`.
   *
   * @param api {ApiProvider} The api provider
   * @constructor
   */
  constructor(api) {
    super(id => (id ? this.get(id) : this.all()));
    this._api = api;
  }

  /**
   * Create a new Category end point targeting the particular category by `id`.
   *
   * @param id {Number} The category id
   * @returns {Category}
   */
  get(id) {
    return new Category(this._api, id);
  }

  /**
   * Get all item categories in the universe from the ESI endpoint. This makes
   * an HTTP GET request to
   * [`/universe/categories/`](https://esi.tech.ccp.is/latest/#!/Universe/get_universe_categories).
   * The request is returned as an asynchronous Promise that resolves to an
   * array parsed from the response JSON model. An example value looks like:
   *
   * ```
   * [
   *   1,
   *   2,
   *   3
   * ]
   * ```
   *
   * @return {Promise} A Promise that resolves to the response of
   *   the request
   * @esi_link UniverseApi.getUniverseCategories
   */
  all() {
    return this._api.universe().newRequest('getUniverseCategories', []);
  }
}

/**
 * An api adapter for dealing with a single item type, currently only supporting
 * fetching simple information.
 */
class Type {
  /**
   * Create a new Type for the given `api` provider and specific
   * `typeId`.
   *
   * @param api {ApiProvider} The api provider used to generate web requests
   * @param typeId {Number} The type id that is used for all requests
   * @constructor
   */
  constructor(api, typeId) {
    this._api = api;
    this._id = typeId;
  }

  /**
   * Get a type's public info from the ESI endpoint. This makes an HTTP GET
   * request to
   * [`/universe/types/{id}/`](https://esi.tech.ccp.is/latest/#!/Universe/get_universe_types_type_id).
   * The request is returned as an asynchronous Promise that resolves to an
   * object parsed from the response JSON model. An example value looks like:
   *
   * ```
   * {
   *   "type_id": 587,
   *   "name": "Rifter",
   *   "description": "The Rifter is a ...",
   *   "published": true,
   *   "group_id": 25,
   *   "radius": 31,
   *   "volume": 27289,
   *   "capacity": 140,
   *   "portion_size": 1,
   *   "mass": 1067000,
   *   "graphic_id": 46,
   *   "dogma_attributes": [
   *     {
   *       "attribute_id": 3,
   *       "value": 0
   *     }
   *   ],
   *   "dogma_effects": [
   *     {
   *       "effect_id": 508,
   *       "is_default": false
   *     }
   *   ]
   * }
   * ```
   *
   * @return {Promise} A Promise that resolves to the response of the request
   * @esi_link UniverseApi.getUniverseTypesTypeId
   */
  info() {
    return this._api.universe()
    .newRequest('getUniverseTypesTypeId', [this._id]);
  }
}

/**
 * An api adapter that provides functions for accessing item type information
 * via the
 * [universe](https://esi.tech.ccp.is/latest/#/Universe) and
 * [search](https://esi.tech.ccp.is/latest/#/Search) ESI end points.
 * You should not usually instantiate this directly as its constructor requires
 * an internal api instance.
 *
 * This is a function class so instances of `Types` are functions and can
 * be invoked directly, besides accessing its members. Its default function
 * action is equivalent to {@link Types#get get} or {@link Types#all all} if
 * no id is provided.
 */
class Types extends ExtendableFunction {
  /**
   * Create a new Types instance using the given `api`.
   *
   * @param api {ApiProvider} The api provider
   * @constructor
   */
  constructor(api) {
    super(id => (id ? this.get(id) : this.all()));
    this._api = api;
    this._all = new PageHandler(page => this.all(page));

    this._search = null;
    this._cats = null;
    this._groups = null;
  }

  /**
   * A Categories instance configured with the same api.
   *
   * @returns {Categories}
   */
  get categories() {
    if (!this._cats) {
      this._cats = new Categories(this._api);
    }
    return this._cats;
  }

  /**
   * A Groups instance configured with the same api.
   *
   * @returns {Groups}
   */
  get groups() {
    if (!this._groups) {
      this._groups = new Groups(this._api);
    }
    return this._groups;
  }

  /**
   * A Search module instance configured to search over the `'inventoryType'`
   * type.
   *
   * @returns {Search}
   */
  get search() {
    if (!this._search) {
      this._search = new Search(this._api, ['inventoryType']);
    }
    return this._search;
  }

  /**
   * Create a new Type end point targeting the particular type by `id`.
   *
   * @param id {Number} The type id
   * @returns {Type}
   */
  get(id) {
    return new Type(this._api, id);
  }

  /**
   * Get prices for all item types from the ESI endpoint. This makes an HTTP
   * GET
   * request to
   * [`/markets/prices`](https://esi.tech.ccp.is/latest/#!/Market/get_markets_prices).
   * The request is returned as an asynchronous Promise that resolves to an
   * array parsed from the response JSON model. An example value looks like:
   *
   * ```
   * [
   *   {
   *     "adjusted_price": 306988.09,
   *     "average_price": 306292.67,
   *     "type_id": 32772
   *   }
   * ]
   * ```
   *
   * @return {Promise} A Promise that resolves to the response of the request
   * @esi_link MarketApi.getMarketsPrices
   */
  prices() {
    return this._api.market().newRequest('getMarketPrices', []);
  }

  /**
   * Get all type id's the ESI endpoint. This makes an HTTP GET request to
   * [`universe/types/`](https://esi.tech.ccp.is/latest/#!/Universe/get_universe_types).
   * The request is returned as an asynchronous Promise that resolves to an
   * array parsed from the response JSON model. An example value looks like:
   *
   * ```
   * [
   *   1,
   *   2,
   *   3
   * ]
   * ```
   *
   * Technically, this end point is paginated by ESI. If invoked without a page
   * argument, the end point will be queried multiple times to fetch the
   * entirety of groups.
   *
   * @param page {Number} Optional; the page of groups to return, starting with
   *     page 1. If not provided, all groups are returned.
   * @return {Promise} A Promise that resolves to the response of the request
   * @esi_link UniverseApi.getUniverseTypes
   */
  all(page = 0) {
    if (page == 0) {
      return this._all.getAll();
    } else {
      return this._api.universe().newRequest('getUniverseTypes', []);
    }
  }

  /**
   * Get the names for a list of solar system ids from the ESI endpoint. This
   * makes an HTTP POST request to
   * [`universe/names/`](https://esi.tech.ccp.is/latest/#!/Universe/post_universe_names).
   * The request is returned as an asynchronous Promise that resolves to an
   * array parsed from the response JSON model. An example value looks like:
   *
   * ```
   * [
   *   {
   *     "id": 1000171,
   *     "name": "Republic University"
   *   }
   * ]
   * ```
   *
   * Note that this has the category field stripped from the response and will
   * only include matches with the type category.
   *
   * @param {Array.<Number>} ids The type ids to look up. If not provided then
   *     the names of all item types will be returned.
   * @return {Promise} A Promise that resolves to the response of the request
   * @esi_link UniverseApi.postUniverseNames
   */
  names(ids = []) {
    if (!ids || ids.length == 0) {
      return this.all().then(allIds => this.names(allIds));
    } else {
      return _names(this._api, 'inventory_type', ids);
    }
  }
}

module.exports = Types;
