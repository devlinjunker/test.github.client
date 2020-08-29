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
 * The OrganizationSimple model module.
 * @module model/OrganizationSimple
 * @version 0.0.5
 */
var OrganizationSimple = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrganizationSimple</code>.
   * Organization Simple
   * @alias module:model/OrganizationSimple
   * @param avatarUrl {String} 
   * @param description {String} 
   * @param eventsUrl {String} 
   * @param hooksUrl {String} 
   * @param id {Number} 
   * @param issuesUrl {String} 
   * @param login {String} 
   * @param membersUrl {String} 
   * @param nodeId {String} 
   * @param publicMembersUrl {String} 
   * @param reposUrl {String} 
   * @param url {String} 
   */
  function OrganizationSimple(avatarUrl, description, eventsUrl, hooksUrl, id, issuesUrl, login, membersUrl, nodeId, publicMembersUrl, reposUrl, url) {
    _classCallCheck(this, OrganizationSimple);

    OrganizationSimple.initialize(this, avatarUrl, description, eventsUrl, hooksUrl, id, issuesUrl, login, membersUrl, nodeId, publicMembersUrl, reposUrl, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OrganizationSimple, null, [{
    key: "initialize",
    value: function initialize(obj, avatarUrl, description, eventsUrl, hooksUrl, id, issuesUrl, login, membersUrl, nodeId, publicMembersUrl, reposUrl, url) {
      obj['avatar_url'] = avatarUrl;
      obj['description'] = description;
      obj['events_url'] = eventsUrl;
      obj['hooks_url'] = hooksUrl;
      obj['id'] = id;
      obj['issues_url'] = issuesUrl;
      obj['login'] = login;
      obj['members_url'] = membersUrl;
      obj['node_id'] = nodeId;
      obj['public_members_url'] = publicMembersUrl;
      obj['repos_url'] = reposUrl;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>OrganizationSimple</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganizationSimple} obj Optional instance to populate.
     * @return {module:model/OrganizationSimple} The populated <code>OrganizationSimple</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrganizationSimple();

        if (data.hasOwnProperty('avatar_url')) {
          obj['avatar_url'] = _ApiClient["default"].convertToType(data['avatar_url'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('events_url')) {
          obj['events_url'] = _ApiClient["default"].convertToType(data['events_url'], 'String');
        }

        if (data.hasOwnProperty('hooks_url')) {
          obj['hooks_url'] = _ApiClient["default"].convertToType(data['hooks_url'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('issues_url')) {
          obj['issues_url'] = _ApiClient["default"].convertToType(data['issues_url'], 'String');
        }

        if (data.hasOwnProperty('login')) {
          obj['login'] = _ApiClient["default"].convertToType(data['login'], 'String');
        }

        if (data.hasOwnProperty('members_url')) {
          obj['members_url'] = _ApiClient["default"].convertToType(data['members_url'], 'String');
        }

        if (data.hasOwnProperty('node_id')) {
          obj['node_id'] = _ApiClient["default"].convertToType(data['node_id'], 'String');
        }

        if (data.hasOwnProperty('public_members_url')) {
          obj['public_members_url'] = _ApiClient["default"].convertToType(data['public_members_url'], 'String');
        }

        if (data.hasOwnProperty('repos_url')) {
          obj['repos_url'] = _ApiClient["default"].convertToType(data['repos_url'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return OrganizationSimple;
}();
/**
 * @member {String} avatar_url
 */


OrganizationSimple.prototype['avatar_url'] = undefined;
/**
 * @member {String} description
 */

OrganizationSimple.prototype['description'] = undefined;
/**
 * @member {String} events_url
 */

OrganizationSimple.prototype['events_url'] = undefined;
/**
 * @member {String} hooks_url
 */

OrganizationSimple.prototype['hooks_url'] = undefined;
/**
 * @member {Number} id
 */

OrganizationSimple.prototype['id'] = undefined;
/**
 * @member {String} issues_url
 */

OrganizationSimple.prototype['issues_url'] = undefined;
/**
 * @member {String} login
 */

OrganizationSimple.prototype['login'] = undefined;
/**
 * @member {String} members_url
 */

OrganizationSimple.prototype['members_url'] = undefined;
/**
 * @member {String} node_id
 */

OrganizationSimple.prototype['node_id'] = undefined;
/**
 * @member {String} public_members_url
 */

OrganizationSimple.prototype['public_members_url'] = undefined;
/**
 * @member {String} repos_url
 */

OrganizationSimple.prototype['repos_url'] = undefined;
/**
 * @member {String} url
 */

OrganizationSimple.prototype['url'] = undefined;
var _default = OrganizationSimple;
exports["default"] = _default;