const ExtendableFunction = require('../internal/ExtendableFunction');
const Search = require('./Search');

const _names = require('../internal/names');

/**
 * An api adapter that provides functions for accessing various details for an
 * alliance specified by id, via functions in the
 * [alliance](https://esi.tech.ccp.is/latest/#/Alliance) ESI endpoints. You
 * should not usually instantiate this directly as its constructor requires an
 * internal api instance.
 */
class Alliance {
  /**
   * Create a new Alliance for the given `api` provider and specific
   * `allianceId`.
   *
   * @param api {ApiProvider} The api provider used to generate web requests
   * @param allianceId {Number} The alliance id that is used for all requests
   * @constructor
   */
  constructor(api, allianceId) {
    this._api = api;
    this._id = allianceId;
  }

  /**
   * Get the public info of the alliance from the ESI endpoint. This makes an
   * HTTP GET request to
   * [`alliances/{id}/`](https://esi.tech.ccp.is/latest/#!/Alliance/get_alliances_alliance_id).
   * The request is returned as an asynchronous Promise that resolves to an
   * object parsed from the response JSON model. An example value looks like:
   *
   * ```
   * {
   *   "alliance_name": "C C P Alliance",
   *   "date_founded": "2016-06-26T21:00:00Z",
   *   "executor_corp": 98356193,
   *   "ticker": "<C C P>"
   * }
   * ```
   *
   * @return {Promise} A Promise that resolves to the response of
   *   the request
   * @esi_link AllianceApi.getAlliancesAllianceId
   */
  info() {
    return this._api.alliance()
    .newRequest('getAlliancesAllianceId', [this._id]);
  }

  /**
   * Get the corporations of the alliance from the ESI endpoint. This makes an
   * HTTP GET request to
   * [`alliances/{id}/corporations/`](https://esi.tech.ccp.is/latest/#!/Alliance/get_alliances_alliance_id_corporations).
   * The request is returned as an asynchronous Promise that resolves to an
   * array parsed from the response JSON model. An example value looks like:
   *
   * ```
   * [
   *   98000001
   * ]
   * ```
   *
   * @return {Promise} A Promise that resolves to the response of
   *   the request
   * @esi_link AllianceApi.getAlliancesAllianceIdCorporations
   */
  corporations() {
    return this._api.alliance()
    .newRequest('getAlliancesAllianceIdCorporations', [this._id]);
  }


  /**
   * Get the icon URLs the alliance from the ESI endpoint. This makes an HTTP
   * GET request to
   * [`alliances/{id}/icons/`](https://esi.tech.ccp.is/latest/#!/Alliance/get_alliances_alliance_id_icons).
   * The request is returned as an asynchronous Promise that resolves to an
   * object parsed from the response JSON model. An example value looks like:
   *
   * ```
   * {
   *   "px128x128":
   *      "https://imageserver.eveonline.com/Alliance/503818424_128.png",
   *   "px64x64":
   *      "https://imageserver.eveonline.com/Alliance/503818424_64.png"
   * }
   * ```
   *
   * @return {Promise} A Promise that resolves to the response of
   *   the request
   * @esi_link AllianceApi.getAlliancesAllianceIdIcons
   */
  icon() {
    return this._api.alliance()
    .newRequest('getAlliancesAllianceIdIcons', [this._id]);
  }
}

/**
 * An api adapter over the end points handling multiple alliances via functions
 * in the [alliance](https://esi.tech.ccp.is/latest/#/Alliance) ESI endpoints.
 * You should not usually instantiate this directly as its constructor requires
 * an internal api instance.
 *
 * This is a function class so instances of `Alliances` are functions and can be
 * invoked directly, besides accessing its members. Its default function action
 * is equivalent to {@link Alliances#get get} or {@link Alliances#all all} if
 * no id is provided.
 */
class Alliances extends ExtendableFunction {
  /**
   * Create a new Alliances function using the given `api`.
   *
   * @param api {ApiProvider} The api provider
   * @constructor
   */
  constructor(api) {
    super(id => (id ? this.get(id) : this.all()));
    this._api = api;

    this._search = null;
  }

  /**
   * A Search module instance configured to search over the `'alliance'`
   * type.
   *
   * @returns {Search}
   */
  get search() {
    if (!this._search) {
      this._search = new Search(this._api, ['alliance']);
    }
    return this._search;
  }

  /**
   * Create a new Alliance end point targeting the particular alliance by `id`.
   *
   * @param id {Number} The alliance id
   * @returns {Alliance}
   */
  get(id) {
    return new Alliance(this._api, id);
  }

  /**
   * Get all active alliance id's the ESI endpoint. This makes an HTTP GET
   * request to
   * [`alliances/`](https://esi.tech.ccp.is/latest/#!/Alliance/get_alliances).
   * The request is returned as an asynchronous Promise that resolves to an
   * array parsed from the response JSON model. An example value looks like:
   *
   * ```
   * [
   *   99000001,
   *   99000002
   * ]
   * ```
   *
   * @return {Promise} A Promise that resolves to the response of the request
   * @esi_link AllianceApi.getAlliances
   */
  all() {
    return this._api.alliance().newRequest('getAlliances', []);
  }

  /**
   * Get the names for a list of alliance ids from the ESI endpoint. This makes
   * an HTTP GET request to
   * [`alliances/names/`](https://esi.tech.ccp.is/latest/#!/Alliance/get_alliances_names).
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
   * Note that this has the id and name fields simplified compared to what the
   * actual ESI end point reports ('alliance_id' and 'alliance_name'). For very
   * long arrays, this will fall back to making an HTTP POST request to
   * [`universe/names/`](https://esi.tech.ccp.is/latest/#!/Universe/post_universe_names),
   * which does not have a URL length limitation. In this case the response
   * format will be as above.
   *
   * @param {Array.<Number>} ids Optional; the alliance ids to look up. If not
   *   provided then the names of all alliances will be returned.
   * @return {Promise} A Promise that resolves to the response of the request
   * @esi_link AllianceApi.getAlliancesNames
   */
  names(ids = []) {
    if (!ids || ids.length == 0) {
      return this.all().then(allIds => this.names(allIds));
    } else {
      if (ids.length > 20) {
        // Use universe/names end point since the /alliances one breaks if
        // the URL gets too long.
        return _names(this._api, 'alliance', ids);
      } else {
        // Use alliance/names end point and
        return this._api.alliance().newRequest('getAlliancesNames', [ids])
        .then(result => {
          // Rename alliance_id and alliance_name
          return result.map(r => {
            return {
              id: r.alliance_id,
              name: r.alliance_name
            };
          });
        });
      }
    }
  }
}

module.exports = Alliances;
