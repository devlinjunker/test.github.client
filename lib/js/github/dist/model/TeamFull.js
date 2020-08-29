"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Organization = _interopRequireDefault(require("./Organization"));

var _TeamSimple = _interopRequireDefault(require("./TeamSimple"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TeamFull model module.
 * @module model/TeamFull
 * @version 0.0.5
 */
var TeamFull = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TeamFull</code>.
   * Groups of organization members that gives permissions on specified repositories.
   * @alias module:model/TeamFull
   * @param createdAt {Date} 
   * @param description {String} 
   * @param htmlUrl {String} 
   * @param id {Number} Unique identifier of the team
   * @param membersCount {Number} 
   * @param membersUrl {String} 
   * @param name {String} Name of the team
   * @param nodeId {String} 
   * @param organization {module:model/Organization} 
   * @param permission {String} Permission that the team will have for its repositories
   * @param reposCount {Number} 
   * @param repositoriesUrl {String} 
   * @param slug {String} 
   * @param updatedAt {Date} 
   * @param url {String} URL for the team
   */
  function TeamFull(createdAt, description, htmlUrl, id, membersCount, membersUrl, name, nodeId, organization, permission, reposCount, repositoriesUrl, slug, updatedAt, url) {
    _classCallCheck(this, TeamFull);

    TeamFull.initialize(this, createdAt, description, htmlUrl, id, membersCount, membersUrl, name, nodeId, organization, permission, reposCount, repositoriesUrl, slug, updatedAt, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TeamFull, null, [{
    key: "initialize",
    value: function initialize(obj, createdAt, description, htmlUrl, id, membersCount, membersUrl, name, nodeId, organization, permission, reposCount, repositoriesUrl, slug, updatedAt, url) {
      obj['created_at'] = createdAt;
      obj['description'] = description;
      obj['html_url'] = htmlUrl;
      obj['id'] = id;
      obj['members_count'] = membersCount;
      obj['members_url'] = membersUrl;
      obj['name'] = name;
      obj['node_id'] = nodeId;
      obj['organization'] = organization;
      obj['permission'] = permission;
      obj['repos_count'] = reposCount;
      obj['repositories_url'] = repositoriesUrl;
      obj['slug'] = slug;
      obj['updated_at'] = updatedAt;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>TeamFull</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TeamFull} obj Optional instance to populate.
     * @return {module:model/TeamFull} The populated <code>TeamFull</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TeamFull();

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('html_url')) {
          obj['html_url'] = _ApiClient["default"].convertToType(data['html_url'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('ldap_dn')) {
          obj['ldap_dn'] = _ApiClient["default"].convertToType(data['ldap_dn'], 'String');
        }

        if (data.hasOwnProperty('members_count')) {
          obj['members_count'] = _ApiClient["default"].convertToType(data['members_count'], 'Number');
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

        if (data.hasOwnProperty('organization')) {
          obj['organization'] = _Organization["default"].constructFromObject(data['organization']);
        }

        if (data.hasOwnProperty('parent')) {
          obj['parent'] = _ApiClient["default"].convertToType(data['parent'], _TeamSimple["default"]);
        }

        if (data.hasOwnProperty('permission')) {
          obj['permission'] = _ApiClient["default"].convertToType(data['permission'], 'String');
        }

        if (data.hasOwnProperty('privacy')) {
          obj['privacy'] = _ApiClient["default"].convertToType(data['privacy'], 'String');
        }

        if (data.hasOwnProperty('repos_count')) {
          obj['repos_count'] = _ApiClient["default"].convertToType(data['repos_count'], 'Number');
        }

        if (data.hasOwnProperty('repositories_url')) {
          obj['repositories_url'] = _ApiClient["default"].convertToType(data['repositories_url'], 'String');
        }

        if (data.hasOwnProperty('slug')) {
          obj['slug'] = _ApiClient["default"].convertToType(data['slug'], 'String');
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

  return TeamFull;
}();
/**
 * @member {Date} created_at
 */


TeamFull.prototype['created_at'] = undefined;
/**
 * @member {String} description
 */

TeamFull.prototype['description'] = undefined;
/**
 * @member {String} html_url
 */

TeamFull.prototype['html_url'] = undefined;
/**
 * Unique identifier of the team
 * @member {Number} id
 */

TeamFull.prototype['id'] = undefined;
/**
 * Distinguished Name (DN) that team maps to within LDAP environment
 * @member {String} ldap_dn
 */

TeamFull.prototype['ldap_dn'] = undefined;
/**
 * @member {Number} members_count
 */

TeamFull.prototype['members_count'] = undefined;
/**
 * @member {String} members_url
 */

TeamFull.prototype['members_url'] = undefined;
/**
 * Name of the team
 * @member {String} name
 */

TeamFull.prototype['name'] = undefined;
/**
 * @member {String} node_id
 */

TeamFull.prototype['node_id'] = undefined;
/**
 * @member {module:model/Organization} organization
 */

TeamFull.prototype['organization'] = undefined;
/**
 * @member {module:model/TeamSimple} parent
 */

TeamFull.prototype['parent'] = undefined;
/**
 * Permission that the team will have for its repositories
 * @member {String} permission
 */

TeamFull.prototype['permission'] = undefined;
/**
 * The level of privacy this team should have
 * @member {module:model/TeamFull.PrivacyEnum} privacy
 */

TeamFull.prototype['privacy'] = undefined;
/**
 * @member {Number} repos_count
 */

TeamFull.prototype['repos_count'] = undefined;
/**
 * @member {String} repositories_url
 */

TeamFull.prototype['repositories_url'] = undefined;
/**
 * @member {String} slug
 */

TeamFull.prototype['slug'] = undefined;
/**
 * @member {Date} updated_at
 */

TeamFull.prototype['updated_at'] = undefined;
/**
 * URL for the team
 * @member {String} url
 */

TeamFull.prototype['url'] = undefined;
/**
 * Allowed values for the <code>privacy</code> property.
 * @enum {String}
 * @readonly
 */

TeamFull['PrivacyEnum'] = {
  /**
   * value: "closed"
   * @const
   */
  "closed": "closed",

  /**
   * value: "secret"
   * @const
   */
  "secret": "secret"
};
var _default = TeamFull;
exports["default"] = _default;