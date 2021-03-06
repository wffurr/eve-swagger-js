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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.GetCharactersCharacterIdClonesOkHomeLocation = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetCharactersCharacterIdClonesOkHomeLocation model module.
   * @module model/GetCharactersCharacterIdClonesOkHomeLocation
   * @version 0.3.10.dev12
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdClonesOkHomeLocation</code>.
   * home_location object
   * @alias module:model/GetCharactersCharacterIdClonesOkHomeLocation
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>GetCharactersCharacterIdClonesOkHomeLocation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdClonesOkHomeLocation} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdClonesOkHomeLocation} The populated <code>GetCharactersCharacterIdClonesOkHomeLocation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('location_id')) {
        obj['location_id'] = ApiClient.convertToType(data['location_id'], 'Integer');
      }
      if (data.hasOwnProperty('location_type')) {
        obj['location_type'] = ApiClient.convertToType(data['location_type'], 'String');
      }
    }
    return obj;
  }

  /**
   * location_id integer
   * @member {Integer} location_id
   */
  exports.prototype['location_id'] = undefined;
  /**
   * location_type string
   * @member {module:model/GetCharactersCharacterIdClonesOkHomeLocation.LocationTypeEnum} location_type
   */
  exports.prototype['location_type'] = undefined;


  /**
   * Allowed values for the <code>location_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.LocationTypeEnum = {
    /**
     * value: "station"
     * @const
     */
    "station": "station",
    /**
     * value: "structure"
     * @const
     */
    "structure": "structure"  };


  return exports;
}));


