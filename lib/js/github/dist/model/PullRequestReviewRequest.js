"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BranchRestrictionPolicyTeams = _interopRequireDefault(require("./BranchRestrictionPolicyTeams"));

var _BranchRestrictionPolicyUsers = _interopRequireDefault(require("./BranchRestrictionPolicyUsers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PullRequestReviewRequest model module.
 * @module model/PullRequestReviewRequest
 * @version 0.0.5
 */
var PullRequestReviewRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PullRequestReviewRequest</code>.
   * Pull Request Review Request
   * @alias module:model/PullRequestReviewRequest
   */
  function PullRequestReviewRequest() {
    _classCallCheck(this, PullRequestReviewRequest);

    PullRequestReviewRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PullRequestReviewRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PullRequestReviewRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PullRequestReviewRequest} obj Optional instance to populate.
     * @return {module:model/PullRequestReviewRequest} The populated <code>PullRequestReviewRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PullRequestReviewRequest();

        if (data.hasOwnProperty('teams')) {
          obj['teams'] = _ApiClient["default"].convertToType(data['teams'], [_BranchRestrictionPolicyTeams["default"]]);
        }

        if (data.hasOwnProperty('users')) {
          obj['users'] = _ApiClient["default"].convertToType(data['users'], [_BranchRestrictionPolicyUsers["default"]]);
        }
      }

      return obj;
    }
  }]);

  return PullRequestReviewRequest;
}();
/**
 * @member {Array.<module:model/BranchRestrictionPolicyTeams>} teams
 */


PullRequestReviewRequest.prototype['teams'] = undefined;
/**
 * @member {Array.<module:model/BranchRestrictionPolicyUsers>} users
 */

PullRequestReviewRequest.prototype['users'] = undefined;
var _default = PullRequestReviewRequest;
exports["default"] = _default;