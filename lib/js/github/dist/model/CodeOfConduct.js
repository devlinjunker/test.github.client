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
 * The CodeOfConduct model module.
 * @module model/CodeOfConduct
 * @version 0.0.5
 */
var CodeOfConduct = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CodeOfConduct</code>.
   * Code Of Conduct
   * @alias module:model/CodeOfConduct
   * @param htmlUrl {String} 
   * @param key {String} 
   * @param name {String} 
   * @param url {String} 
   */
  function CodeOfConduct(htmlUrl, key, name, url) {
    _classCallCheck(this, CodeOfConduct);

    CodeOfConduct.initialize(this, htmlUrl, key, name, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CodeOfConduct, null, [{
    key: "initialize",
    value: function initialize(obj, htmlUrl, key, name, url) {
      obj['html_url'] = htmlUrl;
      obj['key'] = key;
      obj['name'] = name;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>CodeOfConduct</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CodeOfConduct} obj Optional instance to populate.
     * @return {module:model/CodeOfConduct} The populated <code>CodeOfConduct</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CodeOfConduct();

        if (data.hasOwnProperty('body')) {
          obj['body'] = _ApiClient["default"].convertToType(data['body'], 'String');
        }

        if (data.hasOwnProperty('html_url')) {
          obj['html_url'] = _ApiClient["default"].convertToType(data['html_url'], 'String');
        }

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CodeOfConduct;
}();
/**
 * @member {String} body
 */


CodeOfConduct.prototype['body'] = undefined;
/**
 * @member {String} html_url
 */

CodeOfConduct.prototype['html_url'] = undefined;
/**
 * @member {String} key
 */

CodeOfConduct.prototype['key'] = undefined;
/**
 * @member {String} name
 */

CodeOfConduct.prototype['name'] = undefined;
/**
 * @member {String} url
 */

CodeOfConduct.prototype['url'] = undefined;
var _default = CodeOfConduct;
exports["default"] = _default;