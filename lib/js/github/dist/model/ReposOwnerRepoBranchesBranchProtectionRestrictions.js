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
 * The ReposOwnerRepoBranchesBranchProtectionRestrictions model module.
 * @module model/ReposOwnerRepoBranchesBranchProtectionRestrictions
 * @version 0.0.5
 */
var ReposOwnerRepoBranchesBranchProtectionRestrictions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ReposOwnerRepoBranchesBranchProtectionRestrictions</code>.
   * Restrict who can push to the protected branch. User, app, and team &#x60;restrictions&#x60; are only available for organization-owned repositories. Set to &#x60;null&#x60; to disable.
   * @alias module:model/ReposOwnerRepoBranchesBranchProtectionRestrictions
   * @param teams {Array.<String>} The list of team `slug`s with push access
   * @param users {Array.<String>} The list of user `login`s with push access
   */
  function ReposOwnerRepoBranchesBranchProtectionRestrictions(teams, users) {
    _classCallCheck(this, ReposOwnerRepoBranchesBranchProtectionRestrictions);

    ReposOwnerRepoBranchesBranchProtectionRestrictions.initialize(this, teams, users);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ReposOwnerRepoBranchesBranchProtectionRestrictions, null, [{
    key: "initialize",
    value: function initialize(obj, teams, users) {
      obj['teams'] = teams;
      obj['users'] = users;
    }
    /**
     * Constructs a <code>ReposOwnerRepoBranchesBranchProtectionRestrictions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReposOwnerRepoBranchesBranchProtectionRestrictions} obj Optional instance to populate.
     * @return {module:model/ReposOwnerRepoBranchesBranchProtectionRestrictions} The populated <code>ReposOwnerRepoBranchesBranchProtectionRestrictions</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReposOwnerRepoBranchesBranchProtectionRestrictions();

        if (data.hasOwnProperty('apps')) {
          obj['apps'] = _ApiClient["default"].convertToType(data['apps'], ['String']);
        }

        if (data.hasOwnProperty('teams')) {
          obj['teams'] = _ApiClient["default"].convertToType(data['teams'], ['String']);
        }

        if (data.hasOwnProperty('users')) {
          obj['users'] = _ApiClient["default"].convertToType(data['users'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return ReposOwnerRepoBranchesBranchProtectionRestrictions;
}();
/**
 * The list of app `slug`s with push access
 * @member {Array.<String>} apps
 */


ReposOwnerRepoBranchesBranchProtectionRestrictions.prototype['apps'] = undefined;
/**
 * The list of team `slug`s with push access
 * @member {Array.<String>} teams
 */

ReposOwnerRepoBranchesBranchProtectionRestrictions.prototype['teams'] = undefined;
/**
 * The list of user `login`s with push access
 * @member {Array.<String>} users
 */

ReposOwnerRepoBranchesBranchProtectionRestrictions.prototype['users'] = undefined;
var _default = ReposOwnerRepoBranchesBranchProtectionRestrictions;
exports["default"] = _default;