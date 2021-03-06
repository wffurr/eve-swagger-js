/**
 * An api adapter over the end points handling industry  via functions in the
 * [industry](https://esi.tech.ccp.is/latest/#/Industry) ESI endpoints. You
 * should not usually instantiate this directly as its constructor requires an
 * internal api instance.
 */
class Industry {
  /**
   * Create a new Industry instance using the given `api`.
   *
   * @param api {ApiProvider} The api provider
   * @constructor
   */
  constructor(api) {
    this._api = api;
  }

  /**
   * Get all industry facilities from the ESI endpoint. This makes an HTTP GET
   * request to
   * [`/industry/facilities`](https://esi.tech.ccp.is/latest/#!/Industry/get_industry_facilities).
   * The request is returned as an asynchronous Promise that resolves to an
   * array parsed from the response JSON model. An example value looks like:
   *
   * ```
   * [
   *   {
   *     "facility_id": 60012544,
   *     "owner_id": 1000126,
   *     "region_id": 10000001,
   *     "solar_system_id": 30000032,
   *     "tax": 0.1,
   *     "type_id": 2502
   *   }
   * ]
   * ```
   *
   * @return {Promise} A Promise that resolves to the response of the request
   * @esi_link IndustryApi.getIndustryFacilities
   */
  facilities() {
    return this._api.industry().newRequest('getIndustryFacilities', []);
  }

  /**
   * Get cost indices for each solar system from the ESI endpoint. This makes
   * an
   * HTTP GET request to
   * [`/industry/systems`](https://esi.tech.ccp.is/latest/#!/Industry/get_industry_systems).
   * The request is returned as an asynchronous Promise that resolves to an
   * array parsed from the response JSON model. An example value looks like:
   *
   * ```
   * [
   *   {
   *     "cost_indices": [
   *       {
   *         "activity": "invention",
   *         "cost_index": 0.00480411064973412
   *       }
   *     ],
   *     "solar_system_id": 30011392
   *   }
   * ]
   * ```
   *
   * @return {Promise} A Promise that resolves to the response of the request
   * @esi_link IndustryApi.getIndustryFacilities
   */
  systemCosts() {
    return this._api.industry().newRequest('getIndustrySystems', []);
  }
}

module.exports = Industry;
