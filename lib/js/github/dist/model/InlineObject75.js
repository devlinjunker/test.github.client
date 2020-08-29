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
 * The InlineObject75 model module.
 * @module model/InlineObject75
 * @version 0.0.5
 */
var InlineObject75 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject75</code>.
   * @alias module:model/InlineObject75
   */
  function InlineObject75() {
    _classCallCheck(this, InlineObject75);

    InlineObject75.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject75, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject75</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject75} obj Optional instance to populate.
     * @return {module:model/InlineObject75} The populated <code>InlineObject75</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject75();

        if (data.hasOwnProperty('tfvc_project')) {
          obj['tfvc_project'] = _ApiClient["default"].convertToType(data['tfvc_project'], 'String');
        }

        if (data.hasOwnProperty('vcs')) {
          obj['vcs'] = _ApiClient["default"].convertToType(data['vcs'], 'String');
        }

        if (data.hasOwnProperty('vcs_password')) {
          obj['vcs_password'] = _ApiClient["default"].convertToType(data['vcs_password'], 'String');
        }

        if (data.hasOwnProperty('vcs_username')) {
          obj['vcs_username'] = _ApiClient["default"].convertToType(data['vcs_username'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject75;
}();
/**
 * @member {String} tfvc_project
 */


InlineObject75.prototype['tfvc_project'] = undefined;
/**
 * @member {String} vcs
 */

InlineObject75.prototype['vcs'] = undefined;
/**
 * The password to provide to the originating repository.
 * @member {String} vcs_password
 */

InlineObject75.prototype['vcs_password'] = undefined;
/**
 * The username to provide to the originating repository.
 * @member {String} vcs_username
 */

InlineObject75.prototype['vcs_username'] = undefined;
var _default = InlineObject75;
exports["default"] = _default;