part of openapi.api;

class BranchProtection {
  
  BranchProtectionAllowDeletions allowDeletions = null;
  
  BranchProtectionAllowDeletions allowForcePushes = null;
  
  bool enabled = null;
  
  ProtectedBranchAdminEnforced enforceAdmins = null;
  
  String name = null;
  
  String protectionUrl = null;
  
  BranchProtectionAllowDeletions requiredLinearHistory = null;
  
  ProtectedBranchPullRequestReview requiredPullRequestReviews = null;
  
  BranchProtectionRequiredStatusChecks requiredStatusChecks = null;
  
  BranchRestrictionPolicy restrictions = null;
  
  String url = null;

  BranchProtection({
    this.allowDeletions,
    this.allowForcePushes,
    this.enabled,
    this.enforceAdmins,
    this.name,
    this.protectionUrl,
    this.requiredLinearHistory,
    this.requiredPullRequestReviews,
    this.requiredStatusChecks,
    this.restrictions,
    this.url,
  });

  @override
  String toString() {
    return 'BranchProtection[allowDeletions=$allowDeletions, allowForcePushes=$allowForcePushes, enabled=$enabled, enforceAdmins=$enforceAdmins, name=$name, protectionUrl=$protectionUrl, requiredLinearHistory=$requiredLinearHistory, requiredPullRequestReviews=$requiredPullRequestReviews, requiredStatusChecks=$requiredStatusChecks, restrictions=$restrictions, url=$url, ]';
  }

  BranchProtection.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    allowDeletions = (json['allow_deletions'] == null) ?
      null :
      BranchProtectionAllowDeletions.fromJson(json['allow_deletions']);
    allowForcePushes = (json['allow_force_pushes'] == null) ?
      null :
      BranchProtectionAllowDeletions.fromJson(json['allow_force_pushes']);
    enabled = json['enabled'];
    enforceAdmins = (json['enforce_admins'] == null) ?
      null :
      ProtectedBranchAdminEnforced.fromJson(json['enforce_admins']);
    name = json['name'];
    protectionUrl = json['protection_url'];
    requiredLinearHistory = (json['required_linear_history'] == null) ?
      null :
      BranchProtectionAllowDeletions.fromJson(json['required_linear_history']);
    requiredPullRequestReviews = (json['required_pull_request_reviews'] == null) ?
      null :
      ProtectedBranchPullRequestReview.fromJson(json['required_pull_request_reviews']);
    requiredStatusChecks = (json['required_status_checks'] == null) ?
      null :
      BranchProtectionRequiredStatusChecks.fromJson(json['required_status_checks']);
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
    if (enabled != null)
      json['enabled'] = enabled;
    if (enforceAdmins != null)
      json['enforce_admins'] = enforceAdmins;
    if (name != null)
      json['name'] = name;
    if (protectionUrl != null)
      json['protection_url'] = protectionUrl;
    if (requiredLinearHistory != null)
      json['required_linear_history'] = requiredLinearHistory;
    if (requiredPullRequestReviews != null)
      json['required_pull_request_reviews'] = requiredPullRequestReviews;
    if (requiredStatusChecks != null)
      json['required_status_checks'] = requiredStatusChecks;
    if (restrictions != null)
      json['restrictions'] = restrictions;
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<BranchProtection> listFromJson(List<dynamic> json) {
    return json == null ? List<BranchProtection>() : json.map((value) => BranchProtection.fromJson(value)).toList();
  }

  static Map<String, BranchProtection> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, BranchProtection>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = BranchProtection.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of BranchProtection-objects as value to a dart map
  static Map<String, List<BranchProtection>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<BranchProtection>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = BranchProtection.listFromJson(value);
       });
     }
     return map;
  }
}

