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
    instance = new GitHubV3RestApi.IssueSearchResultItem();
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

  describe('IssueSearchResultItem', function() {
    it('should create an instance of IssueSearchResultItem', function() {
      // uncomment below and update the code to test IssueSearchResultItem
      //var instane = new GitHubV3RestApi.IssueSearchResultItem();
      //expect(instance).to.be.a(GitHubV3RestApi.IssueSearchResultItem);
    });

    it('should have the property activeLockReason (base name: "active_lock_reason")', function() {
      // uncomment below and update the code to test the property activeLockReason
      //var instane = new GitHubV3RestApi.IssueSearchResultItem();
      //expect(instance).to.be();
    });

    it('should have the property assignee (base name: "assignee")', function() {
      // uncomment below and update the code to test the property assignee
      //var instane = new GitHubV3RestApi.IssueSearchResultItem();
      //expect(instance).to.be();
    });

    it('should have the property assignees (base name: "assignees")', function() {
      // uncomment below and update the code to test the property assignees
      //var instane = new GitHubV3RestApi.IssueSearchResultItem();
      //expect(instance).to.be();
    });

    it('should have the property authorAssociation (base name: "author_association")', function() {
      // uncomment below and update the code to test the property authorAssociation
      //var instane = new GitHubV3RestApi.IssueSearchResultItem();
      //expect(instance).to.be();
    });

    it('should have the property body (base name: "body")', function() {
      // uncomment below and update the code to test the property body
      //var instane = new GitHubV3RestApi.IssueSearchResultItem();
      //expect(instance).to.be();
    });

    it('should have the property bodyHtml (base name: "body_html")', function() {
      // uncomment below and update the code to test the property bodyHtml
      //var instane = new GitHubV3RestApi.IssueSearchResultItem();
      //expect(instance).to.be();
    });

    it('should have the property bodyText (base name: "body_text")', function() {
      // uncomment below and update the code to test the property bodyText
      //var instane = new GitHubV3RestApi.IssueSearchResultItem();
      //expect(instance).to.be();
    });

    it('should have the property closedAt (base name: "closed_at")', function() {
      // uncomment below and update the code to test the property closedAt
      //var instane = new GitHubV3RestApi.IssueSearchResultItem();
      //expect(instance).to.be();
    });

    it('should have the property comments (base name: "comments")', function() {
      // uncomment below and update the code to test the property comments
      //var instane = new GitHubV3RestApi.IssueSearchResultItem();
      //expect(instance).to.be();
    });

    it('should have the property commentsUrl (base name: "comments_url")', function() {
      // uncomment below and update the code to test the property commentsUrl
      //var instane = new GitHubV3RestApi.IssueSearchResultItem();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instane = new GitHubV3RestApi.IssueSearchResultItem();
      //expect(instance).to.be();
    });

    it('should have the property draft (base name: "draft")', function() {
      // uncomment below and update the code to test the property draft
      //var instane = new GitHubV3RestApi.IssueSearchResultItem();
      //expect(instance).to.be();
    });

    it('should have the property eventsUrl (base name: "events_url")', function() {
      // uncomment below and update the code to test the property eventsUrl
      //var instane = new GitHubV3RestApi.IssueSearchResultItem();
      //expect(instance).to.be();
    });

    it('should have the property htmlUrl (base name: "html_url")', function() {
      // uncomment below and update the code to test the property htmlUrl
      //var instane = new GitHubV3RestApi.IssueSearchResultItem();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new GitHubV3RestApi.IssueSearchResultItem();
      //expect(instance).to.be();
    });

    it('should have the property labels (base name: "labels")', function() {
      // uncomment below and update the code to test the property labels
      //var instane = new GitHubV3RestApi.IssueSearchResultItem();
      //expect(instance).to.be();
    });

    it('should have the property labelsUrl (base name: "labels_url")', function() {
      // uncomment below and update the code to test the property labelsUrl
      //var instane = new GitHubV3RestApi.IssueSearchResultItem();
      //expect(instance).to.be();
    });

    it('should have the property locked (base name: "locked")', function() {
      // uncomment below and update the code to test the property locked
      //var instane = new GitHubV3RestApi.IssueSearchResultItem();
      //expect(instance).to.be();
    });

    it('should have the property milestone (base name: "milestone")', function() {
      // uncomment below and update the code to test the property milestone
      //var instane = new GitHubV3RestApi.IssueSearchResultItem();
      //expect(instance).to.be();
    });

    it('should have the property nodeId (base name: "node_id")', function() {
      // uncomment below and update the code to test the property nodeId
      //var instane = new GitHubV3RestApi.IssueSearchResultItem();
      //expect(instance).to.be();
    });

    it('should have the property _number (base name: "number")', function() {
      // uncomment below and update the code to test the property _number
      //var instane = new GitHubV3RestApi.IssueSearchResultItem();
      //expect(instance).to.be();
    });

    it('should have the property performedViaGithubApp (base name: "performed_via_github_app")', function() {
      // uncomment below and update the code to test the property performedViaGithubApp
      //var instane = new GitHubV3RestApi.IssueSearchResultItem();
      //expect(instance).to.be();
    });

    it('should have the property pullRequest (base name: "pull_request")', function() {
      // uncomment below and update the code to test the property pullRequest
      //var instane = new GitHubV3RestApi.IssueSearchResultItem();
      //expect(instance).to.be();
    });

    it('should have the property repository (base name: "repository")', function() {
      // uncomment below and update the code to test the property repository
      //var instane = new GitHubV3RestApi.IssueSearchResultItem();
      //expect(instance).to.be();
    });

    it('should have the property repositoryUrl (base name: "repository_url")', function() {
      // uncomment below and update the code to test the property repositoryUrl
      //var instane = new GitHubV3RestApi.IssueSearchResultItem();
      //expect(instance).to.be();
    });

    it('should have the property score (base name: "score")', function() {
      // uncomment below and update the code to test the property score
      //var instane = new GitHubV3RestApi.IssueSearchResultItem();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instane = new GitHubV3RestApi.IssueSearchResultItem();
      //expect(instance).to.be();
    });

    it('should have the property textMatches (base name: "text_matches")', function() {
      // uncomment below and update the code to test the property textMatches
      //var instane = new GitHubV3RestApi.IssueSearchResultItem();
      //expect(instance).to.be();
    });

    it('should have the property timelineUrl (base name: "timeline_url")', function() {
      // uncomment below and update the code to test the property timelineUrl
      //var instane = new GitHubV3RestApi.IssueSearchResultItem();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instane = new GitHubV3RestApi.IssueSearchResultItem();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instane = new GitHubV3RestApi.IssueSearchResultItem();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instane = new GitHubV3RestApi.IssueSearchResultItem();
      //expect(instance).to.be();
    });

    it('should have the property user (base name: "user")', function() {
      // uncomment below and update the code to test the property user
      //var instane = new GitHubV3RestApi.IssueSearchResultItem();
      //expect(instance).to.be();
    });

  });

}));
