"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _OneOfobjectarraystring = _interopRequireDefault(require("./OneOfobjectarraystring"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ScimV2OrganizationsOrgUsersScimUserIdOperations model module.
 * @module model/ScimV2OrganizationsOrgUsersScimUserIdOperations
 * @version 0.0.5
 */
var ScimV2OrganizationsOrgUsersScimUserIdOperations = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ScimV2OrganizationsOrgUsersScimUserIdOperations</code>.
   * @alias module:model/ScimV2OrganizationsOrgUsersScimUserIdOperations
   * @param op {module:model/ScimV2OrganizationsOrgUsersScimUserIdOperations.OpEnum} 
   */
  function ScimV2OrganizationsOrgUsersScimUserIdOperations(op) {
    _classCallCheck(this, ScimV2OrganizationsOrgUsersScimUserIdOperations);

    ScimV2OrganizationsOrgUsersScimUserIdOperations.initialize(this, op);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ScimV2OrganizationsOrgUsersScimUserIdOperations, null, [{
    key: "initialize",
    value: function initialize(obj, op) {
      obj['op'] = op;
    }
    /**
     * Constructs a <code>ScimV2OrganizationsOrgUsersScimUserIdOperations</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScimV2OrganizationsOrgUsersScimUserIdOperations} obj Optional instance to populate.
     * @return {module:model/ScimV2OrganizationsOrgUsersScimUserIdOperations} The populated <code>ScimV2OrganizationsOrgUsersScimUserIdOperations</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ScimV2OrganizationsOrgUsersScimUserIdOperations();

        if (data.hasOwnProperty('op')) {
          obj['op'] = _ApiClient["default"].convertToType(data['op'], 'String');
        }

        if (data.hasOwnProperty('path')) {
          obj['path'] = _ApiClient["default"].convertToType(data['path'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], _OneOfobjectarraystring["default"]);
        }
      }

      return obj;
    }
  }]);

  return ScimV2OrganizationsOrgUsersScimUserIdOperations;
}();
/**
 * @member {module:model/ScimV2OrganizationsOrgUsersScimUserIdOperations.OpEnum} op
 */


ScimV2OrganizationsOrgUsersScimUserIdOperations.prototype['op'] = undefined;
/**
 * @member {String} path
 */

ScimV2OrganizationsOrgUsersScimUserIdOperations.prototype['path'] = undefined;
/**
 * @member {module:model/OneOfobjectarraystring} value
 */

ScimV2OrganizationsOrgUsersScimUserIdOperations.prototype['value'] = undefined;
/**
 * Allowed values for the <code>op</code> property.
 * @enum {String}
 * @readonly
 */

ScimV2OrganizationsOrgUsersScimUserIdOperations['OpEnum'] = {
  /**
   * value: "add"
   * @const
   */
  "add": "add",

  /**
   * value: "remove"
   * @const
   */
  "remove": "remove",

  /**
   * value: "replace"
   * @const
   */
  "replace": "replace"
};
var _default = ScimV2OrganizationsOrgUsersScimUserIdOperations;
exports["default"] = _default;