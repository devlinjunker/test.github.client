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
 * The ScimUserName model module.
 * @module model/ScimUserName
 * @version 0.0.5
 */
var ScimUserName = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ScimUserName</code>.
   * @alias module:model/ScimUserName
   * @param familyName {String} 
   * @param givenName {String} 
   */
  function ScimUserName(familyName, givenName) {
    _classCallCheck(this, ScimUserName);

    ScimUserName.initialize(this, familyName, givenName);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ScimUserName, null, [{
    key: "initialize",
    value: function initialize(obj, familyName, givenName) {
      obj['familyName'] = familyName;
      obj['givenName'] = givenName;
    }
    /**
     * Constructs a <code>ScimUserName</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScimUserName} obj Optional instance to populate.
     * @return {module:model/ScimUserName} The populated <code>ScimUserName</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ScimUserName();

        if (data.hasOwnProperty('familyName')) {
          obj['familyName'] = _ApiClient["default"].convertToType(data['familyName'], 'String');
        }

        if (data.hasOwnProperty('formatted')) {
          obj['formatted'] = _ApiClient["default"].convertToType(data['formatted'], 'String');
        }

        if (data.hasOwnProperty('givenName')) {
          obj['givenName'] = _ApiClient["default"].convertToType(data['givenName'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ScimUserName;
}();
/**
 * @member {String} familyName
 */


ScimUserName.prototype['familyName'] = undefined;
/**
 * @member {String} formatted
 */

ScimUserName.prototype['formatted'] = undefined;
/**
 * @member {String} givenName
 */

ScimUserName.prototype['givenName'] = undefined;
var _default = ScimUserName;
exports["default"] = _default;