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
 * The InlineObject22 model module.
 * @module model/InlineObject22
 * @version 0.0.5
 */
var InlineObject22 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject22</code>.
   * @alias module:model/InlineObject22
   */
  function InlineObject22() {
    _classCallCheck(this, InlineObject22);

    InlineObject22.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject22, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject22</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject22} obj Optional instance to populate.
     * @return {module:model/InlineObject22} The populated <code>InlineObject22</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject22();

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('invitee_id')) {
          obj['invitee_id'] = _ApiClient["default"].convertToType(data['invitee_id'], 'Number');
        }

        if (data.hasOwnProperty('role')) {
          obj['role'] = _ApiClient["default"].convertToType(data['role'], 'String');
        }

        if (data.hasOwnProperty('team_ids')) {
          obj['team_ids'] = _ApiClient["default"].convertToType(data['team_ids'], ['Number']);
        }
      }

      return obj;
    }
  }]);

  return InlineObject22;
}();
/**
 * **Required unless you provide `invitee_id`**. Email address of the person you are inviting, which can be an existing GitHub user.
 * @member {String} email
 */


InlineObject22.prototype['email'] = undefined;
/**
 * **Required unless you provide `email`**. GitHub user ID for the person you are inviting.
 * @member {Number} invitee_id
 */

InlineObject22.prototype['invitee_id'] = undefined;
/**
 * Specify role for new member. Can be one of:   \\* `admin` - Organization owners with full administrative rights to the organization and complete access to all repositories and teams.   \\* `direct_member` - Non-owner organization members with ability to see other members and join teams by invitation.   \\* `billing_manager` - Non-owner organization members with ability to manage the billing settings of your organization.
 * @member {module:model/InlineObject22.RoleEnum} role
 * @default 'direct_member'
 */

InlineObject22.prototype['role'] = 'direct_member';
/**
 * Specify IDs for the teams you want to invite new members to.
 * @member {Array.<Number>} team_ids
 */

InlineObject22.prototype['team_ids'] = undefined;
/**
 * Allowed values for the <code>role</code> property.
 * @enum {String}
 * @readonly
 */

InlineObject22['RoleEnum'] = {
  /**
   * value: "admin"
   * @const
   */
  "admin": "admin",

  /**
   * value: "direct_member"
   * @const
   */
  "direct_member": "direct_member",

  /**
   * value: "billing_manager"
   * @const
   */
  "billing_manager": "billing_manager"
};
var _default = InlineObject22;
exports["default"] = _default;