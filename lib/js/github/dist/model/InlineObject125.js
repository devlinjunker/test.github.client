"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ScimV2OrganizationsOrgUsersScimUserIdOperations = _interopRequireDefault(require("./ScimV2OrganizationsOrgUsersScimUserIdOperations"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineObject125 model module.
 * @module model/InlineObject125
 * @version 0.0.5
 */
var InlineObject125 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject125</code>.
   * @alias module:model/InlineObject125
   * @param operations {Array.<module:model/ScimV2OrganizationsOrgUsersScimUserIdOperations>} Set of operations to be performed
   */
  function InlineObject125(operations) {
    _classCallCheck(this, InlineObject125);

    InlineObject125.initialize(this, operations);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject125, null, [{
    key: "initialize",
    value: function initialize(obj, operations) {
      obj['Operations'] = operations;
    }
    /**
     * Constructs a <code>InlineObject125</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject125} obj Optional instance to populate.
     * @return {module:model/InlineObject125} The populated <code>InlineObject125</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject125();

        if (data.hasOwnProperty('Operations')) {
          obj['Operations'] = _ApiClient["default"].convertToType(data['Operations'], [_ScimV2OrganizationsOrgUsersScimUserIdOperations["default"]]);
        }

        if (data.hasOwnProperty('schemas')) {
          obj['schemas'] = _ApiClient["default"].convertToType(data['schemas'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return InlineObject125;
}();
/**
 * Set of operations to be performed
 * @member {Array.<module:model/ScimV2OrganizationsOrgUsersScimUserIdOperations>} Operations
 */


InlineObject125.prototype['Operations'] = undefined;
/**
 * @member {Array.<String>} schemas
 */

InlineObject125.prototype['schemas'] = undefined;
var _default = InlineObject125;
exports["default"] = _default;