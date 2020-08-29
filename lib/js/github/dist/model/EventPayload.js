"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EventPayloadPages = _interopRequireDefault(require("./EventPayloadPages"));

var _IssueComment = _interopRequireDefault(require("./IssueComment"));

var _IssueSimple = _interopRequireDefault(require("./IssueSimple"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EventPayload model module.
 * @module model/EventPayload
 * @version 0.0.5
 */
var EventPayload = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EventPayload</code>.
   * @alias module:model/EventPayload
   * @param action {String} 
   */
  function EventPayload(action) {
    _classCallCheck(this, EventPayload);

    EventPayload.initialize(this, action);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EventPayload, null, [{
    key: "initialize",
    value: function initialize(obj, action) {
      obj['action'] = action;
    }
    /**
     * Constructs a <code>EventPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventPayload} obj Optional instance to populate.
     * @return {module:model/EventPayload} The populated <code>EventPayload</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EventPayload();

        if (data.hasOwnProperty('action')) {
          obj['action'] = _ApiClient["default"].convertToType(data['action'], 'String');
        }

        if (data.hasOwnProperty('comment')) {
          obj['comment'] = _IssueComment["default"].constructFromObject(data['comment']);
        }

        if (data.hasOwnProperty('issue')) {
          obj['issue'] = _IssueSimple["default"].constructFromObject(data['issue']);
        }

        if (data.hasOwnProperty('pages')) {
          obj['pages'] = _ApiClient["default"].convertToType(data['pages'], [_EventPayloadPages["default"]]);
        }
      }

      return obj;
    }
  }]);

  return EventPayload;
}();
/**
 * @member {String} action
 */


EventPayload.prototype['action'] = undefined;
/**
 * @member {module:model/IssueComment} comment
 */

EventPayload.prototype['comment'] = undefined;
/**
 * @member {module:model/IssueSimple} issue
 */

EventPayload.prototype['issue'] = undefined;
/**
 * @member {Array.<module:model/EventPayloadPages>} pages
 */

EventPayload.prototype['pages'] = undefined;
var _default = EventPayload;
exports["default"] = _default;