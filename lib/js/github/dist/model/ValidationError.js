"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ValidationErrorErrors = _interopRequireDefault(require("./ValidationErrorErrors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ValidationError model module.
 * @module model/ValidationError
 * @version 0.0.5
 */
var ValidationError = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ValidationError</code>.
   * Validation Error
   * @alias module:model/ValidationError
   * @param documentationUrl {String} 
   * @param message {String} 
   */
  function ValidationError(documentationUrl, message) {
    _classCallCheck(this, ValidationError);

    ValidationError.initialize(this, documentationUrl, message);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ValidationError, null, [{
    key: "initialize",
    value: function initialize(obj, documentationUrl, message) {
      obj['documentation_url'] = documentationUrl;
      obj['message'] = message;
    }
    /**
     * Constructs a <code>ValidationError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ValidationError} obj Optional instance to populate.
     * @return {module:model/ValidationError} The populated <code>ValidationError</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ValidationError();

        if (data.hasOwnProperty('documentation_url')) {
          obj['documentation_url'] = _ApiClient["default"].convertToType(data['documentation_url'], 'String');
        }

        if (data.hasOwnProperty('errors')) {
          obj['errors'] = _ApiClient["default"].convertToType(data['errors'], [_ValidationErrorErrors["default"]]);
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ValidationError;
}();
/**
 * @member {String} documentation_url
 */


ValidationError.prototype['documentation_url'] = undefined;
/**
 * @member {Array.<module:model/ValidationErrorErrors>} errors
 */

ValidationError.prototype['errors'] = undefined;
/**
 * @member {String} message
 */

ValidationError.prototype['message'] = undefined;
var _default = ValidationError;
exports["default"] = _default;