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
 * The ProjectPermissions model module.
 * @module model/ProjectPermissions
 * @version 0.0.5
 */
var ProjectPermissions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProjectPermissions</code>.
   * @alias module:model/ProjectPermissions
   * @param admin {Boolean} 
   * @param read {Boolean} 
   * @param write {Boolean} 
   */
  function ProjectPermissions(admin, read, write) {
    _classCallCheck(this, ProjectPermissions);

    ProjectPermissions.initialize(this, admin, read, write);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProjectPermissions, null, [{
    key: "initialize",
    value: function initialize(obj, admin, read, write) {
      obj['admin'] = admin;
      obj['read'] = read;
      obj['write'] = write;
    }
    /**
     * Constructs a <code>ProjectPermissions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectPermissions} obj Optional instance to populate.
     * @return {module:model/ProjectPermissions} The populated <code>ProjectPermissions</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProjectPermissions();

        if (data.hasOwnProperty('admin')) {
          obj['admin'] = _ApiClient["default"].convertToType(data['admin'], 'Boolean');
        }

        if (data.hasOwnProperty('read')) {
          obj['read'] = _ApiClient["default"].convertToType(data['read'], 'Boolean');
        }

        if (data.hasOwnProperty('write')) {
          obj['write'] = _ApiClient["default"].convertToType(data['write'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return ProjectPermissions;
}();
/**
 * @member {Boolean} admin
 */


ProjectPermissions.prototype['admin'] = undefined;
/**
 * @member {Boolean} read
 */

ProjectPermissions.prototype['read'] = undefined;
/**
 * @member {Boolean} write
 */

ProjectPermissions.prototype['write'] = undefined;
var _default = ProjectPermissions;
exports["default"] = _default;