"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ScimV2OrganizationsOrgUsersEmails = _interopRequireDefault(require("./ScimV2OrganizationsOrgUsersEmails"));

var _ScimV2OrganizationsOrgUsersName = _interopRequireDefault(require("./ScimV2OrganizationsOrgUsersName"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineObject123 model module.
 * @module model/InlineObject123
 * @version 0.0.5
 */
var InlineObject123 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject123</code>.
   * @alias module:model/InlineObject123
   * @param emails {Array.<module:model/ScimV2OrganizationsOrgUsersEmails>} user emails
   * @param name {module:model/ScimV2OrganizationsOrgUsersName} 
   * @param userName {String} Configured by the admin. Could be an email, login, or username
   */
  function InlineObject123(emails, name, userName) {
    _classCallCheck(this, InlineObject123);

    InlineObject123.initialize(this, emails, name, userName);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject123, null, [{
    key: "initialize",
    value: function initialize(obj, emails, name, userName) {
      obj['emails'] = emails;
      obj['name'] = name;
      obj['userName'] = userName;
    }
    /**
     * Constructs a <code>InlineObject123</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject123} obj Optional instance to populate.
     * @return {module:model/InlineObject123} The populated <code>InlineObject123</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject123();

        if (data.hasOwnProperty('active')) {
          obj['active'] = _ApiClient["default"].convertToType(data['active'], 'Boolean');
        }

        if (data.hasOwnProperty('displayName')) {
          obj['displayName'] = _ApiClient["default"].convertToType(data['displayName'], 'String');
        }

        if (data.hasOwnProperty('emails')) {
          obj['emails'] = _ApiClient["default"].convertToType(data['emails'], [_ScimV2OrganizationsOrgUsersEmails["default"]]);
        }

        if (data.hasOwnProperty('externalId')) {
          obj['externalId'] = _ApiClient["default"].convertToType(data['externalId'], 'String');
        }

        if (data.hasOwnProperty('groups')) {
          obj['groups'] = _ApiClient["default"].convertToType(data['groups'], ['String']);
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ScimV2OrganizationsOrgUsersName["default"].constructFromObject(data['name']);
        }

        if (data.hasOwnProperty('schemas')) {
          obj['schemas'] = _ApiClient["default"].convertToType(data['schemas'], ['String']);
        }

        if (data.hasOwnProperty('userName')) {
          obj['userName'] = _ApiClient["default"].convertToType(data['userName'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject123;
}();
/**
 * @member {Boolean} active
 */


InlineObject123.prototype['active'] = undefined;
/**
 * The name of the user, suitable for display to end-users
 * @member {String} displayName
 */

InlineObject123.prototype['displayName'] = undefined;
/**
 * user emails
 * @member {Array.<module:model/ScimV2OrganizationsOrgUsersEmails>} emails
 */

InlineObject123.prototype['emails'] = undefined;
/**
 * @member {String} externalId
 */

InlineObject123.prototype['externalId'] = undefined;
/**
 * @member {Array.<String>} groups
 */

InlineObject123.prototype['groups'] = undefined;
/**
 * @member {module:model/ScimV2OrganizationsOrgUsersName} name
 */

InlineObject123.prototype['name'] = undefined;
/**
 * @member {Array.<String>} schemas
 */

InlineObject123.prototype['schemas'] = undefined;
/**
 * Configured by the admin. Could be an email, login, or username
 * @member {String} userName
 */

InlineObject123.prototype['userName'] = undefined;
var _default = InlineObject123;
exports["default"] = _default;