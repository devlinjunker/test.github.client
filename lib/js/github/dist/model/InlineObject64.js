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
 * The InlineObject64 model module.
 * @module model/InlineObject64
 * @version 0.0.5
 */
var InlineObject64 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject64</code>.
   * @alias module:model/InlineObject64
   */
  function InlineObject64() {
    _classCallCheck(this, InlineObject64);

    InlineObject64.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject64, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject64</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject64} obj Optional instance to populate.
     * @return {module:model/InlineObject64} The populated <code>InlineObject64</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject64();

        if (data.hasOwnProperty('client_payload')) {
          obj['client_payload'] = _ApiClient["default"].convertToType(data['client_payload'], {
            'String': Object
          });
        }

        if (data.hasOwnProperty('event_type')) {
          obj['event_type'] = _ApiClient["default"].convertToType(data['event_type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject64;
}();
/**
 * JSON payload with extra information about the webhook event that your action or worklow may use.
 * @member {Object.<String, Object>} client_payload
 */


InlineObject64.prototype['client_payload'] = undefined;
/**
 * **Required:** A custom webhook event name.
 * @member {String} event_type
 */

InlineObject64.prototype['event_type'] = undefined;
var _default = InlineObject64;
exports["default"] = _default;