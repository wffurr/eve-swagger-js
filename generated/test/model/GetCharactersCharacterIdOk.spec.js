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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.EveSwaggerInterface);
  }
}(this, function(expect, EveSwaggerInterface) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new EveSwaggerInterface.GetCharactersCharacterIdOk();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('GetCharactersCharacterIdOk', function() {
    it('should create an instance of GetCharactersCharacterIdOk', function() {
      // uncomment below and update the code to test GetCharactersCharacterIdOk
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdOk();
      //expect(instance).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdOk);
    });

    it('should have the property allianceId (base name: "alliance_id")', function() {
      // uncomment below and update the code to test the property allianceId
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdOk();
      //expect(instance).to.be();
    });

    it('should have the property ancestryId (base name: "ancestry_id")', function() {
      // uncomment below and update the code to test the property ancestryId
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdOk();
      //expect(instance).to.be();
    });

    it('should have the property birthday (base name: "birthday")', function() {
      // uncomment below and update the code to test the property birthday
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdOk();
      //expect(instance).to.be();
    });

    it('should have the property bloodlineId (base name: "bloodline_id")', function() {
      // uncomment below and update the code to test the property bloodlineId
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdOk();
      //expect(instance).to.be();
    });

    it('should have the property corporationId (base name: "corporation_id")', function() {
      // uncomment below and update the code to test the property corporationId
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdOk();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdOk();
      //expect(instance).to.be();
    });

    it('should have the property gender (base name: "gender")', function() {
      // uncomment below and update the code to test the property gender
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdOk();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdOk();
      //expect(instance).to.be();
    });

    it('should have the property raceId (base name: "race_id")', function() {
      // uncomment below and update the code to test the property raceId
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdOk();
      //expect(instance).to.be();
    });

    it('should have the property securityStatus (base name: "security_status")', function() {
      // uncomment below and update the code to test the property securityStatus
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdOk();
      //expect(instance).to.be();
    });

  });

}));
