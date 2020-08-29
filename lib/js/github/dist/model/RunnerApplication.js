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
 * The RunnerApplication model module.
 * @module model/RunnerApplication
 * @version 0.0.5
 */
var RunnerApplication = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RunnerApplication</code>.
   * Runner Application
   * @alias module:model/RunnerApplication
   */
  function RunnerApplication() {
    _classCallCheck(this, RunnerApplication);

    RunnerApplication.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RunnerApplication, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RunnerApplication</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RunnerApplication} obj Optional instance to populate.
     * @return {module:model/RunnerApplication} The populated <code>RunnerApplication</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RunnerApplication();

        if (data.hasOwnProperty('architecture')) {
          obj['architecture'] = _ApiClient["default"].convertToType(data['architecture'], 'String');
        }

        if (data.hasOwnProperty('download_url')) {
          obj['download_url'] = _ApiClient["default"].convertToType(data['download_url'], 'String');
        }

        if (data.hasOwnProperty('filename')) {
          obj['filename'] = _ApiClient["default"].convertToType(data['filename'], 'String');
        }

        if (data.hasOwnProperty('os')) {
          obj['os'] = _ApiClient["default"].convertToType(data['os'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RunnerApplication;
}();
/**
 * @member {String} architecture
 */


RunnerApplication.prototype['architecture'] = undefined;
/**
 * @member {String} download_url
 */

RunnerApplication.prototype['download_url'] = undefined;
/**
 * @member {String} filename
 */

RunnerApplication.prototype['filename'] = undefined;
/**
 * @member {String} os
 */

RunnerApplication.prototype['os'] = undefined;
var _default = RunnerApplication;
exports["default"] = _default;