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
 * The RepositoryCollaboratorPermission model module.
 * @module model/RepositoryCollaboratorPermission
 * @version 0.0.5
 */
var RepositoryCollaboratorPermission = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RepositoryCollaboratorPermission</code>.
   * Repository Collaborator Permission
   * @alias module:model/RepositoryCollaboratorPermission
   * @param permission {String} 
   * @param user {module:model/SimpleUser} 
   */
  function RepositoryCollaboratorPermission(permission, user) {
    _classCallCheck(this, RepositoryCollaboratorPermission);

    RepositoryCollaboratorPermission.initialize(this, permission, user);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RepositoryCollaboratorPermission, null, [{
    key: "initialize",
    value: function initialize(obj, permission, user) {
      obj['permission'] = permission;
      obj['user'] = user;
    }
    /**
     * Constructs a <code>RepositoryCollaboratorPermission</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RepositoryCollaboratorPermission} obj Optional instance to populate.
     * @return {module:model/RepositoryCollaboratorPermission} The populated <code>RepositoryCollaboratorPermission</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RepositoryCollaboratorPermission();

        if (data.hasOwnProperty('permission')) {
          obj['permission'] = _ApiClient["default"].convertToType(data['permission'], 'String');
        }

        if (data.hasOwnProperty('user')) {
          obj['user'] = _ApiClient["default"].convertToType(data['user'], _SimpleUser["default"]);
        }
      }

      return obj;
    }
  }]);

  return RepositoryCollaboratorPermission;
}();
/**
 * @member {String} permission
 */


RepositoryCollaboratorPermission.prototype['permission'] = undefined;
/**
 * @member {module:model/SimpleUser} user
 */

RepositoryCollaboratorPermission.prototype['user'] = undefined;
var _default = RepositoryCollaboratorPermission;
exports["default"] = _default;