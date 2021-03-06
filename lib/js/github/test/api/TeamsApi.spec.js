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
    instance = new GitHubV3RestApi.TeamsApi();
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

  describe('TeamsApi', function() {
    describe('teamsAddMemberLegacy', function() {
      it('should call teamsAddMemberLegacy successfully', function(done) {
        //uncomment below and update the code to test teamsAddMemberLegacy
        //instance.teamsAddMemberLegacy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsAddOrUpdateMembershipForUserInOrg', function() {
      it('should call teamsAddOrUpdateMembershipForUserInOrg successfully', function(done) {
        //uncomment below and update the code to test teamsAddOrUpdateMembershipForUserInOrg
        //instance.teamsAddOrUpdateMembershipForUserInOrg(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsAddOrUpdateMembershipForUserLegacy', function() {
      it('should call teamsAddOrUpdateMembershipForUserLegacy successfully', function(done) {
        //uncomment below and update the code to test teamsAddOrUpdateMembershipForUserLegacy
        //instance.teamsAddOrUpdateMembershipForUserLegacy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsAddOrUpdateProjectPermissionsInOrg', function() {
      it('should call teamsAddOrUpdateProjectPermissionsInOrg successfully', function(done) {
        //uncomment below and update the code to test teamsAddOrUpdateProjectPermissionsInOrg
        //instance.teamsAddOrUpdateProjectPermissionsInOrg(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsAddOrUpdateProjectPermissionsLegacy', function() {
      it('should call teamsAddOrUpdateProjectPermissionsLegacy successfully', function(done) {
        //uncomment below and update the code to test teamsAddOrUpdateProjectPermissionsLegacy
        //instance.teamsAddOrUpdateProjectPermissionsLegacy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsAddOrUpdateRepoPermissionsInOrg', function() {
      it('should call teamsAddOrUpdateRepoPermissionsInOrg successfully', function(done) {
        //uncomment below and update the code to test teamsAddOrUpdateRepoPermissionsInOrg
        //instance.teamsAddOrUpdateRepoPermissionsInOrg(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsAddOrUpdateRepoPermissionsLegacy', function() {
      it('should call teamsAddOrUpdateRepoPermissionsLegacy successfully', function(done) {
        //uncomment below and update the code to test teamsAddOrUpdateRepoPermissionsLegacy
        //instance.teamsAddOrUpdateRepoPermissionsLegacy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsCheckPermissionsForProjectInOrg', function() {
      it('should call teamsCheckPermissionsForProjectInOrg successfully', function(done) {
        //uncomment below and update the code to test teamsCheckPermissionsForProjectInOrg
        //instance.teamsCheckPermissionsForProjectInOrg(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsCheckPermissionsForProjectLegacy', function() {
      it('should call teamsCheckPermissionsForProjectLegacy successfully', function(done) {
        //uncomment below and update the code to test teamsCheckPermissionsForProjectLegacy
        //instance.teamsCheckPermissionsForProjectLegacy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsCheckPermissionsForRepoInOrg', function() {
      it('should call teamsCheckPermissionsForRepoInOrg successfully', function(done) {
        //uncomment below and update the code to test teamsCheckPermissionsForRepoInOrg
        //instance.teamsCheckPermissionsForRepoInOrg(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsCheckPermissionsForRepoLegacy', function() {
      it('should call teamsCheckPermissionsForRepoLegacy successfully', function(done) {
        //uncomment below and update the code to test teamsCheckPermissionsForRepoLegacy
        //instance.teamsCheckPermissionsForRepoLegacy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsCreate', function() {
      it('should call teamsCreate successfully', function(done) {
        //uncomment below and update the code to test teamsCreate
        //instance.teamsCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsCreateDiscussionCommentInOrg', function() {
      it('should call teamsCreateDiscussionCommentInOrg successfully', function(done) {
        //uncomment below and update the code to test teamsCreateDiscussionCommentInOrg
        //instance.teamsCreateDiscussionCommentInOrg(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsCreateDiscussionCommentLegacy', function() {
      it('should call teamsCreateDiscussionCommentLegacy successfully', function(done) {
        //uncomment below and update the code to test teamsCreateDiscussionCommentLegacy
        //instance.teamsCreateDiscussionCommentLegacy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsCreateDiscussionInOrg', function() {
      it('should call teamsCreateDiscussionInOrg successfully', function(done) {
        //uncomment below and update the code to test teamsCreateDiscussionInOrg
        //instance.teamsCreateDiscussionInOrg(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsCreateDiscussionLegacy', function() {
      it('should call teamsCreateDiscussionLegacy successfully', function(done) {
        //uncomment below and update the code to test teamsCreateDiscussionLegacy
        //instance.teamsCreateDiscussionLegacy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsCreateOrUpdateIdpGroupConnectionsInOrg', function() {
      it('should call teamsCreateOrUpdateIdpGroupConnectionsInOrg successfully', function(done) {
        //uncomment below and update the code to test teamsCreateOrUpdateIdpGroupConnectionsInOrg
        //instance.teamsCreateOrUpdateIdpGroupConnectionsInOrg(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsCreateOrUpdateIdpGroupConnectionsLegacy', function() {
      it('should call teamsCreateOrUpdateIdpGroupConnectionsLegacy successfully', function(done) {
        //uncomment below and update the code to test teamsCreateOrUpdateIdpGroupConnectionsLegacy
        //instance.teamsCreateOrUpdateIdpGroupConnectionsLegacy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsDeleteDiscussionCommentInOrg', function() {
      it('should call teamsDeleteDiscussionCommentInOrg successfully', function(done) {
        //uncomment below and update the code to test teamsDeleteDiscussionCommentInOrg
        //instance.teamsDeleteDiscussionCommentInOrg(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsDeleteDiscussionCommentLegacy', function() {
      it('should call teamsDeleteDiscussionCommentLegacy successfully', function(done) {
        //uncomment below and update the code to test teamsDeleteDiscussionCommentLegacy
        //instance.teamsDeleteDiscussionCommentLegacy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsDeleteDiscussionInOrg', function() {
      it('should call teamsDeleteDiscussionInOrg successfully', function(done) {
        //uncomment below and update the code to test teamsDeleteDiscussionInOrg
        //instance.teamsDeleteDiscussionInOrg(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsDeleteDiscussionLegacy', function() {
      it('should call teamsDeleteDiscussionLegacy successfully', function(done) {
        //uncomment below and update the code to test teamsDeleteDiscussionLegacy
        //instance.teamsDeleteDiscussionLegacy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsDeleteInOrg', function() {
      it('should call teamsDeleteInOrg successfully', function(done) {
        //uncomment below and update the code to test teamsDeleteInOrg
        //instance.teamsDeleteInOrg(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsDeleteLegacy', function() {
      it('should call teamsDeleteLegacy successfully', function(done) {
        //uncomment below and update the code to test teamsDeleteLegacy
        //instance.teamsDeleteLegacy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsGetByName', function() {
      it('should call teamsGetByName successfully', function(done) {
        //uncomment below and update the code to test teamsGetByName
        //instance.teamsGetByName(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsGetDiscussionCommentInOrg', function() {
      it('should call teamsGetDiscussionCommentInOrg successfully', function(done) {
        //uncomment below and update the code to test teamsGetDiscussionCommentInOrg
        //instance.teamsGetDiscussionCommentInOrg(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsGetDiscussionCommentLegacy', function() {
      it('should call teamsGetDiscussionCommentLegacy successfully', function(done) {
        //uncomment below and update the code to test teamsGetDiscussionCommentLegacy
        //instance.teamsGetDiscussionCommentLegacy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsGetDiscussionInOrg', function() {
      it('should call teamsGetDiscussionInOrg successfully', function(done) {
        //uncomment below and update the code to test teamsGetDiscussionInOrg
        //instance.teamsGetDiscussionInOrg(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsGetDiscussionLegacy', function() {
      it('should call teamsGetDiscussionLegacy successfully', function(done) {
        //uncomment below and update the code to test teamsGetDiscussionLegacy
        //instance.teamsGetDiscussionLegacy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsGetLegacy', function() {
      it('should call teamsGetLegacy successfully', function(done) {
        //uncomment below and update the code to test teamsGetLegacy
        //instance.teamsGetLegacy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsGetMemberLegacy', function() {
      it('should call teamsGetMemberLegacy successfully', function(done) {
        //uncomment below and update the code to test teamsGetMemberLegacy
        //instance.teamsGetMemberLegacy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsGetMembershipForUserInOrg', function() {
      it('should call teamsGetMembershipForUserInOrg successfully', function(done) {
        //uncomment below and update the code to test teamsGetMembershipForUserInOrg
        //instance.teamsGetMembershipForUserInOrg(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsGetMembershipForUserLegacy', function() {
      it('should call teamsGetMembershipForUserLegacy successfully', function(done) {
        //uncomment below and update the code to test teamsGetMembershipForUserLegacy
        //instance.teamsGetMembershipForUserLegacy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsList', function() {
      it('should call teamsList successfully', function(done) {
        //uncomment below and update the code to test teamsList
        //instance.teamsList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsListChildInOrg', function() {
      it('should call teamsListChildInOrg successfully', function(done) {
        //uncomment below and update the code to test teamsListChildInOrg
        //instance.teamsListChildInOrg(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsListChildLegacy', function() {
      it('should call teamsListChildLegacy successfully', function(done) {
        //uncomment below and update the code to test teamsListChildLegacy
        //instance.teamsListChildLegacy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsListDiscussionCommentsInOrg', function() {
      it('should call teamsListDiscussionCommentsInOrg successfully', function(done) {
        //uncomment below and update the code to test teamsListDiscussionCommentsInOrg
        //instance.teamsListDiscussionCommentsInOrg(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsListDiscussionCommentsLegacy', function() {
      it('should call teamsListDiscussionCommentsLegacy successfully', function(done) {
        //uncomment below and update the code to test teamsListDiscussionCommentsLegacy
        //instance.teamsListDiscussionCommentsLegacy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsListDiscussionsInOrg', function() {
      it('should call teamsListDiscussionsInOrg successfully', function(done) {
        //uncomment below and update the code to test teamsListDiscussionsInOrg
        //instance.teamsListDiscussionsInOrg(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsListDiscussionsLegacy', function() {
      it('should call teamsListDiscussionsLegacy successfully', function(done) {
        //uncomment below and update the code to test teamsListDiscussionsLegacy
        //instance.teamsListDiscussionsLegacy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsListForAuthenticatedUser', function() {
      it('should call teamsListForAuthenticatedUser successfully', function(done) {
        //uncomment below and update the code to test teamsListForAuthenticatedUser
        //instance.teamsListForAuthenticatedUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsListIdpGroupsForLegacy', function() {
      it('should call teamsListIdpGroupsForLegacy successfully', function(done) {
        //uncomment below and update the code to test teamsListIdpGroupsForLegacy
        //instance.teamsListIdpGroupsForLegacy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsListIdpGroupsForOrg', function() {
      it('should call teamsListIdpGroupsForOrg successfully', function(done) {
        //uncomment below and update the code to test teamsListIdpGroupsForOrg
        //instance.teamsListIdpGroupsForOrg(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsListIdpGroupsInOrg', function() {
      it('should call teamsListIdpGroupsInOrg successfully', function(done) {
        //uncomment below and update the code to test teamsListIdpGroupsInOrg
        //instance.teamsListIdpGroupsInOrg(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsListMembersInOrg', function() {
      it('should call teamsListMembersInOrg successfully', function(done) {
        //uncomment below and update the code to test teamsListMembersInOrg
        //instance.teamsListMembersInOrg(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsListMembersLegacy', function() {
      it('should call teamsListMembersLegacy successfully', function(done) {
        //uncomment below and update the code to test teamsListMembersLegacy
        //instance.teamsListMembersLegacy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsListPendingInvitationsInOrg', function() {
      it('should call teamsListPendingInvitationsInOrg successfully', function(done) {
        //uncomment below and update the code to test teamsListPendingInvitationsInOrg
        //instance.teamsListPendingInvitationsInOrg(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsListPendingInvitationsLegacy', function() {
      it('should call teamsListPendingInvitationsLegacy successfully', function(done) {
        //uncomment below and update the code to test teamsListPendingInvitationsLegacy
        //instance.teamsListPendingInvitationsLegacy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsListProjectsInOrg', function() {
      it('should call teamsListProjectsInOrg successfully', function(done) {
        //uncomment below and update the code to test teamsListProjectsInOrg
        //instance.teamsListProjectsInOrg(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsListProjectsLegacy', function() {
      it('should call teamsListProjectsLegacy successfully', function(done) {
        //uncomment below and update the code to test teamsListProjectsLegacy
        //instance.teamsListProjectsLegacy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsListReposInOrg', function() {
      it('should call teamsListReposInOrg successfully', function(done) {
        //uncomment below and update the code to test teamsListReposInOrg
        //instance.teamsListReposInOrg(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsListReposLegacy', function() {
      it('should call teamsListReposLegacy successfully', function(done) {
        //uncomment below and update the code to test teamsListReposLegacy
        //instance.teamsListReposLegacy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsRemoveMemberLegacy', function() {
      it('should call teamsRemoveMemberLegacy successfully', function(done) {
        //uncomment below and update the code to test teamsRemoveMemberLegacy
        //instance.teamsRemoveMemberLegacy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsRemoveMembershipForUserInOrg', function() {
      it('should call teamsRemoveMembershipForUserInOrg successfully', function(done) {
        //uncomment below and update the code to test teamsRemoveMembershipForUserInOrg
        //instance.teamsRemoveMembershipForUserInOrg(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsRemoveMembershipForUserLegacy', function() {
      it('should call teamsRemoveMembershipForUserLegacy successfully', function(done) {
        //uncomment below and update the code to test teamsRemoveMembershipForUserLegacy
        //instance.teamsRemoveMembershipForUserLegacy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsRemoveProjectInOrg', function() {
      it('should call teamsRemoveProjectInOrg successfully', function(done) {
        //uncomment below and update the code to test teamsRemoveProjectInOrg
        //instance.teamsRemoveProjectInOrg(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsRemoveProjectLegacy', function() {
      it('should call teamsRemoveProjectLegacy successfully', function(done) {
        //uncomment below and update the code to test teamsRemoveProjectLegacy
        //instance.teamsRemoveProjectLegacy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsRemoveRepoInOrg', function() {
      it('should call teamsRemoveRepoInOrg successfully', function(done) {
        //uncomment below and update the code to test teamsRemoveRepoInOrg
        //instance.teamsRemoveRepoInOrg(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsRemoveRepoLegacy', function() {
      it('should call teamsRemoveRepoLegacy successfully', function(done) {
        //uncomment below and update the code to test teamsRemoveRepoLegacy
        //instance.teamsRemoveRepoLegacy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsUpdateDiscussionCommentInOrg', function() {
      it('should call teamsUpdateDiscussionCommentInOrg successfully', function(done) {
        //uncomment below and update the code to test teamsUpdateDiscussionCommentInOrg
        //instance.teamsUpdateDiscussionCommentInOrg(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsUpdateDiscussionCommentLegacy', function() {
      it('should call teamsUpdateDiscussionCommentLegacy successfully', function(done) {
        //uncomment below and update the code to test teamsUpdateDiscussionCommentLegacy
        //instance.teamsUpdateDiscussionCommentLegacy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsUpdateDiscussionInOrg', function() {
      it('should call teamsUpdateDiscussionInOrg successfully', function(done) {
        //uncomment below and update the code to test teamsUpdateDiscussionInOrg
        //instance.teamsUpdateDiscussionInOrg(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsUpdateDiscussionLegacy', function() {
      it('should call teamsUpdateDiscussionLegacy successfully', function(done) {
        //uncomment below and update the code to test teamsUpdateDiscussionLegacy
        //instance.teamsUpdateDiscussionLegacy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsUpdateInOrg', function() {
      it('should call teamsUpdateInOrg successfully', function(done) {
        //uncomment below and update the code to test teamsUpdateInOrg
        //instance.teamsUpdateInOrg(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsUpdateLegacy', function() {
      it('should call teamsUpdateLegacy successfully', function(done) {
        //uncomment below and update the code to test teamsUpdateLegacy
        //instance.teamsUpdateLegacy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
