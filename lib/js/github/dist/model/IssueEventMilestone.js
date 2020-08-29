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
 * The IssueEventMilestone model module.
 * @module model/IssueEventMilestone
 * @version 0.0.5
 */
var IssueEventMilestone = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IssueEventMilestone</code>.
   * Issue Event Milestone
   * @alias module:model/IssueEventMilestone
   * @param title {String} 
   */
  function IssueEventMilestone(title) {
    _classCallCheck(this, IssueEventMilestone);

    IssueEventMilestone.initialize(this, title);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IssueEventMilestone, null, [{
    key: "initialize",
    value: function initialize(obj, title) {
      obj['title'] = title;
    }
    /**
     * Constructs a <code>IssueEventMilestone</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueEventMilestone} obj Optional instance to populate.
     * @return {module:model/IssueEventMilestone} The populated <code>IssueEventMilestone</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IssueEventMilestone();

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }
      }

      return obj;
    }
  }]);

  return IssueEventMilestone;
}();
/**
 * @member {String} title
 */


IssueEventMilestone.prototype['title'] = undefined;
var _default = IssueEventMilestone;
exports["default"] = _default;