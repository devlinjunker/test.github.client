"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _OrganizationPlan = _interopRequireDefault(require("./OrganizationPlan"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Organization model module.
 * @module model/Organization
 * @version 0.0.5
 */
var Organization = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Organization</code>.
   * GitHub account for managing multiple users, teams, and repositories
   * @alias module:model/Organization
   * @param avatarUrl {String} 
   * @param createdAt {Date} 
   * @param description {String} 
   * @param eventsUrl {String} 
   * @param followers {Number} 
   * @param following {Number} 
   * @param hasOrganizationProjects {Boolean} Specifies if organization projects are enabled for this org
   * @param hasRepositoryProjects {Boolean} Specifies if repository projects are enabled for repositories that belong to this org
   * @param hooksUrl {String} 
   * @param htmlUrl {String} 
   * @param id {Number} 
   * @param issuesUrl {String} 
   * @param login {String} Unique login name of the organization
   * @param membersUrl {String} 
   * @param nodeId {String} 
   * @param publicGists {Number} 
   * @param publicMembersUrl {String} 
   * @param publicRepos {Number} 
   * @param reposUrl {String} 
   * @param type {String} 
   * @param updatedAt {Date} 
   * @param url {String} URL for the organization
   */
  function Organization(avatarUrl, createdAt, description, eventsUrl, followers, following, hasOrganizationProjects, hasRepositoryProjects, hooksUrl, htmlUrl, id, issuesUrl, login, membersUrl, nodeId, publicGists, publicMembersUrl, publicRepos, reposUrl, type, updatedAt, url) {
    _classCallCheck(this, Organization);

    Organization.initialize(this, avatarUrl, createdAt, description, eventsUrl, followers, following, hasOrganizationProjects, hasRepositoryProjects, hooksUrl, htmlUrl, id, issuesUrl, login, membersUrl, nodeId, publicGists, publicMembersUrl, publicRepos, reposUrl, type, updatedAt, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Organization, null, [{
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
     * Constructs a <code>Organization</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Organization} obj Optional instance to populate.
     * @return {module:model/Organization} The populated <code>Organization</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Organization();

        if (data.hasOwnProperty('avatar_url')) {
          obj['avatar_url'] = _ApiClient["default"].convertToType(data['avatar_url'], 'String');
        }

        if (data.hasOwnProperty('blog')) {
          obj['blog'] = _ApiClient["default"].convertToType(data['blog'], 'String');
        }

        if (data.hasOwnProperty('company')) {
          obj['company'] = _ApiClient["default"].convertToType(data['company'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
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

        if (data.hasOwnProperty('members_url')) {
          obj['members_url'] = _ApiClient["default"].convertToType(data['members_url'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('node_id')) {
          obj['node_id'] = _ApiClient["default"].convertToType(data['node_id'], 'String');
        }

        if (data.hasOwnProperty('plan')) {
          obj['plan'] = _OrganizationPlan["default"].constructFromObject(data['plan']);
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

  return Organization;
}();
/**
 * @member {String} avatar_url
 */


Organization.prototype['avatar_url'] = undefined;
/**
 * Display blog url for the organization
 * @member {String} blog
 */

Organization.prototype['blog'] = undefined;
/**
 * Display company name for the organization
 * @member {String} company
 */

Organization.prototype['company'] = undefined;
/**
 * @member {Date} created_at
 */

Organization.prototype['created_at'] = undefined;
/**
 * @member {String} description
 */

Organization.prototype['description'] = undefined;
/**
 * Display email for the organization
 * @member {String} email
 */

Organization.prototype['email'] = undefined;
/**
 * @member {String} events_url
 */

Organization.prototype['events_url'] = undefined;
/**
 * @member {Number} followers
 */

Organization.prototype['followers'] = undefined;
/**
 * @member {Number} following
 */

Organization.prototype['following'] = undefined;
/**
 * Specifies if organization projects are enabled for this org
 * @member {Boolean} has_organization_projects
 */

Organization.prototype['has_organization_projects'] = undefined;
/**
 * Specifies if repository projects are enabled for repositories that belong to this org
 * @member {Boolean} has_repository_projects
 */

Organization.prototype['has_repository_projects'] = undefined;
/**
 * @member {String} hooks_url
 */

Organization.prototype['hooks_url'] = undefined;
/**
 * @member {String} html_url
 */

Organization.prototype['html_url'] = undefined;
/**
 * @member {Number} id
 */

Organization.prototype['id'] = undefined;
/**
 * @member {Boolean} is_verified
 */

Organization.prototype['is_verified'] = undefined;
/**
 * @member {String} issues_url
 */

Organization.prototype['issues_url'] = undefined;
/**
 * Display location for the organization
 * @member {String} location
 */

Organization.prototype['location'] = undefined;
/**
 * Unique login name of the organization
 * @member {String} login
 */

Organization.prototype['login'] = undefined;
/**
 * @member {String} members_url
 */

Organization.prototype['members_url'] = undefined;
/**
 * Display name for the organization
 * @member {String} name
 */

Organization.prototype['name'] = undefined;
/**
 * @member {String} node_id
 */

Organization.prototype['node_id'] = undefined;
/**
 * @member {module:model/OrganizationPlan} plan
 */

Organization.prototype['plan'] = undefined;
/**
 * @member {Number} public_gists
 */

Organization.prototype['public_gists'] = undefined;
/**
 * @member {String} public_members_url
 */

Organization.prototype['public_members_url'] = undefined;
/**
 * @member {Number} public_repos
 */

Organization.prototype['public_repos'] = undefined;
/**
 * @member {String} repos_url
 */

Organization.prototype['repos_url'] = undefined;
/**
 * @member {String} type
 */

Organization.prototype['type'] = undefined;
/**
 * @member {Date} updated_at
 */

Organization.prototype['updated_at'] = undefined;
/**
 * URL for the organization
 * @member {String} url
 */

Organization.prototype['url'] = undefined;
var _default = Organization;
exports["default"] = _default;