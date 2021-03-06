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
import BranchProtection from './BranchProtection';
import CommitSearchResultItemCommitTree from './CommitSearchResultItemCommitTree';

/**
 * The ShortBranch model module.
 * @module model/ShortBranch
 * @version 0.0.5
 */
class ShortBranch {
    /**
     * Constructs a new <code>ShortBranch</code>.
     * Short Branch
     * @alias module:model/ShortBranch
     * @param commit {module:model/CommitSearchResultItemCommitTree} 
     * @param name {String} 
     * @param _protected {Boolean} 
     */
    constructor(commit, name, _protected) { 
        
        ShortBranch.initialize(this, commit, name, _protected);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, commit, name, _protected) { 
        obj['commit'] = commit;
        obj['name'] = name;
        obj['protected'] = _protected;
    }

    /**
     * Constructs a <code>ShortBranch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ShortBranch} obj Optional instance to populate.
     * @return {module:model/ShortBranch} The populated <code>ShortBranch</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ShortBranch();

            if (data.hasOwnProperty('commit')) {
                obj['commit'] = CommitSearchResultItemCommitTree.constructFromObject(data['commit']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('protected')) {
                obj['protected'] = ApiClient.convertToType(data['protected'], 'Boolean');
            }
            if (data.hasOwnProperty('protection')) {
                obj['protection'] = BranchProtection.constructFromObject(data['protection']);
            }
            if (data.hasOwnProperty('protection_url')) {
                obj['protection_url'] = ApiClient.convertToType(data['protection_url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/CommitSearchResultItemCommitTree} commit
 */
ShortBranch.prototype['commit'] = undefined;

/**
 * @member {String} name
 */
ShortBranch.prototype['name'] = undefined;

/**
 * @member {Boolean} protected
 */
ShortBranch.prototype['protected'] = undefined;

/**
 * @member {module:model/BranchProtection} protection
 */
ShortBranch.prototype['protection'] = undefined;

/**
 * @member {String} protection_url
 */
ShortBranch.prototype['protection_url'] = undefined;






export default ShortBranch;

