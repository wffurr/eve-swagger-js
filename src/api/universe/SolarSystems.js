const ExtendableFunction = require('../../internal/ExtendableFunction');
const Search = require('../Search');

const _names = require('../../internal/names');

/**
 * An api adapter for dealing with a single solar system, currently only
 * supporting fetching simple information.
 */
class SolarSystem {
  /**
   * Create a new SolarSystem for the given `api` provider and specific
   * `solarSystemId`.
   *
   * @param api {ApiProvider} The api provider used to generate web requests
   * @param solarSystemId {Number} The system id that is used for all requests
   * @constructor
   */
  constructor(api, solarSystemId) {
    this._api = api;
    this._id = solarSystemId;
  }

  /**
   * Get solar system public info from the ESI endpoint. This makes an HTTP GET
   * request to
   * [`/universe/systems/{id}/`](https://esi.tech.ccp.is/latest/#!/Universe/get_universe_systems_system_id).
   * The request is returned as an asynchronous Promise that resolves to an
   * object parsed from the response JSON model. An example value looks like:
   *
   * ```
   * {
   *   "solar_system_name": "Jita"
   * }
   * ```
   *
   * @return {Promise} A Promise that resolves to the response of the request
   * @esi_link UniverseApi.getUniverseSystemsSystemId
   */
  info() {
    return this._api.universe()
    .newRequest('getUniverseSystemsSystemId', [this._id]);
  }
}

/**
 * An api adapter that provides functions for accessing solar system information
 * via the
 * [universe](https://esi.tech.ccp.is/latest/#/Universe) and
 * [search](https://esi.tech.ccp.is/latest/#/Search) ESI end points.
 * You should not usually instantiate this directly as its constructor requires
 * an internal api instance.
 *
 * This is a function class so instances of `SolarSystems` are functions and can
 * be invoked directly, besides accessing its members. Its default function
 * action is equivalent to {@link SolarSystems#get get}.
 */
class SolarSystems extends ExtendableFunction {
  /**
   * Create a new SolarSystems instance using the given `api`.
   *
   * @param api {ApiProvider} The api provider
   * @constructor
   */
  constructor(api) {
    super(id => this.get(id));
    this._api = api;

    this._search = null;
  }

  /**
   * A Search module instance configured to search over the `'solarsystem'`
   * type.
   *
   * @returns {Search}
   */
  get search() {
    if (!this._search) {
      this._search = new Search(this._api, ['solarsystem']);
    }
    return this._search;
  }

  /**
   * Create a new SolarSystem end point targeting the particular system by `id`.
   *
   * @param id {Number} The solar system id
   * @returns {SolarSystem}
   */
  get(id) {
    return new SolarSystem(this._api, id);
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
   * only include matches with the solar system category.
   *
   * @param {Array.<Number>} ids The solar system ids to look up.
   * @return {Promise} A Promise that resolves to the response of
   *   the request
   * @esi_link UniverseApi.postUniverseNames
   */
  names(ids) {
    return _names(this._api, 'solar_system', ids);
  }
}

module.exports = SolarSystems;
