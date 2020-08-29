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
 * The Reaction model module.
 * @module model/Reaction
 * @version 0.0.5
 */
var Reaction = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Reaction</code>.
   * Reactions to conversations provide a way to help people express their feelings more simply and effectively.
   * @alias module:model/Reaction
   * @param content {module:model/Reaction.ContentEnum} The reaction to use
   * @param createdAt {Date} 
   * @param id {Number} 
   * @param nodeId {String} 
   * @param user {module:model/SimpleUser} 
   */
  function Reaction(content, createdAt, id, nodeId, user) {
    _classCallCheck(this, Reaction);

    Reaction.initialize(this, content, createdAt, id, nodeId, user);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Reaction, null, [{
    key: "initialize",
    value: function initialize(obj, content, createdAt, id, nodeId, user) {
      obj['content'] = content;
      obj['created_at'] = createdAt;
      obj['id'] = id;
      obj['node_id'] = nodeId;
      obj['user'] = user;
    }
    /**
     * Constructs a <code>Reaction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Reaction} obj Optional instance to populate.
     * @return {module:model/Reaction} The populated <code>Reaction</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Reaction();

        if (data.hasOwnProperty('content')) {
          obj['content'] = _ApiClient["default"].convertToType(data['content'], 'String');
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

        if (data.hasOwnProperty('user')) {
          obj['user'] = _ApiClient["default"].convertToType(data['user'], _SimpleUser["default"]);
        }
      }

      return obj;
    }
  }]);

  return Reaction;
}();
/**
 * The reaction to use
 * @member {module:model/Reaction.ContentEnum} content
 */


Reaction.prototype['content'] = undefined;
/**
 * @member {Date} created_at
 */

Reaction.prototype['created_at'] = undefined;
/**
 * @member {Number} id
 */

Reaction.prototype['id'] = undefined;
/**
 * @member {String} node_id
 */

Reaction.prototype['node_id'] = undefined;
/**
 * @member {module:model/SimpleUser} user
 */

Reaction.prototype['user'] = undefined;
/**
 * Allowed values for the <code>content</code> property.
 * @enum {String}
 * @readonly
 */

Reaction['ContentEnum'] = {
  /**
   * value: "+1"
   * @const
   */
  "+1": "+1",

  /**
   * value: "-1"
   * @const
   */
  "-1": "-1",

  /**
   * value: "laugh"
   * @const
   */
  "laugh": "laugh",

  /**
   * value: "confused"
   * @const
   */
  "confused": "confused",

  /**
   * value: "heart"
   * @const
   */
  "heart": "heart",

  /**
   * value: "hooray"
   * @const
   */
  "hooray": "hooray",

  /**
   * value: "rocket"
   * @const
   */
  "rocket": "rocket",

  /**
   * value: "eyes"
   * @const
   */
  "eyes": "eyes"
};
var _default = Reaction;
exports["default"] = _default;