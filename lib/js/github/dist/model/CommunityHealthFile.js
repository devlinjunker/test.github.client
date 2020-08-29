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
 * The CommunityHealthFile model module.
 * @module model/CommunityHealthFile
 * @version 0.0.5
 */
var CommunityHealthFile = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CommunityHealthFile</code>.
   * @alias module:model/CommunityHealthFile
   * @param htmlUrl {String} 
   * @param url {String} 
   */
  function CommunityHealthFile(htmlUrl, url) {
    _classCallCheck(this, CommunityHealthFile);

    CommunityHealthFile.initialize(this, htmlUrl, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CommunityHealthFile, null, [{
    key: "initialize",
    value: function initialize(obj, htmlUrl, url) {
      obj['html_url'] = htmlUrl;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>CommunityHealthFile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CommunityHealthFile} obj Optional instance to populate.
     * @return {module:model/CommunityHealthFile} The populated <code>CommunityHealthFile</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CommunityHealthFile();

        if (data.hasOwnProperty('html_url')) {
          obj['html_url'] = _ApiClient["default"].convertToType(data['html_url'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CommunityHealthFile;
}();
/**
 * @member {String} html_url
 */


CommunityHealthFile.prototype['html_url'] = undefined;
/**
 * @member {String} url
 */

CommunityHealthFile.prototype['url'] = undefined;
var _default = CommunityHealthFile;
exports["default"] = _default;