"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GistFullAllOfForks = _interopRequireDefault(require("./GistFullAllOfForks"));

var _GistFullAllOfHistory = _interopRequireDefault(require("./GistFullAllOfHistory"));

var _GistSimple = _interopRequireDefault(require("./GistSimple"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GistFullAllOf model module.
 * @module model/GistFullAllOf
 * @version 0.0.5
 */
var GistFullAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GistFullAllOf</code>.
   * @alias module:model/GistFullAllOf
   */
  function GistFullAllOf() {
    _classCallCheck(this, GistFullAllOf);

    GistFullAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GistFullAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GistFullAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GistFullAllOf} obj Optional instance to populate.
     * @return {module:model/GistFullAllOf} The populated <code>GistFullAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GistFullAllOf();

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

        if (data.hasOwnProperty('fork_of')) {
          obj['fork_of'] = _ApiClient["default"].convertToType(data['fork_of'], _GistSimple["default"]);
        }

        if (data.hasOwnProperty('forks')) {
          obj['forks'] = _ApiClient["default"].convertToType(data['forks'], [_GistFullAllOfForks["default"]]);
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
          obj['history'] = _ApiClient["default"].convertToType(data['history'], [_GistFullAllOfHistory["default"]]);
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

  return GistFullAllOf;
}();
/**
 * @member {Number} comments
 */


GistFullAllOf.prototype['comments'] = undefined;
/**
 * @member {String} comments_url
 */

GistFullAllOf.prototype['comments_url'] = undefined;
/**
 * @member {String} commits_url
 */

GistFullAllOf.prototype['commits_url'] = undefined;
/**
 * @member {String} created_at
 */

GistFullAllOf.prototype['created_at'] = undefined;
/**
 * @member {String} description
 */

GistFullAllOf.prototype['description'] = undefined;
/**
 * @member {module:model/GistSimple} fork_of
 */

GistFullAllOf.prototype['fork_of'] = undefined;
/**
 * @member {Array.<module:model/GistFullAllOfForks>} forks
 */

GistFullAllOf.prototype['forks'] = undefined;
/**
 * @member {String} forks_url
 */

GistFullAllOf.prototype['forks_url'] = undefined;
/**
 * @member {String} git_pull_url
 */

GistFullAllOf.prototype['git_pull_url'] = undefined;
/**
 * @member {String} git_push_url
 */

GistFullAllOf.prototype['git_push_url'] = undefined;
/**
 * @member {Array.<module:model/GistFullAllOfHistory>} history
 */

GistFullAllOf.prototype['history'] = undefined;
/**
 * @member {String} html_url
 */

GistFullAllOf.prototype['html_url'] = undefined;
/**
 * @member {String} id
 */

GistFullAllOf.prototype['id'] = undefined;
/**
 * @member {String} node_id
 */

GistFullAllOf.prototype['node_id'] = undefined;
/**
 * @member {String} updated_at
 */

GistFullAllOf.prototype['updated_at'] = undefined;
/**
 * @member {String} url
 */

GistFullAllOf.prototype['url'] = undefined;
var _default = GistFullAllOf;
exports["default"] = _default;