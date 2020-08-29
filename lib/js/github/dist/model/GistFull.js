"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GistFullAllOf = _interopRequireDefault(require("./GistFullAllOf"));

var _GistFullAllOfForks = _interopRequireDefault(require("./GistFullAllOfForks"));

var _GistFullAllOfHistory = _interopRequireDefault(require("./GistFullAllOfHistory"));

var _GistSimple = _interopRequireDefault(require("./GistSimple"));

var _GistSimpleFiles = _interopRequireDefault(require("./GistSimpleFiles"));

var _SimpleUser = _interopRequireDefault(require("./SimpleUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GistFull model module.
 * @module model/GistFull
 * @version 0.0.5
 */
var GistFull = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GistFull</code>.
   * Gist Full
   * @alias module:model/GistFull
   * @implements module:model/GistSimple
   * @implements module:model/GistFullAllOf
   */
  function GistFull() {
    _classCallCheck(this, GistFull);

    _GistSimple["default"].initialize(this);

    _GistFullAllOf["default"].initialize(this);

    GistFull.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GistFull, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GistFull</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GistFull} obj Optional instance to populate.
     * @return {module:model/GistFull} The populated <code>GistFull</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GistFull();

        _GistSimple["default"].constructFromObject(data, obj);

        _GistFullAllOf["default"].constructFromObject(data, obj);

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

        if (data.hasOwnProperty('fork_of')) {
          obj['fork_of'] = _ApiClient["default"].convertToType(data['fork_of'], _GistSimple["default"]);
        }

        if (data.hasOwnProperty('forks')) {
          obj['forks'] = _ApiClient["default"].convertToType(data['forks'], [_GistFullAllOfForks["default"]]);
        }

        if (data.hasOwnProperty('history')) {
          obj['history'] = _ApiClient["default"].convertToType(data['history'], [_GistFullAllOfHistory["default"]]);
        }
      }

      return obj;
    }
  }]);

  return GistFull;
}();
/**
 * @member {Number} comments
 */


GistFull.prototype['comments'] = undefined;
/**
 * @member {String} comments_url
 */

GistFull.prototype['comments_url'] = undefined;
/**
 * @member {String} commits_url
 */

GistFull.prototype['commits_url'] = undefined;
/**
 * @member {String} created_at
 */

GistFull.prototype['created_at'] = undefined;
/**
 * @member {String} description
 */

GistFull.prototype['description'] = undefined;
/**
 * @member {Object.<String, module:model/GistSimpleFiles>} files
 */

GistFull.prototype['files'] = undefined;
/**
 * @member {String} forks_url
 */

GistFull.prototype['forks_url'] = undefined;
/**
 * @member {String} git_pull_url
 */

GistFull.prototype['git_pull_url'] = undefined;
/**
 * @member {String} git_push_url
 */

GistFull.prototype['git_push_url'] = undefined;
/**
 * @member {String} html_url
 */

GistFull.prototype['html_url'] = undefined;
/**
 * @member {String} id
 */

GistFull.prototype['id'] = undefined;
/**
 * @member {String} node_id
 */

GistFull.prototype['node_id'] = undefined;
/**
 * @member {module:model/SimpleUser} owner
 */

GistFull.prototype['owner'] = undefined;
/**
 * @member {Boolean} public
 */

GistFull.prototype['public'] = undefined;
/**
 * @member {Boolean} truncated
 */

GistFull.prototype['truncated'] = undefined;
/**
 * @member {String} updated_at
 */

GistFull.prototype['updated_at'] = undefined;
/**
 * @member {String} url
 */

GistFull.prototype['url'] = undefined;
/**
 * @member {String} user
 */

GistFull.prototype['user'] = undefined;
/**
 * @member {module:model/GistSimple} fork_of
 */

GistFull.prototype['fork_of'] = undefined;
/**
 * @member {Array.<module:model/GistFullAllOfForks>} forks
 */

GistFull.prototype['forks'] = undefined;
/**
 * @member {Array.<module:model/GistFullAllOfHistory>} history
 */

