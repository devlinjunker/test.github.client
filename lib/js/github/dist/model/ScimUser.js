"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ScimUserEmails = _interopRequireDefault(require("./ScimUserEmails"));

var _ScimUserMeta = _interopRequireDefault(require("./ScimUserMeta"));

var _ScimUserName = _interopRequireDefault(require("./ScimUserName"));

var _ScimUserOperations = _interopRequireDefault(require("./ScimUserOperations"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ScimUser model module.
 * @module model/ScimUser
 * @version 0.0.5
 */
var ScimUser = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ScimUser</code>.
   * SCIM /Users provisioning endpoints
   * @alias module:model/ScimUser
   * @param active {Boolean} The active status of the User.
   * @param emails {Array.<module:model/ScimUserEmails>} user emails
   * @param externalId {String} The ID of the User.
   * @param id {String} Unique identifier of an external identity
   * @param meta {module:model/ScimUserMeta} 
   * @param name {module:model/ScimUserName} 
   * @param schemas {Array.<String>} SCIM schema used.
   * @param userName {String} Configured by the admin. Could be an email, login, or username
   */
  function ScimUser(active, emails, externalId, id, meta, name, schemas, userName) {
    _classCallCheck(this, ScimUser);

    ScimUser.initialize(this, active, emails, externalId, id, meta, name, schemas, userName);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ScimUser, null, [{
    key: "initialize",
    value: function initialize(obj, active, emails, externalId, id, meta, name, schemas, userName) {
      obj['active'] = active;
      obj['emails'] = emails;
      obj['externalId'] = externalId;
      obj['id'] = id;
      obj['meta'] = meta;
      obj['name'] = name;
      obj['schemas'] = schemas;
      obj['userName'] = userName;
    }
    /**
     * Constructs a <code>ScimUser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScimUser} obj Optional instance to populate.
     * @return {module:model/ScimUser} The populated <code>ScimUser</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ScimUser();

        if (data.hasOwnProperty('active')) {
          obj['active'] = _ApiClient["default"].convertToType(data['active'], 'Boolean');
        }

        if (data.hasOwnProperty('displayName')) {
          obj['displayName'] = _ApiClient["default"].convertToType(data['displayName'], 'String');
        }

        if (data.hasOwnProperty('emails')) {
          obj['emails'] = _ApiClient["default"].convertToType(data['emails'], [_ScimUserEmails["default"]]);
        }

        if (data.hasOwnProperty('externalId')) {
          obj['externalId'] = _ApiClient["default"].convertToType(data['externalId'], 'String');
        }

        if (data.hasOwnProperty('groups')) {
          obj['groups'] = _ApiClient["default"].convertToType(data['groups'], [Object]);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('meta')) {
          obj['meta'] = _ScimUserMeta["default"].constructFromObject(data['meta']);
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ScimUserName["default"].constructFromObject(data['name']);
        }

        if (data.hasOwnProperty('operations')) {
          obj['operations'] = _ApiClient["default"].convertToType(data['operations'], [_ScimUserOperations["default"]]);
        }

        if (data.hasOwnProperty('organization_id')) {
          obj['organization_id'] = _ApiClient["default"].convertToType(data['organization_id'], 'Number');
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

  return ScimUser;
}();
/**
 * The active status of the User.
 * @member {Boolean} active
 */


ScimUser.prototype['active'] = undefined;
/**
 * The name of the user, suitable for display to end-users
 * @member {String} displayName
 */

ScimUser.prototype['displayName'] = undefined;
/**
 * user emails
 * @member {Array.<module:model/ScimUserEmails>} emails
 */

ScimUser.prototype['emails'] = undefined;
/**
 * The ID of the User.
 * @member {String} externalId
 */

ScimUser.prototype['externalId'] = undefined;
/**
 * associated groups
 * @member {Array.<Object>} groups
 */

ScimUser.prototype['groups'] = undefined;
/**
 * Unique identifier of an external identity
 * @member {String} id
 */

ScimUser.prototype['id'] = undefined;
/**
 * @member {module:model/ScimUserMeta} meta
 */

ScimUser.prototype['meta'] = undefined;
/**
 * @member {module:model/ScimUserName} name
 */

ScimUser.prototype['name'] = undefined;
/**
 * Set of operations to be performed
 * @member {Array.<module:model/ScimUserOperations>} operations
 */

ScimUser.prototype['operations'] = undefined;
/**
 * The ID of the organization.
 * @member {Number} organization_id
 */

ScimUser.prototype['organization_id'] = undefined;
/**
 * SCIM schema used.
 * @member {Array.<String>} schemas
 */

ScimUser.prototype['schemas'] = undefined;
/**
 * Configured by the admin. Could be an email, login, or username
 * @member {String} userName
 */

ScimUser.prototype['userName'] = undefined;
var _default = ScimUser;
exports["default"] = _default;