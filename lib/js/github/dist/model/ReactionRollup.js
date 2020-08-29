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
 * The ReactionRollup model module.
 * @module model/ReactionRollup
 * @version 0.0.5
 */
var ReactionRollup = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ReactionRollup</code>.
   * @alias module:model/ReactionRollup
   * @param _1 {Number}
   * @param _01 {Number}
   * @param confused {Number}
   * @param eyes {Number}
   * @param heart {Number}
   * @param hooray {Number}
   * @param laugh {Number}
   * @param rocket {Number}
   * @param totalCount {Number}
   * @param url {String}
   */
  function ReactionRollup(_1, _01, confused, eyes, heart, hooray, laugh, rocket, totalCount, url) {
    _classCallCheck(this, ReactionRollup);

    ReactionRollup.initialize(this, _1, _01, confused, eyes, heart, hooray, laugh, rocket, totalCount, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ReactionRollup, null, [{
    key: "initialize",
    value: function initialize(obj, _1, _01, confused, eyes, heart, hooray, laugh, rocket, totalCount, url) {
      obj['+1'] = _1;
      obj['-1'] = _01;
      obj['confused'] = confused;
      obj['eyes'] = eyes;
      obj['heart'] = heart;
      obj['hooray'] = hooray;
      obj['laugh'] = laugh;
      obj['rocket'] = rocket;
      obj['total_count'] = totalCount;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>ReactionRollup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReactionRollup} obj Optional instance to populate.
     * @return {module:model/ReactionRollup} The populated <code>ReactionRollup</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReactionRollup();

        if (data.hasOwnProperty('+1')) {
          obj['+1'] = _ApiClient["default"].convertToType(data['+1'], 'Number');
        }

        if (data.hasOwnProperty('-1')) {
          obj['-1'] = _ApiClient["default"].convertToType(data['-1'], 'Number');
        }

        if (data.hasOwnProperty('confused')) {
          obj['confused'] = _ApiClient["default"].convertToType(data['confused'], 'Number');
        }

        if (data.hasOwnProperty('eyes')) {
          obj['eyes'] = _ApiClient["default"].convertToType(data['eyes'], 'Number');
        }

        if (data.hasOwnProperty('heart')) {
          obj['heart'] = _ApiClient["default"].convertToType(data['heart'], 'Number');
        }

        if (data.hasOwnProperty('hooray')) {
          obj['hooray'] = _ApiClient["default"].convertToType(data['hooray'], 'Number');
        }

        if (data.hasOwnProperty('laugh')) {
          obj['laugh'] = _ApiClient["default"].convertToType(data['laugh'], 'Number');
        }

        if (data.hasOwnProperty('rocket')) {
          obj['rocket'] = _ApiClient["default"].convertToType(data['rocket'], 'Number');
        }

        if (data.hasOwnProperty('total_count')) {
          obj['total_count'] = _ApiClient["default"].convertToType(data['total_count'], 'Number');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ReactionRollup;
}();
/**
 * @member {Number} +1
 */


ReactionRollup.prototype['+1'] = undefined;
/**
 * @member {Number} -1
 */

ReactionRollup.prototype['-1'] = undefined;
/**
 * @member {Number} confused
 */

ReactionRollup.prototype['confused'] = undefined;
/**
 * @member {Number} eyes
 */

ReactionRollup.prototype['eyes'] = undefined;
/**
 * @member {Number} heart
 */

ReactionRollup.prototype['heart'] = undefined;
/**
 * @member {Number} hooray
 */

ReactionRollup.prototype['hooray'] = undefined;
/**
 * @member {Number} laugh
 */

ReactionRollup.prototype['laugh'] = undefined;
/**
 * @member {Number} rocket
 */

ReactionRollup.prototype['rocket'] = undefined;
/**
 * @member {Number} total_count
 */

ReactionRollup.prototype['total_count'] = undefined;
/**
 * @member {String} url
 */

ReactionRollup.prototype['url'] = undefined;
var _default = ReactionRollup;
exports["default"] = _default;