GistFull.prototype['history'] = undefined; // Implement GistSimple interface:

/**
 * @member {Number} comments
 */

_GistSimple["default"].prototype['comments'] = undefined;
/**
 * @member {String} comments_url
 */

_GistSimple["default"].prototype['comments_url'] = undefined;
/**
 * @member {String} commits_url
 */

_GistSimple["default"].prototype['commits_url'] = undefined;
/**
 * @member {String} created_at
 */

_GistSimple["default"].prototype['created_at'] = undefined;
/**
 * @member {String} description
 */

_GistSimple["default"].prototype['description'] = undefined;
/**
 * @member {Object.<String, module:model/GistSimpleFiles>} files
 */

_GistSimple["default"].prototype['files'] = undefined;
/**
 * @member {String} forks_url
 */

_GistSimple["default"].prototype['forks_url'] = undefined;
/**
 * @member {String} git_pull_url
 */

_GistSimple["default"].prototype['git_pull_url'] = undefined;
/**
 * @member {String} git_push_url
 */

_GistSimple["default"].prototype['git_push_url'] = undefined;
/**
 * @member {String} html_url
 */

_GistSimple["default"].prototype['html_url'] = undefined;
/**
 * @member {String} id
 */

_GistSimple["default"].prototype['id'] = undefined;
/**
 * @member {String} node_id
 */

_GistSimple["default"].prototype['node_id'] = undefined;
/**
 * @member {module:model/SimpleUser} owner
 */

_GistSimple["default"].prototype['owner'] = undefined;
/**
 * @member {Boolean} public
 */

_GistSimple["default"].prototype['public'] = undefined;
/**
 * @member {Boolean} truncated
 */

_GistSimple["default"].prototype['truncated'] = undefined;
/**
 * @member {String} updated_at
 */

_GistSimple["default"].prototype['updated_at'] = undefined;
/**
 * @member {String} url
 */

_GistSimple["default"].prototype['url'] = undefined;
/**
 * @member {String} user
 */

_GistSimple["default"].prototype['user'] = undefined; // Implement GistFullAllOf interface:

/**
 * @member {Number} comments
 */

_GistFullAllOf["default"].prototype['comments'] = undefined;
/**
 * @member {String} comments_url
 */

_GistFullAllOf["default"].prototype['comments_url'] = undefined;
/**
 * @member {String} commits_url
 */

_GistFullAllOf["default"].prototype['commits_url'] = undefined;
/**
 * @member {String} created_at
 */

_GistFullAllOf["default"].prototype['created_at'] = undefined;
/**
 * @member {String} description
 */

_GistFullAllOf["default"].prototype['description'] = undefined;
/**
 * @member {module:model/GistSimple} fork_of
 */

_GistFullAllOf["default"].prototype['fork_of'] = undefined;
/**
 * @member {Array.<module:model/GistFullAllOfForks>} forks
 */

_GistFullAllOf["default"].prototype['forks'] = undefined;
/**
 * @member {String} forks_url
 */

_GistFullAllOf["default"].prototype['forks_url'] = undefined;
/**
 * @member {String} git_pull_url
 */

_GistFullAllOf["default"].prototype['git_pull_url'] = undefined;
/**
 * @member {String} git_push_url
 */

_GistFullAllOf["default"].prototype['git_push_url'] = undefined;
/**
 * @member {Array.<module:model/GistFullAllOfHistory>} history
 */

_GistFullAllOf["default"].prototype['history'] = undefined;
/**
 * @member {String} html_url
 */

_GistFullAllOf["default"].prototype['html_url'] = undefined;
/**
 * @member {String} id
 */

_GistFullAllOf["default"].prototype['id'] = undefined;
/**
 * @member {String} node_id
 */

_GistFullAllOf["default"].prototype['node_id'] = undefined;
/**
 * @member {String} updated_at
 */

_GistFullAllOf["default"].prototype['updated_at'] = undefined;
/**
 * @member {String} url
 */

_GistFullAllOf["default"].prototype['url'] = undefined;
var _default = GistFull;
exports["default"] = _default;