"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SimpleCommitAuthor = _interopRequireDefault(require("./SimpleCommitAuthor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SimpleCommit model module.
 * @module model/SimpleCommit
 * @version 0.0.5
 */
var SimpleCommit = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SimpleCommit</code>.
   * Simple Commit
   * @alias module:model/SimpleCommit
   * @param author {module:model/SimpleCommitAuthor} 
   * @param committer {module:model/SimpleCommitAuthor} 
   * @param id {String} 
   * @param message {String} 
   * @param timestamp {Date} 
   * @param treeId {String} 
   */
  function SimpleCommit(author, committer, id, message, timestamp, treeId) {
    _classCallCheck(this, SimpleCommit);

    SimpleCommit.initialize(this, author, committer, id, message, timestamp, treeId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SimpleCommit, null, [{
    key: "initialize",
    value: function initialize(obj, author, committer, id, message, timestamp, treeId) {
      obj['author'] = author;
      obj['committer'] = committer;
      obj['id'] = id;
      obj['message'] = message;
      obj['timestamp'] = timestamp;
      obj['tree_id'] = treeId;
    }
    /**
     * Constructs a <code>SimpleCommit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SimpleCommit} obj Optional instance to populate.
     * @return {module:model/SimpleCommit} The populated <code>SimpleCommit</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SimpleCommit();

        if (data.hasOwnProperty('author')) {
          obj['author'] = _SimpleCommitAuthor["default"].constructFromObject(data['author']);
        }

        if (data.hasOwnProperty('committer')) {
          obj['committer'] = _SimpleCommitAuthor["default"].constructFromObject(data['committer']);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }

        if (data.hasOwnProperty('timestamp')) {
          obj['timestamp'] = _ApiClient["default"].convertToType(data['timestamp'], 'Date');
        }

        if (data.hasOwnProperty('tree_id')) {
          obj['tree_id'] = _ApiClient["default"].convertToType(data['tree_id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return SimpleCommit;
}();
/**
 * @member {module:model/SimpleCommitAuthor} author
 */


SimpleCommit.prototype['author'] = undefined;
/**
 * @member {module:model/SimpleCommitAuthor} committer
 */

SimpleCommit.prototype['committer'] = undefined;
/**
 * @member {String} id
 */

SimpleCommit.prototype['id'] = undefined;
/**
 * @member {String} message
 */

SimpleCommit.prototype['message'] = undefined;
/**
 * @member {Date} timestamp
 */

SimpleCommit.prototype['timestamp'] = undefined;
/**
 * @member {String} tree_id
 */

SimpleCommit.prototype['tree_id'] = undefined;
var _default = SimpleCommit;
exports["default"] = _default;