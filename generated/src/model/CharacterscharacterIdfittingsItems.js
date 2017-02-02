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
    root.EveSwaggerInterface.CharacterscharacterIdfittingsItems = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CharacterscharacterIdfittingsItems model module.
   * @module model/CharacterscharacterIdfittingsItems
   * @version 0.3.10.dev12
   */

  /**
   * Constructs a new <code>CharacterscharacterIdfittingsItems</code>.
   * item object
   * @alias module:model/CharacterscharacterIdfittingsItems
   * @class
   * @param flag {Integer} flag integer
   * @param quantity {Integer} quantity integer
   * @param typeId {Integer} type_id integer
   */
  var exports = function(flag, quantity, typeId) {
    var _this = this;

    _this['flag'] = flag;
    _this['quantity'] = quantity;
    _this['type_id'] = typeId;
  };

  /**
   * Constructs a <code>CharacterscharacterIdfittingsItems</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CharacterscharacterIdfittingsItems} obj Optional instance to populate.
   * @return {module:model/CharacterscharacterIdfittingsItems} The populated <code>CharacterscharacterIdfittingsItems</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('flag')) {
        obj['flag'] = ApiClient.convertToType(data['flag'], 'Integer');
      }
      if (data.hasOwnProperty('quantity')) {
        obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Integer');
      }
      if (data.hasOwnProperty('type_id')) {
        obj['type_id'] = ApiClient.convertToType(data['type_id'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * flag integer
   * @member {Integer} flag
   */
  exports.prototype['flag'] = undefined;
  /**
   * quantity integer
   * @member {Integer} quantity
   */
  exports.prototype['quantity'] = undefined;
  /**
   * type_id integer
   * @member {Integer} type_id
   */
  exports.prototype['type_id'] = undefined;



  return exports;
}));


