"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TeamSimple = _interopRequireDefault(require("./TeamSimple"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Team model module.
 * @module model/Team
 * @version 0.0.5
 */
var Team = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Team</code>.
   * Groups of organization members that gives permissions on specified repositories.
   * @alias module:model/Team
   * @param description {String} 
   * @param htmlUrl {String} 
   * @param id {Number} 
   * @param membersUrl {String} 
   * @param name {String} 
   * @param nodeId {String} 
   * @param permission {String} 
   * @param repositoriesUrl {String} 
   * @param slug {String} 
   * @param url {String} 
   */
  function Team(description, htmlUrl, id, membersUrl, name, nodeId, permission, repositoriesUrl, slug, url) {
    _classCallCheck(this, Team);

    Team.initialize(this, description, htmlUrl, id, membersUrl, name, nodeId, permission, repositoriesUrl, slug, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Team, null, [{
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
     * Constructs a <code>Team</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Team} obj Optional instance to populate.
     * @return {module:model/Team} The populated <code>Team</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Team();

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('html_url')) {
          obj['html_url'] = _ApiClient["default"].convertToType(data['html_url'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
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

        if (data.hasOwnProperty('parent')) {
          obj['parent'] = _ApiClient["default"].convertToType(data['parent'], _TeamSimple["default"]);
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

  return Team;
}();
/**
 * @member {String} description
 */


Team.prototype['description'] = undefined;
/**
 * @member {String} html_url
 */

Team.prototype['html_url'] = undefined;
/**
 * @member {Number} id
 */

Team.prototype['id'] = undefined;
/**
 * @member {String} members_url
 */

Team.prototype['members_url'] = undefined;
/**
 * @member {String} name
 */

Team.prototype['name'] = undefined;
/**
 * @member {String} node_id
 */

Team.prototype['node_id'] = undefined;
/**
 * @member {module:model/TeamSimple} parent
 */

Team.prototype['parent'] = undefined;
/**
 * @member {String} permission
 */

Team.prototype['permission'] = undefined;
/**
 * @member {String} privacy
 */

Team.prototype['privacy'] = undefined;
/**
 * @member {String} repositories_url
 */

Team.prototype['repositories_url'] = undefined;
/**
 * @member {String} slug
 */

Team.prototype['slug'] = undefined;
/**
 * @member {String} url
 */

Team.prototype['url'] = undefined;
var _default = Team;
exports["default"] = _default;