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
 * The Label model module.
 * @module model/Label
 * @version 0.0.5
 */
var Label = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Label</code>.
   * Color-coded labels help you categorize and filter your issues (just like labels in Gmail).
   * @alias module:model/Label
   * @param color {String} 6-character hex code, without the leading #, identifying the color
   * @param _default {Boolean} 
   * @param id {Number} 
   * @param name {String} The name of the label.
   * @param nodeId {String} 
   * @param url {String} URL for the label
   */
  function Label(color, _default, id, name, nodeId, url) {
    _classCallCheck(this, Label);

    Label.initialize(this, color, _default, id, name, nodeId, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Label, null, [{
    key: "initialize",
    value: function initialize(obj, color, _default, id, name, nodeId, url) {
      obj['color'] = color;
      obj['default'] = _default;
      obj['id'] = id;
      obj['name'] = name;
      obj['node_id'] = nodeId;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>Label</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Label} obj Optional instance to populate.
     * @return {module:model/Label} The populated <code>Label</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Label();

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

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Label;
}();
/**
 * 6-character hex code, without the leading #, identifying the color
 * @member {String} color
 */


Label.prototype['color'] = undefined;
/**
 * @member {Boolean} default
 */

Label.prototype['default'] = undefined;
/**
 * @member {String} description
 */

Label.prototype['description'] = undefined;
/**
 * @member {Number} id
 */

Label.prototype['id'] = undefined;
/**
 * The name of the label.
 * @member {String} name
 */

Label.prototype['name'] = undefined;
/**
 * @member {String} node_id
 */

Label.prototype['node_id'] = undefined;
/**
 * URL for the label
 * @member {String} url
 */

Label.prototype['url'] = undefined;
var _default2 = Label;
exports["default"] = _default2;