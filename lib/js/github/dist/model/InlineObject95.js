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
 * The InlineObject95 model module.
 * @module model/InlineObject95
 * @version 0.0.5
 */
var InlineObject95 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject95</code>.
   * @alias module:model/InlineObject95
   * @param title {String} The title of the milestone.
   */
  function InlineObject95(title) {
    _classCallCheck(this, InlineObject95);

    InlineObject95.initialize(this, title);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject95, null, [{
    key: "initialize",
    value: function initialize(obj, title) {
      obj['title'] = title;
    }
    /**
     * Constructs a <code>InlineObject95</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject95} obj Optional instance to populate.
     * @return {module:model/InlineObject95} The populated <code>InlineObject95</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject95();

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('due_on')) {
          obj['due_on'] = _ApiClient["default"].convertToType(data['due_on'], 'String');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject95;
}();
/**
 * A description of the milestone.
 * @member {String} description
 */


InlineObject95.prototype['description'] = undefined;
/**
 * The milestone due date. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
 * @member {String} due_on
 */

InlineObject95.prototype['due_on'] = undefined;
/**
 * The state of the milestone. Either `open` or `closed`.
 * @member {module:model/InlineObject95.StateEnum} state
 * @default 'open'
 */

InlineObject95.prototype['state'] = 'open';
/**
 * The title of the milestone.
 * @member {String} title
 */

InlineObject95.prototype['title'] = undefined;
/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */

InlineObject95['StateEnum'] = {
  /**
   * value: "open"
   * @const
   */
  "open": "open",

  /**
   * value: "closed"
   * @const
   */
  "closed": "closed"
};
var _default = InlineObject95;
exports["default"] = _default;