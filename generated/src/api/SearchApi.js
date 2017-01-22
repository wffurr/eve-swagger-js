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
    define(['ApiClient', 'model/GetCharactersCharacterIdSearchForbidden', 'model/GetCharactersCharacterIdSearchOk', 'model/GetCharactersCharacterIdSearchInternalServerError', 'model/GetSearchOk', 'model/GetSearchInternalServerError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/GetCharactersCharacterIdSearchForbidden'), require('../model/GetCharactersCharacterIdSearchOk'), require('../model/GetCharactersCharacterIdSearchInternalServerError'), require('../model/GetSearchOk'), require('../model/GetSearchInternalServerError'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.SearchApi = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.GetCharactersCharacterIdSearchForbidden, root.EveSwaggerInterface.GetCharactersCharacterIdSearchOk, root.EveSwaggerInterface.GetCharactersCharacterIdSearchInternalServerError, root.EveSwaggerInterface.GetSearchOk, root.EveSwaggerInterface.GetSearchInternalServerError);
  }
}(this, function(ApiClient, GetCharactersCharacterIdSearchForbidden, GetCharactersCharacterIdSearchOk, GetCharactersCharacterIdSearchInternalServerError, GetSearchOk, GetSearchInternalServerError) {
  'use strict';

  /**
   * Search service.
   * @module api/SearchApi
   * @version 0.3.8
   */

  /**
   * Constructs a new SearchApi. 
   * @alias module:api/SearchApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getCharactersCharacterIdSearch operation.
     * @callback module:api/SearchApi~getCharactersCharacterIdSearchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetCharactersCharacterIdSearchOk} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search on a string
     * Search for entities that match a given sub-string.  ---  Alternate route: &#x60;/v2/characters/{character_id}/search/&#x60;   ---  This route is cached for up to 3600 seconds
     * @param {Integer} characterId An EVE character ID
     * @param {String} search The string to search on
     * @param {Array.<module:model/String>} categories Type of entities to search for
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.language Search locale (default to en-us)
     * @param {Boolean} opts.strict Whether the search should be a strict match (default to false)
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {module:api/SearchApi~getCharactersCharacterIdSearchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetCharactersCharacterIdSearchOk}
     */
    this.getCharactersCharacterIdSearch = function(characterId, search, categories, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'characterId' is set
      if (characterId == undefined || characterId == null) {
        throw "Missing the required parameter 'characterId' when calling getCharactersCharacterIdSearch";
      }

      // verify the required parameter 'search' is set
      if (search == undefined || search == null) {
        throw "Missing the required parameter 'search' when calling getCharactersCharacterIdSearch";
      }

      // verify the required parameter 'categories' is set
      if (categories == undefined || categories == null) {
        throw "Missing the required parameter 'categories' when calling getCharactersCharacterIdSearch";
      }


      var pathParams = {
        'character_id': characterId
      };
      var queryParams = {
        'search': search,
        'categories': this.apiClient.buildCollectionParam(categories, 'csv'),
        'language': opts['language'],
        'strict': opts['strict'],
        'datasource': opts['datasource']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['evesso'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = GetCharactersCharacterIdSearchOk;

      return this.apiClient.callApi(
        '/characters/{character_id}/search/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSearch operation.
     * @callback module:api/SearchApi~getSearchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetSearchOk} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search on a string
     * Search for entities that match a given sub-string.  ---  Alternate route: &#x60;/v1/search/&#x60;  Alternate route: &#x60;/legacy/search/&#x60;   ---  This route is cached for up to 3600 seconds
     * @param {String} search The string to search on
     * @param {Array.<module:model/String>} categories Type of entities to search for
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.language Search locale (default to en-us)
     * @param {Boolean} opts.strict Whether the search should be a strict match (default to false)
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {module:api/SearchApi~getSearchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetSearchOk}
     */
    this.getSearch = function(search, categories, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'search' is set
      if (search == undefined || search == null) {
        throw "Missing the required parameter 'search' when calling getSearch";
      }

      // verify the required parameter 'categories' is set
      if (categories == undefined || categories == null) {
        throw "Missing the required parameter 'categories' when calling getSearch";
      }


      var pathParams = {
      };
      var queryParams = {
        'search': search,
        'categories': this.apiClient.buildCollectionParam(categories, 'csv'),
        'language': opts['language'],
        'strict': opts['strict'],
        'datasource': opts['datasource']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = GetSearchOk;

      return this.apiClient.callApi(
        '/search/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
