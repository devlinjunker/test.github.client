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
 * The ScimUserMeta model module.
 * @module model/ScimUserMeta
 * @version 0.0.5
 */
var ScimUserMeta = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ScimUserMeta</code>.
   * @alias module:model/ScimUserMeta
   */
  function ScimUserMeta() {
    _classCallCheck(this, ScimUserMeta);

    ScimUserMeta.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ScimUserMeta, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ScimUserMeta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScimUserMeta} obj Optional instance to populate.
     * @return {module:model/ScimUserMeta} The populated <code>ScimUserMeta</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ScimUserMeta();

        if (data.hasOwnProperty('created')) {
          obj['created'] = _ApiClient["default"].convertToType(data['created'], 'Date');
        }

        if (data.hasOwnProperty('lastModified')) {
          obj['lastModified'] = _ApiClient["default"].convertToType(data['lastModified'], 'Date');
        }

        if (data.hasOwnProperty('location')) {
          obj['location'] = _ApiClient["default"].convertToType(data['location'], 'String');
        }

        if (data.hasOwnProperty('resourceType')) {
          obj['resourceType'] = _ApiClient["default"].convertToType(data['resourceType'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ScimUserMeta;
}();
/**
 * @member {Date} created
 */


ScimUserMeta.prototype['created'] = undefined;
/**
 * @member {Date} lastModified
 */

ScimUserMeta.prototype['lastModified'] = undefined;
/**
 * @member {String} location
 */

ScimUserMeta.prototype['location'] = undefined;
/**
 * @member {String} resourceType
 */

ScimUserMeta.prototype['resourceType'] = undefined;
var _default = ScimUserMeta;
exports["default"] = _default;