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
 * The InlineObject80 model module.
 * @module model/InlineObject80
 * @version 0.0.5
 */
var InlineObject80 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject80</code>.
   * @alias module:model/InlineObject80
   * @param title {String} The title of the issue.
   */
  function InlineObject80(title) {
    _classCallCheck(this, InlineObject80);

    InlineObject80.initialize(this, title);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject80, null, [{
    key: "initialize",
    value: function initialize(obj, title) {
      obj['title'] = title;
    }
    /**
     * Constructs a <code>InlineObject80</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject80} obj Optional instance to populate.
     * @return {module:model/InlineObject80} The populated <code>InlineObject80</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject80();

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

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject80;
}();
/**
 * Login for the user that this issue should be assigned to. _NOTE: Only users with push access can set the assignee for new issues. The assignee is silently dropped otherwise. **This field is deprecated.**_
 * @member {String} assignee
 */


InlineObject80.prototype['assignee'] = undefined;
/**
 * Logins for Users to assign to this issue. _NOTE: Only users with push access can set assignees for new issues. Assignees are silently dropped otherwise._
 * @member {Array.<String>} assignees
 */

InlineObject80.prototype['assignees'] = undefined;
/**
 * The contents of the issue.
 * @member {String} body
 */

InlineObject80.prototype['body'] = undefined;
/**
 * Labels to associate with this issue. _NOTE: Only users with push access can set labels for new issues. Labels are silently dropped otherwise._
 * @member {Array.<module:model/OneOfstringobject>} labels
 */

InlineObject80.prototype['labels'] = undefined;
/**
 * The `number` of the milestone to associate this issue with. _NOTE: Only users with push access can set the milestone for new issues. The milestone is silently dropped otherwise._
 * @member {Number} milestone
 */

InlineObject80.prototype['milestone'] = undefined;
/**
 * The title of the issue.
 * @member {String} title
 */

InlineObject80.prototype['title'] = undefined;
var _default = InlineObject80;
exports["default"] = _default;