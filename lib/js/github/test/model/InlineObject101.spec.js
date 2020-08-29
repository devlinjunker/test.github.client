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
    instance = new GitHubV3RestApi.InlineObject101();
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

  describe('InlineObject101', function() {
    it('should create an instance of InlineObject101', function() {
      // uncomment below and update the code to test InlineObject101
      //var instane = new GitHubV3RestApi.InlineObject101();
      //expect(instance).to.be.a(GitHubV3RestApi.InlineObject101);
    });

    it('should have the property base (base name: "base")', function() {
      // uncomment below and update the code to test the property base
      //var instane = new GitHubV3RestApi.InlineObject101();
      //expect(instance).to.be();
    });

    it('should have the property body (base name: "body")', function() {
      // uncomment below and update the code to test the property body
      //var instane = new GitHubV3RestApi.InlineObject101();
      //expect(instance).to.be();
    });

    it('should have the property draft (base name: "draft")', function() {
      // uncomment below and update the code to test the property draft
      //var instane = new GitHubV3RestApi.InlineObject101();
      //expect(instance).to.be();
    });

    it('should have the property head (base name: "head")', function() {
      // uncomment below and update the code to test the property head
      //var instane = new GitHubV3RestApi.InlineObject101();
      //expect(instance).to.be();
    });

    it('should have the property issue (base name: "issue")', function() {
      // uncomment below and update the code to test the property issue
      //var instane = new GitHubV3RestApi.InlineObject101();
      //expect(instance).to.be();
    });

    it('should have the property maintainerCanModify (base name: "maintainer_can_modify")', function() {
      // uncomment below and update the code to test the property maintainerCanModify
      //var instane = new GitHubV3RestApi.InlineObject101();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instane = new GitHubV3RestApi.InlineObject101();
      //expect(instance).to.be();
    });

  });

}));