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
 * The InlineObject122 model module.
 * @module model/InlineObject122
 * @version 0.0.5
 */
var InlineObject122 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject122</code>.
   * @alias module:model/InlineObject122
   * @param name {String} The name of the new repository.
   */
  function InlineObject122(name) {
    _classCallCheck(this, InlineObject122);

    InlineObject122.initialize(this, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject122, null, [{
    key: "initialize",
    value: function initialize(obj, name) {
      obj['name'] = name;
    }
    /**
     * Constructs a <code>InlineObject122</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject122} obj Optional instance to populate.
     * @return {module:model/InlineObject122} The populated <code>InlineObject122</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject122();

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('owner')) {
          obj['owner'] = _ApiClient["default"].convertToType(data['owner'], 'String');
        }

        if (data.hasOwnProperty('private')) {
          obj['private'] = _ApiClient["default"].convertToType(data['private'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return InlineObject122;
}();
/**
 * A short description of the new repository.
 * @member {String} description
 */


InlineObject122.prototype['description'] = undefined;
/**
 * The name of the new repository.
 * @member {String} name
 */

InlineObject122.prototype['name'] = undefined;
/**
 * The organization or person who will own the new repository. To create a new repository in an organization, the authenticated user must be a member of the specified organization.
 * @member {String} owner
 */

InlineObject122.prototype['owner'] = undefined;
/**
 * Either `true` to create a new private repository or `false` to create a new public one.
 * @member {Boolean} private
 * @default false
 */

InlineObject122.prototype['private'] = false;
var _default = InlineObject122;
exports["default"] = _default;