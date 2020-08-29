"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FeedLinks = _interopRequireDefault(require("./FeedLinks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Feed model module.
 * @module model/Feed
 * @version 0.0.5
 */
var Feed = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Feed</code>.
   * Feed
   * @alias module:model/Feed
   * @param links {module:model/FeedLinks} 
   * @param timelineUrl {String} 
   * @param userUrl {String} 
   */
  function Feed(links, timelineUrl, userUrl) {
    _classCallCheck(this, Feed);

    Feed.initialize(this, links, timelineUrl, userUrl);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Feed, null, [{
    key: "initialize",
    value: function initialize(obj, links, timelineUrl, userUrl) {
      obj['_links'] = links;
      obj['timeline_url'] = timelineUrl;
      obj['user_url'] = userUrl;
    }
    /**
     * Constructs a <code>Feed</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Feed} obj Optional instance to populate.
     * @return {module:model/Feed} The populated <code>Feed</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Feed();

        if (data.hasOwnProperty('_links')) {
          obj['_links'] = _FeedLinks["default"].constructFromObject(data['_links']);
        }

        if (data.hasOwnProperty('current_user_actor_url')) {
          obj['current_user_actor_url'] = _ApiClient["default"].convertToType(data['current_user_actor_url'], 'String');
        }

        if (data.hasOwnProperty('current_user_organization_url')) {
          obj['current_user_organization_url'] = _ApiClient["default"].convertToType(data['current_user_organization_url'], 'String');
        }

        if (data.hasOwnProperty('current_user_organization_urls')) {
          obj['current_user_organization_urls'] = _ApiClient["default"].convertToType(data['current_user_organization_urls'], ['String']);
        }

        if (data.hasOwnProperty('current_user_public_url')) {
          obj['current_user_public_url'] = _ApiClient["default"].convertToType(data['current_user_public_url'], 'String');
        }

        if (data.hasOwnProperty('current_user_url')) {
          obj['current_user_url'] = _ApiClient["default"].convertToType(data['current_user_url'], 'String');
        }

        if (data.hasOwnProperty('security_advisories_url')) {
          obj['security_advisories_url'] = _ApiClient["default"].convertToType(data['security_advisories_url'], 'String');
        }

        if (data.hasOwnProperty('timeline_url')) {
          obj['timeline_url'] = _ApiClient["default"].convertToType(data['timeline_url'], 'String');
        }

        if (data.hasOwnProperty('user_url')) {
          obj['user_url'] = _ApiClient["default"].convertToType(data['user_url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Feed;
}();
/**
 * @member {module:model/FeedLinks} _links
 */


Feed.prototype['_links'] = undefined;
/**
 * @member {String} current_user_actor_url
 */

Feed.prototype['current_user_actor_url'] = undefined;
/**
 * @member {String} current_user_organization_url
 */

Feed.prototype['current_user_organization_url'] = undefined;
/**
 * @member {Array.<String>} current_user_organization_urls
 */

Feed.prototype['current_user_organization_urls'] = undefined;
/**
 * @member {String} current_user_public_url
 */

Feed.prototype['current_user_public_url'] = undefined;
/**
 * @member {String} current_user_url
 */

Feed.prototype['current_user_url'] = undefined;
/**
 * @member {String} security_advisories_url
 */

Feed.prototype['security_advisories_url'] = undefined;
/**
 * @member {String} timeline_url
 */

Feed.prototype['timeline_url'] = undefined;
/**
 * @member {String} user_url
 */

Feed.prototype['user_url'] = undefined;
var _default = Feed;
exports["default"] = _default;