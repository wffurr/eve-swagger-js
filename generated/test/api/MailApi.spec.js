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
    instance = new EveSwaggerInterface.MailApi();
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

  describe('MailApi', function() {
    describe('deleteCharactersCharacterIdMailLabelsLabelId', function() {
      it('should call deleteCharactersCharacterIdMailLabelsLabelId successfully', function(done) {
        //uncomment below and update the code to test deleteCharactersCharacterIdMailLabelsLabelId
        //instance.deleteCharactersCharacterIdMailLabelsLabelId(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCharactersCharacterIdMailMailId', function() {
      it('should call deleteCharactersCharacterIdMailMailId successfully', function(done) {
        //uncomment below and update the code to test deleteCharactersCharacterIdMailMailId
        //instance.deleteCharactersCharacterIdMailMailId(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCharactersCharacterIdMail', function() {
      it('should call getCharactersCharacterIdMail successfully', function(done) {
        //uncomment below and update the code to test getCharactersCharacterIdMail
        //instance.getCharactersCharacterIdMail(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCharactersCharacterIdMailLabels', function() {
      it('should call getCharactersCharacterIdMailLabels successfully', function(done) {
        //uncomment below and update the code to test getCharactersCharacterIdMailLabels
        //instance.getCharactersCharacterIdMailLabels(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCharactersCharacterIdMailLists', function() {
      it('should call getCharactersCharacterIdMailLists successfully', function(done) {
        //uncomment below and update the code to test getCharactersCharacterIdMailLists
        //instance.getCharactersCharacterIdMailLists(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCharactersCharacterIdMailMailId', function() {
      it('should call getCharactersCharacterIdMailMailId successfully', function(done) {
        //uncomment below and update the code to test getCharactersCharacterIdMailMailId
        //instance.getCharactersCharacterIdMailMailId(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postCharactersCharacterIdMail', function() {
      it('should call postCharactersCharacterIdMail successfully', function(done) {
        //uncomment below and update the code to test postCharactersCharacterIdMail
        //instance.postCharactersCharacterIdMail(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postCharactersCharacterIdMailLabels', function() {
      it('should call postCharactersCharacterIdMailLabels successfully', function(done) {
        //uncomment below and update the code to test postCharactersCharacterIdMailLabels
        //instance.postCharactersCharacterIdMailLabels(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putCharactersCharacterIdMailMailId', function() {
      it('should call putCharactersCharacterIdMailMailId successfully', function(done) {
        //uncomment below and update the code to test putCharactersCharacterIdMailMailId
        //instance.putCharactersCharacterIdMailMailId(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
