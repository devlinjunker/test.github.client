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
 * The GitTreeTree model module.
 * @module model/GitTreeTree
 * @version 0.0.5
 */
var GitTreeTree = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GitTreeTree</code>.
   * @alias module:model/GitTreeTree
   */
  function GitTreeTree() {
    _classCallCheck(this, GitTreeTree);

    GitTreeTree.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GitTreeTree, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GitTreeTree</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GitTreeTree} obj Optional instance to populate.
     * @return {module:model/GitTreeTree} The populated <code>GitTreeTree</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GitTreeTree();

        if (data.hasOwnProperty('mode')) {
          obj['mode'] = _ApiClient["default"].convertToType(data['mode'], 'String');
        }

        if (data.hasOwnProperty('path')) {
          obj['path'] = _ApiClient["default"].convertToType(data['path'], 'String');
        }

        if (data.hasOwnProperty('sha')) {
          obj['sha'] = _ApiClient["default"].convertToType(data['sha'], 'String');
        }

        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'Number');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GitTreeTree;
}();
/**
 * @member {String} mode
 */


GitTreeTree.prototype['mode'] = undefined;
/**
 * @member {String} path
 */

GitTreeTree.prototype['path'] = undefined;
/**
 * @member {String} sha
 */

GitTreeTree.prototype['sha'] = undefined;
/**
 * @member {Number} size
 */

GitTreeTree.prototype['size'] = undefined;
/**
 * @member {String} type
 */

GitTreeTree.prototype['type'] = undefined;
/**
 * @member {String} url
 */

GitTreeTree.prototype['url'] = undefined;
var _default = GitTreeTree;
exports["default"] = _default;