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
    define(['ApiClient', 'model/GetCharactersCharacterIdPlanets200Ok', 'model/GetCharactersCharacterIdPlanetsForbidden', 'model/GetCharactersCharacterIdPlanetsInternalServerError', 'model/GetCharactersCharacterIdPlanetsPlanetIdInternalServerError', 'model/GetCharactersCharacterIdPlanetsPlanetIdForbidden', 'model/GetCharactersCharacterIdPlanetsPlanetIdOk', 'model/GetCharactersCharacterIdPlanetsPlanetIdNotFound', 'model/GetUniverseSchematicsSchematicIdInternalServerError', 'model/GetUniverseSchematicsSchematicIdOk', 'model/GetUniverseSchematicsSchematicIdNotFound'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/GetCharactersCharacterIdPlanets200Ok'), require('../model/GetCharactersCharacterIdPlanetsForbidden'), require('../model/GetCharactersCharacterIdPlanetsInternalServerError'), require('../model/GetCharactersCharacterIdPlanetsPlanetIdInternalServerError'), require('../model/GetCharactersCharacterIdPlanetsPlanetIdForbidden'), require('../model/GetCharactersCharacterIdPlanetsPlanetIdOk'), require('../model/GetCharactersCharacterIdPlanetsPlanetIdNotFound'), require('../model/GetUniverseSchematicsSchematicIdInternalServerError'), require('../model/GetUniverseSchematicsSchematicIdOk'), require('../model/GetUniverseSchematicsSchematicIdNotFound'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.PlanetaryInteractionApi = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.GetCharactersCharacterIdPlanets200Ok, root.EveSwaggerInterface.GetCharactersCharacterIdPlanetsForbidden, root.EveSwaggerInterface.GetCharactersCharacterIdPlanetsInternalServerError, root.EveSwaggerInterface.GetCharactersCharacterIdPlanetsPlanetIdInternalServerError, root.EveSwaggerInterface.GetCharactersCharacterIdPlanetsPlanetIdForbidden, root.EveSwaggerInterface.GetCharactersCharacterIdPlanetsPlanetIdOk, root.EveSwaggerInterface.GetCharactersCharacterIdPlanetsPlanetIdNotFound, root.EveSwaggerInterface.GetUniverseSchematicsSchematicIdInternalServerError, root.EveSwaggerInterface.GetUniverseSchematicsSchematicIdOk, root.EveSwaggerInterface.GetUniverseSchematicsSchematicIdNotFound);
  }
}(this, function(ApiClient, GetCharactersCharacterIdPlanets200Ok, GetCharactersCharacterIdPlanetsForbidden, GetCharactersCharacterIdPlanetsInternalServerError, GetCharactersCharacterIdPlanetsPlanetIdInternalServerError, GetCharactersCharacterIdPlanetsPlanetIdForbidden, GetCharactersCharacterIdPlanetsPlanetIdOk, GetCharactersCharacterIdPlanetsPlanetIdNotFound, GetUniverseSchematicsSchematicIdInternalServerError, GetUniverseSchematicsSchematicIdOk, GetUniverseSchematicsSchematicIdNotFound) {
  'use strict';

  /**
   * PlanetaryInteraction service.
   * @module api/PlanetaryInteractionApi
   * @version 0.3.10.dev12
   */

  /**
   * Constructs a new PlanetaryInteractionApi. 
   * @alias module:api/PlanetaryInteractionApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getCharactersCharacterIdPlanets operation.
     * @callback module:api/PlanetaryInteractionApi~getCharactersCharacterIdPlanetsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetCharactersCharacterIdPlanets200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get colonies
     * Returns a list of all planetary colonies owned by a character.  ---  Alternate route: &#x60;/v1/characters/{character_id}/planets/&#x60;  Alternate route: &#x60;/legacy/characters/{character_id}/planets/&#x60;  Alternate route: &#x60;/dev/characters/{character_id}/planets/&#x60;   ---  This route is cached for up to 600 seconds
     * @param {Integer} characterId Character id of the target character
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {module:api/PlanetaryInteractionApi~getCharactersCharacterIdPlanetsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetCharactersCharacterIdPlanets200Ok>}
     */
    this.getCharactersCharacterIdPlanets = function(characterId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'characterId' is set
      if (characterId == undefined || characterId == null) {
        throw "Missing the required parameter 'characterId' when calling getCharactersCharacterIdPlanets";
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
      var returnType = [GetCharactersCharacterIdPlanets200Ok];

      return this.apiClient.callApi(
        '/characters/{character_id}/planets/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCharactersCharacterIdPlanetsPlanetId operation.
     * @callback module:api/PlanetaryInteractionApi~getCharactersCharacterIdPlanetsPlanetIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetCharactersCharacterIdPlanetsPlanetIdOk} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get colony layout
     * Returns full details on the layout of a single planetary colony, including links, pins and routes. Note: Planetary information is only recalculated when the colony is viewed through the client. Information on this endpoint will not update until this criteria is met.  ---  Alternate route: &#x60;/v1/characters/{character_id}/planets/{planet_id}/&#x60;  Alternate route: &#x60;/legacy/characters/{character_id}/planets/{planet_id}/&#x60;  Alternate route: &#x60;/dev/characters/{character_id}/planets/{planet_id}/&#x60;   ---  This route is cached for up to 600 seconds
     * @param {Integer} characterId Character id of the target character
     * @param {Integer} planetId Planet id of the target planet
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {module:api/PlanetaryInteractionApi~getCharactersCharacterIdPlanetsPlanetIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetCharactersCharacterIdPlanetsPlanetIdOk}
     */
    this.getCharactersCharacterIdPlanetsPlanetId = function(characterId, planetId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'characterId' is set
      if (characterId == undefined || characterId == null) {
        throw "Missing the required parameter 'characterId' when calling getCharactersCharacterIdPlanetsPlanetId";
      }

      // verify the required parameter 'planetId' is set
      if (planetId == undefined || planetId == null) {
        throw "Missing the required parameter 'planetId' when calling getCharactersCharacterIdPlanetsPlanetId";
      }


      var pathParams = {
        'character_id': characterId,
        'planet_id': planetId
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
      var returnType = GetCharactersCharacterIdPlanetsPlanetIdOk;

      return this.apiClient.callApi(
        '/characters/{character_id}/planets/{planet_id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUniverseSchematicsSchematicId operation.
     * @callback module:api/PlanetaryInteractionApi~getUniverseSchematicsSchematicIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetUniverseSchematicsSchematicIdOk} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get schematic information
     * Get information on a planetary factory schematic  ---  Alternate route: &#x60;/v1/universe/schematics/{schematic_id}/&#x60;  Alternate route: &#x60;/legacy/universe/schematics/{schematic_id}/&#x60;  Alternate route: &#x60;/dev/universe/schematics/{schematic_id}/&#x60;   ---  This route is cached for up to 3600 seconds
     * @param {Integer} schematicId A PI schematic ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {module:api/PlanetaryInteractionApi~getUniverseSchematicsSchematicIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetUniverseSchematicsSchematicIdOk}
     */
    this.getUniverseSchematicsSchematicId = function(schematicId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'schematicId' is set
      if (schematicId == undefined || schematicId == null) {
        throw "Missing the required parameter 'schematicId' when calling getUniverseSchematicsSchematicId";
      }


      var pathParams = {
        'schematic_id': schematicId
      };
      var queryParams = {
        'datasource': opts['datasource']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = GetUniverseSchematicsSchematicIdOk;

      return this.apiClient.callApi(
        '/universe/schematics/{schematic_id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
