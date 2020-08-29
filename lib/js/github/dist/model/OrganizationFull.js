"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _OrganizationFullPlan = _interopRequireDefault(require("./OrganizationFullPlan"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The OrganizationFull model module.
 * @module model/OrganizationFull
 * @version 0.0.5
 */
var OrganizationFull = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrganizationFull</code>.
   * Organization Full
   * @alias module:model/OrganizationFull
   * @param avatarUrl {String} 
   * @param createdAt {Date} 
   * @param description {String} 
   * @param eventsUrl {String} 
   * @param followers {Number} 
   * @param following {Number} 
   * @param hasOrganizationProjects {Boolean} 
   * @param hasRepositoryProjects {Boolean} 
   * @param hooksUrl {String} 
   * @param htmlUrl {String} 
   * @param id {Number} 
   * @param issuesUrl {String} 
   * @param login {String} 
   * @param membersUrl {String} 
   * @param nodeId {String} 
   * @param publicGists {Number} 
   * @param publicMembersUrl {String} 
   * @param publicRepos {Number} 
   * @param reposUrl {String} 
   * @param type {String} 
   * @param updatedAt {Date} 
   * @param url {String} 
   */
  function OrganizationFull(avatarUrl, createdAt, description, eventsUrl, followers, following, hasOrganizationProjects, hasRepositoryProjects, hooksUrl, htmlUrl, id, issuesUrl, login, membersUrl, nodeId, publicGists, publicMembersUrl, publicRepos, reposUrl, type, updatedAt, url) {
    _classCallCheck(this, OrganizationFull);

    OrganizationFull.initialize(this, avatarUrl, createdAt, description, eventsUrl, followers, following, hasOrganizationProjects, hasRepositoryProjects, hooksUrl, htmlUrl, id, issuesUrl, login, membersUrl, nodeId, publicGists, publicMembersUrl, publicRepos, reposUrl, type, updatedAt, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OrganizationFull, null, [{
    key: "initialize",
    value: function initialize(obj, avatarUrl, createdAt, description, eventsUrl, followers, following, hasOrganizationProjects, hasRepositoryProjects, hooksUrl, htmlUrl, id, issuesUrl, login, membersUrl, nodeId, publicGists, publicMembersUrl, publicRepos, reposUrl, type, updatedAt, url) {
      obj['avatar_url'] = avatarUrl;
      obj['created_at'] = createdAt;
      obj['description'] = description;
      obj['events_url'] = eventsUrl;
      obj['followers'] = followers;
      obj['following'] = following;
      obj['has_organization_projects'] = hasOrganizationProjects;
      obj['has_repository_projects'] = hasRepositoryProjects;
      obj['hooks_url'] = hooksUrl;
      obj['html_url'] = htmlUrl;
      obj['id'] = id;
      obj['issues_url'] = issuesUrl;
      obj['login'] = login;
      obj['members_url'] = membersUrl;
      obj['node_id'] = nodeId;
      obj['public_gists'] = publicGists;
      obj['public_members_url'] = publicMembersUrl;
      obj['public_repos'] = publicRepos;
      obj['repos_url'] = reposUrl;
      obj['type'] = type;
      obj['updated_at'] = updatedAt;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>OrganizationFull</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganizationFull} obj Optional instance to populate.
     * @return {module:model/OrganizationFull} The populated <code>OrganizationFull</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrganizationFull();

        if (data.hasOwnProperty('avatar_url')) {
          obj['avatar_url'] = _ApiClient["default"].convertToType(data['avatar_url'], 'String');
        }

        if (data.hasOwnProperty('billing_email')) {
          obj['billing_email'] = _ApiClient["default"].convertToType(data['billing_email'], 'String');
        }

        if (data.hasOwnProperty('blog')) {
          obj['blog'] = _ApiClient["default"].convertToType(data['blog'], 'String');
        }

        if (data.hasOwnProperty('collaborators')) {
          obj['collaborators'] = _ApiClient["default"].convertToType(data['collaborators'], 'Number');
        }

        if (data.hasOwnProperty('company')) {
          obj['company'] = _ApiClient["default"].convertToType(data['company'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('default_repository_permission')) {
          obj['default_repository_permission'] = _ApiClient["default"].convertToType(data['default_repository_permission'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('disk_usage')) {
          obj['disk_usage'] = _ApiClient["default"].convertToType(data['disk_usage'], 'Number');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('events_url')) {
          obj['events_url'] = _ApiClient["default"].convertToType(data['events_url'], 'String');
        }

        if (data.hasOwnProperty('followers')) {
          obj['followers'] = _ApiClient["default"].convertToType(data['followers'], 'Number');
        }

        if (data.hasOwnProperty('following')) {
          obj['following'] = _ApiClient["default"].convertToType(data['following'], 'Number');
        }

        if (data.hasOwnProperty('has_organization_projects')) {
          obj['has_organization_projects'] = _ApiClient["default"].convertToType(data['has_organization_projects'], 'Boolean');
        }

        if (data.hasOwnProperty('has_repository_projects')) {
          obj['has_repository_projects'] = _ApiClient["default"].convertToType(data['has_repository_projects'], 'Boolean');
        }

        if (data.hasOwnProperty('hooks_url')) {
          obj['hooks_url'] = _ApiClient["default"].convertToType(data['hooks_url'], 'String');
        }

        if (data.hasOwnProperty('html_url')) {
          obj['html_url'] = _ApiClient["default"].convertToType(data['html_url'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('is_verified')) {
          obj['is_verified'] = _ApiClient["default"].convertToType(data['is_verified'], 'Boolean');
        }

        if (data.hasOwnProperty('issues_url')) {
          obj['issues_url'] = _ApiClient["default"].convertToType(data['issues_url'], 'String');
        }

        if (data.hasOwnProperty('location')) {
          obj['location'] = _ApiClient["default"].convertToType(data['location'], 'String');
        }

        if (data.hasOwnProperty('login')) {
          obj['login'] = _ApiClient["default"].convertToType(data['login'], 'String');
        }

        if (data.hasOwnProperty('members_allowed_repository_creation_type')) {
          obj['members_allowed_repository_creation_type'] = _ApiClient["default"].convertToType(data['members_allowed_repository_creation_type'], 'String');
        }

        if (data.hasOwnProperty('members_can_create_internal_repositories')) {
          obj['members_can_create_internal_repositories'] = _ApiClient["default"].convertToType(data['members_can_create_internal_repositories'], 'Boolean');
        }

        if (data.hasOwnProperty('members_can_create_private_repositories')) {
          obj['members_can_create_private_repositories'] = _ApiClient["default"].convertToType(data['members_can_create_private_repositories'], 'Boolean');
        }

        if (data.hasOwnProperty('members_can_create_public_repositories')) {
          obj['members_can_create_public_repositories'] = _ApiClient["default"].convertToType(data['members_can_create_public_repositories'], 'Boolean');
        }

        if (data.hasOwnProperty('members_can_create_repositories')) {
          obj['members_can_create_repositories'] = _ApiClient["default"].convertToType(data['members_can_create_repositories'], 'Boolean');
        }

        if (data.hasOwnProperty('members_url')) {
          obj['members_url'] = _ApiClient["default"].convertToType(data['members_url'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('node_id')) {
          obj['node_id'] = _ApiClient["default"].convertToType(data['node_id'], 'String');
        }

        if (data.hasOwnProperty('owned_private_repos')) {
          obj['owned_private_repos'] = _ApiClient["default"].convertToType(data['owned_private_repos'], 'Number');
        }

        if (data.hasOwnProperty('plan')) {
          obj['plan'] = _OrganizationFullPlan["default"].constructFromObject(data['plan']);
        }

        if (data.hasOwnProperty('private_gists')) {
          obj['private_gists'] = _ApiClient["default"].convertToType(data['private_gists'], 'Number');
        }

        if (data.hasOwnProperty('public_gists')) {
          obj['public_gists'] = _ApiClient["default"].convertToType(data['public_gists'], 'Number');
        }

        if (data.hasOwnProperty('public_members_url')) {
          obj['public_members_url'] = _ApiClient["default"].convertToType(data['public_members_url'], 'String');
        }

        if (data.hasOwnProperty('public_repos')) {
          obj['public_repos'] = _ApiClient["default"].convertToType(data['public_repos'], 'Number');
        }

        if (data.hasOwnProperty('repos_url')) {
          obj['repos_url'] = _ApiClient["default"].convertToType(data['repos_url'], 'String');
        }

        if (data.hasOwnProperty('total_private_repos')) {
          obj['total_private_repos'] = _ApiClient["default"].convertToType(data['total_private_repos'], 'Number');
        }

        if (data.hasOwnProperty('twitter_username')) {
          obj['twitter_username'] = _ApiClient["default"].convertToType(data['twitter_username'], 'String');
        }

        if (data.hasOwnProperty('two_factor_requirement_enabled')) {
          obj['two_factor_requirement_enabled'] = _ApiClient["default"].convertToType(data['two_factor_requirement_enabled'], 'Boolean');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'Date');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return OrganizationFull;
}();
/**
 * @member {String} avatar_url
 */


OrganizationFull.prototype['avatar_url'] = undefined;
/**
 * @member {String} billing_email
 */

OrganizationFull.prototype['billing_email'] = undefined;
/**
 * @member {String} blog
 */

OrganizationFull.prototype['blog'] = undefined;
/**
 * @member {Number} collaborators
 */

OrganizationFull.prototype['collaborators'] = undefined;
/**
 * @member {String} company
 */

OrganizationFull.prototype['company'] = undefined;
/**
 * @member {Date} created_at
 */

OrganizationFull.prototype['created_at'] = undefined;
/**
 * @member {String} default_repository_permission
 */

OrganizationFull.prototype['default_repository_permission'] = undefined;
/**
 * @member {String} description
 */

OrganizationFull.prototype['description'] = undefined;
/**
 * @member {Number} disk_usage
 */

OrganizationFull.prototype['disk_usage'] = undefined;
/**
 * @member {String} email
 */

OrganizationFull.prototype['email'] = undefined;
/**
 * @member {String} events_url
 */

OrganizationFull.prototype['events_url'] = undefined;
/**
 * @member {Number} followers
 */

OrganizationFull.prototype['followers'] = undefined;
/**
 * @member {Number} following
 */

OrganizationFull.prototype['following'] = undefined;
/**
 * @member {Boolean} has_organization_projects
 */

OrganizationFull.prototype['has_organization_projects'] = undefined;
/**
 * @member {Boolean} has_repository_projects
 */

OrganizationFull.prototype['has_repository_projects'] = undefined;
/**
 * @member {String} hooks_url
 */

OrganizationFull.prototype['hooks_url'] = undefined;
/**
 * @member {String} html_url
 */

OrganizationFull.prototype['html_url'] = undefined;
/**
 * @member {Number} id
 */

OrganizationFull.prototype['id'] = undefined;
/**
 * @member {Boolean} is_verified
 */

OrganizationFull.prototype['is_verified'] = undefined;
/**
 * @member {String} issues_url
 */

OrganizationFull.prototype['issues_url'] = undefined;
/**
 * @member {String} location
 */

OrganizationFull.prototype['location'] = undefined;
/**
 * @member {String} login
 */

OrganizationFull.prototype['login'] = undefined;
/**
 * @member {String} members_allowed_repository_creation_type
 */

OrganizationFull.prototype['members_allowed_repository_creation_type'] = undefined;
/**
 * @member {Boolean} members_can_create_internal_repositories
 */

OrganizationFull.prototype['members_can_create_internal_repositories'] = undefined;
/**
 * @member {Boolean} members_can_create_private_repositories
 */

OrganizationFull.prototype['members_can_create_private_repositories'] = undefined;
/**
 * @member {Boolean} members_can_create_public_repositories
 */

OrganizationFull.prototype['members_can_create_public_repositories'] = undefined;
/**
 * @member {Boolean} members_can_create_repositories
 */

OrganizationFull.prototype['members_can_create_repositories'] = undefined;
/**
 * @member {String} members_url
 */

OrganizationFull.prototype['members_url'] = undefined;
/**
 * @member {String} name
 */

OrganizationFull.prototype['name'] = undefined;
/**
 * @member {String} node_id
 */

OrganizationFull.prototype['node_id'] = undefined;
/**
 * @member {Number} owned_private_repos
 */

OrganizationFull.prototype['owned_private_repos'] = undefined;
/**
 * @member {module:model/OrganizationFullPlan} plan
 */

OrganizationFull.prototype['plan'] = undefined;
/**
 * @member {Number} private_gists
 */

OrganizationFull.prototype['private_gists'] = undefined;
/**
 * @member {Number} public_gists
 */

OrganizationFull.prototype['public_gists'] = undefined;
/**
 * @member {String} public_members_url
 */

OrganizationFull.prototype['public_members_url'] = undefined;
/**
 * @member {Number} public_repos
 */

OrganizationFull.prototype['public_repos'] = undefined;
/**
 * @member {String} repos_url
 */

OrganizationFull.prototype['repos_url'] = undefined;
/**
 * @member {Number} total_private_repos
 */

OrganizationFull.prototype['total_private_repos'] = undefined;
/**
 * @member {String} twitter_username
 */

OrganizationFull.prototype['twitter_username'] = undefined;
/**
 * @member {Boolean} two_factor_requirement_enabled
 */

OrganizationFull.prototype['two_factor_requirement_enabled'] = undefined;
/**
 * @member {String} type
 */

OrganizationFull.prototype['type'] = undefined;
/**
 * @member {Date} updated_at
 */

OrganizationFull.prototype['updated_at'] = undefined;
/**
 * @member {String} url
 */

OrganizationFull.prototype['url'] = undefined;
var _default = OrganizationFull;
exports["default"] = _default;