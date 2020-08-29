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
 * The RepositorySubscription model module.
 * @module model/RepositorySubscription
 * @version 0.0.5
 */
var RepositorySubscription = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RepositorySubscription</code>.
   * Repository invitations let you manage who you collaborate with.
   * @alias module:model/RepositorySubscription
   * @param createdAt {Date} 
   * @param ignored {Boolean} Determines if all notifications should be blocked from this repository.
   * @param reason {String} 
   * @param repositoryUrl {String} 
   * @param subscribed {Boolean} Determines if notifications should be received from this repository.
   * @param url {String} 
   */
  function RepositorySubscription(createdAt, ignored, reason, repositoryUrl, subscribed, url) {
    _classCallCheck(this, RepositorySubscription);

    RepositorySubscription.initialize(this, createdAt, ignored, reason, repositoryUrl, subscribed, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RepositorySubscription, null, [{
    key: "initialize",
    value: function initialize(obj, createdAt, ignored, reason, repositoryUrl, subscribed, url) {
      obj['created_at'] = createdAt;
      obj['ignored'] = ignored;
      obj['reason'] = reason;
      obj['repository_url'] = repositoryUrl;
      obj['subscribed'] = subscribed;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>RepositorySubscription</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RepositorySubscription} obj Optional instance to populate.
     * @return {module:model/RepositorySubscription} The populated <code>RepositorySubscription</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RepositorySubscription();

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

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RepositorySubscription;
}();
/**
 * @member {Date} created_at
 */


RepositorySubscription.prototype['created_at'] = undefined;
/**
 * Determines if all notifications should be blocked from this repository.
 * @member {Boolean} ignored
 */

RepositorySubscription.prototype['ignored'] = undefined;
/**
 * @member {String} reason
 */

RepositorySubscription.prototype['reason'] = undefined;
/**
 * @member {String} repository_url
 */

RepositorySubscription.prototype['repository_url'] = undefined;
/**
 * Determines if notifications should be received from this repository.
 * @member {Boolean} subscribed
 */

RepositorySubscription.prototype['subscribed'] = undefined;
/**
 * @member {String} url
 */

RepositorySubscription.prototype['url'] = undefined;
var _default = RepositorySubscription;
exports["default"] = _default;