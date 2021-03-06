/**
 * GitHub v3 REST API
 * GitHub's v3 REST API.
 *
 * The version of the OpenAPI document: 0.0.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.GitHubV3RestApi);
  }
}(this, function(expect, GitHubV3RestApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new GitHubV3RestApi.InlineObject17();
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

  describe('InlineObject17', function() {
    it('should create an instance of InlineObject17', function() {
      // uncomment below and update the code to test InlineObject17
      //var instane = new GitHubV3RestApi.InlineObject17();
      //expect(instance).to.be.a(GitHubV3RestApi.InlineObject17);
    });

    it('should have the property encryptedValue (base name: "encrypted_value")', function() {
      // uncomment below and update the code to test the property encryptedValue
      //var instane = new GitHubV3RestApi.InlineObject17();
      //expect(instance).to.be();
    });

    it('should have the property keyId (base name: "key_id")', function() {
      // uncomment below and update the code to test the property keyId
      //var instane = new GitHubV3RestApi.InlineObject17();
      //expect(instance).to.be();
    });

    it('should have the property selectedRepositoryIds (base name: "selected_repository_ids")', function() {
      // uncomment below and update the code to test the property selectedRepositoryIds
      //var instane = new GitHubV3RestApi.InlineObject17();
      //expect(instance).to.be();
    });

    it('should have the property visibility (base name: "visibility")', function() {
      // uncomment below and update the code to test the property visibility
      //var instane = new GitHubV3RestApi.InlineObject17();
      //expect(instance).to.be();
    });

  });

}));
