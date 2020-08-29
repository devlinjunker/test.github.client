"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _OneOfstringintegerarray = _interopRequireDefault(require("./OneOfstringintegerarray"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ValidationErrorErrors model module.
 * @module model/ValidationErrorErrors
 * @version 0.0.5
 */
var ValidationErrorErrors = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ValidationErrorErrors</code>.
   * @alias module:model/ValidationErrorErrors
   * @param code {String} 
   */
  function ValidationErrorErrors(code) {
    _classCallCheck(this, ValidationErrorErrors);

    ValidationErrorErrors.initialize(this, code);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ValidationErrorErrors, null, [{
    key: "initialize",
    value: function initialize(obj, code) {
      obj['code'] = code;
    }
    /**
     * Constructs a <code>ValidationErrorErrors</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ValidationErrorErrors} obj Optional instance to populate.
     * @return {module:model/ValidationErrorErrors} The populated <code>ValidationErrorErrors</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ValidationErrorErrors();

        if (data.hasOwnProperty('code')) {
          obj['code'] = _ApiClient["default"].convertToType(data['code'], 'String');
        }

        if (data.hasOwnProperty('field')) {
          obj['field'] = _ApiClient["default"].convertToType(data['field'], 'String');
        }

        if (data.hasOwnProperty('index')) {
          obj['index'] = _ApiClient["default"].convertToType(data['index'], 'Number');
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }

        if (data.hasOwnProperty('resource')) {
          obj['resource'] = _ApiClient["default"].convertToType(data['resource'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], _OneOfstringintegerarray["default"]);
        }
      }

      return obj;
    }
  }]);

  return ValidationErrorErrors;
}();
/**
 * @member {String} code
 */


ValidationErrorErrors.prototype['code'] = undefined;
/**
 * @member {String} field
 */

ValidationErrorErrors.prototype['field'] = undefined;
/**
 * @member {Number} index
 */

ValidationErrorErrors.prototype['index'] = undefined;
/**
 * @member {String} message
 */

ValidationErrorErrors.prototype['message'] = undefined;
/**
 * @member {String} resource
 */

ValidationErrorErrors.prototype['resource'] = undefined;
/**
 * @member {module:model/OneOfstringintegerarray} value
 */

ValidationErrorErrors.prototype['value'] = undefined;
var _default = ValidationErrorErrors;
exports["default"] = _default;