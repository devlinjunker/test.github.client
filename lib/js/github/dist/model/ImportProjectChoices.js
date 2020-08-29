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
 * The ImportProjectChoices model module.
 * @module model/ImportProjectChoices
 * @version 0.0.5
 */
var ImportProjectChoices = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ImportProjectChoices</code>.
   * @alias module:model/ImportProjectChoices
   */
  function ImportProjectChoices() {
    _classCallCheck(this, ImportProjectChoices);

    ImportProjectChoices.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ImportProjectChoices, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ImportProjectChoices</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ImportProjectChoices} obj Optional instance to populate.
     * @return {module:model/ImportProjectChoices} The populated <code>ImportProjectChoices</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ImportProjectChoices();

        if (data.hasOwnProperty('human_name')) {
          obj['human_name'] = _ApiClient["default"].convertToType(data['human_name'], 'String');
        }

        if (data.hasOwnProperty('tfvc_project')) {
          obj['tfvc_project'] = _ApiClient["default"].convertToType(data['tfvc_project'], 'String');
        }

        if (data.hasOwnProperty('vcs')) {
          obj['vcs'] = _ApiClient["default"].convertToType(data['vcs'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ImportProjectChoices;
}();
/**
 * @member {String} human_name
 */


ImportProjectChoices.prototype['human_name'] = undefined;
/**
 * @member {String} tfvc_project
 */

ImportProjectChoices.prototype['tfvc_project'] = undefined;
/**
 * @member {String} vcs
 */

ImportProjectChoices.prototype['vcs'] = undefined;
var _default = ImportProjectChoices;
exports["default"] = _default;