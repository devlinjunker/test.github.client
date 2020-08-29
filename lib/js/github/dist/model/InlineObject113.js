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
 * The InlineObject113 model module.
 * @module model/InlineObject113
 * @version 0.0.5
 */
var InlineObject113 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject113</code>.
   * @alias module:model/InlineObject113
   * @param event {module:model/InlineObject113.EventEnum} The review action you want to perform. The review actions include: `APPROVE`, `REQUEST_CHANGES`, or `COMMENT`. When you leave this blank, the API returns _HTTP 422 (Unrecognizable entity)_ and sets the review action state to `PENDING`, which means you will need to re-submit the pull request review using a review action.
   */
  function InlineObject113(event) {
    _classCallCheck(this, InlineObject113);

    InlineObject113.initialize(this, event);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject113, null, [{
    key: "initialize",
    value: function initialize(obj, event) {
      obj['event'] = event;
    }
    /**
     * Constructs a <code>InlineObject113</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject113} obj Optional instance to populate.
     * @return {module:model/InlineObject113} The populated <code>InlineObject113</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject113();

        if (data.hasOwnProperty('body')) {
          obj['body'] = _ApiClient["default"].convertToType(data['body'], 'String');
        }

        if (data.hasOwnProperty('event')) {
          obj['event'] = _ApiClient["default"].convertToType(data['event'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject113;
}();
/**
 * The body text of the pull request review
 * @member {String} body
 */


InlineObject113.prototype['body'] = undefined;
/**
 * The review action you want to perform. The review actions include: `APPROVE`, `REQUEST_CHANGES`, or `COMMENT`. When you leave this blank, the API returns _HTTP 422 (Unrecognizable entity)_ and sets the review action state to `PENDING`, which means you will need to re-submit the pull request review using a review action.
 * @member {module:model/InlineObject113.EventEnum} event
 */

InlineObject113.prototype['event'] = undefined;
/**
 * Allowed values for the <code>event</code> property.
 * @enum {String}
 * @readonly
 */

InlineObject113['EventEnum'] = {
  /**
   * value: "APPROVE"
   * @const
   */
  "APPROVE": "APPROVE",

  /**
   * value: "REQUEST_CHANGES"
   * @const
   */
  "REQUEST_CHANGES": "REQUEST_CHANGES",

  /**
   * value: "COMMENT"
   * @const
   */
  "COMMENT": "COMMENT"
};
var _default = InlineObject113;
exports["default"] = _default;