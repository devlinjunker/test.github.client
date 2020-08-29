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
 * The CollaboratorPermissions model module.
 * @module model/CollaboratorPermissions
 * @version 0.0.5
 */
var CollaboratorPermissions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CollaboratorPermissions</code>.
   * @alias module:model/CollaboratorPermissions
   * @param admin {Boolean} 
   * @param pull {Boolean} 
   * @param push {Boolean} 
   */
  function CollaboratorPermissions(admin, pull, push) {
    _classCallCheck(this, CollaboratorPermissions);

    CollaboratorPermissions.initialize(this, admin, pull, push);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CollaboratorPermissions, null, [{
    key: "initialize",
    value: function initialize(obj, admin, pull, push) {
      obj['admin'] = admin;
      obj['pull'] = pull;
      obj['push'] = push;
    }
    /**
     * Constructs a <code>CollaboratorPermissions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CollaboratorPermissions} obj Optional instance to populate.
     * @return {module:model/CollaboratorPermissions} The populated <code>CollaboratorPermissions</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CollaboratorPermissions();

        if (data.hasOwnProperty('admin')) {
          obj['admin'] = _ApiClient["default"].convertToType(data['admin'], 'Boolean');
        }

        if (data.hasOwnProperty('pull')) {
          obj['pull'] = _ApiClient["default"].convertToType(data['pull'], 'Boolean');
        }

        if (data.hasOwnProperty('push')) {
          obj['push'] = _ApiClient["default"].convertToType(data['push'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return CollaboratorPermissions;
}();
/**
 * @member {Boolean} admin
 */


CollaboratorPermissions.prototype['admin'] = undefined;
/**
 * @member {Boolean} pull
 */

CollaboratorPermissions.prototype['pull'] = undefined;
/**
 * @member {Boolean} push
 */

CollaboratorPermissions.prototype['push'] = undefined;
var _default = CollaboratorPermissions;
exports["default"] = _default;