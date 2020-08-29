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
 * The InlineObject118 model module.
 * @module model/InlineObject118
 * @version 0.0.5
 */
var InlineObject118 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject118</code>.
   * @alias module:model/InlineObject118
   * @param state {module:model/InlineObject118.StateEnum} The state of the status. Can be one of `error`, `failure`, `pending`, or `success`.
   */
  function InlineObject118(state) {
    _classCallCheck(this, InlineObject118);

    InlineObject118.initialize(this, state);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject118, null, [{
    key: "initialize",
    value: function initialize(obj, state) {
      obj['state'] = state;
    }
    /**
     * Constructs a <code>InlineObject118</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject118} obj Optional instance to populate.
     * @return {module:model/InlineObject118} The populated <code>InlineObject118</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject118();

        if (data.hasOwnProperty('context')) {
          obj['context'] = _ApiClient["default"].convertToType(data['context'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }

        if (data.hasOwnProperty('target_url')) {
          obj['target_url'] = _ApiClient["default"].convertToType(data['target_url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject118;
}();
/**
 * A string label to differentiate this status from the status of other systems.
 * @member {String} context
 * @default 'default'
 */


InlineObject118.prototype['context'] = 'default';
/**
 * A short description of the status.
 * @member {String} description
 */

InlineObject118.prototype['description'] = undefined;
/**
 * The state of the status. Can be one of `error`, `failure`, `pending`, or `success`.
 * @member {module:model/InlineObject118.StateEnum} state
 */

InlineObject118.prototype['state'] = undefined;
/**
 * The target URL to associate with this status. This URL will be linked from the GitHub UI to allow users to easily see the source of the status.   For example, if your continuous integration system is posting build status, you would want to provide the deep link for the build output for this specific SHA:   `http://ci.example.com/user/repo/build/sha`
 * @member {String} target_url
 */

InlineObject118.prototype['target_url'] = undefined;
/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */

InlineObject118['StateEnum'] = {
  /**
   * value: "error"
   * @const
   */
  "error": "error",

  /**
   * value: "failure"
   * @const
   */
  "failure": "failure",

  /**
   * value: "pending"
   * @const
   */
  "pending": "pending",

  /**
   * value: "success"
   * @const
   */
  "success": "success"
};
var _default = InlineObject118;
exports["default"] = _default;