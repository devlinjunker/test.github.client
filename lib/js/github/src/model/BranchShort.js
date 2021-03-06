/**
 * GitHub v3 REST API
 * GitHub's v3 REST API.
 *
 * The version of the OpenAPI document: 0.0.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import BranchShortCommit from './BranchShortCommit';

/**
 * The BranchShort model module.
 * @module model/BranchShort
 * @version 0.0.5
 */
class BranchShort {
    /**
     * Constructs a new <code>BranchShort</code>.
     * Branch Short
     * @alias module:model/BranchShort
     */
    constructor() { 
        
        BranchShort.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BranchShort</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BranchShort} obj Optional instance to populate.
     * @return {module:model/BranchShort} The populated <code>BranchShort</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BranchShort();

            if (data.hasOwnProperty('commit')) {
                obj['commit'] = BranchShortCommit.constructFromObject(data['commit']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('protected')) {
                obj['protected'] = ApiClient.convertToType(data['protected'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/BranchShortCommit} commit
 */
BranchShort.prototype['commit'] = undefined;

/**
 * @member {String} name
 */
BranchShort.prototype['name'] = undefined;

/**
 * @member {Boolean} protected
 */
BranchShort.prototype['protected'] = undefined;






export default BranchShort;

