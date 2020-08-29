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
    instance = new GitHubV3RestApi.CodeScanningAlert();
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

  describe('CodeScanningAlert', function() {
    it('should create an instance of CodeScanningAlert', function() {
      // uncomment below and update the code to test CodeScanningAlert
      //var instane = new GitHubV3RestApi.CodeScanningAlert();
      //expect(instance).to.be.a(GitHubV3RestApi.CodeScanningAlert);
    });

    it('should have the property closedAt (base name: "closed_at")', function() {
      // uncomment below and update the code to test the property closedAt
      //var instane = new GitHubV3RestApi.CodeScanningAlert();
      //expect(instance).to.be();
    });

    it('should have the property closedBy (base name: "closed_by")', function() {
      // uncomment below and update the code to test the property closedBy
      //var instane = new GitHubV3RestApi.CodeScanningAlert();
      //expect(instance).to.be();
    });

    it('should have the property closedReason (base name: "closed_reason")', function() {
      // uncomment below and update the code to test the property closedReason
      //var instane = new GitHubV3RestApi.CodeScanningAlert();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instane = new GitHubV3RestApi.CodeScanningAlert();
      //expect(instance).to.be();
    });

    it('should have the property htmlUrl (base name: "html_url")', function() {
      // uncomment below and update the code to test the property htmlUrl
      //var instane = new GitHubV3RestApi.CodeScanningAlert();
      //expect(instance).to.be();
    });

    it('should have the property _number (base name: "number")', function() {
      // uncomment below and update the code to test the property _number
      //var instane = new GitHubV3RestApi.CodeScanningAlert();
      //expect(instance).to.be();
    });

    it('should have the property open (base name: "open")', function() {
      // uncomment below and update the code to test the property open
      //var instane = new GitHubV3RestApi.CodeScanningAlert();
      //expect(instance).to.be();
    });

    it('should have the property ruleDescription (base name: "rule_description")', function() {
      // uncomment below and update the code to test the property ruleDescription
      //var instane = new GitHubV3RestApi.CodeScanningAlert();
      //expect(instance).to.be();
    });

    it('should have the property ruleId (base name: "rule_id")', function() {
      // uncomment below and update the code to test the property ruleId
      //var instane = new GitHubV3RestApi.CodeScanningAlert();
      //expect(instance).to.be();
    });

    it('should have the property ruleSeverity (base name: "rule_severity")', function() {
      // uncomment below and update the code to test the property ruleSeverity
      //var instane = new GitHubV3RestApi.CodeScanningAlert();
      //expect(instance).to.be();
    });

    it('should have the property tool (base name: "tool")', function() {
      // uncomment below and update the code to test the property tool
      //var instane = new GitHubV3RestApi.CodeScanningAlert();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instane = new GitHubV3RestApi.CodeScanningAlert();
      //expect(instance).to.be();
    });

  });

}));