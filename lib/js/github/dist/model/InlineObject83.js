"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _OneOfstringobject = _interopRequireDefault(require("./OneOfstringobject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineObject83 model module.
 * @module model/InlineObject83
 * @version 0.0.5
 */
var InlineObject83 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject83</code>.
   * @alias module:model/InlineObject83
   */
  function InlineObject83() {
    _classCallCheck(this, InlineObject83);

    InlineObject83.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject83, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject83</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject83} obj Optional instance to populate.
     * @return {module:model/InlineObject83} The populated <code>InlineObject83</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject83();

        if (data.hasOwnProperty('assignee')) {
          obj['assignee'] = _ApiClient["default"].convertToType(data['assignee'], 'String');
        }

        if (data.hasOwnProperty('assignees')) {
          obj['assignees'] = _ApiClient["default"].convertToType(data['assignees'], ['String']);
        }

        if (data.hasOwnProperty('body')) {
          obj['body'] = _ApiClient["default"].convertToType(data['body'], 'String');
        }

        if (data.hasOwnProperty('labels')) {
          obj['labels'] = _ApiClient["default"].convertToType(data['labels'], [_OneOfstringobject["default"]]);
        }

        if (data.hasOwnProperty('milestone')) {
          obj['milestone'] = _ApiClient["default"].convertToType(data['milestone'], 'Number');
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

  return InlineObject83;
}();
/**
 * Login for the user that this issue should be assigned to. **This field is deprecated.**
 * @member {String} assignee
 */


InlineObject83.prototype['assignee'] = undefined;
/**
 * Logins for Users to assign to this issue. Pass one or more user logins to _replace_ the set of assignees on this Issue. Send an empty array (`[]`) to clear all assignees from the Issue. _NOTE: Only users with push access can set assignees for new issues. Assignees are silently dropped otherwise._
 * @member {Array.<String>} assignees
 */

InlineObject83.prototype['assignees'] = undefined;
/**
 * The contents of the issue.
 * @member {String} body
 */

InlineObject83.prototype['body'] = undefined;
/**
 * Labels to associate with this issue. Pass one or more Labels to _replace_ the set of Labels on this Issue. Send an empty array (`[]`) to clear all Labels from the Issue. _NOTE: Only users with push access can set labels for issues. Labels are silently dropped otherwise._
 * @member {Array.<module:model/OneOfstringobject>} labels
 */

InlineObject83.prototype['labels'] = undefined;
/**
 * The `number` of the milestone to associate this issue with or `null` to remove current. _NOTE: Only users with push access can set the milestone for issues. The milestone is silently dropped otherwise._
 * @member {Number} milestone
 */

InlineObject83.prototype['milestone'] = undefined;
/**
 * State of the issue. Either `open` or `closed`.
 * @member {module:model/InlineObject83.StateEnum} state
 */

InlineObject83.prototype['state'] = undefined;
/**
 * The title of the issue.
 * @member {String} title
 */

InlineObject83.prototype['title'] = undefined;
/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */

InlineObject83['StateEnum'] = {
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
var _default = InlineObject83;
exports["default"] = _default;