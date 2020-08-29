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
 * The InlineObject51 model module.
 * @module model/InlineObject51
 * @version 0.0.5
 */
var InlineObject51 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject51</code>.
   * @alias module:model/InlineObject51
   */
  function InlineObject51() {
    _classCallCheck(this, InlineObject51);

    InlineObject51.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject51, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject51</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject51} obj Optional instance to populate.
     * @return {module:model/InlineObject51} The populated <code>InlineObject51</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject51();

        if (data.hasOwnProperty('contexts')) {
          obj['contexts'] = _ApiClient["default"].convertToType(data['contexts'], ['String']);
        }

        if (data.hasOwnProperty('strict')) {
          obj['strict'] = _ApiClient["default"].convertToType(data['strict'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return InlineObject51;
}();
/**
 * The list of status checks to require in order to merge into this branch
 * @member {Array.<String>} contexts
 */


InlineObject51.prototype['contexts'] = undefined;
/**
 * Require branches to be up to date before merging.
 * @member {Boolean} strict
 */

InlineObject51.prototype['strict'] = undefined;
var _default = InlineObject51;
exports["default"] = _default;