"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SimpleUser = _interopRequireDefault(require("./SimpleUser"));

var _Team = _interopRequireDefault(require("./Team"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions model module.
 * @module model/ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions
 * @version 0.0.5
 */
var ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions</code>.
   * @alias module:model/ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions
   * @param teams {Array.<module:model/Team>} 
   * @param teamsUrl {String} 
   * @param url {String} 
   * @param users {Array.<module:model/SimpleUser>} 
   * @param usersUrl {String} 
   */
  function ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions(teams, teamsUrl, url, users, usersUrl) {
    _classCallCheck(this, ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions);

    ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions.initialize(this, teams, teamsUrl, url, users, usersUrl);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions, null, [{
    key: "initialize",
    value: function initialize(obj, teams, teamsUrl, url, users, usersUrl) {
      obj['teams'] = teams;
      obj['teams_url'] = teamsUrl;
      obj['url'] = url;
      obj['users'] = users;
      obj['users_url'] = usersUrl;
    }
    /**
     * Constructs a <code>ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions} obj Optional instance to populate.
     * @return {module:model/ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions} The populated <code>ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions();

        if (data.hasOwnProperty('teams')) {
          obj['teams'] = _ApiClient["default"].convertToType(data['teams'], [_Team["default"]]);
        }

        if (data.hasOwnProperty('teams_url')) {
          obj['teams_url'] = _ApiClient["default"].convertToType(data['teams_url'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('users')) {
          obj['users'] = _ApiClient["default"].convertToType(data['users'], [_SimpleUser["default"]]);
        }

        if (data.hasOwnProperty('users_url')) {
          obj['users_url'] = _ApiClient["default"].convertToType(data['users_url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions;
}();
/**
 * @member {Array.<module:model/Team>} teams
 */


ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions.prototype['teams'] = undefined;
/**
 * @member {String} teams_url
 */

ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions.prototype['teams_url'] = undefined;
/**
 * @member {String} url
 */

ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions.prototype['url'] = undefined;
/**
 * @member {Array.<module:model/SimpleUser>} users
 */

ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions.prototype['users'] = undefined;
/**
 * @member {String} users_url
 */

ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions.prototype['users_url'] = undefined;
var _default = ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions;
exports["default"] = _default;