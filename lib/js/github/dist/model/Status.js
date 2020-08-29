"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SimpleUser = _interopRequireDefault(require("./SimpleUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Status model module.
 * @module model/Status
 * @version 0.0.5
 */
var Status = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Status</code>.
   * The status of a commit.
   * @alias module:model/Status
   */
  function Status() {
    _classCallCheck(this, Status);

    Status.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Status, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Status</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Status} obj Optional instance to populate.
     * @return {module:model/Status} The populated <code>Status</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Status();

        if (data.hasOwnProperty('avatar_url')) {
          obj['avatar_url'] = _ApiClient["default"].convertToType(data['avatar_url'], 'String');
        }

        if (data.hasOwnProperty('context')) {
          obj['context'] = _ApiClient["default"].convertToType(data['context'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
        }

        if (data.hasOwnProperty('creator')) {
          obj['creator'] = _SimpleUser["default"].constructFromObject(data['creator']);
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('node_id')) {
          obj['node_id'] = _ApiClient["default"].convertToType(data['node_id'], 'String');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }

        if (data.hasOwnProperty('target_url')) {
          obj['target_url'] = _ApiClient["default"].convertToType(data['target_url'], 'String');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Status;
}();
/**
 * @member {String} avatar_url
 */


Status.prototype['avatar_url'] = undefined;
/**
 * @member {String} context
 */

Status.prototype['context'] = undefined;
/**
 * @member {String} created_at
 */

Status.prototype['created_at'] = undefined;
/**
 * @member {module:model/SimpleUser} creator
 */

Status.prototype['creator'] = undefined;
/**
 * @member {String} description
 */

Status.prototype['description'] = undefined;
/**
 * @member {Number} id
 */

Status.prototype['id'] = undefined;
/**
 * @member {String} node_id
 */

Status.prototype['node_id'] = undefined;
/**
 * @member {String} state
 */

Status.prototype['state'] = undefined;
/**
 * @member {String} target_url
 */

Status.prototype['target_url'] = undefined;
/**
 * @member {String} updated_at
 */

Status.prototype['updated_at'] = undefined;
/**
 * @member {String} url
 */

Status.prototype['url'] = undefined;
var _default = Status;
exports["default"] = _default;