"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _OrgMembershipPermissions = _interopRequireDefault(require("./OrgMembershipPermissions"));

var _OrganizationSimple = _interopRequireDefault(require("./OrganizationSimple"));

var _SimpleUser = _interopRequireDefault(require("./SimpleUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The OrgMembership model module.
 * @module model/OrgMembership
 * @version 0.0.5
 */
var OrgMembership = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrgMembership</code>.
   * Org Membership
   * @alias module:model/OrgMembership
   * @param organization {module:model/OrganizationSimple} 
   * @param organizationUrl {String} 
   * @param role {String} 
   * @param state {String} 
   * @param url {String} 
   * @param user {module:model/SimpleUser} 
   */
  function OrgMembership(organization, organizationUrl, role, state, url, user) {
    _classCallCheck(this, OrgMembership);

    OrgMembership.initialize(this, organization, organizationUrl, role, state, url, user);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OrgMembership, null, [{
    key: "initialize",
    value: function initialize(obj, organization, organizationUrl, role, state, url, user) {
      obj['organization'] = organization;
      obj['organization_url'] = organizationUrl;
      obj['role'] = role;
      obj['state'] = state;
      obj['url'] = url;
      obj['user'] = user;
    }
    /**
     * Constructs a <code>OrgMembership</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrgMembership} obj Optional instance to populate.
     * @return {module:model/OrgMembership} The populated <code>OrgMembership</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrgMembership();

        if (data.hasOwnProperty('organization')) {
          obj['organization'] = _OrganizationSimple["default"].constructFromObject(data['organization']);
        }

        if (data.hasOwnProperty('organization_url')) {
          obj['organization_url'] = _ApiClient["default"].convertToType(data['organization_url'], 'String');
        }

        if (data.hasOwnProperty('permissions')) {
          obj['permissions'] = _OrgMembershipPermissions["default"].constructFromObject(data['permissions']);
        }

        if (data.hasOwnProperty('role')) {
          obj['role'] = _ApiClient["default"].convertToType(data['role'], 'String');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('user')) {
          obj['user'] = _ApiClient["default"].convertToType(data['user'], _SimpleUser["default"]);
        }
      }

      return obj;
    }
  }]);

  return OrgMembership;
}();
/**
 * @member {module:model/OrganizationSimple} organization
 */


OrgMembership.prototype['organization'] = undefined;
/**
 * @member {String} organization_url
 */

OrgMembership.prototype['organization_url'] = undefined;
/**
 * @member {module:model/OrgMembershipPermissions} permissions
 */

OrgMembership.prototype['permissions'] = undefined;
/**
 * @member {String} role
 */

OrgMembership.prototype['role'] = undefined;
/**
 * @member {String} state
 */

OrgMembership.prototype['state'] = undefined;
/**
 * @member {String} url
 */

OrgMembership.prototype['url'] = undefined;
/**
 * @member {module:model/SimpleUser} user
 */

OrgMembership.prototype['user'] = undefined;
var _default = OrgMembership;
exports["default"] = _default;