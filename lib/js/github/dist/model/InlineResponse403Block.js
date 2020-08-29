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
 * The InlineResponse403Block model module.
 * @module model/InlineResponse403Block
 * @version 0.0.5
 */
var InlineResponse403Block = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse403Block</code>.
   * @alias module:model/InlineResponse403Block
   */
  function InlineResponse403Block() {
    _classCallCheck(this, InlineResponse403Block);

    InlineResponse403Block.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse403Block, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse403Block</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse403Block} obj Optional instance to populate.
     * @return {module:model/InlineResponse403Block} The populated <code>InlineResponse403Block</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse403Block();

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
        }

        if (data.hasOwnProperty('html_url')) {
          obj['html_url'] = _ApiClient["default"].convertToType(data['html_url'], 'String');
        }

        if (data.hasOwnProperty('reason')) {
          obj['reason'] = _ApiClient["default"].convertToType(data['reason'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse403Block;
}();
/**
 * @member {String} created_at
 */


InlineResponse403Block.prototype['created_at'] = undefined;
/**
 * @member {String} html_url
 */

InlineResponse403Block.prototype['html_url'] = undefined;
/**
 * @member {String} reason
 */

InlineResponse403Block.prototype['reason'] = undefined;
var _default = InlineResponse403Block;
exports["default"] = _default;