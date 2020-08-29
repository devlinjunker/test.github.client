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
 * The EventPayloadPages model module.
 * @module model/EventPayloadPages
 * @version 0.0.5
 */
var EventPayloadPages = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EventPayloadPages</code>.
   * @alias module:model/EventPayloadPages
   */
  function EventPayloadPages() {
    _classCallCheck(this, EventPayloadPages);

    EventPayloadPages.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EventPayloadPages, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EventPayloadPages</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventPayloadPages} obj Optional instance to populate.
     * @return {module:model/EventPayloadPages} The populated <code>EventPayloadPages</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EventPayloadPages();

        if (data.hasOwnProperty('action')) {
          obj['action'] = _ApiClient["default"].convertToType(data['action'], 'String');
        }

        if (data.hasOwnProperty('html_url')) {
          obj['html_url'] = _ApiClient["default"].convertToType(data['html_url'], 'String');
        }

        if (data.hasOwnProperty('page_name')) {
          obj['page_name'] = _ApiClient["default"].convertToType(data['page_name'], 'String');
        }

        if (data.hasOwnProperty('sha')) {
          obj['sha'] = _ApiClient["default"].convertToType(data['sha'], 'String');
        }

        if (data.hasOwnProperty('summary')) {
          obj['summary'] = _ApiClient["default"].convertToType(data['summary'], 'String');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }
      }

      return obj;
    }
  }]);

  return EventPayloadPages;
}();
/**
 * @member {String} action
 */


EventPayloadPages.prototype['action'] = undefined;
/**
 * @member {String} html_url
 */

EventPayloadPages.prototype['html_url'] = undefined;
/**
 * @member {String} page_name
 */

EventPayloadPages.prototype['page_name'] = undefined;
/**
 * @member {String} sha
 */

EventPayloadPages.prototype['sha'] = undefined;
/**
 * @member {String} summary
 */

EventPayloadPages.prototype['summary'] = undefined;
/**
 * @member {String} title
 */

EventPayloadPages.prototype['title'] = undefined;
var _default = EventPayloadPages;
exports["default"] = _default;