part of openapi.api;

class ProtectedBranchRequiredPullRequestReviews {
  
  bool dismissStaleReviews = null;
  
  ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions dismissalRestrictions = null;
  
  bool requireCodeOwnerReviews = null;
  
  int requiredApprovingReviewCount = null;
  
  String url = null;

  ProtectedBranchRequiredPullRequestReviews({
    this.dismissStaleReviews,
    this.dismissalRestrictions,
    this.requireCodeOwnerReviews,
    this.requiredApprovingReviewCount,
    this.url,
  });

  @override
  String toString() {
    return 'ProtectedBranchRequiredPullRequestReviews[dismissStaleReviews=$dismissStaleReviews, dismissalRestrictions=$dismissalRestrictions, requireCodeOwnerReviews=$requireCodeOwnerReviews, requiredApprovingReviewCount=$requiredApprovingReviewCount, url=$url, ]';
  }

  ProtectedBranchRequiredPullRequestReviews.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    dismissStaleReviews = json['dismiss_stale_reviews'];
    dismissalRestrictions = (json['dismissal_restrictions'] == null) ?
      null :
      ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions.fromJson(json['dismissal_restrictions']);
    requireCodeOwnerReviews = json['require_code_owner_reviews'];
    requiredApprovingReviewCount = json['required_approving_review_count'];
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (dismissStaleReviews != null)
      json['dismiss_stale_reviews'] = dismissStaleReviews;
    if (dismissalRestrictions != null)
      json['dismissal_restrictions'] = dismissalRestrictions;
    if (requireCodeOwnerReviews != null)
      json['require_code_owner_reviews'] = requireCodeOwnerReviews;
    if (requiredApprovingReviewCount != null)
      json['required_approving_review_count'] = requiredApprovingReviewCount;
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<ProtectedBranchRequiredPullRequestReviews> listFromJson(List<dynamic> json) {
    return json == null ? List<ProtectedBranchRequiredPullRequestReviews>() : json.map((value) => ProtectedBranchRequiredPullRequestReviews.fromJson(value)).toList();
  }

  static Map<String, ProtectedBranchRequiredPullRequestReviews> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ProtectedBranchRequiredPullRequestReviews>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ProtectedBranchRequiredPullRequestReviews.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ProtectedBranchRequiredPullRequestReviews-objects as value to a dart map
  static Map<String, List<ProtectedBranchRequiredPullRequestReviews>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ProtectedBranchRequiredPullRequestReviews>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ProtectedBranchRequiredPullRequestReviews.listFromJson(value);
       });
     }
     return map;
  }
}

