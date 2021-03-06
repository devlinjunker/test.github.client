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
 * The InlineObject48 model module.
 * @module model/InlineObject48
 * @version 0.0.5
 */
var InlineObject48 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject48</code>.
   * @alias module:model/InlineObject48
   * @param ref {String} The reference of the workflow run. The reference can be a branch, tag, or a commit SHA.
   */
  function InlineObject48(ref) {
    _classCallCheck(this, InlineObject48);

    InlineObject48.initialize(this, ref);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject48, null, [{
    key: "initialize",
    value: function initialize(obj, ref) {
      obj['ref'] = ref;
    }
    /**
     * Constructs a <code>InlineObject48</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject48} obj Optional instance to populate.
     * @return {module:model/InlineObject48} The populated <code>InlineObject48</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject48();

        if (data.hasOwnProperty('inputs')) {
          obj['inputs'] = _ApiClient["default"].convertToType(data['inputs'], {
            'String': 'String'
          });
        }

        if (data.hasOwnProperty('ref')) {
          obj['ref'] = _ApiClient["default"].convertToType(data['ref'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject48;
}();
/**
 * Input keys and values configured in the workflow file. The maximum number of properties is 10. Any default properties configured in the workflow file will be used when `inputs` are omitted.
 * @member {Object.<String, String>} inputs
 */


InlineObject48.prototype['inputs'] = undefined;
/**
 * The reference of the workflow run. The reference can be a branch, tag, or a commit SHA.
 * @member {String} ref
 */

InlineObject48.prototype['ref'] = undefined;
var _default = InlineObject48;
exports["default"] = _default;