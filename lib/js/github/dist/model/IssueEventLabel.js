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
 * The IssueEventLabel model module.
 * @module model/IssueEventLabel
 * @version 0.0.5
 */
var IssueEventLabel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IssueEventLabel</code>.
   * Issue Event Label
   * @alias module:model/IssueEventLabel
   * @param color {String} 
   * @param name {String} 
   */
  function IssueEventLabel(color, name) {
    _classCallCheck(this, IssueEventLabel);

    IssueEventLabel.initialize(this, color, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IssueEventLabel, null, [{
    key: "initialize",
    value: function initialize(obj, color, name) {
      obj['color'] = color;
      obj['name'] = name;
    }
    /**
     * Constructs a <code>IssueEventLabel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueEventLabel} obj Optional instance to populate.
     * @return {module:model/IssueEventLabel} The populated <code>IssueEventLabel</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IssueEventLabel();

        if (data.hasOwnProperty('color')) {
          obj['color'] = _ApiClient["default"].convertToType(data['color'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return IssueEventLabel;
}();
/**
 * @member {String} color
 */


IssueEventLabel.prototype['color'] = undefined;
/**
 * @member {String} name
 */

IssueEventLabel.prototype['name'] = undefined;
var _default = IssueEventLabel;
exports["default"] = _default;