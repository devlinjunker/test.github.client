"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GitTreeTree = _interopRequireDefault(require("./GitTreeTree"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GitTree model module.
 * @module model/GitTree
 * @version 0.0.5
 */
var GitTree = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GitTree</code>.
   * The hierarchy between files in a Git repository.
   * @alias module:model/GitTree
   * @param sha {String} 
   * @param tree {Array.<module:model/GitTreeTree>} Objects specifying a tree structure
   * @param truncated {Boolean} 
   * @param url {String} 
   */
  function GitTree(sha, tree, truncated, url) {
    _classCallCheck(this, GitTree);

    GitTree.initialize(this, sha, tree, truncated, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GitTree, null, [{
    key: "initialize",
    value: function initialize(obj, sha, tree, truncated, url) {
      obj['sha'] = sha;
      obj['tree'] = tree;
      obj['truncated'] = truncated;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>GitTree</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GitTree} obj Optional instance to populate.
     * @return {module:model/GitTree} The populated <code>GitTree</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GitTree();

        if (data.hasOwnProperty('sha')) {
          obj['sha'] = _ApiClient["default"].convertToType(data['sha'], 'String');
        }

        if (data.hasOwnProperty('tree')) {
          obj['tree'] = _ApiClient["default"].convertToType(data['tree'], [_GitTreeTree["default"]]);
        }

        if (data.hasOwnProperty('truncated')) {
          obj['truncated'] = _ApiClient["default"].convertToType(data['truncated'], 'Boolean');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GitTree;
}();
/**
 * @member {String} sha
 */


GitTree.prototype['sha'] = undefined;
/**
 * Objects specifying a tree structure
 * @member {Array.<module:model/GitTreeTree>} tree
 */

GitTree.prototype['tree'] = undefined;
/**
 * @member {Boolean} truncated
 */

GitTree.prototype['truncated'] = undefined;
/**
 * @member {String} url
 */

GitTree.prototype['url'] = undefined;
var _default = GitTree;
exports["default"] = _default;