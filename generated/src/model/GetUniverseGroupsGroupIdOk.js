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
    root.EveSwaggerInterface.GetUniverseGroupsGroupIdOk = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetUniverseGroupsGroupIdOk model module.
   * @module model/GetUniverseGroupsGroupIdOk
   * @version 0.3.10.dev12
   */

  /**
   * Constructs a new <code>GetUniverseGroupsGroupIdOk</code>.
   * 200 ok object
   * @alias module:model/GetUniverseGroupsGroupIdOk
   * @class
   * @param categoryId {Number} category_id number
   * @param groupId {Integer} group_id integer
   * @param name {String} name string
   * @param published {Boolean} published boolean
   * @param types {Array.<Integer>} types array
   */
  var exports = function(categoryId, groupId, name, published, types) {
    var _this = this;

    _this['category_id'] = categoryId;
    _this['group_id'] = groupId;
    _this['name'] = name;
    _this['published'] = published;
    _this['types'] = types;
  };

  /**
   * Constructs a <code>GetUniverseGroupsGroupIdOk</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetUniverseGroupsGroupIdOk} obj Optional instance to populate.
   * @return {module:model/GetUniverseGroupsGroupIdOk} The populated <code>GetUniverseGroupsGroupIdOk</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('category_id')) {
        obj['category_id'] = ApiClient.convertToType(data['category_id'], 'Number');
      }
      if (data.hasOwnProperty('group_id')) {
        obj['group_id'] = ApiClient.convertToType(data['group_id'], 'Integer');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('published')) {
        obj['published'] = ApiClient.convertToType(data['published'], 'Boolean');
      }
      if (data.hasOwnProperty('types')) {
        obj['types'] = ApiClient.convertToType(data['types'], ['Integer']);
      }
    }
    return obj;
  }

  /**
   * category_id number
   * @member {Number} category_id
   */
  exports.prototype['category_id'] = undefined;
  /**
   * group_id integer
   * @member {Integer} group_id
   */
  exports.prototype['group_id'] = undefined;
  /**
   * name string
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * published boolean
   * @member {Boolean} published
   */
  exports.prototype['published'] = undefined;
  /**
   * types array
   * @member {Array.<Integer>} types
   */
  exports.prototype['types'] = undefined;



  return exports;
}));


