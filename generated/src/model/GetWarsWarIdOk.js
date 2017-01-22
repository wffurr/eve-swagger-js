/**
 * EVE Swagger Interface
 * An OpenAPI for EVE Online
 *
 * OpenAPI spec version: 0.3.8
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/GetWarsWarIdOkAggressor', 'model/GetWarsWarIdOkAllies', 'model/GetWarsWarIdOkDefender'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetWarsWarIdOkAggressor'), require('./GetWarsWarIdOkAllies'), require('./GetWarsWarIdOkDefender'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.GetWarsWarIdOk = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.GetWarsWarIdOkAggressor, root.EveSwaggerInterface.GetWarsWarIdOkAllies, root.EveSwaggerInterface.GetWarsWarIdOkDefender);
  }
}(this, function(ApiClient, GetWarsWarIdOkAggressor, GetWarsWarIdOkAllies, GetWarsWarIdOkDefender) {
  'use strict';




  /**
   * The GetWarsWarIdOk model module.
   * @module model/GetWarsWarIdOk
   * @version 0.3.8
   */

  /**
   * Constructs a new <code>GetWarsWarIdOk</code>.
   * 200 ok object
   * @alias module:model/GetWarsWarIdOk
   * @class
   * @param declared {Date} Time that the war was declared
   * @param id {Integer} ID of the specified war
   * @param mutual {Boolean} Was the war declared mutual by both parties
   * @param openForAllies {Boolean} Is the war currently open for allies or not
   */
  var exports = function(declared, id, mutual, openForAllies) {
    var _this = this;



    _this['declared'] = declared;


    _this['id'] = id;
    _this['mutual'] = mutual;
    _this['open_for_allies'] = openForAllies;


  };

  /**
   * Constructs a <code>GetWarsWarIdOk</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetWarsWarIdOk} obj Optional instance to populate.
   * @return {module:model/GetWarsWarIdOk} The populated <code>GetWarsWarIdOk</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('aggressor')) {
        obj['aggressor'] = GetWarsWarIdOkAggressor.constructFromObject(data['aggressor']);
      }
      if (data.hasOwnProperty('allies')) {
        obj['allies'] = ApiClient.convertToType(data['allies'], [GetWarsWarIdOkAllies]);
      }
      if (data.hasOwnProperty('declared')) {
        obj['declared'] = ApiClient.convertToType(data['declared'], 'Date');
      }
      if (data.hasOwnProperty('defender')) {
        obj['defender'] = GetWarsWarIdOkDefender.constructFromObject(data['defender']);
      }
      if (data.hasOwnProperty('finished')) {
        obj['finished'] = ApiClient.convertToType(data['finished'], 'Date');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('mutual')) {
        obj['mutual'] = ApiClient.convertToType(data['mutual'], 'Boolean');
      }
      if (data.hasOwnProperty('open_for_allies')) {
        obj['open_for_allies'] = ApiClient.convertToType(data['open_for_allies'], 'Boolean');
      }
      if (data.hasOwnProperty('retracted')) {
        obj['retracted'] = ApiClient.convertToType(data['retracted'], 'Date');
      }
      if (data.hasOwnProperty('started')) {
        obj['started'] = ApiClient.convertToType(data['started'], 'Date');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/GetWarsWarIdOkAggressor} aggressor
   */
  exports.prototype['aggressor'] = undefined;
  /**
   * allied corporations or alliances, each object contains either corporation_id or alliance_id
   * @member {Array.<module:model/GetWarsWarIdOkAllies>} allies
   */
  exports.prototype['allies'] = undefined;
  /**
   * Time that the war was declared
   * @member {Date} declared
   */
  exports.prototype['declared'] = undefined;
  /**
   * @member {module:model/GetWarsWarIdOkDefender} defender
   */
  exports.prototype['defender'] = undefined;
  /**
   * Time the war ended and shooting was no longer allowed
   * @member {Date} finished
   */
  exports.prototype['finished'] = undefined;
  /**
   * ID of the specified war
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Was the war declared mutual by both parties
   * @member {Boolean} mutual
   */
  exports.prototype['mutual'] = undefined;
  /**
   * Is the war currently open for allies or not
   * @member {Boolean} open_for_allies
   */
  exports.prototype['open_for_allies'] = undefined;
  /**
   * Time the war was retracted but both sides could still shoot each other
   * @member {Date} retracted
   */
  exports.prototype['retracted'] = undefined;
  /**
   * Time when the war started and both sides could shoot each other
   * @member {Date} started
   */
  exports.prototype['started'] = undefined;



  return exports;
}));


