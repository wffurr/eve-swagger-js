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
    root.EveSwaggerInterface.IndustrysystemsCostIndices = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The IndustrysystemsCostIndices model module.
   * @module model/IndustrysystemsCostIndices
   * @version 0.3.10.dev12
   */

  /**
   * Constructs a new <code>IndustrysystemsCostIndices</code>.
   * cost_indice object
   * @alias module:model/IndustrysystemsCostIndices
   * @class
   * @param activity {module:model/IndustrysystemsCostIndices.ActivityEnum} activity string
   * @param costIndex {Number} cost_index number
   */
  var exports = function(activity, costIndex) {
    var _this = this;

    _this['activity'] = activity;
    _this['cost_index'] = costIndex;
  };

  /**
   * Constructs a <code>IndustrysystemsCostIndices</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IndustrysystemsCostIndices} obj Optional instance to populate.
   * @return {module:model/IndustrysystemsCostIndices} The populated <code>IndustrysystemsCostIndices</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('activity')) {
        obj['activity'] = ApiClient.convertToType(data['activity'], 'String');
      }
      if (data.hasOwnProperty('cost_index')) {
        obj['cost_index'] = ApiClient.convertToType(data['cost_index'], 'Number');
      }
    }
    return obj;
  }

  /**
   * activity string
   * @member {module:model/IndustrysystemsCostIndices.ActivityEnum} activity
   */
  exports.prototype['activity'] = undefined;
  /**
   * cost_index number
   * @member {Number} cost_index
   */
  exports.prototype['cost_index'] = undefined;


  /**
   * Allowed values for the <code>activity</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ActivityEnum = {
    /**
     * value: "none"
     * @const
     */
    "none": "none",
    /**
     * value: "manufacturing"
     * @const
     */
    "manufacturing": "manufacturing",
    /**
     * value: "researching_technology"
     * @const
     */
    "researching_technology": "researching_technology",
    /**
     * value: "researching_time_efficiency"
     * @const
     */
    "researching_time_efficiency": "researching_time_efficiency",
    /**
     * value: "researching_material_efficiency"
     * @const
     */
    "researching_material_efficiency": "researching_material_efficiency",
    /**
     * value: "copying"
     * @const
     */
    "copying": "copying",
    /**
     * value: "duplicating"
     * @const
     */
    "duplicating": "duplicating",
    /**
     * value: "invention"
     * @const
     */
    "invention": "invention",
    /**
     * value: "reverse_engineering"
     * @const
     */
    "reverse_engineering": "reverse_engineering"  };


  return exports;
}));


