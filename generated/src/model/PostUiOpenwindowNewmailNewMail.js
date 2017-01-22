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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.PostUiOpenwindowNewmailNewMail = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PostUiOpenwindowNewmailNewMail model module.
   * @module model/PostUiOpenwindowNewmailNewMail
   * @version 0.3.8
   */

  /**
   * Constructs a new <code>PostUiOpenwindowNewmailNewMail</code>.
   * new_mail object
   * @alias module:model/PostUiOpenwindowNewmailNewMail
   * @class
   * @param body {String} body string
   * @param recipients {Array.<Integer>} recipients array
   * @param subject {String} subject string
   */
  var exports = function(body, recipients, subject) {
    var _this = this;

    _this['body'] = body;
    _this['recipients'] = recipients;
    _this['subject'] = subject;


  };

  /**
   * Constructs a <code>PostUiOpenwindowNewmailNewMail</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PostUiOpenwindowNewmailNewMail} obj Optional instance to populate.
   * @return {module:model/PostUiOpenwindowNewmailNewMail} The populated <code>PostUiOpenwindowNewmailNewMail</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('body')) {
        obj['body'] = ApiClient.convertToType(data['body'], 'String');
      }
      if (data.hasOwnProperty('recipients')) {
        obj['recipients'] = ApiClient.convertToType(data['recipients'], ['Integer']);
      }
      if (data.hasOwnProperty('subject')) {
        obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
      }
      if (data.hasOwnProperty('to_corp_or_alliance_id')) {
        obj['to_corp_or_alliance_id'] = ApiClient.convertToType(data['to_corp_or_alliance_id'], 'Integer');
      }
      if (data.hasOwnProperty('to_mailing_list_id')) {
        obj['to_mailing_list_id'] = ApiClient.convertToType(data['to_mailing_list_id'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * body string
   * @member {String} body
   */
  exports.prototype['body'] = undefined;
  /**
   * recipients array
   * @member {Array.<Integer>} recipients
   */
  exports.prototype['recipients'] = undefined;
  /**
   * subject string
   * @member {String} subject
   */
  exports.prototype['subject'] = undefined;
  /**
   * to_corp_or_alliance_id integer
   * @member {Integer} to_corp_or_alliance_id
   */
  exports.prototype['to_corp_or_alliance_id'] = undefined;
  /**
   * Corporations, alliances and mailing lists are all types of mailing groups. You may only send to one mailing group, at a time, so you may fill out either this field or the to_corp_or_alliance_ids field
   * @member {Integer} to_mailing_list_id
   */
  exports.prototype['to_mailing_list_id'] = undefined;



  return exports;
}));


