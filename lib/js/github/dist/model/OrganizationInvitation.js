"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SimpleUser = _interopRequireDefault(require("./SimpleUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The OrganizationInvitation model module.
 * @module model/OrganizationInvitation
 * @version 0.0.5
 */
var OrganizationInvitation = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrganizationInvitation</code>.
   * Organization Invitation
   * @alias module:model/OrganizationInvitation
   */
  function OrganizationInvitation() {
    _classCallCheck(this, OrganizationInvitation);

    OrganizationInvitation.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OrganizationInvitation, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>OrganizationInvitation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganizationInvitation} obj Optional instance to populate.
     * @return {module:model/OrganizationInvitation} The populated <code>OrganizationInvitation</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrganizationInvitation();

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('invitation_team_url')) {
          obj['invitation_team_url'] = _ApiClient["default"].convertToType(data['invitation_team_url'], 'String');
        }

        if (data.hasOwnProperty('invitation_teams_url')) {
          obj['invitation_teams_url'] = _ApiClient["default"].convertToType(data['invitation_teams_url'], 'String');
        }

        if (data.hasOwnProperty('inviter')) {
          obj['inviter'] = _SimpleUser["default"].constructFromObject(data['inviter']);
        }

        if (data.hasOwnProperty('login')) {
          obj['login'] = _ApiClient["default"].convertToType(data['login'], 'String');
        }

        if (data.hasOwnProperty('node_id')) {
          obj['node_id'] = _ApiClient["default"].convertToType(data['node_id'], 'String');
        }

        if (data.hasOwnProperty('role')) {
          obj['role'] = _ApiClient["default"].convertToType(data['role'], 'String');
        }

        if (data.hasOwnProperty('team_count')) {
          obj['team_count'] = _ApiClient["default"].convertToType(data['team_count'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return OrganizationInvitation;
}();
/**
 * @member {String} created_at
 */


OrganizationInvitation.prototype['created_at'] = undefined;
/**
 * @member {String} email
 */

OrganizationInvitation.prototype['email'] = undefined;
/**
 * @member {Number} id
 */

OrganizationInvitation.prototype['id'] = undefined;
/**
 * @member {String} invitation_team_url
 */

OrganizationInvitation.prototype['invitation_team_url'] = undefined;
/**
 * @member {String} invitation_teams_url
 */

OrganizationInvitation.prototype['invitation_teams_url'] = undefined;
/**
 * @member {module:model/SimpleUser} inviter
 */

OrganizationInvitation.prototype['inviter'] = undefined;
/**
 * @member {String} login
 */

OrganizationInvitation.prototype['login'] = undefined;
/**
 * @member {String} node_id
 */

OrganizationInvitation.prototype['node_id'] = undefined;
/**
 * @member {String} role
 */

OrganizationInvitation.prototype['role'] = undefined;
/**
 * @member {Number} team_count
 */

OrganizationInvitation.prototype['team_count'] = undefined;
var _default = OrganizationInvitation;
exports["default"] = _default;