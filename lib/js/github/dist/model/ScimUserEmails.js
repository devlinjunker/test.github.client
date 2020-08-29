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
 * The ScimUserEmails model module.
 * @module model/ScimUserEmails
 * @version 0.0.5
 */
var ScimUserEmails = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ScimUserEmails</code>.
   * @alias module:model/ScimUserEmails
   * @param value {String} 
   */
  function ScimUserEmails(value) {
    _classCallCheck(this, ScimUserEmails);

    ScimUserEmails.initialize(this, value);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ScimUserEmails, null, [{
    key: "initialize",
    value: function initialize(obj, value) {
      obj['value'] = value;
    }
    /**
     * Constructs a <code>ScimUserEmails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScimUserEmails} obj Optional instance to populate.
     * @return {module:model/ScimUserEmails} The populated <code>ScimUserEmails</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ScimUserEmails();

        if (data.hasOwnProperty('primary')) {
          obj['primary'] = _ApiClient["default"].convertToType(data['primary'], 'Boolean');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ScimUserEmails;
}();
/**
 * @member {Boolean} primary
 */


ScimUserEmails.prototype['primary'] = undefined;
/**
 * @member {String} value
 */

ScimUserEmails.prototype['value'] = undefined;
var _default = ScimUserEmails;
exports["default"] = _default;