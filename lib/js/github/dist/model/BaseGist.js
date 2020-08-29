"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AnyType = _interopRequireDefault(require("./AnyType"));

var _BaseGistFiles = _interopRequireDefault(require("./BaseGistFiles"));

var _SimpleUser = _interopRequireDefault(require("./SimpleUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The BaseGist model module.
 * @module model/BaseGist
 * @version 0.0.5
 */
var BaseGist = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BaseGist</code>.
   * Base Gist
   * @alias module:model/BaseGist
   * @param comments {Number} 
   * @param commentsUrl {String} 
   * @param commitsUrl {String} 
   * @param createdAt {Date} 
   * @param description {String} 
   * @param files {Object.<String, module:model/BaseGistFiles>} 
   * @param forksUrl {String} 
   * @param gitPullUrl {String} 
   * @param gitPushUrl {String} 
   * @param htmlUrl {String} 
   * @param id {String} 
   * @param nodeId {String} 
   * @param _public {Boolean} 
   * @param updatedAt {Date} 
   * @param url {String} 
   * @param user {module:model/SimpleUser} 
   */
  function BaseGist(comments, commentsUrl, commitsUrl, createdAt, description, files, forksUrl, gitPullUrl, gitPushUrl, htmlUrl, id, nodeId, _public, updatedAt, url, user) {
    _classCallCheck(this, BaseGist);

    BaseGist.initialize(this, comments, commentsUrl, commitsUrl, createdAt, description, files, forksUrl, gitPullUrl, gitPushUrl, htmlUrl, id, nodeId, _public, updatedAt, url, user);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BaseGist, null, [{
    key: "initialize",
    value: function initialize(obj, comments, commentsUrl, commitsUrl, createdAt, description, files, forksUrl, gitPullUrl, gitPushUrl, htmlUrl, id, nodeId, _public, updatedAt, url, user) {
      obj['comments'] = comments;
      obj['comments_url'] = commentsUrl;
      obj['commits_url'] = commitsUrl;
      obj['created_at'] = createdAt;
      obj['description'] = description;
      obj['files'] = files;
      obj['forks_url'] = forksUrl;
      obj['git_pull_url'] = gitPullUrl;
      obj['git_push_url'] = gitPushUrl;
      obj['html_url'] = htmlUrl;
      obj['id'] = id;
      obj['node_id'] = nodeId;
      obj['public'] = _public;
      obj['updated_at'] = updatedAt;
      obj['url'] = url;
      obj['user'] = user;
    }
    /**
     * Constructs a <code>BaseGist</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BaseGist} obj Optional instance to populate.
     * @return {module:model/BaseGist} The populated <code>BaseGist</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BaseGist();

        if (data.hasOwnProperty('comments')) {
          obj['comments'] = _ApiClient["default"].convertToType(data['comments'], 'Number');
        }

        if (data.hasOwnProperty('comments_url')) {
          obj['comments_url'] = _ApiClient["default"].convertToType(data['comments_url'], 'String');
        }

        if (data.hasOwnProperty('commits_url')) {
          obj['commits_url'] = _ApiClient["default"].convertToType(data['commits_url'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('files')) {
          obj['files'] = _ApiClient["default"].convertToType(data['files'], {
            'String': _BaseGistFiles["default"]
          });
        }

        if (data.hasOwnProperty('forks')) {
          obj['forks'] = _ApiClient["default"].convertToType(data['forks'], [_AnyType["default"]]);
        }

        if (data.hasOwnProperty('forks_url')) {
          obj['forks_url'] = _ApiClient["default"].convertToType(data['forks_url'], 'String');
        }

        if (data.hasOwnProperty('git_pull_url')) {
          obj['git_pull_url'] = _ApiClient["default"].convertToType(data['git_pull_url'], 'String');
        }

        if (data.hasOwnProperty('git_push_url')) {
          obj['git_push_url'] = _ApiClient["default"].convertToType(data['git_push_url'], 'String');
        }

        if (data.hasOwnProperty('history')) {
          obj['history'] = _ApiClient["default"].convertToType(data['history'], [_AnyType["default"]]);
        }

        if (data.hasOwnProperty('html_url')) {
          obj['html_url'] = _ApiClient["default"].convertToType(data['html_url'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('node_id')) {
          obj['node_id'] = _ApiClient["default"].convertToType(data['node_id'], 'String');
        }

        if (data.hasOwnProperty('owner')) {
          obj['owner'] = _ApiClient["default"].convertToType(data['owner'], _SimpleUser["default"]);
        }

        if (data.hasOwnProperty('public')) {
          obj['public'] = _ApiClient["default"].convertToType(data['public'], 'Boolean');
        }

        if (data.hasOwnProperty('truncated')) {
          obj['truncated'] = _ApiClient["default"].convertToType(data['truncated'], 'Boolean');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'Date');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('user')) {
          obj['user'] = _ApiClient["default"].convertToType(data['user'], _SimpleUser["default"]);
        }
      }

      return obj;
    }
  }]);

  return BaseGist;
}();
/**
 * @member {Number} comments
 */


BaseGist.prototype['comments'] = undefined;
/**
 * @member {String} comments_url
 */

BaseGist.prototype['comments_url'] = undefined;
/**
 * @member {String} commits_url
 */

BaseGist.prototype['commits_url'] = undefined;
/**
 * @member {Date} created_at
 */

BaseGist.prototype['created_at'] = undefined;
/**
 * @member {String} description
 */

BaseGist.prototype['description'] = undefined;
/**
 * @member {Object.<String, module:model/BaseGistFiles>} files
 */

BaseGist.prototype['files'] = undefined;
/**
 * @member {Array.<module:model/AnyType>} forks
 */

BaseGist.prototype['forks'] = undefined;
/**
 * @member {String} forks_url
 */

BaseGist.prototype['forks_url'] = undefined;
/**
 * @member {String} git_pull_url
 */

BaseGist.prototype['git_pull_url'] = undefined;
/**
 * @member {String} git_push_url
 */

BaseGist.prototype['git_push_url'] = undefined;
/**
 * @member {Array.<module:model/AnyType>} history
 */

BaseGist.prototype['history'] = undefined;
/**
 * @member {String} html_url
 */

BaseGist.prototype['html_url'] = undefined;
/**
 * @member {String} id
 */

BaseGist.prototype['id'] = undefined;
/**
 * @member {String} node_id
 */

BaseGist.prototype['node_id'] = undefined;
/**
 * @member {module:model/SimpleUser} owner
 */

BaseGist.prototype['owner'] = undefined;
/**
 * @member {Boolean} public
 */

BaseGist.prototype['public'] = undefined;
/**
 * @member {Boolean} truncated
 */

BaseGist.prototype['truncated'] = undefined;
/**
 * @member {Date} updated_at
 */

BaseGist.prototype['updated_at'] = undefined;
/**
 * @member {String} url
 */

BaseGist.prototype['url'] = undefined;
/**
 * @member {module:model/SimpleUser} user
 */

BaseGist.prototype['user'] = undefined;
var _default = BaseGist;
exports["default"] = _default;