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
 * The FileCommitCommitVerification model module.
 * @module model/FileCommitCommitVerification
 * @version 0.0.5
 */
var FileCommitCommitVerification = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FileCommitCommitVerification</code>.
   * @alias module:model/FileCommitCommitVerification
   */
  function FileCommitCommitVerification() {
    _classCallCheck(this, FileCommitCommitVerification);

    FileCommitCommitVerification.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FileCommitCommitVerification, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>FileCommitCommitVerification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FileCommitCommitVerification} obj Optional instance to populate.
     * @return {module:model/FileCommitCommitVerification} The populated <code>FileCommitCommitVerification</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FileCommitCommitVerification();

        if (data.hasOwnProperty('payload')) {
          obj['payload'] = _ApiClient["default"].convertToType(data['payload'], 'String');
        }

        if (data.hasOwnProperty('reason')) {
          obj['reason'] = _ApiClient["default"].convertToType(data['reason'], 'String');
        }

        if (data.hasOwnProperty('signature')) {
          obj['signature'] = _ApiClient["default"].convertToType(data['signature'], 'String');
        }

        if (data.hasOwnProperty('verified')) {
          obj['verified'] = _ApiClient["default"].convertToType(data['verified'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return FileCommitCommitVerification;
}();
/**
 * @member {String} payload
 */


FileCommitCommitVerification.prototype['payload'] = undefined;
/**
 * @member {String} reason
 */

FileCommitCommitVerification.prototype['reason'] = undefined;
/**
 * @member {String} signature
 */

FileCommitCommitVerification.prototype['signature'] = undefined;
/**
 * @member {Boolean} verified
 */

FileCommitCommitVerification.prototype['verified'] = undefined;
var _default = FileCommitCommitVerification;
exports["default"] = _default;