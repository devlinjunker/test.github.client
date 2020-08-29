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
 * The InlineResponse4033Errors model module.
 * @module model/InlineResponse4033Errors
 * @version 0.0.5
 */
var InlineResponse4033Errors = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse4033Errors</code>.
   * @alias module:model/InlineResponse4033Errors
   */
  function InlineResponse4033Errors() {
    _classCallCheck(this, InlineResponse4033Errors);

    InlineResponse4033Errors.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse4033Errors, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse4033Errors</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse4033Errors} obj Optional instance to populate.
     * @return {module:model/InlineResponse4033Errors} The populated <code>InlineResponse4033Errors</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse4033Errors();

        if (data.hasOwnProperty('code')) {
          obj['code'] = _ApiClient["default"].convertToType(data['code'], 'String');
        }

        if (data.hasOwnProperty('field')) {
          obj['field'] = _ApiClient["default"].convertToType(data['field'], 'String');
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }

        if (data.hasOwnProperty('resource')) {
          obj['resource'] = _ApiClient["default"].convertToType(data['resource'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse4033Errors;
}();
/**
 * @member {String} code
 */


InlineResponse4033Errors.prototype['code'] = undefined;
/**
 * @member {String} field
 */

InlineResponse4033Errors.prototype['field'] = undefined;
/**
 * @member {String} message
 */

InlineResponse4033Errors.prototype['message'] = undefined;
/**
 * @member {String} resource
 */

InlineResponse4033Errors.prototype['resource'] = undefined;
var _default = InlineResponse4033Errors;
exports["default"] = _default;