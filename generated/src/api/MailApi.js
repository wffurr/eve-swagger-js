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
    define(['ApiClient', 'model/DeleteCharactersCharacterIdMailLabelsLabelIdInternalServerError', 'model/DeleteCharactersCharacterIdMailLabelsLabelIdUnprocessableEntity', 'model/DeleteCharactersCharacterIdMailLabelsLabelIdForbidden', 'model/DeleteCharactersCharacterIdMailMailIdForbidden', 'model/DeleteCharactersCharacterIdMailMailIdInternalServerError', 'model/GetCharactersCharacterIdMail200Ok', 'model/GetCharactersCharacterIdMailInternalServerError', 'model/GetCharactersCharacterIdMailForbidden', 'model/GetCharactersCharacterIdMailLabelsOk', 'model/GetCharactersCharacterIdMailLabelsForbidden', 'model/GetCharactersCharacterIdMailLabelsInternalServerError', 'model/GetCharactersCharacterIdMailListsForbidden', 'model/GetCharactersCharacterIdMailLists200Ok', 'model/GetCharactersCharacterIdMailListsInternalServerError', 'model/GetCharactersCharacterIdMailMailIdForbidden', 'model/GetCharactersCharacterIdMailMailIdNotFound', 'model/GetCharactersCharacterIdMailMailIdInternalServerError', 'model/GetCharactersCharacterIdMailMailIdOk', 'model/PostCharactersCharacterIdMailForbidden', 'model/PostCharactersCharacterIdMailInternalServerError', 'model/PostCharactersCharacterIdMailBadRequest', 'model/PostCharactersCharacterIdMailMail', 'model/PostCharactersCharacterIdMailLabelsForbidden', 'model/PostCharactersCharacterIdMailLabelsLabel', 'model/PostCharactersCharacterIdMailLabelsInternalServerError', 'model/PutCharactersCharacterIdMailMailIdForbidden', 'model/PutCharactersCharacterIdMailMailIdBadRequest', 'model/PutCharactersCharacterIdMailMailIdContents', 'model/PutCharactersCharacterIdMailMailIdInternalServerError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DeleteCharactersCharacterIdMailLabelsLabelIdInternalServerError'), require('../model/DeleteCharactersCharacterIdMailLabelsLabelIdUnprocessableEntity'), require('../model/DeleteCharactersCharacterIdMailLabelsLabelIdForbidden'), require('../model/DeleteCharactersCharacterIdMailMailIdForbidden'), require('../model/DeleteCharactersCharacterIdMailMailIdInternalServerError'), require('../model/GetCharactersCharacterIdMail200Ok'), require('../model/GetCharactersCharacterIdMailInternalServerError'), require('../model/GetCharactersCharacterIdMailForbidden'), require('../model/GetCharactersCharacterIdMailLabelsOk'), require('../model/GetCharactersCharacterIdMailLabelsForbidden'), require('../model/GetCharactersCharacterIdMailLabelsInternalServerError'), require('../model/GetCharactersCharacterIdMailListsForbidden'), require('../model/GetCharactersCharacterIdMailLists200Ok'), require('../model/GetCharactersCharacterIdMailListsInternalServerError'), require('../model/GetCharactersCharacterIdMailMailIdForbidden'), require('../model/GetCharactersCharacterIdMailMailIdNotFound'), require('../model/GetCharactersCharacterIdMailMailIdInternalServerError'), require('../model/GetCharactersCharacterIdMailMailIdOk'), require('../model/PostCharactersCharacterIdMailForbidden'), require('../model/PostCharactersCharacterIdMailInternalServerError'), require('../model/PostCharactersCharacterIdMailBadRequest'), require('../model/PostCharactersCharacterIdMailMail'), require('../model/PostCharactersCharacterIdMailLabelsForbidden'), require('../model/PostCharactersCharacterIdMailLabelsLabel'), require('../model/PostCharactersCharacterIdMailLabelsInternalServerError'), require('../model/PutCharactersCharacterIdMailMailIdForbidden'), require('../model/PutCharactersCharacterIdMailMailIdBadRequest'), require('../model/PutCharactersCharacterIdMailMailIdContents'), require('../model/PutCharactersCharacterIdMailMailIdInternalServerError'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.MailApi = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.DeleteCharactersCharacterIdMailLabelsLabelIdInternalServerError, root.EveSwaggerInterface.DeleteCharactersCharacterIdMailLabelsLabelIdUnprocessableEntity, root.EveSwaggerInterface.DeleteCharactersCharacterIdMailLabelsLabelIdForbidden, root.EveSwaggerInterface.DeleteCharactersCharacterIdMailMailIdForbidden, root.EveSwaggerInterface.DeleteCharactersCharacterIdMailMailIdInternalServerError, root.EveSwaggerInterface.GetCharactersCharacterIdMail200Ok, root.EveSwaggerInterface.GetCharactersCharacterIdMailInternalServerError, root.EveSwaggerInterface.GetCharactersCharacterIdMailForbidden, root.EveSwaggerInterface.GetCharactersCharacterIdMailLabelsOk, root.EveSwaggerInterface.GetCharactersCharacterIdMailLabelsForbidden, root.EveSwaggerInterface.GetCharactersCharacterIdMailLabelsInternalServerError, root.EveSwaggerInterface.GetCharactersCharacterIdMailListsForbidden, root.EveSwaggerInterface.GetCharactersCharacterIdMailLists200Ok, root.EveSwaggerInterface.GetCharactersCharacterIdMailListsInternalServerError, root.EveSwaggerInterface.GetCharactersCharacterIdMailMailIdForbidden, root.EveSwaggerInterface.GetCharactersCharacterIdMailMailIdNotFound, root.EveSwaggerInterface.GetCharactersCharacterIdMailMailIdInternalServerError, root.EveSwaggerInterface.GetCharactersCharacterIdMailMailIdOk, root.EveSwaggerInterface.PostCharactersCharacterIdMailForbidden, root.EveSwaggerInterface.PostCharactersCharacterIdMailInternalServerError, root.EveSwaggerInterface.PostCharactersCharacterIdMailBadRequest, root.EveSwaggerInterface.PostCharactersCharacterIdMailMail, root.EveSwaggerInterface.PostCharactersCharacterIdMailLabelsForbidden, root.EveSwaggerInterface.PostCharactersCharacterIdMailLabelsLabel, root.EveSwaggerInterface.PostCharactersCharacterIdMailLabelsInternalServerError, root.EveSwaggerInterface.PutCharactersCharacterIdMailMailIdForbidden, root.EveSwaggerInterface.PutCharactersCharacterIdMailMailIdBadRequest, root.EveSwaggerInterface.PutCharactersCharacterIdMailMailIdContents, root.EveSwaggerInterface.PutCharactersCharacterIdMailMailIdInternalServerError);
  }
}(this, function(ApiClient, DeleteCharactersCharacterIdMailLabelsLabelIdInternalServerError, DeleteCharactersCharacterIdMailLabelsLabelIdUnprocessableEntity, DeleteCharactersCharacterIdMailLabelsLabelIdForbidden, DeleteCharactersCharacterIdMailMailIdForbidden, DeleteCharactersCharacterIdMailMailIdInternalServerError, GetCharactersCharacterIdMail200Ok, GetCharactersCharacterIdMailInternalServerError, GetCharactersCharacterIdMailForbidden, GetCharactersCharacterIdMailLabelsOk, GetCharactersCharacterIdMailLabelsForbidden, GetCharactersCharacterIdMailLabelsInternalServerError, GetCharactersCharacterIdMailListsForbidden, GetCharactersCharacterIdMailLists200Ok, GetCharactersCharacterIdMailListsInternalServerError, GetCharactersCharacterIdMailMailIdForbidden, GetCharactersCharacterIdMailMailIdNotFound, GetCharactersCharacterIdMailMailIdInternalServerError, GetCharactersCharacterIdMailMailIdOk, PostCharactersCharacterIdMailForbidden, PostCharactersCharacterIdMailInternalServerError, PostCharactersCharacterIdMailBadRequest, PostCharactersCharacterIdMailMail, PostCharactersCharacterIdMailLabelsForbidden, PostCharactersCharacterIdMailLabelsLabel, PostCharactersCharacterIdMailLabelsInternalServerError, PutCharactersCharacterIdMailMailIdForbidden, PutCharactersCharacterIdMailMailIdBadRequest, PutCharactersCharacterIdMailMailIdContents, PutCharactersCharacterIdMailMailIdInternalServerError) {
  'use strict';

  /**
   * Mail service.
   * @module api/MailApi
   * @version 0.3.10.dev12
   */

  /**
   * Constructs a new MailApi. 
   * @alias module:api/MailApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the deleteCharactersCharacterIdMailLabelsLabelId operation.
     * @callback module:api/MailApi~deleteCharactersCharacterIdMailLabelsLabelIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a mail label
     * Delete a mail label  ---  Alternate route: &#x60;/v1/characters/{character_id}/mail/labels/{label_id}/&#x60;  Alternate route: &#x60;/legacy/characters/{character_id}/mail/labels/{label_id}/&#x60;  Alternate route: &#x60;/dev/characters/{character_id}/mail/labels/{label_id}/&#x60; 
     * @param {Integer} characterId An EVE character ID
     * @param {Integer} labelId An EVE label id
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {module:api/MailApi~deleteCharactersCharacterIdMailLabelsLabelIdCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteCharactersCharacterIdMailLabelsLabelId = function(characterId, labelId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'characterId' is set
      if (characterId == undefined || characterId == null) {
        throw "Missing the required parameter 'characterId' when calling deleteCharactersCharacterIdMailLabelsLabelId";
      }

      // verify the required parameter 'labelId' is set
      if (labelId == undefined || labelId == null) {
        throw "Missing the required parameter 'labelId' when calling deleteCharactersCharacterIdMailLabelsLabelId";
      }


      var pathParams = {
        'character_id': characterId,
        'label_id': labelId
      };
      var queryParams = {
        'datasource': opts['datasource']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['evesso'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/characters/{character_id}/mail/labels/{label_id}/', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCharactersCharacterIdMailMailId operation.
     * @callback module:api/MailApi~deleteCharactersCharacterIdMailMailIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a mail
     * Delete a mail  ---  Alternate route: &#x60;/v1/characters/{character_id}/mail/{mail_id}/&#x60;  Alternate route: &#x60;/legacy/characters/{character_id}/mail/{mail_id}/&#x60;  Alternate route: &#x60;/dev/characters/{character_id}/mail/{mail_id}/&#x60; 
     * @param {Integer} characterId An EVE character ID
     * @param {Integer} mailId An EVE mail ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {module:api/MailApi~deleteCharactersCharacterIdMailMailIdCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteCharactersCharacterIdMailMailId = function(characterId, mailId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'characterId' is set
      if (characterId == undefined || characterId == null) {
        throw "Missing the required parameter 'characterId' when calling deleteCharactersCharacterIdMailMailId";
      }

      // verify the required parameter 'mailId' is set
      if (mailId == undefined || mailId == null) {
        throw "Missing the required parameter 'mailId' when calling deleteCharactersCharacterIdMailMailId";
      }


      var pathParams = {
        'character_id': characterId,
        'mail_id': mailId
      };
      var queryParams = {
        'datasource': opts['datasource']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['evesso'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/characters/{character_id}/mail/{mail_id}/', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCharactersCharacterIdMail operation.
     * @callback module:api/MailApi~getCharactersCharacterIdMailCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetCharactersCharacterIdMail200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return mail headers
     * Return the 50 most recent mail headers belonging to the character that match the query criteria. Queries can be filtered by label, and last_mail_id can be used to paginate backwards.  ---  Alternate route: &#x60;/v1/characters/{character_id}/mail/&#x60;  Alternate route: &#x60;/legacy/characters/{character_id}/mail/&#x60;  Alternate route: &#x60;/dev/characters/{character_id}/mail/&#x60;   ---  This route is cached for up to 30 seconds
     * @param {Integer} characterId An EVE character ID
     * @param {Object} opts Optional parameters
     * @param {Array.<Integer>} opts.labels Fetch only mails that match one or more of the given labels
     * @param {Integer} opts.lastMailId List only mail with an ID lower than the given ID, if present
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {module:api/MailApi~getCharactersCharacterIdMailCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetCharactersCharacterIdMail200Ok>}
     */
    this.getCharactersCharacterIdMail = function(characterId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'characterId' is set
      if (characterId == undefined || characterId == null) {
        throw "Missing the required parameter 'characterId' when calling getCharactersCharacterIdMail";
      }


      var pathParams = {
        'character_id': characterId
      };
      var queryParams = {
        'labels': this.apiClient.buildCollectionParam(opts['labels'], 'csv'),
        'last_mail_id': opts['lastMailId'],
        'datasource': opts['datasource']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['evesso'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [GetCharactersCharacterIdMail200Ok];

      return this.apiClient.callApi(
        '/characters/{character_id}/mail/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCharactersCharacterIdMailLabels operation.
     * @callback module:api/MailApi~getCharactersCharacterIdMailLabelsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetCharactersCharacterIdMailLabelsOk} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get mail labels and unread counts
     * Return a list of the users mail labels, unread counts for each label and a total unread count.  ---  Alternate route: &#x60;/v3/characters/{character_id}/mail/labels/&#x60;  Alternate route: &#x60;/dev/characters/{character_id}/mail/labels/&#x60;   ---  This route is cached for up to 30 seconds
     * @param {Integer} characterId An EVE character ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {module:api/MailApi~getCharactersCharacterIdMailLabelsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetCharactersCharacterIdMailLabelsOk}
     */
    this.getCharactersCharacterIdMailLabels = function(characterId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'characterId' is set
      if (characterId == undefined || characterId == null) {
        throw "Missing the required parameter 'characterId' when calling getCharactersCharacterIdMailLabels";
      }


      var pathParams = {
        'character_id': characterId
      };
      var queryParams = {
        'datasource': opts['datasource']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['evesso'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = GetCharactersCharacterIdMailLabelsOk;

      return this.apiClient.callApi(
        '/characters/{character_id}/mail/labels/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCharactersCharacterIdMailLists operation.
     * @callback module:api/MailApi~getCharactersCharacterIdMailListsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetCharactersCharacterIdMailLists200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return mailing list subscriptions
     * Return all mailing lists that the character is subscribed to   ---  Alternate route: &#x60;/v1/characters/{character_id}/mail/lists/&#x60;  Alternate route: &#x60;/legacy/characters/{character_id}/mail/lists/&#x60;  Alternate route: &#x60;/dev/characters/{character_id}/mail/lists/&#x60;   ---  This route is cached for up to 120 seconds
     * @param {Integer} characterId An EVE character ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {module:api/MailApi~getCharactersCharacterIdMailListsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetCharactersCharacterIdMailLists200Ok>}
     */
    this.getCharactersCharacterIdMailLists = function(characterId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'characterId' is set
      if (characterId == undefined || characterId == null) {
        throw "Missing the required parameter 'characterId' when calling getCharactersCharacterIdMailLists";
      }


      var pathParams = {
        'character_id': characterId
      };
      var queryParams = {
        'datasource': opts['datasource']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['evesso'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [GetCharactersCharacterIdMailLists200Ok];

      return this.apiClient.callApi(
        '/characters/{character_id}/mail/lists/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCharactersCharacterIdMailMailId operation.
     * @callback module:api/MailApi~getCharactersCharacterIdMailMailIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetCharactersCharacterIdMailMailIdOk} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return a mail
     * Return the contents of an EVE mail  ---  Alternate route: &#x60;/v1/characters/{character_id}/mail/{mail_id}/&#x60;  Alternate route: &#x60;/legacy/characters/{character_id}/mail/{mail_id}/&#x60;  Alternate route: &#x60;/dev/characters/{character_id}/mail/{mail_id}/&#x60;   ---  This route is cached for up to 30 seconds
     * @param {Integer} characterId An EVE character ID
     * @param {Integer} mailId An EVE mail ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {module:api/MailApi~getCharactersCharacterIdMailMailIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetCharactersCharacterIdMailMailIdOk}
     */
    this.getCharactersCharacterIdMailMailId = function(characterId, mailId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'characterId' is set
      if (characterId == undefined || characterId == null) {
        throw "Missing the required parameter 'characterId' when calling getCharactersCharacterIdMailMailId";
      }

      // verify the required parameter 'mailId' is set
      if (mailId == undefined || mailId == null) {
        throw "Missing the required parameter 'mailId' when calling getCharactersCharacterIdMailMailId";
      }


      var pathParams = {
        'character_id': characterId,
        'mail_id': mailId
      };
      var queryParams = {
        'datasource': opts['datasource']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['evesso'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = GetCharactersCharacterIdMailMailIdOk;

      return this.apiClient.callApi(
        '/characters/{character_id}/mail/{mail_id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postCharactersCharacterIdMail operation.
     * @callback module:api/MailApi~postCharactersCharacterIdMailCallback
     * @param {String} error Error message, if any.
     * @param {'Integer'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send a new mail
     * Create and send a new mail  ---  Alternate route: &#x60;/v1/characters/{character_id}/mail/&#x60;  Alternate route: &#x60;/legacy/characters/{character_id}/mail/&#x60;  Alternate route: &#x60;/dev/characters/{character_id}/mail/&#x60; 
     * @param {Integer} characterId The sender&#39;s character ID
     * @param {module:model/PostCharactersCharacterIdMailMail} mail The mail to send
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {module:api/MailApi~postCharactersCharacterIdMailCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Integer'}
     */
    this.postCharactersCharacterIdMail = function(characterId, mail, opts, callback) {
      opts = opts || {};
      var postBody = mail;

      // verify the required parameter 'characterId' is set
      if (characterId == undefined || characterId == null) {
        throw "Missing the required parameter 'characterId' when calling postCharactersCharacterIdMail";
      }

      // verify the required parameter 'mail' is set
      if (mail == undefined || mail == null) {
        throw "Missing the required parameter 'mail' when calling postCharactersCharacterIdMail";
      }


      var pathParams = {
        'character_id': characterId
      };
      var queryParams = {
        'datasource': opts['datasource']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['evesso'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = 'Integer';

      return this.apiClient.callApi(
        '/characters/{character_id}/mail/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postCharactersCharacterIdMailLabels operation.
     * @callback module:api/MailApi~postCharactersCharacterIdMailLabelsCallback
     * @param {String} error Error message, if any.
     * @param {'Integer'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a mail label
     * Create a mail label  ---  Alternate route: &#x60;/v2/characters/{character_id}/mail/labels/&#x60;  Alternate route: &#x60;/legacy/characters/{character_id}/mail/labels/&#x60;  Alternate route: &#x60;/dev/characters/{character_id}/mail/labels/&#x60; 
     * @param {Integer} characterId An EVE character ID
     * @param {Object} opts Optional parameters
     * @param {module:model/PostCharactersCharacterIdMailLabelsLabel} opts.label Label to create
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {module:api/MailApi~postCharactersCharacterIdMailLabelsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Integer'}
     */
    this.postCharactersCharacterIdMailLabels = function(characterId, opts, callback) {
      opts = opts || {};
      var postBody = opts['label'];

      // verify the required parameter 'characterId' is set
      if (characterId == undefined || characterId == null) {
        throw "Missing the required parameter 'characterId' when calling postCharactersCharacterIdMailLabels";
      }


      var pathParams = {
        'character_id': characterId
      };
      var queryParams = {
        'datasource': opts['datasource']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['evesso'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = 'Integer';

      return this.apiClient.callApi(
        '/characters/{character_id}/mail/labels/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the putCharactersCharacterIdMailMailId operation.
     * @callback module:api/MailApi~putCharactersCharacterIdMailMailIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update metadata about a mail
     * Update metadata about a mail  ---  Alternate route: &#x60;/v1/characters/{character_id}/mail/{mail_id}/&#x60;  Alternate route: &#x60;/legacy/characters/{character_id}/mail/{mail_id}/&#x60;  Alternate route: &#x60;/dev/characters/{character_id}/mail/{mail_id}/&#x60; 
     * @param {Integer} characterId An EVE character ID
     * @param {Integer} mailId An EVE mail ID
     * @param {module:model/PutCharactersCharacterIdMailMailIdContents} contents Data used to update the mail
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {module:api/MailApi~putCharactersCharacterIdMailMailIdCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.putCharactersCharacterIdMailMailId = function(characterId, mailId, contents, opts, callback) {
      opts = opts || {};
      var postBody = contents;

      // verify the required parameter 'characterId' is set
      if (characterId == undefined || characterId == null) {
        throw "Missing the required parameter 'characterId' when calling putCharactersCharacterIdMailMailId";
      }

      // verify the required parameter 'mailId' is set
      if (mailId == undefined || mailId == null) {
        throw "Missing the required parameter 'mailId' when calling putCharactersCharacterIdMailMailId";
      }

      // verify the required parameter 'contents' is set
      if (contents == undefined || contents == null) {
        throw "Missing the required parameter 'contents' when calling putCharactersCharacterIdMailMailId";
      }


      var pathParams = {
        'character_id': characterId,
        'mail_id': mailId
      };
      var queryParams = {
        'datasource': opts['datasource']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['evesso'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/characters/{character_id}/mail/{mail_id}/', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
