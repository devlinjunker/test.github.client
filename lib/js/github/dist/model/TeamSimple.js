"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TeamSimple model module.
 * @module model/TeamSimple
 * @version 0.0.5
 */
var TeamSimple = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TeamSimple</code>.
   * Groups of organization members that gives permissions on specified repositories.
   * @alias module:model/TeamSimple
   * @param description {String} Description of the team
   * @param htmlUrl {String} 
   * @param id {Number} Unique identifier of the team
   * @param membersUrl {String} 
   * @param name {String} Name of the team
   * @param nodeId {String} 
   * @param permission {String} Permission that the team will have for its repositories
   * @param repositoriesUrl {String} 
   * @param slug {String} 
   * @param url {String} URL for the team
   */
  function TeamSimple(description, htmlUrl, id, membersUrl, name, nodeId, permission, repositoriesUrl, slug, url) {
    _classCallCheck(this, TeamSimple);

    TeamSimple.initialize(this, description, htmlUrl, id, membersUrl, name, nodeId, permission, repositoriesUrl, slug, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TeamSimple, null, [{
    key: "initialize",
    value: function initialize(obj, description, htmlUrl, id, membersUrl, name, nodeId, permission, repositoriesUrl, slug, url) {
      obj['description'] = description;
      obj['html_url'] = htmlUrl;
      obj['id'] = id;
      obj['members_url'] = membersUrl;
      obj['name'] = name;
      obj['node_id'] = nodeId;
      obj['permission'] = permission;
      obj['repositories_url'] = repositoriesUrl;
      obj['slug'] = slug;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>TeamSimple</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TeamSimple} obj Optional instance to populate.
     * @return {module:model/TeamSimple} The populated <code>TeamSimple</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TeamSimple();

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

        if (data.hasOwnProperty('members_url')) {
          obj['members_url'] = _ApiClient["default"].convertToType(data['members_url'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('node_id')) {
          obj['node_id'] = _ApiClient["default"].convertToType(data['node_id'], 'String');
        }

        if (data.hasOwnProperty('permission')) {
          obj['permission'] = _ApiClient["default"].convertToType(data['permission'], 'String');
        }

        if (data.hasOwnProperty('privacy')) {
          obj['privacy'] = _ApiClient["default"].convertToType(data['privacy'], 'String');
        }

        if (data.hasOwnProperty('repositories_url')) {
          obj['repositories_url'] = _ApiClient["default"].convertToType(data['repositories_url'], 'String');
        }

        if (data.hasOwnProperty('slug')) {
          obj['slug'] = _ApiClient["default"].convertToType(data['slug'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TeamSimple;
}();
/**
 * Description of the team
 * @member {String} description
 */


TeamSimple.prototype['description'] = undefined;
/**
 * @member {String} html_url
 */

TeamSimple.prototype['html_url'] = undefined;
/**
 * Unique identifier of the team
 * @member {Number} id
 */

TeamSimple.prototype['id'] = undefined;
/**
 * Distinguished Name (DN) that team maps to within LDAP environment
 * @member {String} ldap_dn
 */

TeamSimple.prototype['ldap_dn'] = undefined;
/**
 * @member {String} members_url
 */

TeamSimple.prototype['members_url'] = undefined;
/**
 * Name of the team
 * @member {String} name
 */

TeamSimple.prototype['name'] = undefined;
/**
 * @member {String} node_id
 */

TeamSimple.prototype['node_id'] = undefined;
/**
 * Permission that the team will have for its repositories
 * @member {String} permission
 */

TeamSimple.prototype['permission'] = undefined;
/**
 * The level of privacy this team should have
 * @member {String} privacy
 */

TeamSimple.prototype['privacy'] = undefined;
/**
 * @member {String} repositories_url
 */

TeamSimple.prototype['repositories_url'] = undefined;
/**
 * @member {String} slug
 */

TeamSimple.prototype['slug'] = undefined;
/**
 * URL for the team
 * @member {String} url
 */

TeamSimple.prototype['url'] = undefined;
var _default = TeamSimple;
exports["default"] = _default;