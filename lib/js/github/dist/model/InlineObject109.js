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
 * The InlineObject109 model module.
 * @module model/InlineObject109
 * @version 0.0.5
 */
var InlineObject109 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject109</code>.
   * @alias module:model/InlineObject109
   */
  function InlineObject109() {
    _classCallCheck(this, InlineObject109);

    InlineObject109.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject109, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject109</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject109} obj Optional instance to populate.
     * @return {module:model/InlineObject109} The populated <code>InlineObject109</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject109();

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

  return InlineObject109;
}();
/**
 * An array of user `login`s that will be removed.
 * @member {Array.<String>} reviewers
 */


InlineObject109.prototype['reviewers'] = undefined;
/**
 * An array of team `slug`s that will be removed.
 * @member {Array.<String>} team_reviewers
 */

InlineObject109.prototype['team_reviewers'] = undefined;
var _default = InlineObject109;
exports["default"] = _default;