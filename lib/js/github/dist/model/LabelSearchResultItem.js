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
 * The LabelSearchResultItem model module.
 * @module model/LabelSearchResultItem
 * @version 0.0.5
 */
var LabelSearchResultItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LabelSearchResultItem</code>.
   * Label Search Result Item
   * @alias module:model/LabelSearchResultItem
   * @param color {String} 
   * @param _default {Boolean} 
   * @param description {String} 
   * @param id {Number} 
   * @param name {String} 
   * @param nodeId {String} 
   * @param score {Number} 
   * @param url {String} 
   */
  function LabelSearchResultItem(color, _default, description, id, name, nodeId, score, url) {
    _classCallCheck(this, LabelSearchResultItem);

    LabelSearchResultItem.initialize(this, color, _default, description, id, name, nodeId, score, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LabelSearchResultItem, null, [{
    key: "initialize",
    value: function initialize(obj, color, _default, description, id, name, nodeId, score, url) {
      obj['color'] = color;
      obj['default'] = _default;
      obj['description'] = description;
      obj['id'] = id;
      obj['name'] = name;
      obj['node_id'] = nodeId;
      obj['score'] = score;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>LabelSearchResultItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LabelSearchResultItem} obj Optional instance to populate.
     * @return {module:model/LabelSearchResultItem} The populated <code>LabelSearchResultItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LabelSearchResultItem();

        if (data.hasOwnProperty('color')) {
          obj['color'] = _ApiClient["default"].convertToType(data['color'], 'String');
        }

        if (data.hasOwnProperty('default')) {
          obj['default'] = _ApiClient["default"].convertToType(data['default'], 'Boolean');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('node_id')) {
          obj['node_id'] = _ApiClient["default"].convertToType(data['node_id'], 'String');
        }

        if (data.hasOwnProperty('score')) {
          obj['score'] = _ApiClient["default"].convertToType(data['score'], 'Number');
        }

        if (data.hasOwnProperty('text_matches')) {
          obj['text_matches'] = _ApiClient["default"].convertToType(data['text_matches'], [Object]);
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LabelSearchResultItem;
}();
/**
 * @member {String} color
 */


LabelSearchResultItem.prototype['color'] = undefined;
/**
 * @member {Boolean} default
 */

LabelSearchResultItem.prototype['default'] = undefined;
/**
 * @member {String} description
 */

LabelSearchResultItem.prototype['description'] = undefined;
/**
 * @member {Number} id
 */

LabelSearchResultItem.prototype['id'] = undefined;
/**
 * @member {String} name
 */

LabelSearchResultItem.prototype['name'] = undefined;
/**
 * @member {String} node_id
 */

LabelSearchResultItem.prototype['node_id'] = undefined;
/**
 * @member {Number} score
 */

LabelSearchResultItem.prototype['score'] = undefined;
/**
 * @member {Array.<Object>} text_matches
 */

LabelSearchResultItem.prototype['text_matches'] = undefined;
/**
 * @member {String} url
 */

LabelSearchResultItem.prototype['url'] = undefined;
var _default2 = LabelSearchResultItem;
exports["default"] = _default2;