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
 * The BasicError model module.
 * @module model/BasicError
 * @version 0.0.5
 */
var BasicError = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BasicError</code>.
   * Basic Error
   * @alias module:model/BasicError
   */
  function BasicError() {
    _classCallCheck(this, BasicError);

    BasicError.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BasicError, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BasicError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BasicError} obj Optional instance to populate.
     * @return {module:model/BasicError} The populated <code>BasicError</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BasicError();

        if (data.hasOwnProperty('documentation_url')) {
          obj['documentation_url'] = _ApiClient["default"].convertToType(data['documentation_url'], 'String');
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }
      }

      return obj;
    }
  }]);

  return BasicError;
}();
/**
 * @member {String} documentation_url
 */


BasicError.prototype['documentation_url'] = undefined;
/**
 * @member {String} message
 */

BasicError.prototype['message'] = undefined;
var _default = BasicError;
exports["default"] = _default;