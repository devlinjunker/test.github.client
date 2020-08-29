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
 * The BranchRestrictionPolicyOwner model module.
 * @module model/BranchRestrictionPolicyOwner
 * @version 0.0.5
 */
var BranchRestrictionPolicyOwner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BranchRestrictionPolicyOwner</code>.
   * @alias module:model/BranchRestrictionPolicyOwner
   */
  function BranchRestrictionPolicyOwner() {
    _classCallCheck(this, BranchRestrictionPolicyOwner);

    BranchRestrictionPolicyOwner.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BranchRestrictionPolicyOwner, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BranchRestrictionPolicyOwner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BranchRestrictionPolicyOwner} obj Optional instance to populate.
     * @return {module:model/BranchRestrictionPolicyOwner} The populated <code>BranchRestrictionPolicyOwner</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BranchRestrictionPolicyOwner();

        if (data.hasOwnProperty('avatar_url')) {
          obj['avatar_url'] = _ApiClient["default"].convertToType(data['avatar_url'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
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

        if (data.hasOwnProperty('hooks_url')) {
          obj['hooks_url'] = _ApiClient["default"].convertToType(data['hooks_url'], 'String');
        }

        if (data.hasOwnProperty('html_url')) {
          obj['html_url'] = _ApiClient["default"].convertToType(data['html_url'], 'String');
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

        if (data.hasOwnProperty('organizations_url')) {
          obj['organizations_url'] = _ApiClient["default"].convertToType(data['organizations_url'], 'String');
        }

        if (data.hasOwnProperty('public_members_url')) {
          obj['public_members_url'] = _ApiClient["default"].convertToType(data['public_members_url'], 'String');
        }

        if (data.hasOwnProperty('received_events_url')) {
          obj['received_events_url'] = _ApiClient["default"].convertToType(data['received_events_url'], 'String');
        }

        if (data.hasOwnProperty('repos_url')) {
          obj['repos_url'] = _ApiClient["default"].convertToType(data['repos_url'], 'String');
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

  return BranchRestrictionPolicyOwner;
}();
/**
 * @member {String} avatar_url
 */


BranchRestrictionPolicyOwner.prototype['avatar_url'] = undefined;
/**
 * @member {String} description
 */

BranchRestrictionPolicyOwner.prototype['description'] = undefined;
/**
 * @member {String} events_url
 */

BranchRestrictionPolicyOwner.prototype['events_url'] = undefined;
/**
 * @member {String} followers_url
 */

BranchRestrictionPolicyOwner.prototype['followers_url'] = undefined;
/**
 * @member {String} following_url
 */

BranchRestrictionPolicyOwner.prototype['following_url'] = undefined;
/**
 * @member {String} gists_url
 */

BranchRestrictionPolicyOwner.prototype['gists_url'] = undefined;
/**
 * @member {String} gravatar_id
 */

BranchRestrictionPolicyOwner.prototype['gravatar_id'] = undefined;
/**
 * @member {String} hooks_url
 */

BranchRestrictionPolicyOwner.prototype['hooks_url'] = undefined;
/**
 * @member {String} html_url
 */

BranchRestrictionPolicyOwner.prototype['html_url'] = undefined;
/**
 * @member {Number} id
 */

BranchRestrictionPolicyOwner.prototype['id'] = undefined;
/**
 * @member {String} issues_url
 */

BranchRestrictionPolicyOwner.prototype['issues_url'] = undefined;
/**
 * @member {String} login
 */

BranchRestrictionPolicyOwner.prototype['login'] = undefined;
/**
 * @member {String} members_url
 */

BranchRestrictionPolicyOwner.prototype['members_url'] = undefined;
/**
 * @member {String} node_id
 */

BranchRestrictionPolicyOwner.prototype['node_id'] = undefined;
/**
 * @member {String} organizations_url
 */

BranchRestrictionPolicyOwner.prototype['organizations_url'] = undefined;
/**
 * @member {String} public_members_url
 */

BranchRestrictionPolicyOwner.prototype['public_members_url'] = undefined;
/**
 * @member {String} received_events_url
 */

BranchRestrictionPolicyOwner.prototype['received_events_url'] = undefined;
/**
 * @member {String} repos_url
 */

BranchRestrictionPolicyOwner.prototype['repos_url'] = undefined;
/**
 * @member {String} starred_url
 */

BranchRestrictionPolicyOwner.prototype['starred_url'] = undefined;
/**
 * @member {String} subscriptions_url
 */

BranchRestrictionPolicyOwner.prototype['subscriptions_url'] = undefined;
/**
 * @member {String} type
 */

BranchRestrictionPolicyOwner.prototype['type'] = undefined;
/**
 * @member {String} url
 */

BranchRestrictionPolicyOwner.prototype['url'] = undefined;
var _default = BranchRestrictionPolicyOwner;
exports["default"] = _default;