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
 * The RepositoryPermissions model module.
 * @module model/RepositoryPermissions
 * @version 0.0.5
 */
var RepositoryPermissions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RepositoryPermissions</code>.
   * @alias module:model/RepositoryPermissions
   * @param admin {Boolean} 
   * @param pull {Boolean} 
   * @param push {Boolean} 
   */
  function RepositoryPermissions(admin, pull, push) {
    _classCallCheck(this, RepositoryPermissions);

    RepositoryPermissions.initialize(this, admin, pull, push);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RepositoryPermissions, null, [{
    key: "initialize",
    value: function initialize(obj, admin, pull, push) {
      obj['admin'] = admin;
      obj['pull'] = pull;
      obj['push'] = push;
    }
    /**
     * Constructs a <code>RepositoryPermissions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RepositoryPermissions} obj Optional instance to populate.
     * @return {module:model/RepositoryPermissions} The populated <code>RepositoryPermissions</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RepositoryPermissions();

        if (data.hasOwnProperty('admin')) {
          obj['admin'] = _ApiClient["default"].convertToType(data['admin'], 'Boolean');
        }

        if (data.hasOwnProperty('maintain')) {
          obj['maintain'] = _ApiClient["default"].convertToType(data['maintain'], 'Boolean');
        }

        if (data.hasOwnProperty('pull')) {
          obj['pull'] = _ApiClient["default"].convertToType(data['pull'], 'Boolean');
        }

        if (data.hasOwnProperty('push')) {
          obj['push'] = _ApiClient["default"].convertToType(data['push'], 'Boolean');
        }

        if (data.hasOwnProperty('triage')) {
          obj['triage'] = _ApiClient["default"].convertToType(data['triage'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return RepositoryPermissions;
}();
/**
 * @member {Boolean} admin
 */


RepositoryPermissions.prototype['admin'] = undefined;
/**
 * @member {Boolean} maintain
 */

RepositoryPermissions.prototype['maintain'] = undefined;
/**
 * @member {Boolean} pull
 */

RepositoryPermissions.prototype['pull'] = undefined;
/**
 * @member {Boolean} push
 */

RepositoryPermissions.prototype['push'] = undefined;
/**
 * @member {Boolean} triage
 */

RepositoryPermissions.prototype['triage'] = undefined;
var _default = RepositoryPermissions;
exports["default"] = _default;