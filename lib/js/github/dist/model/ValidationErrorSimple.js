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
 * The ValidationErrorSimple model module.
 * @module model/ValidationErrorSimple
 * @version 0.0.5
 */
var ValidationErrorSimple = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ValidationErrorSimple</code>.
   * Validation Error Simple
   * @alias module:model/ValidationErrorSimple
   * @param documentationUrl {String} 
   * @param message {String} 
   */
  function ValidationErrorSimple(documentationUrl, message) {
    _classCallCheck(this, ValidationErrorSimple);

    ValidationErrorSimple.initialize(this, documentationUrl, message);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ValidationErrorSimple, null, [{
    key: "initialize",
    value: function initialize(obj, documentationUrl, message) {
      obj['documentation_url'] = documentationUrl;
      obj['message'] = message;
    }
    /**
     * Constructs a <code>ValidationErrorSimple</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ValidationErrorSimple} obj Optional instance to populate.
     * @return {module:model/ValidationErrorSimple} The populated <code>ValidationErrorSimple</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ValidationErrorSimple();

        if (data.hasOwnProperty('documentation_url')) {
          obj['documentation_url'] = _ApiClient["default"].convertToType(data['documentation_url'], 'String');
        }

        if (data.hasOwnProperty('errors')) {
          obj['errors'] = _ApiClient["default"].convertToType(data['errors'], ['String']);
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ValidationErrorSimple;
}();
/**
 * @member {String} documentation_url
 */


ValidationErrorSimple.prototype['documentation_url'] = undefined;
/**
 * @member {Array.<String>} errors
 */

ValidationErrorSimple.prototype['errors'] = undefined;
/**
 * @member {String} message
 */

ValidationErrorSimple.prototype['message'] = undefined;
var _default = ValidationErrorSimple;
exports["default"] = _default;