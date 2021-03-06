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
 * The ContentFileLinks model module.
 * @module model/ContentFileLinks
 * @version 0.0.5
 */
var ContentFileLinks = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ContentFileLinks</code>.
   * @alias module:model/ContentFileLinks
   * @param git {String} 
   * @param html {String} 
   * @param self {String} 
   */
  function ContentFileLinks(git, html, self) {
    _classCallCheck(this, ContentFileLinks);

    ContentFileLinks.initialize(this, git, html, self);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ContentFileLinks, null, [{
    key: "initialize",
    value: function initialize(obj, git, html, self) {
      obj['git'] = git;
      obj['html'] = html;
      obj['self'] = self;
    }
    /**
     * Constructs a <code>ContentFileLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContentFileLinks} obj Optional instance to populate.
     * @return {module:model/ContentFileLinks} The populated <code>ContentFileLinks</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ContentFileLinks();

        if (data.hasOwnProperty('git')) {
          obj['git'] = _ApiClient["default"].convertToType(data['git'], 'String');
        }

        if (data.hasOwnProperty('html')) {
          obj['html'] = _ApiClient["default"].convertToType(data['html'], 'String');
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ContentFileLinks;
}();
/**
 * @member {String} git
 */


ContentFileLinks.prototype['git'] = undefined;
/**
 * @member {String} html
 */

ContentFileLinks.prototype['html'] = undefined;
/**
 * @member {String} self
 */

ContentFileLinks.prototype['self'] = undefined;
var _default = ContentFileLinks;
exports["default"] = _default;