"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PrivateUserPlan = _interopRequireDefault(require("./PrivateUserPlan"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PublicUser model module.
 * @module model/PublicUser
 * @version 0.0.5
 */
var PublicUser = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PublicUser</code>.
   * Public User
   * @alias module:model/PublicUser
   * @param avatarUrl {String} 
   * @param bio {String} 
   * @param blog {String} 
   * @param company {String} 
   * @param createdAt {Date} 
   * @param email {String} 
   * @param eventsUrl {String} 
   * @param followers {Number} 
   * @param followersUrl {String} 
   * @param following {Number} 
   * @param followingUrl {String} 
   * @param gistsUrl {String} 
   * @param gravatarId {String} 
   * @param hireable {Boolean} 
   * @param htmlUrl {String} 
   * @param id {Number} 
   * @param location {String} 
   * @param login {String} 
   * @param name {String} 
   * @param nodeId {String} 
   * @param organizationsUrl {String} 
   * @param publicGists {Number} 
   * @param publicRepos {Number} 
   * @param receivedEventsUrl {String} 
   * @param reposUrl {String} 
   * @param siteAdmin {Boolean} 
   * @param starredUrl {String} 
   * @param subscriptionsUrl {String} 
   * @param type {String} 
   * @param updatedAt {Date} 
   * @param url {String} 
   */
  function PublicUser(avatarUrl, bio, blog, company, createdAt, email, eventsUrl, followers, followersUrl, following, followingUrl, gistsUrl, gravatarId, hireable, htmlUrl, id, location, login, name, nodeId, organizationsUrl, publicGists, publicRepos, receivedEventsUrl, reposUrl, siteAdmin, starredUrl, subscriptionsUrl, type, updatedAt, url) {
    _classCallCheck(this, PublicUser);

    PublicUser.initialize(this, avatarUrl, bio, blog, company, createdAt, email, eventsUrl, followers, followersUrl, following, followingUrl, gistsUrl, gravatarId, hireable, htmlUrl, id, location, login, name, nodeId, organizationsUrl, publicGists, publicRepos, receivedEventsUrl, reposUrl, siteAdmin, starredUrl, subscriptionsUrl, type, updatedAt, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PublicUser, null, [{
    key: "initialize",
    value: function initialize(obj, avatarUrl, bio, blog, company, createdAt, email, eventsUrl, followers, followersUrl, following, followingUrl, gistsUrl, gravatarId, hireable, htmlUrl, id, location, login, name, nodeId, organizationsUrl, publicGists, publicRepos, receivedEventsUrl, reposUrl, siteAdmin, starredUrl, subscriptionsUrl, type, updatedAt, url) {
      obj['avatar_url'] = avatarUrl;
      obj['bio'] = bio;
      obj['blog'] = blog;
      obj['company'] = company;
      obj['created_at'] = createdAt;
      obj['email'] = email;
      obj['events_url'] = eventsUrl;
      obj['followers'] = followers;
      obj['followers_url'] = followersUrl;
      obj['following'] = following;
      obj['following_url'] = followingUrl;
      obj['gists_url'] = gistsUrl;
      obj['gravatar_id'] = gravatarId;
      obj['hireable'] = hireable;
      obj['html_url'] = htmlUrl;
      obj['id'] = id;
      obj['location'] = location;
      obj['login'] = login;
      obj['name'] = name;
      obj['node_id'] = nodeId;
      obj['organizations_url'] = organizationsUrl;
      obj['public_gists'] = publicGists;
      obj['public_repos'] = publicRepos;
      obj['received_events_url'] = receivedEventsUrl;
      obj['repos_url'] = reposUrl;
      obj['site_admin'] = siteAdmin;
      obj['starred_url'] = starredUrl;
      obj['subscriptions_url'] = subscriptionsUrl;
      obj['type'] = type;
      obj['updated_at'] = updatedAt;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>PublicUser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PublicUser} obj Optional instance to populate.
     * @return {module:model/PublicUser} The populated <code>PublicUser</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PublicUser();

        if (data.hasOwnProperty('avatar_url')) {
          obj['avatar_url'] = _ApiClient["default"].convertToType(data['avatar_url'], 'String');
        }

        if (data.hasOwnProperty('bio')) {
          obj['bio'] = _ApiClient["default"].convertToType(data['bio'], 'String');
        }

        if (data.hasOwnProperty('blog')) {
          obj['blog'] = _ApiClient["default"].convertToType(data['blog'], 'String');
        }

        if (data.hasOwnProperty('collaborators')) {
          obj['collaborators'] = _ApiClient["default"].convertToType(data['collaborators'], 'Number');
        }

        if (data.hasOwnProperty('company')) {
          obj['company'] = _ApiClient["default"].convertToType(data['company'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('disk_usage')) {
          obj['disk_usage'] = _ApiClient["default"].convertToType(data['disk_usage'], 'Number');
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

        if (data.hasOwnProperty('owned_private_repos')) {
          obj['owned_private_repos'] = _ApiClient["default"].convertToType(data['owned_private_repos'], 'Number');
        }

        if (data.hasOwnProperty('plan')) {
          obj['plan'] = _PrivateUserPlan["default"].constructFromObject(data['plan']);
        }

        if (data.hasOwnProperty('private_gists')) {
          obj['private_gists'] = _ApiClient["default"].convertToType(data['private_gists'], 'Number');
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

        if (data.hasOwnProperty('total_private_repos')) {
          obj['total_private_repos'] = _ApiClient["default"].convertToType(data['total_private_repos'], 'Number');
        }

        if (data.hasOwnProperty('twitter_username')) {
          obj['twitter_username'] = _ApiClient["default"].convertToType(data['twitter_username'], 'String');
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

  return PublicUser;
}();
/**
 * @member {String} avatar_url
 */


PublicUser.prototype['avatar_url'] = undefined;
/**
 * @member {String} bio
 */

PublicUser.prototype['bio'] = undefined;
/**
 * @member {String} blog
 */

PublicUser.prototype['blog'] = undefined;
/**
 * @member {Number} collaborators
 */

PublicUser.prototype['collaborators'] = undefined;
/**
 * @member {String} company
 */

PublicUser.prototype['company'] = undefined;
/**
 * @member {Date} created_at
 */

PublicUser.prototype['created_at'] = undefined;
/**
 * @member {Number} disk_usage
 */

PublicUser.prototype['disk_usage'] = undefined;
/**
 * @member {String} email
 */

PublicUser.prototype['email'] = undefined;
/**
 * @member {String} events_url
 */

PublicUser.prototype['events_url'] = undefined;
/**
 * @member {Number} followers
 */

PublicUser.prototype['followers'] = undefined;
/**
 * @member {String} followers_url
 */

PublicUser.prototype['followers_url'] = undefined;
/**
 * @member {Number} following
 */

PublicUser.prototype['following'] = undefined;
/**
 * @member {String} following_url
 */

PublicUser.prototype['following_url'] = undefined;
/**
 * @member {String} gists_url
 */

PublicUser.prototype['gists_url'] = undefined;
/**
 * @member {String} gravatar_id
 */

PublicUser.prototype['gravatar_id'] = undefined;
/**
 * @member {Boolean} hireable
 */

PublicUser.prototype['hireable'] = undefined;
/**
 * @member {String} html_url
 */

PublicUser.prototype['html_url'] = undefined;
/**
 * @member {Number} id
 */

PublicUser.prototype['id'] = undefined;
/**
 * @member {String} location
 */

PublicUser.prototype['location'] = undefined;
/**
 * @member {String} login
 */

PublicUser.prototype['login'] = undefined;
/**
 * @member {String} name
 */

PublicUser.prototype['name'] = undefined;
/**
 * @member {String} node_id
 */

PublicUser.prototype['node_id'] = undefined;
/**
 * @member {String} organizations_url
 */

PublicUser.prototype['organizations_url'] = undefined;
/**
 * @member {Number} owned_private_repos
 */

PublicUser.prototype['owned_private_repos'] = undefined;
/**
 * @member {module:model/PrivateUserPlan} plan
 */

PublicUser.prototype['plan'] = undefined;
/**
 * @member {Number} private_gists
 */

PublicUser.prototype['private_gists'] = undefined;
/**
 * @member {Number} public_gists
 */

PublicUser.prototype['public_gists'] = undefined;
/**
 * @member {Number} public_repos
 */

PublicUser.prototype['public_repos'] = undefined;
/**
 * @member {String} received_events_url
 */

PublicUser.prototype['received_events_url'] = undefined;
/**
 * @member {String} repos_url
 */

PublicUser.prototype['repos_url'] = undefined;
/**
 * @member {Boolean} site_admin
 */

PublicUser.prototype['site_admin'] = undefined;
/**
 * @member {String} starred_url
 */

PublicUser.prototype['starred_url'] = undefined;
/**
 * @member {String} subscriptions_url
 */

PublicUser.prototype['subscriptions_url'] = undefined;
/**
 * @member {Date} suspended_at
 */

PublicUser.prototype['suspended_at'] = undefined;
/**
 * @member {Number} total_private_repos
 */

PublicUser.prototype['total_private_repos'] = undefined;
/**
 * @member {String} twitter_username
 */

PublicUser.prototype['twitter_username'] = undefined;
/**
 * @member {String} type
 */

PublicUser.prototype['type'] = undefined;
/**
 * @member {Date} updated_at
 */

PublicUser.prototype['updated_at'] = undefined;
/**
 * @member {String} url
 */

PublicUser.prototype['url'] = undefined;
var _default = PublicUser;
exports["default"] = _default;