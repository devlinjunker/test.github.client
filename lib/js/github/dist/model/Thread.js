"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _MinimalRepository = _interopRequireDefault(require("./MinimalRepository"));

var _ThreadSubject = _interopRequireDefault(require("./ThreadSubject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Thread model module.
 * @module model/Thread
 * @version 0.0.5
 */
var Thread = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Thread</code>.
   * Thread
   * @alias module:model/Thread
   */
  function Thread() {
    _classCallCheck(this, Thread);

    Thread.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Thread, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Thread</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Thread} obj Optional instance to populate.
     * @return {module:model/Thread} The populated <code>Thread</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Thread();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('last_read_at')) {
          obj['last_read_at'] = _ApiClient["default"].convertToType(data['last_read_at'], 'String');
        }

        if (data.hasOwnProperty('reason')) {
          obj['reason'] = _ApiClient["default"].convertToType(data['reason'], 'String');
        }

        if (data.hasOwnProperty('repository')) {
          obj['repository'] = _MinimalRepository["default"].constructFromObject(data['repository']);
        }

        if (data.hasOwnProperty('subject')) {
          obj['subject'] = _ThreadSubject["default"].constructFromObject(data['subject']);
        }

        if (data.hasOwnProperty('subscription_url')) {
          obj['subscription_url'] = _ApiClient["default"].convertToType(data['subscription_url'], 'String');
        }

        if (data.hasOwnProperty('unread')) {
          obj['unread'] = _ApiClient["default"].convertToType(data['unread'], 'Boolean');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Thread;
}();
/**
 * @member {String} id
 */


Thread.prototype['id'] = undefined;
/**
 * @member {String} last_read_at
 */

Thread.prototype['last_read_at'] = undefined;
/**
 * @member {String} reason
 */

Thread.prototype['reason'] = undefined;
/**
 * @member {module:model/MinimalRepository} repository
 */

Thread.prototype['repository'] = undefined;
/**
 * @member {module:model/ThreadSubject} subject
 */

Thread.prototype['subject'] = undefined;
/**
 * @member {String} subscription_url
 */

Thread.prototype['subscription_url'] = undefined;
/**
 * @member {Boolean} unread
 */

Thread.prototype['unread'] = undefined;
/**
 * @member {String} updated_at
 */

Thread.prototype['updated_at'] = undefined;
/**
 * @member {String} url
 */

Thread.prototype['url'] = undefined;
var _default = Thread;
exports["default"] = _default;