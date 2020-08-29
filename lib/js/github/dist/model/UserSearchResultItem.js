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
 * The UserSearchResultItem model module.
 * @module model/UserSearchResultItem
 * @version 0.0.5
 */
var UserSearchResultItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UserSearchResultItem</code>.
   * User Search Result Item
   * @alias module:model/UserSearchResultItem
   * @param avatarUrl {String} 
   * @param eventsUrl {String} 
   * @param followersUrl {String} 
   * @param followingUrl {String} 
   * @param gistsUrl {String} 
   * @param gravatarId {String} 
   * @param htmlUrl {String} 
   * @param id {Number} 
   * @param login {String} 
   * @param nodeId {String} 
   * @param organizationsUrl {String} 
   * @param receivedEventsUrl {String} 
   * @param reposUrl {String} 
   * @param score {Number} 
   * @param siteAdmin {Boolean} 
   * @param starredUrl {String} 
   * @param subscriptionsUrl {String} 
   * @param type {String} 
   * @param url {String} 
   */
  function UserSearchResultItem(avatarUrl, eventsUrl, followersUrl, followingUrl, gistsUrl, gravatarId, htmlUrl, id, login, nodeId, organizationsUrl, receivedEventsUrl, reposUrl, score, siteAdmin, starredUrl, subscriptionsUrl, type, url) {
    _classCallCheck(this, UserSearchResultItem);

    UserSearchResultItem.initialize(this, avatarUrl, eventsUrl, followersUrl, followingUrl, gistsUrl, gravatarId, htmlUrl, id, login, nodeId, organizationsUrl, receivedEventsUrl, reposUrl, score, siteAdmin, starredUrl, subscriptionsUrl, type, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UserSearchResultItem, null, [{
    key: "initialize",
    value: function initialize(obj, avatarUrl, eventsUrl, followersUrl, followingUrl, gistsUrl, gravatarId, htmlUrl, id, login, nodeId, organizationsUrl, receivedEventsUrl, reposUrl, score, siteAdmin, starredUrl, subscriptionsUrl, type, url) {
      obj['avatar_url'] = avatarUrl;
      obj['events_url'] = eventsUrl;
      obj['followers_url'] = followersUrl;
      obj['following_url'] = followingUrl;
      obj['gists_url'] = gistsUrl;
      obj['gravatar_id'] = gravatarId;
      obj['html_url'] = htmlUrl;
      obj['id'] = id;
      obj['login'] = login;
      obj['node_id'] = nodeId;
      obj['organizations_url'] = organizationsUrl;
      obj['received_events_url'] = receivedEventsUrl;
      obj['repos_url'] = reposUrl;
      obj['score'] = score;
      obj['site_admin'] = siteAdmin;
      obj['starred_url'] = starredUrl;
      obj['subscriptions_url'] = subscriptionsUrl;
      obj['type'] = type;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>UserSearchResultItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserSearchResultItem} obj Optional instance to populate.
     * @return {module:model/UserSearchResultItem} The populated <code>UserSearchResultItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UserSearchResultItem();

        if (data.hasOwnProperty('avatar_url')) {
          obj['avatar_url'] = _ApiClient["default"].convertToType(data['avatar_url'], 'String');
        }

        if (data.hasOwnProperty('bio')) {
          obj['bio'] = _ApiClient["default"].convertToType(data['bio'], 'String');
        }

        if (data.hasOwnProperty('blog')) {
          obj['blog'] = _ApiClient["default"].convertToType(data['blog'], 'String');
        }

        if (data.hasOwnProperty('company')) {
          obj['company'] = _ApiClient["default"].convertToType(data['company'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('events_url')) {
          obj['events_url'] = _ApiClient["default"].convertToType(data['events_url'], 'String');
        }

        if (data.hasOwnProperty('followers')) {
          obj['followers'] = _ApiClient["default"].convertToType(data['followers'], 'Number');
        }

        if (data.hasOwnProperty('followers_url')) {
          obj['followers_url'] = _ApiClient["default"].convertToType(data['followers_url'], 'String');
        }

        if (data.hasOwnProperty('following')) {
          obj['following'] = _ApiClient["default"].convertToType(data['following'], 'Number');
        }

        if (data.hasOwnProperty('following_url')) {
          obj['following_url'] = _ApiClient["default"].convertToType(data['following_url'], 'String');
        }

        if (data.hasOwnProperty('gists_url')) {
          obj['gists_url'] = _ApiClient["default"].convertToType(data['gists_url'], 'String');
        }

        if (data.hasOwnProperty('gravatar_id')) {
          obj['gravatar_id'] = _ApiClient["default"].convertToType(data['gravatar_id'], 'String');
        }

        if (data.hasOwnProperty('hireable')) {
          obj['hireable'] = _ApiClient["default"].convertToType(data['hireable'], 'Boolean');
        }

        if (data.hasOwnProperty('html_url')) {
          obj['html_url'] = _ApiClient["default"].convertToType(data['html_url'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('location')) {
          obj['location'] = _ApiClient["default"].convertToType(data['location'], 'String');
        }

        if (data.hasOwnProperty('login')) {
          obj['login'] = _ApiClient["default"].convertToType(data['login'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('node_id')) {
          obj['node_id'] = _ApiClient["default"].convertToType(data['node_id'], 'String');
        }

        if (data.hasOwnProperty('organizations_url')) {
          obj['organizations_url'] = _ApiClient["default"].convertToType(data['organizations_url'], 'String');
        }

        if (data.hasOwnProperty('public_gists')) {
          obj['public_gists'] = _ApiClient["default"].convertToType(data['public_gists'], 'Number');
        }

        if (data.hasOwnProperty('public_repos')) {
          obj['public_repos'] = _ApiClient["default"].convertToType(data['public_repos'], 'Number');
        }

        if (data.hasOwnProperty('received_events_url')) {
          obj['received_events_url'] = _ApiClient["default"].convertToType(data['received_events_url'], 'String');
        }

        if (data.hasOwnProperty('repos_url')) {
          obj['repos_url'] = _ApiClient["default"].convertToType(data['repos_url'], 'String');
        }

        if (data.hasOwnProperty('score')) {
          obj['score'] = _ApiClient["default"].convertToType(data['score'], 'Number');
        }

        if (data.hasOwnProperty('site_admin')) {
          obj['site_admin'] = _ApiClient["default"].convertToType(data['site_admin'], 'Boolean');
        }

        if (data.hasOwnProperty('starred_url')) {
          obj['starred_url'] = _ApiClient["default"].convertToType(data['starred_url'], 'String');
        }

        if (data.hasOwnProperty('subscriptions_url')) {
          obj['subscriptions_url'] = _ApiClient["default"].convertToType(data['subscriptions_url'], 'String');
        }

        if (data.hasOwnProperty('suspended_at')) {
          obj['suspended_at'] = _ApiClient["default"].convertToType(data['suspended_at'], 'Date');
        }

        if (data.hasOwnProperty('text_matches')) {
          obj['text_matches'] = _ApiClient["default"].convertToType(data['text_matches'], [Object]);
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'Date');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return UserSearchResultItem;
}();
/**
 * @member {String} avatar_url
 */


UserSearchResultItem.prototype['avatar_url'] = undefined;
/**
 * @member {String} bio
 */

UserSearchResultItem.prototype['bio'] = undefined;
/**
 * @member {String} blog
 */

UserSearchResultItem.prototype['blog'] = undefined;
/**
 * @member {String} company
 */

UserSearchResultItem.prototype['company'] = undefined;
/**
 * @member {Date} created_at
 */

UserSearchResultItem.prototype['created_at'] = undefined;
/**
 * @member {String} email
 */

UserSearchResultItem.prototype['email'] = undefined;
/**
 * @member {String} events_url
 */

UserSearchResultItem.prototype['events_url'] = undefined;
/**
 * @member {Number} followers
 */

UserSearchResultItem.prototype['followers'] = undefined;
/**
 * @member {String} followers_url
 */

UserSearchResultItem.prototype['followers_url'] = undefined;
/**
 * @member {Number} following
 */

UserSearchResultItem.prototype['following'] = undefined;
/**
 * @member {String} following_url
 */

UserSearchResultItem.prototype['following_url'] = undefined;
/**
 * @member {String} gists_url
 */

UserSearchResultItem.prototype['gists_url'] = undefined;
/**
 * @member {String} gravatar_id
 */

UserSearchResultItem.prototype['gravatar_id'] = undefined;
/**
 * @member {Boolean} hireable
 */

UserSearchResultItem.prototype['hireable'] = undefined;
/**
 * @member {String} html_url
 */

UserSearchResultItem.prototype['html_url'] = undefined;
/**
 * @member {Number} id
 */

UserSearchResultItem.prototype['id'] = undefined;
/**
 * @member {String} location
 */

UserSearchResultItem.prototype['location'] = undefined;
/**
 * @member {String} login
 */

UserSearchResultItem.prototype['login'] = undefined;
/**
 * @member {String} name
 */

UserSearchResultItem.prototype['name'] = undefined;
/**
 * @member {String} node_id
 */

UserSearchResultItem.prototype['node_id'] = undefined;
/**
 * @member {String} organizations_url
 */

UserSearchResultItem.prototype['organizations_url'] = undefined;
/**
 * @member {Number} public_gists
 */

UserSearchResultItem.prototype['public_gists'] = undefined;
/**
 * @member {Number} public_repos
 */

UserSearchResultItem.prototype['public_repos'] = undefined;
/**
 * @member {String} received_events_url
 */

UserSearchResultItem.prototype['received_events_url'] = undefined;
/**
 * @member {String} repos_url
 */

UserSearchResultItem.prototype['repos_url'] = undefined;
/**
 * @member {Number} score
 */

UserSearchResultItem.prototype['score'] = undefined;
/**
 * @member {Boolean} site_admin
 */

UserSearchResultItem.prototype['site_admin'] = undefined;
/**
 * @member {String} starred_url
 */

UserSearchResultItem.prototype['starred_url'] = undefined;
/**
 * @member {String} subscriptions_url
 */

UserSearchResultItem.prototype['subscriptions_url'] = undefined;
/**
 * @member {Date} suspended_at
 */

UserSearchResultItem.prototype['suspended_at'] = undefined;
/**
 * @member {Array.<Object>} text_matches
 */

UserSearchResultItem.prototype['text_matches'] = undefined;
/**
 * @member {String} type
 */

UserSearchResultItem.prototype['type'] = undefined;
/**
 * @member {Date} updated_at
 */

UserSearchResultItem.prototype['updated_at'] = undefined;
/**
 * @member {String} url
 */

UserSearchResultItem.prototype['url'] = undefined;
var _default = UserSearchResultItem;
exports["default"] = _default;