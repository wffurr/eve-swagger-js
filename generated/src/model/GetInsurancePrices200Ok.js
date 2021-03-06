/**
 * EVE Swagger Interface
 * An OpenAPI for EVE Online
 *
 * OpenAPI spec version: 0.3.10.dev12
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
    define(['ApiClient', 'model/InsurancepricesLevels'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InsurancepricesLevels'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.GetInsurancePrices200Ok = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.InsurancepricesLevels);
  }
}(this, function(ApiClient, InsurancepricesLevels) {
  'use strict';




  /**
   * The GetInsurancePrices200Ok model module.
   * @module model/GetInsurancePrices200Ok
   * @version 0.3.10.dev12
   */

  /**
   * Constructs a new <code>GetInsurancePrices200Ok</code>.
   * 200 ok object
   * @alias module:model/GetInsurancePrices200Ok
   * @class
   * @param levels {Array.<module:model/InsurancepricesLevels>} A list of a available insurance levels for this ship type
   * @param typeId {Integer} type_id integer
   */
  var exports = function(levels, typeId) {
    var _this = this;

    _this['levels'] = levels;
    _this['type_id'] = typeId;
  };

  /**
   * Constructs a <code>GetInsurancePrices200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetInsurancePrices200Ok} obj Optional instance to populate.
   * @return {module:model/GetInsurancePrices200Ok} The populated <code>GetInsurancePrices200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('levels')) {
        obj['levels'] = ApiClient.convertToType(data['levels'], [InsurancepricesLevels]);
      }
      if (data.hasOwnProperty('type_id')) {
        obj['type_id'] = ApiClient.convertToType(data['type_id'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * A list of a available insurance levels for this ship type
   * @member {Array.<module:model/InsurancepricesLevels>} levels
   */
  exports.prototype['levels'] = undefined;
  /**
   * type_id integer
   * @member {Integer} type_id
   */
  exports.prototype['type_id'] = undefined;



  return exports;
}));


