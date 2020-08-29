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
 * The TeamMembership model module.
 * @module model/TeamMembership
 * @version 0.0.5
 */
var TeamMembership = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TeamMembership</code>.
   * Team Membership
   * @alias module:model/TeamMembership
   * @param role {module:model/TeamMembership.RoleEnum} The role of the user in the team.
   * @param state {String} 
   * @param url {String} 
   */
  function TeamMembership(role, state, url) {
    _classCallCheck(this, TeamMembership);

    TeamMembership.initialize(this, role, state, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TeamMembership, null, [{
    key: "initialize",
    value: function initialize(obj, role, state, url) {
      obj['role'] = role;
      obj['state'] = state;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>TeamMembership</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TeamMembership} obj Optional instance to populate.
     * @return {module:model/TeamMembership} The populated <code>TeamMembership</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TeamMembership();

        if (data.hasOwnProperty('role')) {
          obj['role'] = _ApiClient["default"].convertToType(data['role'], 'String');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TeamMembership;
}();
/**
 * The role of the user in the team.
 * @member {module:model/TeamMembership.RoleEnum} role
 * @default 'member'
 */


TeamMembership.prototype['role'] = 'member';
/**
 * @member {String} state
 */

TeamMembership.prototype['state'] = undefined;
/**
 * @member {String} url
 */

TeamMembership.prototype['url'] = undefined;
/**
 * Allowed values for the <code>role</code> property.
 * @enum {String}
 * @readonly
 */

TeamMembership['RoleEnum'] = {
  /**
   * value: "member"
   * @const
   */
  "member": "member",

  /**
   * value: "maintainer"
   * @const
   */
  "maintainer": "maintainer"
};
var _default = TeamMembership;
exports["default"] = _default;