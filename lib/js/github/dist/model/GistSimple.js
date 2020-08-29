"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GistSimpleFiles = _interopRequireDefault(require("./GistSimpleFiles"));

var _SimpleUser = _interopRequireDefault(require("./SimpleUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GistSimple model module.
 * @module model/GistSimple
 * @version 0.0.5
 */
var GistSimple = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GistSimple</code>.
   * Gist Simple
   * @alias module:model/GistSimple
   */
  function GistSimple() {
    _classCallCheck(this, GistSimple);

    GistSimple.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GistSimple, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GistSimple</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GistSimple} obj Optional instance to populate.
     * @return {module:model/GistSimple} The populated <code>GistSimple</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GistSimple();

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
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('files')) {
          obj['files'] = _ApiClient["default"].convertToType(data['files'], {
            'String': _GistSimpleFiles["default"]
          });
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
          obj['owner'] = _SimpleUser["default"].constructFromObject(data['owner']);
        }

        if (data.hasOwnProperty('public')) {
          obj['public'] = _ApiClient["default"].convertToType(data['public'], 'Boolean');
        }

        if (data.hasOwnProperty('truncated')) {
          obj['truncated'] = _ApiClient["default"].convertToType(data['truncated'], 'Boolean');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('user')) {
          obj['user'] = _ApiClient["default"].convertToType(data['user'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GistSimple;
}();
/**
 * @member {Number} comments
 */


GistSimple.prototype['comments'] = undefined;
/**
 * @member {String} comments_url
 */

GistSimple.prototype['comments_url'] = undefined;
/**
 * @member {String} commits_url
 */

GistSimple.prototype['commits_url'] = undefined;
/**
 * @member {String} created_at
 */

GistSimple.prototype['created_at'] = undefined;
/**
 * @member {String} description
 */

GistSimple.prototype['description'] = undefined;
/**
 * @member {Object.<String, module:model/GistSimpleFiles>} files
 */

GistSimple.prototype['files'] = undefined;
/**
 * @member {String} forks_url
 */

GistSimple.prototype['forks_url'] = undefined;
/**
 * @member {String} git_pull_url
 */

GistSimple.prototype['git_pull_url'] = undefined;
/**
 * @member {String} git_push_url
 */

GistSimple.prototype['git_push_url'] = undefined;
/**
 * @member {String} html_url
 */

GistSimple.prototype['html_url'] = undefined;
/**
 * @member {String} id
 */

GistSimple.prototype['id'] = undefined;
/**
 * @member {String} node_id
 */

GistSimple.prototype['node_id'] = undefined;
/**
 * @member {module:model/SimpleUser} owner
 */

GistSimple.prototype['owner'] = undefined;
/**
 * @member {Boolean} public
 */

GistSimple.prototype['public'] = undefined;
/**
 * @member {Boolean} truncated
 */

GistSimple.prototype['truncated'] = undefined;
/**
 * @member {String} updated_at
 */

GistSimple.prototype['updated_at'] = undefined;
/**
 * @member {String} url
 */

GistSimple.prototype['url'] = undefined;
/**
 * @member {String} user
 */

GistSimple.prototype['user'] = undefined;
var _default = GistSimple;
exports["default"] = _default;