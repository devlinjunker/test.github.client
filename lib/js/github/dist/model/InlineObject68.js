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
 * The InlineObject68 model module.
 * @module model/InlineObject68
 * @version 0.0.5
 */
var InlineObject68 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject68</code>.
   * @alias module:model/InlineObject68
   * @param ref {String} The name of the fully qualified reference (ie: `refs/heads/master`). If it doesn't start with 'refs' and have at least two slashes, it will be rejected.
   * @param sha {String} The SHA1 value for this reference.
   */
  function InlineObject68(ref, sha) {
    _classCallCheck(this, InlineObject68);

    InlineObject68.initialize(this, ref, sha);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject68, null, [{
    key: "initialize",
    value: function initialize(obj, ref, sha) {
      obj['ref'] = ref;
      obj['sha'] = sha;
    }
    /**
     * Constructs a <code>InlineObject68</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject68} obj Optional instance to populate.
     * @return {module:model/InlineObject68} The populated <code>InlineObject68</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject68();

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }

        if (data.hasOwnProperty('ref')) {
          obj['ref'] = _ApiClient["default"].convertToType(data['ref'], 'String');
        }

        if (data.hasOwnProperty('sha')) {
          obj['sha'] = _ApiClient["default"].convertToType(data['sha'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject68;
}();
/**
 * @member {String} key
 */


InlineObject68.prototype['key'] = undefined;
/**
 * The name of the fully qualified reference (ie: `refs/heads/master`). If it doesn't start with 'refs' and have at least two slashes, it will be rejected.
 * @member {String} ref
 */

InlineObject68.prototype['ref'] = undefined;
/**
 * The SHA1 value for this reference.
 * @member {String} sha
 */

InlineObject68.prototype['sha'] = undefined;
var _default = InlineObject68;
exports["default"] = _default;