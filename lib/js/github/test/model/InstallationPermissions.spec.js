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
    instance = new GitHubV3RestApi.InstallationPermissions();
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

  describe('InstallationPermissions', function() {
    it('should create an instance of InstallationPermissions', function() {
      // uncomment below and update the code to test InstallationPermissions
      //var instane = new GitHubV3RestApi.InstallationPermissions();
      //expect(instance).to.be.a(GitHubV3RestApi.InstallationPermissions);
    });

    it('should have the property checks (base name: "checks")', function() {
      // uncomment below and update the code to test the property checks
      //var instane = new GitHubV3RestApi.InstallationPermissions();
      //expect(instance).to.be();
    });

    it('should have the property contents (base name: "contents")', function() {
      // uncomment below and update the code to test the property contents
      //var instane = new GitHubV3RestApi.InstallationPermissions();
      //expect(instance).to.be();
    });

    it('should have the property deployments (base name: "deployments")', function() {
      // uncomment below and update the code to test the property deployments
      //var instane = new GitHubV3RestApi.InstallationPermissions();
      //expect(instance).to.be();
    });

    it('should have the property issues (base name: "issues")', function() {
      // uncomment below and update the code to test the property issues
      //var instane = new GitHubV3RestApi.InstallationPermissions();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instane = new GitHubV3RestApi.InstallationPermissions();
      //expect(instance).to.be();
    });

    it('should have the property organizationAdministration (base name: "organization_administration")', function() {
      // uncomment below and update the code to test the property organizationAdministration
      //var instane = new GitHubV3RestApi.InstallationPermissions();
      //expect(instance).to.be();
    });

    it('should have the property pullRequests (base name: "pull_requests")', function() {
      // uncomment below and update the code to test the property pullRequests
      //var instane = new GitHubV3RestApi.InstallationPermissions();
      //expect(instance).to.be();
    });

    it('should have the property statuses (base name: "statuses")', function() {
      // uncomment below and update the code to test the property statuses
      //var instane = new GitHubV3RestApi.InstallationPermissions();
      //expect(instance).to.be();
    });

  });

}));
