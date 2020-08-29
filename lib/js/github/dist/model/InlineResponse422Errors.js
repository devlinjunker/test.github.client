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
 * The InlineResponse422Errors model module.
 * @module model/InlineResponse422Errors
 * @version 0.0.5
 */
var InlineResponse422Errors = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse422Errors</code>.
   * @alias module:model/InlineResponse422Errors
   */
  function InlineResponse422Errors() {
    _classCallCheck(this, InlineResponse422Errors);

    InlineResponse422Errors.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse422Errors, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse422Errors</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse422Errors} obj Optional instance to populate.
     * @return {module:model/InlineResponse422Errors} The populated <code>InlineResponse422Errors</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse422Errors();

        if (data.hasOwnProperty('code')) {
          obj['code'] = _ApiClient["default"].convertToType(data['code'], 'String');
        }

        if (data.hasOwnProperty('field')) {
          obj['field'] = _ApiClient["default"].convertToType(data['field'], 'String');
        }

        if (data.hasOwnProperty('resource')) {
          obj['resource'] = _ApiClient["default"].convertToType(data['resource'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse422Errors;
}();
/**
 * @member {String} code
 */


InlineResponse422Errors.prototype['code'] = undefined;
/**
 * @member {String} field
 */

InlineResponse422Errors.prototype['field'] = undefined;
/**
 * @member {String} resource
 */

InlineResponse422Errors.prototype['resource'] = undefined;
var _default = InlineResponse422Errors;
exports["default"] = _default;