"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LinkWithType = _interopRequireDefault(require("./LinkWithType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The FeedLinks model module.
 * @module model/FeedLinks
 * @version 0.0.5
 */
var FeedLinks = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FeedLinks</code>.
   * @alias module:model/FeedLinks
   * @param timeline {module:model/LinkWithType} 
   * @param user {module:model/LinkWithType} 
   */
  function FeedLinks(timeline, user) {
    _classCallCheck(this, FeedLinks);

    FeedLinks.initialize(this, timeline, user);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FeedLinks, null, [{
    key: "initialize",
    value: function initialize(obj, timeline, user) {
      obj['timeline'] = timeline;
      obj['user'] = user;
    }
    /**
     * Constructs a <code>FeedLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FeedLinks} obj Optional instance to populate.
     * @return {module:model/FeedLinks} The populated <code>FeedLinks</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FeedLinks();

        if (data.hasOwnProperty('current_user')) {
          obj['current_user'] = _LinkWithType["default"].constructFromObject(data['current_user']);
        }

        if (data.hasOwnProperty('current_user_actor')) {
          obj['current_user_actor'] = _LinkWithType["default"].constructFromObject(data['current_user_actor']);
        }

        if (data.hasOwnProperty('current_user_organization')) {
          obj['current_user_organization'] = _LinkWithType["default"].constructFromObject(data['current_user_organization']);
        }

        if (data.hasOwnProperty('current_user_organizations')) {
          obj['current_user_organizations'] = _ApiClient["default"].convertToType(data['current_user_organizations'], [_LinkWithType["default"]]);
        }

        if (data.hasOwnProperty('current_user_public')) {
          obj['current_user_public'] = _LinkWithType["default"].constructFromObject(data['current_user_public']);
        }

        if (data.hasOwnProperty('security_advisories')) {
          obj['security_advisories'] = _LinkWithType["default"].constructFromObject(data['security_advisories']);
        }

        if (data.hasOwnProperty('timeline')) {
          obj['timeline'] = _LinkWithType["default"].constructFromObject(data['timeline']);
        }

        if (data.hasOwnProperty('user')) {
          obj['user'] = _LinkWithType["default"].constructFromObject(data['user']);
        }
      }

      return obj;
    }
  }]);

  return FeedLinks;
}();
/**
 * @member {module:model/LinkWithType} current_user
 */


FeedLinks.prototype['current_user'] = undefined;
/**
 * @member {module:model/LinkWithType} current_user_actor
 */

FeedLinks.prototype['current_user_actor'] = undefined;
/**
 * @member {module:model/LinkWithType} current_user_organization
 */

FeedLinks.prototype['current_user_organization'] = undefined;
/**
 * @member {Array.<module:model/LinkWithType>} current_user_organizations
 */

FeedLinks.prototype['current_user_organizations'] = undefined;
/**
 * @member {module:model/LinkWithType} current_user_public
 */

FeedLinks.prototype['current_user_public'] = undefined;
/**
 * @member {module:model/LinkWithType} security_advisories
 */

FeedLinks.prototype['security_advisories'] = undefined;
/**
 * @member {module:model/LinkWithType} timeline
 */

FeedLinks.prototype['timeline'] = undefined;
/**
 * @member {module:model/LinkWithType} user
 */

FeedLinks.prototype['user'] = undefined;
var _default = FeedLinks;
exports["default"] = _default;