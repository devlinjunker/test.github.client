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
 * The ThreadSubscription model module.
 * @module model/ThreadSubscription
 * @version 0.0.5
 */
var ThreadSubscription = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ThreadSubscription</code>.
   * Thread Subscription
   * @alias module:model/ThreadSubscription
   * @param createdAt {Date} 
   * @param ignored {Boolean} 
   * @param reason {String} 
   * @param subscribed {Boolean} 
   * @param url {String} 
   */
  function ThreadSubscription(createdAt, ignored, reason, subscribed, url) {
    _classCallCheck(this, ThreadSubscription);

    ThreadSubscription.initialize(this, createdAt, ignored, reason, subscribed, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ThreadSubscription, null, [{
    key: "initialize",
    value: function initialize(obj, createdAt, ignored, reason, subscribed, url) {
      obj['created_at'] = createdAt;
      obj['ignored'] = ignored;
      obj['reason'] = reason;
      obj['subscribed'] = subscribed;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>ThreadSubscription</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ThreadSubscription} obj Optional instance to populate.
     * @return {module:model/ThreadSubscription} The populated <code>ThreadSubscription</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ThreadSubscription();

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('ignored')) {
          obj['ignored'] = _ApiClient["default"].convertToType(data['ignored'], 'Boolean');
        }

        if (data.hasOwnProperty('reason')) {
          obj['reason'] = _ApiClient["default"].convertToType(data['reason'], 'String');
        }

        if (data.hasOwnProperty('repository_url')) {
          obj['repository_url'] = _ApiClient["default"].convertToType(data['repository_url'], 'String');
        }

        if (data.hasOwnProperty('subscribed')) {
          obj['subscribed'] = _ApiClient["default"].convertToType(data['subscribed'], 'Boolean');
        }

        if (data.hasOwnProperty('thread_url')) {
          obj['thread_url'] = _ApiClient["default"].convertToType(data['thread_url'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ThreadSubscription;
}();
/**
 * @member {Date} created_at
 */


ThreadSubscription.prototype['created_at'] = undefined;
/**
 * @member {Boolean} ignored
 */

ThreadSubscription.prototype['ignored'] = undefined;
/**
 * @member {String} reason
 */

ThreadSubscription.prototype['reason'] = undefined;
/**
 * @member {String} repository_url
 */

ThreadSubscription.prototype['repository_url'] = undefined;
/**
 * @member {Boolean} subscribed
 */

ThreadSubscription.prototype['subscribed'] = undefined;
/**
 * @member {String} thread_url
 */

ThreadSubscription.prototype['thread_url'] = undefined;
/**
 * @member {String} url
 */

ThreadSubscription.prototype['url'] = undefined;
var _default = ThreadSubscription;
exports["default"] = _default;