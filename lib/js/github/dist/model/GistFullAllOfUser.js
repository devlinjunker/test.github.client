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
 * The GistFullAllOfUser model module.
 * @module model/GistFullAllOfUser
 * @version 0.0.5
 */
var GistFullAllOfUser = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GistFullAllOfUser</code>.
   * @alias module:model/GistFullAllOfUser
   */
  function GistFullAllOfUser() {
    _classCallCheck(this, GistFullAllOfUser);

    GistFullAllOfUser.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GistFullAllOfUser, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GistFullAllOfUser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GistFullAllOfUser} obj Optional instance to populate.
     * @return {module:model/GistFullAllOfUser} The populated <code>GistFullAllOfUser</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GistFullAllOfUser();

        if (data.hasOwnProperty('avatar_url')) {
          obj['avatar_url'] = _ApiClient["default"].convertToType(data['avatar_url'], 'String');
        }

        if (data.hasOwnProperty('events_url')) {
          obj['events_url'] = _ApiClient["default"].convertToType(data['events_url'], 'String');
        }

        if (data.hasOwnProperty('followers_url')) {
          obj['followers_url'] = _ApiClient["default"].convertToType(data['followers_url'], 'String');
        }

        if (data.hasOwnProperty('following_url')) {
          obj['following_url'] = _ApiClient["default"].convertToType(data['following_url'], 'String');
        }

        if (data.hasOwnProperty('gists_url')) {
          obj['gists_url'] = _ApiClient["default"].convertToType(data['gists_url'], 'String');
        }

        if (data.hasOwnProperty('gravatar_id')) {
          obj['gravatar_id'] = _ApiClient["default"].convertToType(data['gravatar_id'], 'String');
        }

        if (data.hasOwnProperty('html_url')) {
          obj['html_url'] = _ApiClient["default"].convertToType(data['html_url'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('login')) {
          obj['login'] = _ApiClient["default"].convertToType(data['login'], 'String');
        }

        if (data.hasOwnProperty('node_id')) {
          obj['node_id'] = _ApiClient["default"].convertToType(data['node_id'], 'String');
        }

        if (data.hasOwnProperty('organizations_url')) {
          obj['organizations_url'] = _ApiClient["default"].convertToType(data['organizations_url'], 'String');
        }

        if (data.hasOwnProperty('received_events_url')) {
          obj['received_events_url'] = _ApiClient["default"].convertToType(data['received_events_url'], 'String');
        }

        if (data.hasOwnProperty('repos_url')) {
          obj['repos_url'] = _ApiClient["default"].convertToType(data['repos_url'], 'String');
        }

        if (data.hasOwnProperty('site_admin')) {
          obj['site_admin'] = _ApiClient["default"].convertToType(data['site_admin'], 'Boolean');
        }

        if (data.hasOwnProperty('starred_url')) {
          obj['starred_url'] = _ApiClient["default"].convertToType(data['starred_url'], 'String');
        }

        if (data.hasOwnProperty('subscriptions_url')) {
          obj['subscriptions_url'] = _ApiClient["default"].convertToType(data['subscriptions_url'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GistFullAllOfUser;
}();
/**
 * @member {String} avatar_url
 */


GistFullAllOfUser.prototype['avatar_url'] = undefined;
/**
 * @member {String} events_url
 */

GistFullAllOfUser.prototype['events_url'] = undefined;
/**
 * @member {String} followers_url
 */

GistFullAllOfUser.prototype['followers_url'] = undefined;
/**
 * @member {String} following_url
 */

GistFullAllOfUser.prototype['following_url'] = undefined;
/**
 * @member {String} gists_url
 */

GistFullAllOfUser.prototype['gists_url'] = undefined;
/**
 * @member {String} gravatar_id
 */

GistFullAllOfUser.prototype['gravatar_id'] = undefined;
/**
 * @member {String} html_url
 */

GistFullAllOfUser.prototype['html_url'] = undefined;
/**
 * @member {Number} id
 */

GistFullAllOfUser.prototype['id'] = undefined;
/**
 * @member {String} login
 */

GistFullAllOfUser.prototype['login'] = undefined;
/**
 * @member {String} node_id
 */

GistFullAllOfUser.prototype['node_id'] = undefined;
/**
 * @member {String} organizations_url
 */

GistFullAllOfUser.prototype['organizations_url'] = undefined;
/**
 * @member {String} received_events_url
 */

GistFullAllOfUser.prototype['received_events_url'] = undefined;
/**
 * @member {String} repos_url
 */

GistFullAllOfUser.prototype['repos_url'] = undefined;
/**
 * @member {Boolean} site_admin
 */

GistFullAllOfUser.prototype['site_admin'] = undefined;
/**
 * @member {String} starred_url
 */

GistFullAllOfUser.prototype['starred_url'] = undefined;
/**
 * @member {String} subscriptions_url
 */

GistFullAllOfUser.prototype['subscriptions_url'] = undefined;
/**
 * @member {String} type
 */

GistFullAllOfUser.prototype['type'] = undefined;
/**
 * @member {String} url
 */

GistFullAllOfUser.prototype['url'] = undefined;
var _default = GistFullAllOfUser;
exports["default"] = _default;