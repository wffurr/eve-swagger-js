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
    define(['ApiClient', 'model/CharacterscharacterIdfittingsItems1'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CharacterscharacterIdfittingsItems1'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.PostCharactersCharacterIdFittingsFitting = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.CharacterscharacterIdfittingsItems1);
  }
}(this, function(ApiClient, CharacterscharacterIdfittingsItems1) {
  'use strict';




  /**
   * The PostCharactersCharacterIdFittingsFitting model module.
   * @module model/PostCharactersCharacterIdFittingsFitting
   * @version 0.3.10.dev12
   */

  /**
   * Constructs a new <code>PostCharactersCharacterIdFittingsFitting</code>.
   * fitting object
   * @alias module:model/PostCharactersCharacterIdFittingsFitting
   * @class
   * @param description {String} description string
   * @param items {Array.<module:model/CharacterscharacterIdfittingsItems1>} items array
   * @param name {String} name string
   * @param shipTypeId {Integer} ship_type_id integer
   */
  var exports = function(description, items, name, shipTypeId) {
    var _this = this;

    _this['description'] = description;
    _this['items'] = items;
    _this['name'] = name;
    _this['ship_type_id'] = shipTypeId;
  };

  /**
   * Constructs a <code>PostCharactersCharacterIdFittingsFitting</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PostCharactersCharacterIdFittingsFitting} obj Optional instance to populate.
   * @return {module:model/PostCharactersCharacterIdFittingsFitting} The populated <code>PostCharactersCharacterIdFittingsFitting</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('items')) {
        obj['items'] = ApiClient.convertToType(data['items'], [CharacterscharacterIdfittingsItems1]);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('ship_type_id')) {
        obj['ship_type_id'] = ApiClient.convertToType(data['ship_type_id'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * description string
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * items array
   * @member {Array.<module:model/CharacterscharacterIdfittingsItems1>} items
   */
  exports.prototype['items'] = undefined;
  /**
   * name string
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * ship_type_id integer
   * @member {Integer} ship_type_id
   */
  exports.prototype['ship_type_id'] = undefined;



  return exports;
}));


