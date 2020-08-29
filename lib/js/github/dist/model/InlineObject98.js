"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AnyOfstringobject = _interopRequireDefault(require("./AnyOfstringobject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineObject98 model module.
 * @module model/InlineObject98
 * @version 0.0.5
 */
var InlineObject98 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject98</code>.
   * @alias module:model/InlineObject98
   */
  function InlineObject98() {
    _classCallCheck(this, InlineObject98);

    InlineObject98.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject98, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject98</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject98} obj Optional instance to populate.
     * @return {module:model/InlineObject98} The populated <code>InlineObject98</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject98();

        if (data.hasOwnProperty('cname')) {
          obj['cname'] = _ApiClient["default"].convertToType(data['cname'], 'String');
        }

        if (data.hasOwnProperty('source')) {
          obj['source'] = _ApiClient["default"].convertToType(data['source'], _AnyOfstringobject["default"]);
        }
      }

      return obj;
    }
  }]);

  return InlineObject98;
}();
/**
 * Specify a custom domain for the repository. Sending a `null` value will remove the custom domain. For more about custom domains, see \"[Using a custom domain with GitHub Pages](https://help.github.com/articles/using-a-custom-domain-with-github-pages/).\"
 * @member {String} cname
 */


InlineObject98.prototype['cname'] = undefined;
/**
 * @member {module:model/AnyOfstringobject} source
 */

InlineObject98.prototype['source'] = undefined;
var _default = InlineObject98;
exports["default"] = _default;