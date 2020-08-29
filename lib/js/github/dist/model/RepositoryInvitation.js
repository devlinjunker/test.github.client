"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _MinimalRepository = _interopRequireDefault(require("./MinimalRepository"));

var _SimpleUser = _interopRequireDefault(require("./SimpleUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RepositoryInvitation model module.
 * @module model/RepositoryInvitation
 * @version 0.0.5
 */
var RepositoryInvitation = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RepositoryInvitation</code>.
   * Repository invitations let you manage who you collaborate with.
   * @alias module:model/RepositoryInvitation
   * @param createdAt {Date} 
   * @param htmlUrl {String} 
   * @param id {Number} Unique identifier of the repository invitation.
   * @param invitee {module:model/SimpleUser} 
   * @param inviter {module:model/SimpleUser} 
   * @param nodeId {String} 
   * @param permissions {module:model/RepositoryInvitation.PermissionsEnum} The permission associated with the invitation.
   * @param repository {module:model/MinimalRepository} 
   * @param url {String} URL for the repository invitation
   */
  function RepositoryInvitation(createdAt, htmlUrl, id, invitee, inviter, nodeId, permissions, repository, url) {
    _classCallCheck(this, RepositoryInvitation);

    RepositoryInvitation.initialize(this, createdAt, htmlUrl, id, invitee, inviter, nodeId, permissions, repository, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RepositoryInvitation, null, [{
    key: "initialize",
    value: function initialize(obj, createdAt, htmlUrl, id, invitee, inviter, nodeId, permissions, repository, url) {
      obj['created_at'] = createdAt;
      obj['html_url'] = htmlUrl;
      obj['id'] = id;
      obj['invitee'] = invitee;
      obj['inviter'] = inviter;
      obj['node_id'] = nodeId;
      obj['permissions'] = permissions;
      obj['repository'] = repository;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>RepositoryInvitation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RepositoryInvitation} obj Optional instance to populate.
     * @return {module:model/RepositoryInvitation} The populated <code>RepositoryInvitation</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RepositoryInvitation();

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('html_url')) {
          obj['html_url'] = _ApiClient["default"].convertToType(data['html_url'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('invitee')) {
          obj['invitee'] = _ApiClient["default"].convertToType(data['invitee'], _SimpleUser["default"]);
        }

        if (data.hasOwnProperty('inviter')) {
          obj['inviter'] = _ApiClient["default"].convertToType(data['inviter'], _SimpleUser["default"]);
        }

        if (data.hasOwnProperty('node_id')) {
          obj['node_id'] = _ApiClient["default"].convertToType(data['node_id'], 'String');
        }

        if (data.hasOwnProperty('permissions')) {
          obj['permissions'] = _ApiClient["default"].convertToType(data['permissions'], 'String');
        }

        if (data.hasOwnProperty('repository')) {
          obj['repository'] = _MinimalRepository["default"].constructFromObject(data['repository']);
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RepositoryInvitation;
}();
/**
 * @member {Date} created_at
 */


RepositoryInvitation.prototype['created_at'] = undefined;
/**
 * @member {String} html_url
 */

RepositoryInvitation.prototype['html_url'] = undefined;
/**
 * Unique identifier of the repository invitation.
 * @member {Number} id
 */

RepositoryInvitation.prototype['id'] = undefined;
/**
 * @member {module:model/SimpleUser} invitee
 */

RepositoryInvitation.prototype['invitee'] = undefined;
/**
 * @member {module:model/SimpleUser} inviter
 */

RepositoryInvitation.prototype['inviter'] = undefined;
/**
 * @member {String} node_id
 */

RepositoryInvitation.prototype['node_id'] = undefined;
/**
 * The permission associated with the invitation.
 * @member {module:model/RepositoryInvitation.PermissionsEnum} permissions
 */

RepositoryInvitation.prototype['permissions'] = undefined;
/**
 * @member {module:model/MinimalRepository} repository
 */

RepositoryInvitation.prototype['repository'] = undefined;
/**
 * URL for the repository invitation
 * @member {String} url
 */

RepositoryInvitation.prototype['url'] = undefined;
/**
 * Allowed values for the <code>permissions</code> property.
 * @enum {String}
 * @readonly
 */

RepositoryInvitation['PermissionsEnum'] = {
  /**
   * value: "read"
   * @const
   */
  "read": "read",

  /**
   * value: "write"
   * @const
   */
  "write": "write",

  /**
   * value: "admin"
   * @const
   */
  "admin": "admin"
};
var _default = RepositoryInvitation;
exports["default"] = _default;