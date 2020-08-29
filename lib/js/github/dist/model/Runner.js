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
 * The Runner model module.
 * @module model/Runner
 * @version 0.0.5
 */
var Runner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Runner</code>.
   * A self hosted runner
   * @alias module:model/Runner
   * @param id {Number} The id of the runner.
   * @param name {String} The name of the runner.
   * @param os {String} The Operating System of the runner.
   * @param status {String} The status of the runner.
   */
  function Runner(id, name, os, status) {
    _classCallCheck(this, Runner);

    Runner.initialize(this, id, name, os, status);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Runner, null, [{
    key: "initialize",
    value: function initialize(obj, id, name, os, status) {
      obj['id'] = id;
      obj['name'] = name;
      obj['os'] = os;
      obj['status'] = status;
    }
    /**
     * Constructs a <code>Runner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Runner} obj Optional instance to populate.
     * @return {module:model/Runner} The populated <code>Runner</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Runner();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('os')) {
          obj['os'] = _ApiClient["default"].convertToType(data['os'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Runner;
}();
/**
 * The id of the runner.
 * @member {Number} id
 */


Runner.prototype['id'] = undefined;
/**
 * The name of the runner.
 * @member {String} name
 */

Runner.prototype['name'] = undefined;
/**
 * The Operating System of the runner.
 * @member {String} os
 */

Runner.prototype['os'] = undefined;
/**
 * The status of the runner.
 * @member {String} status
 */

Runner.prototype['status'] = undefined;
var _default = Runner;
exports["default"] = _default;