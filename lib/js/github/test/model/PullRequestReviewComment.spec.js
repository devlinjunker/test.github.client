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
    instance = new GitHubV3RestApi.PullRequestReviewComment();
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

  describe('PullRequestReviewComment', function() {
    it('should create an instance of PullRequestReviewComment', function() {
      // uncomment below and update the code to test PullRequestReviewComment
      //var instane = new GitHubV3RestApi.PullRequestReviewComment();
      //expect(instance).to.be.a(GitHubV3RestApi.PullRequestReviewComment);
    });

    it('should have the property links (base name: "_links")', function() {
      // uncomment below and update the code to test the property links
      //var instane = new GitHubV3RestApi.PullRequestReviewComment();
      //expect(instance).to.be();
    });

    it('should have the property authorAssociation (base name: "author_association")', function() {
      // uncomment below and update the code to test the property authorAssociation
      //var instane = new GitHubV3RestApi.PullRequestReviewComment();
      //expect(instance).to.be();
    });

    it('should have the property body (base name: "body")', function() {
      // uncomment below and update the code to test the property body
      //var instane = new GitHubV3RestApi.PullRequestReviewComment();
      //expect(instance).to.be();
    });

    it('should have the property bodyHtml (base name: "body_html")', function() {
      // uncomment below and update the code to test the property bodyHtml
      //var instane = new GitHubV3RestApi.PullRequestReviewComment();
      //expect(instance).to.be();
    });

    it('should have the property bodyText (base name: "body_text")', function() {
      // uncomment below and update the code to test the property bodyText
      //var instane = new GitHubV3RestApi.PullRequestReviewComment();
      //expect(instance).to.be();
    });

    it('should have the property commitId (base name: "commit_id")', function() {
      // uncomment below and update the code to test the property commitId
      //var instane = new GitHubV3RestApi.PullRequestReviewComment();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instane = new GitHubV3RestApi.PullRequestReviewComment();
      //expect(instance).to.be();
    });

    it('should have the property diffHunk (base name: "diff_hunk")', function() {
      // uncomment below and update the code to test the property diffHunk
      //var instane = new GitHubV3RestApi.PullRequestReviewComment();
      //expect(instance).to.be();
    });

    it('should have the property htmlUrl (base name: "html_url")', function() {
      // uncomment below and update the code to test the property htmlUrl
      //var instane = new GitHubV3RestApi.PullRequestReviewComment();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new GitHubV3RestApi.PullRequestReviewComment();
      //expect(instance).to.be();
    });

    it('should have the property inReplyToId (base name: "in_reply_to_id")', function() {
      // uncomment below and update the code to test the property inReplyToId
      //var instane = new GitHubV3RestApi.PullRequestReviewComment();
      //expect(instance).to.be();
    });

    it('should have the property line (base name: "line")', function() {
      // uncomment below and update the code to test the property line
      //var instane = new GitHubV3RestApi.PullRequestReviewComment();
      //expect(instance).to.be();
    });

    it('should have the property nodeId (base name: "node_id")', function() {
      // uncomment below and update the code to test the property nodeId
      //var instane = new GitHubV3RestApi.PullRequestReviewComment();
      //expect(instance).to.be();
    });

    it('should have the property originalCommitId (base name: "original_commit_id")', function() {
      // uncomment below and update the code to test the property originalCommitId
      //var instane = new GitHubV3RestApi.PullRequestReviewComment();
      //expect(instance).to.be();
    });

    it('should have the property originalLine (base name: "original_line")', function() {
      // uncomment below and update the code to test the property originalLine
      //var instane = new GitHubV3RestApi.PullRequestReviewComment();
      //expect(instance).to.be();
    });

    it('should have the property originalPosition (base name: "original_position")', function() {
      // uncomment below and update the code to test the property originalPosition
      //var instane = new GitHubV3RestApi.PullRequestReviewComment();
      //expect(instance).to.be();
    });

    it('should have the property originalStartLine (base name: "original_start_line")', function() {
      // uncomment below and update the code to test the property originalStartLine
      //var instane = new GitHubV3RestApi.PullRequestReviewComment();
      //expect(instance).to.be();
    });

    it('should have the property path (base name: "path")', function() {
      // uncomment below and update the code to test the property path
      //var instane = new GitHubV3RestApi.PullRequestReviewComment();
      //expect(instance).to.be();
    });

    it('should have the property position (base name: "position")', function() {
      // uncomment below and update the code to test the property position
      //var instane = new GitHubV3RestApi.PullRequestReviewComment();
      //expect(instance).to.be();
    });

    it('should have the property pullRequestReviewId (base name: "pull_request_review_id")', function() {
      // uncomment below and update the code to test the property pullRequestReviewId
      //var instane = new GitHubV3RestApi.PullRequestReviewComment();
      //expect(instance).to.be();
    });

    it('should have the property pullRequestUrl (base name: "pull_request_url")', function() {
      // uncomment below and update the code to test the property pullRequestUrl
      //var instane = new GitHubV3RestApi.PullRequestReviewComment();
      //expect(instance).to.be();
    });

    it('should have the property reactions (base name: "reactions")', function() {
      // uncomment below and update the code to test the property reactions
      //var instane = new GitHubV3RestApi.PullRequestReviewComment();
      //expect(instance).to.be();
    });

    it('should have the property side (base name: "side")', function() {
      // uncomment below and update the code to test the property side
      //var instane = new GitHubV3RestApi.PullRequestReviewComment();
      //expect(instance).to.be();
    });

    it('should have the property startLine (base name: "start_line")', function() {
      // uncomment below and update the code to test the property startLine
      //var instane = new GitHubV3RestApi.PullRequestReviewComment();
      //expect(instance).to.be();
    });

    it('should have the property startSide (base name: "start_side")', function() {
      // uncomment below and update the code to test the property startSide
      //var instane = new GitHubV3RestApi.PullRequestReviewComment();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instane = new GitHubV3RestApi.PullRequestReviewComment();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instane = new GitHubV3RestApi.PullRequestReviewComment();
      //expect(instance).to.be();
    });

    it('should have the property user (base name: "user")', function() {
      // uncomment below and update the code to test the property user
      //var instane = new GitHubV3RestApi.PullRequestReviewComment();
      //expect(instance).to.be();
    });

  });

}));
