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
    instance = new GitHubV3RestApi.BranchWithProtection();
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

  describe('BranchWithProtection', function() {
    it('should create an instance of BranchWithProtection', function() {
      // uncomment below and update the code to test BranchWithProtection
      //var instane = new GitHubV3RestApi.BranchWithProtection();
      //expect(instance).to.be.a(GitHubV3RestApi.BranchWithProtection);
    });

    it('should have the property links (base name: "_links")', function() {
      // uncomment below and update the code to test the property links
      //var instane = new GitHubV3RestApi.BranchWithProtection();
      //expect(instance).to.be();
    });

    it('should have the property commit (base name: "commit")', function() {
      // uncomment below and update the code to test the property commit
      //var instane = new GitHubV3RestApi.BranchWithProtection();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new GitHubV3RestApi.BranchWithProtection();
      //expect(instance).to.be();
    });

    it('should have the property pattern (base name: "pattern")', function() {
      // uncomment below and update the code to test the property pattern
      //var instane = new GitHubV3RestApi.BranchWithProtection();
      //expect(instance).to.be();
    });

    it('should have the property _protected (base name: "protected")', function() {
      // uncomment below and update the code to test the property _protected
      //var instane = new GitHubV3RestApi.BranchWithProtection();
      //expect(instance).to.be();
    });

    it('should have the property protection (base name: "protection")', function() {
      // uncomment below and update the code to test the property protection
      //var instane = new GitHubV3RestApi.BranchWithProtection();
      //expect(instance).to.be();
    });

    it('should have the property protectionUrl (base name: "protection_url")', function() {
      // uncomment below and update the code to test the property protectionUrl
      //var instane = new GitHubV3RestApi.BranchWithProtection();
      //expect(instance).to.be();
    });

    it('should have the property requiredApprovingReviewCount (base name: "required_approving_review_count")', function() {
      // uncomment below and update the code to test the property requiredApprovingReviewCount
      //var instane = new GitHubV3RestApi.BranchWithProtection();
      //expect(instance).to.be();
    });

  });

}));
