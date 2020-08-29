"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SimpleUser = _interopRequireDefault(require("./SimpleUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GistComment model module.
 * @module model/GistComment
 * @version 0.0.5
 */
var GistComment = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GistComment</code>.
   * A comment made to a gist.
   * @alias module:model/GistComment
   * @param authorAssociation {String} 
   * @param body {String} The comment text.
   * @param createdAt {Date} 
   * @param id {Number} 
   * @param nodeId {String} 
   * @param updatedAt {Date} 
   * @param url {String} 
   * @param user {module:model/SimpleUser} 
   */
  function GistComment(authorAssociation, body, createdAt, id, nodeId, updatedAt, url, user) {
    _classCallCheck(this, GistComment);

    GistComment.initialize(this, authorAssociation, body, createdAt, id, nodeId, updatedAt, url, user);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GistComment, null, [{
    key: "initialize",
    value: function initialize(obj, authorAssociation, body, createdAt, id, nodeId, updatedAt, url, user) {
      obj['author_association'] = authorAssociation;
      obj['body'] = body;
      obj['created_at'] = createdAt;
      obj['id'] = id;
      obj['node_id'] = nodeId;
      obj['updated_at'] = updatedAt;
      obj['url'] = url;
      obj['user'] = user;
    }
    /**
     * Constructs a <code>GistComment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GistComment} obj Optional instance to populate.
     * @return {module:model/GistComment} The populated <code>GistComment</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GistComment();

        if (data.hasOwnProperty('author_association')) {
          obj['author_association'] = _ApiClient["default"].convertToType(data['author_association'], 'String');
        }

        if (data.hasOwnProperty('body')) {
          obj['body'] = _ApiClient["default"].convertToType(data['body'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('node_id')) {
          obj['node_id'] = _ApiClient["default"].convertToType(data['node_id'], 'String');
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

  return GistComment;
}();
/**
 * @member {String} author_association
 */


GistComment.prototype['author_association'] = undefined;
/**
 * The comment text.
 * @member {String} body
 */

GistComment.prototype['body'] = undefined;
/**
 * @member {Date} created_at
 */

GistComment.prototype['created_at'] = undefined;
/**
 * @member {Number} id
 */

GistComment.prototype['id'] = undefined;
/**
 * @member {String} node_id
 */

GistComment.prototype['node_id'] = undefined;
/**
 * @member {Date} updated_at
 */

GistComment.prototype['updated_at'] = undefined;
/**
 * @member {String} url
 */

GistComment.prototype['url'] = undefined;
/**
 * @member {module:model/SimpleUser} user
 */

GistComment.prototype['user'] = undefined;
var _default = GistComment;
exports["default"] = _default;