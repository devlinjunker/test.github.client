part of openapi.api;

class ReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviews {
  /* Set to `true` if you want to automatically dismiss approving reviews when someone pushes a new commit. */
  bool dismissStaleReviews = null;
  
  ReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviewsDismissalRestrictions dismissalRestrictions = null;
  /* Blocks merging pull requests until [code owners](https://help.github.com/articles/about-code-owners/) review them. */
  bool requireCodeOwnerReviews = null;
  /* Specify the number of reviewers required to approve pull requests. Use a number between 1 and 6. */
  int requiredApprovingReviewCount = null;

  ReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviews({
    this.dismissStaleReviews,
    this.dismissalRestrictions,
    this.requireCodeOwnerReviews,
    this.requiredApprovingReviewCount,
  });

  @override
  String toString() {
    return 'ReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviews[dismissStaleReviews=$dismissStaleReviews, dismissalRestrictions=$dismissalRestrictions, requireCodeOwnerReviews=$requireCodeOwnerReviews, requiredApprovingReviewCount=$requiredApprovingReviewCount, ]';
  }

  ReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviews.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    dismissStaleReviews = json['dismiss_stale_reviews'];
    dismissalRestrictions = (json['dismissal_restrictions'] == null) ?
      null :
      ReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviewsDismissalRestrictions.fromJson(json['dismissal_restrictions']);
    requireCodeOwnerReviews = json['require_code_owner_reviews'];
    requiredApprovingReviewCount = json['required_approving_review_count'];
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
    return json;
  }

  static List<ReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviews> listFromJson(List<dynamic> json) {
    return json == null ? List<ReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviews>() : json.map((value) => ReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviews.fromJson(value)).toList();
  }

  static Map<String, ReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviews> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviews>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviews.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviews-objects as value to a dart map
  static Map<String, List<ReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviews>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviews>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviews.listFromJson(value);
       });
     }
     return map;
  }
}

