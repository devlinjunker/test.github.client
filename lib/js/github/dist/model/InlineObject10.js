"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GistsFiles = _interopRequireDefault(require("./GistsFiles"));

var _OneOfbooleanstring = _interopRequireDefault(require("./OneOfbooleanstring"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineObject10 model module.
 * @module model/InlineObject10
 * @version 0.0.5
 */
var InlineObject10 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject10</code>.
   * @alias module:model/InlineObject10
   * @param files {Object.<String, module:model/GistsFiles>} Names and content for the files that make up the gist
   */
  function InlineObject10(files) {
    _classCallCheck(this, InlineObject10);

    InlineObject10.initialize(this, files);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject10, null, [{
    key: "initialize",
    value: function initialize(obj, files) {
      obj['files'] = files;
    }
    /**
     * Constructs a <code>InlineObject10</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject10} obj Optional instance to populate.
     * @return {module:model/InlineObject10} The populated <code>InlineObject10</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject10();

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('files')) {
          obj['files'] = _ApiClient["default"].convertToType(data['files'], {
            'String': _GistsFiles["default"]
          });
        }

        if (data.hasOwnProperty('public')) {
          obj['public'] = _ApiClient["default"].convertToType(data['public'], _OneOfbooleanstring["default"]);
        }
      }

      return obj;
    }
  }]);

  return InlineObject10;
}();
/**
 * Description of the gist
 * @member {String} description
 */


InlineObject10.prototype['description'] = undefined;
/**
 * Names and content for the files that make up the gist
 * @member {Object.<String, module:model/GistsFiles>} files
 */

InlineObject10.prototype['files'] = undefined;
/**
 * @member {module:model/OneOfbooleanstring} public
 */

InlineObject10.prototype['public'] = undefined;
var _default = InlineObject10;
exports["default"] = _default;