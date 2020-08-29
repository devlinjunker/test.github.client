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
 * The PageBuildError model module.
 * @module model/PageBuildError
 * @version 0.0.5
 */
var PageBuildError = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PageBuildError</code>.
   * @alias module:model/PageBuildError
   * @param message {String} 
   */
  function PageBuildError(message) {
    _classCallCheck(this, PageBuildError);

    PageBuildError.initialize(this, message);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PageBuildError, null, [{
    key: "initialize",
    value: function initialize(obj, message) {
      obj['message'] = message;
    }
    /**
     * Constructs a <code>PageBuildError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PageBuildError} obj Optional instance to populate.
     * @return {module:model/PageBuildError} The populated <code>PageBuildError</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PageBuildError();

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PageBuildError;
}();
/**
 * @member {String} message
 */


PageBuildError.prototype['message'] = undefined;
var _default = PageBuildError;
exports["default"] = _default;