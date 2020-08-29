"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CommitSearchResultItemCommitTree = _interopRequireDefault(require("./CommitSearchResultItemCommitTree"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Tag model module.
 * @module model/Tag
 * @version 0.0.5
 */
var Tag = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Tag</code>.
   * Tag
   * @alias module:model/Tag
   * @param commit {module:model/CommitSearchResultItemCommitTree} 
   * @param name {String} 
   * @param nodeId {String} 
   * @param tarballUrl {String} 
   * @param zipballUrl {String} 
   */
  function Tag(commit, name, nodeId, tarballUrl, zipballUrl) {
    _classCallCheck(this, Tag);

    Tag.initialize(this, commit, name, nodeId, tarballUrl, zipballUrl);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Tag, null, [{
    key: "initialize",
    value: function initialize(obj, commit, name, nodeId, tarballUrl, zipballUrl) {
      obj['commit'] = commit;
      obj['name'] = name;
      obj['node_id'] = nodeId;
      obj['tarball_url'] = tarballUrl;
      obj['zipball_url'] = zipballUrl;
    }
    /**
     * Constructs a <code>Tag</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Tag} obj Optional instance to populate.
     * @return {module:model/Tag} The populated <code>Tag</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Tag();

        if (data.hasOwnProperty('commit')) {
          obj['commit'] = _CommitSearchResultItemCommitTree["default"].constructFromObject(data['commit']);
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('node_id')) {
          obj['node_id'] = _ApiClient["default"].convertToType(data['node_id'], 'String');
        }

        if (data.hasOwnProperty('tarball_url')) {
          obj['tarball_url'] = _ApiClient["default"].convertToType(data['tarball_url'], 'String');
        }

        if (data.hasOwnProperty('zipball_url')) {
          obj['zipball_url'] = _ApiClient["default"].convertToType(data['zipball_url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Tag;
}();
/**
 * @member {module:model/CommitSearchResultItemCommitTree} commit
 */


Tag.prototype['commit'] = undefined;
/**
 * @member {String} name
 */

Tag.prototype['name'] = undefined;
/**
 * @member {String} node_id
 */

Tag.prototype['node_id'] = undefined;
/**
 * @member {String} tarball_url
 */

Tag.prototype['tarball_url'] = undefined;
/**
 * @member {String} zipball_url
 */

Tag.prototype['zipball_url'] = undefined;
var _default = Tag;
exports["default"] = _default;