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
 * The InlineObject108 model module.
 * @module model/InlineObject108
 * @version 0.0.5
 */
var InlineObject108 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject108</code>.
   * @alias module:model/InlineObject108
   */
  function InlineObject108() {
    _classCallCheck(this, InlineObject108);

    InlineObject108.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject108, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject108</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject108} obj Optional instance to populate.
     * @return {module:model/InlineObject108} The populated <code>InlineObject108</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject108();

        if (data.hasOwnProperty('reviewers')) {
          obj['reviewers'] = _ApiClient["default"].convertToType(data['reviewers'], ['String']);
        }

        if (data.hasOwnProperty('team_reviewers')) {
          obj['team_reviewers'] = _ApiClient["default"].convertToType(data['team_reviewers'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return InlineObject108;
}();
/**
 * An array of user `login`s that will be requested.
 * @member {Array.<String>} reviewers
 */


InlineObject108.prototype['reviewers'] = undefined;
/**
 * An array of team `slug`s that will be requested.
 * @member {Array.<String>} team_reviewers
 */

InlineObject108.prototype['team_reviewers'] = undefined;
var _default = InlineObject108;
exports["default"] = _default;