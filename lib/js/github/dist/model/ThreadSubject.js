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
 * The ThreadSubject model module.
 * @module model/ThreadSubject
 * @version 0.0.5
 */
var ThreadSubject = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ThreadSubject</code>.
   * @alias module:model/ThreadSubject
   */
  function ThreadSubject() {
    _classCallCheck(this, ThreadSubject);

    ThreadSubject.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ThreadSubject, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ThreadSubject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ThreadSubject} obj Optional instance to populate.
     * @return {module:model/ThreadSubject} The populated <code>ThreadSubject</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ThreadSubject();

        if (data.hasOwnProperty('latest_comment_url')) {
          obj['latest_comment_url'] = _ApiClient["default"].convertToType(data['latest_comment_url'], 'String');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ThreadSubject;
}();
/**
 * @member {String} latest_comment_url
 */


ThreadSubject.prototype['latest_comment_url'] = undefined;
/**
 * @member {String} title
 */

ThreadSubject.prototype['title'] = undefined;
/**
 * @member {String} type
 */

ThreadSubject.prototype['type'] = undefined;
/**
 * @member {String} url
 */

ThreadSubject.prototype['url'] = undefined;
var _default = ThreadSubject;
exports["default"] = _default;