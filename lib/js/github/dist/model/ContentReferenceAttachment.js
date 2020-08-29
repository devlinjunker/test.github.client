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
 * The ContentReferenceAttachment model module.
 * @module model/ContentReferenceAttachment
 * @version 0.0.5
 */
var ContentReferenceAttachment = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ContentReferenceAttachment</code>.
   * Content Reference attachments allow you to provide context around URLs posted in comments
   * @alias module:model/ContentReferenceAttachment
   * @param body {String} The body of the attachment
   * @param id {Number} The ID of the attachment
   * @param title {String} The title of the attachment
   */
  function ContentReferenceAttachment(body, id, title) {
    _classCallCheck(this, ContentReferenceAttachment);

    ContentReferenceAttachment.initialize(this, body, id, title);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ContentReferenceAttachment, null, [{
    key: "initialize",
    value: function initialize(obj, body, id, title) {
      obj['body'] = body;
      obj['id'] = id;
      obj['title'] = title;
    }
    /**
     * Constructs a <code>ContentReferenceAttachment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContentReferenceAttachment} obj Optional instance to populate.
     * @return {module:model/ContentReferenceAttachment} The populated <code>ContentReferenceAttachment</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ContentReferenceAttachment();

        if (data.hasOwnProperty('body')) {
          obj['body'] = _ApiClient["default"].convertToType(data['body'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('node_id')) {
          obj['node_id'] = _ApiClient["default"].convertToType(data['node_id'], 'String');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ContentReferenceAttachment;
}();
/**
 * The body of the attachment
 * @member {String} body
 */


ContentReferenceAttachment.prototype['body'] = undefined;
/**
 * The ID of the attachment
 * @member {Number} id
 */

ContentReferenceAttachment.prototype['id'] = undefined;
/**
 * The node_id of the content attachment
 * @member {String} node_id
 */

ContentReferenceAttachment.prototype['node_id'] = undefined;
/**
 * The title of the attachment
 * @member {String} title
 */

ContentReferenceAttachment.prototype['title'] = undefined;
var _default = ContentReferenceAttachment;
exports["default"] = _default;