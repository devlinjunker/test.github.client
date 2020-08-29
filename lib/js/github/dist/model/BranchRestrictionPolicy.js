"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BranchRestrictionPolicyApps = _interopRequireDefault(require("./BranchRestrictionPolicyApps"));

var _BranchRestrictionPolicyTeams = _interopRequireDefault(require("./BranchRestrictionPolicyTeams"));

var _BranchRestrictionPolicyUsers = _interopRequireDefault(require("./BranchRestrictionPolicyUsers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The BranchRestrictionPolicy model module.
 * @module model/BranchRestrictionPolicy
 * @version 0.0.5
 */
var BranchRestrictionPolicy = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BranchRestrictionPolicy</code>.
   * Branch Restriction Policy
   * @alias module:model/BranchRestrictionPolicy
   * @param apps {Array.<module:model/BranchRestrictionPolicyApps>} 
   * @param appsUrl {String} 
   * @param teams {Array.<module:model/BranchRestrictionPolicyTeams>} 
   * @param teamsUrl {String} 
   * @param url {String} 
   * @param users {Array.<module:model/BranchRestrictionPolicyUsers>} 
   * @param usersUrl {String} 
   */
  function BranchRestrictionPolicy(apps, appsUrl, teams, teamsUrl, url, users, usersUrl) {
    _classCallCheck(this, BranchRestrictionPolicy);

    BranchRestrictionPolicy.initialize(this, apps, appsUrl, teams, teamsUrl, url, users, usersUrl);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BranchRestrictionPolicy, null, [{
    key: "initialize",
    value: function initialize(obj, apps, appsUrl, teams, teamsUrl, url, users, usersUrl) {
      obj['apps'] = apps;
      obj['apps_url'] = appsUrl;
      obj['teams'] = teams;
      obj['teams_url'] = teamsUrl;
      obj['url'] = url;
      obj['users'] = users;
      obj['users_url'] = usersUrl;
    }
    /**
     * Constructs a <code>BranchRestrictionPolicy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BranchRestrictionPolicy} obj Optional instance to populate.
     * @return {module:model/BranchRestrictionPolicy} The populated <code>BranchRestrictionPolicy</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BranchRestrictionPolicy();

        if (data.hasOwnProperty('apps')) {
          obj['apps'] = _ApiClient["default"].convertToType(data['apps'], [_BranchRestrictionPolicyApps["default"]]);
        }

        if (data.hasOwnProperty('apps_url')) {
          obj['apps_url'] = _ApiClient["default"].convertToType(data['apps_url'], 'String');
        }

        if (data.hasOwnProperty('teams')) {
          obj['teams'] = _ApiClient["default"].convertToType(data['teams'], [_BranchRestrictionPolicyTeams["default"]]);
        }

        if (data.hasOwnProperty('teams_url')) {
          obj['teams_url'] = _ApiClient["default"].convertToType(data['teams_url'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('users')) {
          obj['users'] = _ApiClient["default"].convertToType(data['users'], [_BranchRestrictionPolicyUsers["default"]]);
        }

        if (data.hasOwnProperty('users_url')) {
          obj['users_url'] = _ApiClient["default"].convertToType(data['users_url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return BranchRestrictionPolicy;
}();
/**
 * @member {Array.<module:model/BranchRestrictionPolicyApps>} apps
 */


BranchRestrictionPolicy.prototype['apps'] = undefined;
/**
 * @member {String} apps_url
 */

BranchRestrictionPolicy.prototype['apps_url'] = undefined;
/**
 * @member {Array.<module:model/BranchRestrictionPolicyTeams>} teams
 */

BranchRestrictionPolicy.prototype['teams'] = undefined;
/**
 * @member {String} teams_url
 */

BranchRestrictionPolicy.prototype['teams_url'] = undefined;
/**
 * @member {String} url
 */

BranchRestrictionPolicy.prototype['url'] = undefined;
/**
 * @member {Array.<module:model/BranchRestrictionPolicyUsers>} users
 */

BranchRestrictionPolicy.prototype['users'] = undefined;
/**
 * @member {String} users_url
 */

BranchRestrictionPolicy.prototype['users_url'] = undefined;
var _default = BranchRestrictionPolicy;
exports["default"] = _default;