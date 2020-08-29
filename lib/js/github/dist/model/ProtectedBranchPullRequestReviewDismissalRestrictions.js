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
 * The ProtectedBranchPullRequestReviewDismissalRestrictions model module.
 * @module model/ProtectedBranchPullRequestReviewDismissalRestrictions
 * @version 0.0.5
 */
var ProtectedBranchPullRequestReviewDismissalRestrictions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProtectedBranchPullRequestReviewDismissalRestrictions</code>.
   * @alias module:model/ProtectedBranchPullRequestReviewDismissalRestrictions
   */
  function ProtectedBranchPullRequestReviewDismissalRestrictions() {
    _classCallCheck(this, ProtectedBranchPullRequestReviewDismissalRestrictions);

    ProtectedBranchPullRequestReviewDismissalRestrictions.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProtectedBranchPullRequestReviewDismissalRestrictions, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ProtectedBranchPullRequestReviewDismissalRestrictions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProtectedBranchPullRequestReviewDismissalRestrictions} obj Optional instance to populate.
     * @return {module:model/ProtectedBranchPullRequestReviewDismissalRestrictions} The populated <code>ProtectedBranchPullRequestReviewDismissalRestrictions</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProtectedBranchPullRequestReviewDismissalRestrictions();

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

  return ProtectedBranchPullRequestReviewDismissalRestrictions;
}();
/**
 * The list of teams with review dismissal access.
 * @member {Array.<module:model/Team>} teams
 */


ProtectedBranchPullRequestReviewDismissalRestrictions.prototype['teams'] = undefined;
/**
 * @member {String} teams_url
 */

ProtectedBranchPullRequestReviewDismissalRestrictions.prototype['teams_url'] = undefined;
/**
 * @member {String} url
 */

ProtectedBranchPullRequestReviewDismissalRestrictions.prototype['url'] = undefined;
/**
 * The list of users with review dismissal access.
 * @member {Array.<module:model/SimpleUser>} users
 */

ProtectedBranchPullRequestReviewDismissalRestrictions.prototype['users'] = undefined;
/**
 * @member {String} users_url
 */

ProtectedBranchPullRequestReviewDismissalRestrictions.prototype['users_url'] = undefined;
var _default = ProtectedBranchPullRequestReviewDismissalRestrictions;
exports["default"] = _default;