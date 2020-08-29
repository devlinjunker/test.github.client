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
 * The InlineObject101 model module.
 * @module model/InlineObject101
 * @version 0.0.5
 */
var InlineObject101 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject101</code>.
   * @alias module:model/InlineObject101
   * @param base {String} The name of the branch you want the changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repository that requests a merge to a base of another repository.
   * @param head {String} The name of the branch where your changes are implemented. For cross-repository pull requests in the same network, namespace `head` with a user like this: `username:branch`.
   */
  function InlineObject101(base, head) {
    _classCallCheck(this, InlineObject101);

    InlineObject101.initialize(this, base, head);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject101, null, [{
    key: "initialize",
    value: function initialize(obj, base, head) {
      obj['base'] = base;
      obj['head'] = head;
    }
    /**
     * Constructs a <code>InlineObject101</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject101} obj Optional instance to populate.
     * @return {module:model/InlineObject101} The populated <code>InlineObject101</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject101();

        if (data.hasOwnProperty('base')) {
          obj['base'] = _ApiClient["default"].convertToType(data['base'], 'String');
        }

        if (data.hasOwnProperty('body')) {
          obj['body'] = _ApiClient["default"].convertToType(data['body'], 'String');
        }

        if (data.hasOwnProperty('draft')) {
          obj['draft'] = _ApiClient["default"].convertToType(data['draft'], 'Boolean');
        }

        if (data.hasOwnProperty('head')) {
          obj['head'] = _ApiClient["default"].convertToType(data['head'], 'String');
        }

        if (data.hasOwnProperty('issue')) {
          obj['issue'] = _ApiClient["default"].convertToType(data['issue'], 'Number');
        }

        if (data.hasOwnProperty('maintainer_can_modify')) {
          obj['maintainer_can_modify'] = _ApiClient["default"].convertToType(data['maintainer_can_modify'], 'Boolean');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject101;
}();
/**
 * The name of the branch you want the changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repository that requests a merge to a base of another repository.
 * @member {String} base
 */


InlineObject101.prototype['base'] = undefined;
/**
 * The contents of the pull request.
 * @member {String} body
 */

InlineObject101.prototype['body'] = undefined;
/**
 * Indicates whether the pull request is a draft. See \"[Draft Pull Requests](https://help.github.com/en/articles/about-pull-requests#draft-pull-requests)\" in the GitHub Help documentation to learn more.
 * @member {Boolean} draft
 */

InlineObject101.prototype['draft'] = undefined;
/**
 * The name of the branch where your changes are implemented. For cross-repository pull requests in the same network, namespace `head` with a user like this: `username:branch`.
 * @member {String} head
 */

InlineObject101.prototype['head'] = undefined;
/**
 * @member {Number} issue
 */

InlineObject101.prototype['issue'] = undefined;
/**
 * Indicates whether [maintainers can modify](https://help.github.com/articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork/) the pull request.
 * @member {Boolean} maintainer_can_modify
 */

InlineObject101.prototype['maintainer_can_modify'] = undefined;
/**
 * The title of the new pull request.
 * @member {String} title
 */

InlineObject101.prototype['title'] = undefined;
var _default = InlineObject101;
exports["default"] = _default;