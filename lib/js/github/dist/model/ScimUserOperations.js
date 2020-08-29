"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _OneOfstringobjectarray = _interopRequireDefault(require("./OneOfstringobjectarray"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ScimUserOperations model module.
 * @module model/ScimUserOperations
 * @version 0.0.5
 */
var ScimUserOperations = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ScimUserOperations</code>.
   * @alias module:model/ScimUserOperations
   * @param op {module:model/ScimUserOperations.OpEnum} 
   */
  function ScimUserOperations(op) {
    _classCallCheck(this, ScimUserOperations);

    ScimUserOperations.initialize(this, op);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ScimUserOperations, null, [{
    key: "initialize",
    value: function initialize(obj, op) {
      obj['op'] = op;
    }
    /**
     * Constructs a <code>ScimUserOperations</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScimUserOperations} obj Optional instance to populate.
     * @return {module:model/ScimUserOperations} The populated <code>ScimUserOperations</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ScimUserOperations();

        if (data.hasOwnProperty('op')) {
          obj['op'] = _ApiClient["default"].convertToType(data['op'], 'String');
        }

        if (data.hasOwnProperty('path')) {
          obj['path'] = _ApiClient["default"].convertToType(data['path'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], _OneOfstringobjectarray["default"]);
        }
      }

      return obj;
    }
  }]);

  return ScimUserOperations;
}();
/**
 * @member {module:model/ScimUserOperations.OpEnum} op
 */


ScimUserOperations.prototype['op'] = undefined;
/**
 * @member {String} path
 */

ScimUserOperations.prototype['path'] = undefined;
/**
 * @member {module:model/OneOfstringobjectarray} value
 */

ScimUserOperations.prototype['value'] = undefined;
/**
 * Allowed values for the <code>op</code> property.
 * @enum {String}
 * @readonly
 */

ScimUserOperations['OpEnum'] = {
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
var _default = ScimUserOperations;
exports["default"] = _default;