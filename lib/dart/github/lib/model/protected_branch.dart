part of openapi.api;

class ProtectedBranch {
  
  ProtectedBranchAllowDeletions allowDeletions = null;
  
  ProtectedBranchAllowDeletions allowForcePushes = null;
  
  ProtectedBranchEnforceAdmins enforceAdmins = null;
  
  ProtectedBranchAllowDeletions requiredLinearHistory = null;
  
  ProtectedBranchRequiredPullRequestReviews requiredPullRequestReviews = null;
  
  ProtectedBranchRequiredSignatures requiredSignatures = null;
  
  StatusCheckPolicy requiredStatusChecks = null;
  
  BranchRestrictionPolicy restrictions = null;
  
  String url = null;

  ProtectedBranch({
    this.allowDeletions,
    this.allowForcePushes,
    this.enforceAdmins,
    this.requiredLinearHistory,
    this.requiredPullRequestReviews,
    this.requiredSignatures,
    this.requiredStatusChecks,
    this.restrictions,
    this.url,
  });

  @override
  String toString() {
    return 'ProtectedBranch[allowDeletions=$allowDeletions, allowForcePushes=$allowForcePushes, enforceAdmins=$enforceAdmins, requiredLinearHistory=$requiredLinearHistory, requiredPullRequestReviews=$requiredPullRequestReviews, requiredSignatures=$requiredSignatures, requiredStatusChecks=$requiredStatusChecks, restrictions=$restrictions, url=$url, ]';
  }

  ProtectedBranch.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    allowDeletions = (json['allow_deletions'] == null) ?
      null :
      ProtectedBranchAllowDeletions.fromJson(json['allow_deletions']);
    allowForcePushes = (json['allow_force_pushes'] == null) ?
      null :
      ProtectedBranchAllowDeletions.fromJson(json['allow_force_pushes']);
    enforceAdmins = (json['enforce_admins'] == null) ?
      null :
      ProtectedBranchEnforceAdmins.fromJson(json['enforce_admins']);
    requiredLinearHistory = (json['required_linear_history'] == null) ?
      null :
      ProtectedBranchAllowDeletions.fromJson(json['required_linear_history']);
    requiredPullRequestReviews = (json['required_pull_request_reviews'] == null) ?
      null :
      ProtectedBranchRequiredPullRequestReviews.fromJson(json['required_pull_request_reviews']);
    requiredSignatures = (json['required_signatures'] == null) ?
      null :
      ProtectedBranchRequiredSignatures.fromJson(json['required_signatures']);
    requiredStatusChecks = (json['required_status_checks'] == null) ?
      null :
      StatusCheckPolicy.fromJson(json['required_status_checks']);
    restrictions = (json['restrictions'] == null) ?
      null :
      BranchRestrictionPolicy.fromJson(json['restrictions']);
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (allowDeletions != null)
      json['allow_deletions'] = allowDeletions;
    if (allowForcePushes != null)
      json['allow_force_pushes'] = allowForcePushes;
    if (enforceAdmins != null)
      json['enforce_admins'] = enforceAdmins;
    if (requiredLinearHistory != null)
      json['required_linear_history'] = requiredLinearHistory;
    if (requiredPullRequestReviews != null)
      json['required_pull_request_reviews'] = requiredPullRequestReviews;
    if (requiredSignatures != null)
      json['required_signatures'] = requiredSignatures;
    if (requiredStatusChecks != null)
      json['required_status_checks'] = requiredStatusChecks;
    if (restrictions != null)
      json['restrictions'] = restrictions;
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<ProtectedBranch> listFromJson(List<dynamic> json) {
    return json == null ? List<ProtectedBranch>() : json.map((value) => ProtectedBranch.fromJson(value)).toList();
  }

  static Map<String, ProtectedBranch> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ProtectedBranch>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ProtectedBranch.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ProtectedBranch-objects as value to a dart map
  static Map<String, List<ProtectedBranch>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ProtectedBranch>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ProtectedBranch.listFromJson(value);
       });
     }
     return map;
  }
}

