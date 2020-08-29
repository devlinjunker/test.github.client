part of openapi.api;

class ProtectedBranchPullRequestReview {
  
  bool dismissStaleReviews = null;
  
  ProtectedBranchPullRequestReviewDismissalRestrictions dismissalRestrictions = null;
  
  bool requireCodeOwnerReviews = null;
  
  int requiredApprovingReviewCount = null;
  
  String url = null;

  ProtectedBranchPullRequestReview({
    this.dismissStaleReviews,
    this.dismissalRestrictions,
    this.requireCodeOwnerReviews,
    this.requiredApprovingReviewCount,
    this.url,
  });

  @override
  String toString() {
    return 'ProtectedBranchPullRequestReview[dismissStaleReviews=$dismissStaleReviews, dismissalRestrictions=$dismissalRestrictions, requireCodeOwnerReviews=$requireCodeOwnerReviews, requiredApprovingReviewCount=$requiredApprovingReviewCount, url=$url, ]';
  }

  ProtectedBranchPullRequestReview.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    dismissStaleReviews = json['dismiss_stale_reviews'];
    dismissalRestrictions = (json['dismissal_restrictions'] == null) ?
      null :
      ProtectedBranchPullRequestReviewDismissalRestrictions.fromJson(json['dismissal_restrictions']);
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

  static List<ProtectedBranchPullRequestReview> listFromJson(List<dynamic> json) {
    return json == null ? List<ProtectedBranchPullRequestReview>() : json.map((value) => ProtectedBranchPullRequestReview.fromJson(value)).toList();
  }

  static Map<String, ProtectedBranchPullRequestReview> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ProtectedBranchPullRequestReview>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ProtectedBranchPullRequestReview.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ProtectedBranchPullRequestReview-objects as value to a dart map
  static Map<String, List<ProtectedBranchPullRequestReview>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ProtectedBranchPullRequestReview>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ProtectedBranchPullRequestReview.listFromJson(value);
       });
     }
     return map;
  }
}

