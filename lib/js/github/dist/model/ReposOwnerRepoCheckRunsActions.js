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
 * The ReposOwnerRepoCheckRunsActions model module.
 * @module model/ReposOwnerRepoCheckRunsActions
 * @version 0.0.5
 */
var ReposOwnerRepoCheckRunsActions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ReposOwnerRepoCheckRunsActions</code>.
   * @alias module:model/ReposOwnerRepoCheckRunsActions
   * @param description {String} A short explanation of what this action would do. The maximum size is 40 characters.
   * @param identifier {String} A reference for the action on the integrator's system. The maximum size is 20 characters.
   * @param label {String} The text to be displayed on a button in the web UI. The maximum size is 20 characters.
   */
  function ReposOwnerRepoCheckRunsActions(description, identifier, label) {
    _classCallCheck(this, ReposOwnerRepoCheckRunsActions);

    ReposOwnerRepoCheckRunsActions.initialize(this, description, identifier, label);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ReposOwnerRepoCheckRunsActions, null, [{
    key: "initialize",
    value: function initialize(obj, description, identifier, label) {
      obj['description'] = description;
      obj['identifier'] = identifier;
      obj['label'] = label;
    }
    /**
     * Constructs a <code>ReposOwnerRepoCheckRunsActions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReposOwnerRepoCheckRunsActions} obj Optional instance to populate.
     * @return {module:model/ReposOwnerRepoCheckRunsActions} The populated <code>ReposOwnerRepoCheckRunsActions</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReposOwnerRepoCheckRunsActions();

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('identifier')) {
          obj['identifier'] = _ApiClient["default"].convertToType(data['identifier'], 'String');
        }

        if (data.hasOwnProperty('label')) {
          obj['label'] = _ApiClient["default"].convertToType(data['label'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ReposOwnerRepoCheckRunsActions;
}();
/**
 * A short explanation of what this action would do. The maximum size is 40 characters.
 * @member {String} description
 */


ReposOwnerRepoCheckRunsActions.prototype['description'] = undefined;
/**
 * A reference for the action on the integrator's system. The maximum size is 20 characters.
 * @member {String} identifier
 */

ReposOwnerRepoCheckRunsActions.prototype['identifier'] = undefined;
/**
 * The text to be displayed on a button in the web UI. The maximum size is 20 characters.
 * @member {String} label
 */

ReposOwnerRepoCheckRunsActions.prototype['label'] = undefined;
var _default = ReposOwnerRepoCheckRunsActions;
exports["default"] = _default;