part of openapi.api;

class InlineObject49 {
  /* Allows deletion of the protected branch by anyone with write access to the repository. Set to `false` to prevent deletion of the protected branch. Default: `false`. For more information, see \"[Enabling force pushes to a protected branch](https://help.github.com/en/github/administering-a-repository/enabling-force-pushes-to-a-protected-branch)\" in the GitHub Help documentation. */
  bool allowDeletions = null;
  /* Permits force pushes to the protected branch by anyone with write access to the repository. Set to `true` to allow force pushes. Set to `false` or `null` to block force pushes. Default: `false`. For more information, see \"[Enabling force pushes to a protected branch](https://help.github.com/en/github/administering-a-repository/enabling-force-pushes-to-a-protected-branch)\" in the GitHub Help documentation.\" */
  bool allowForcePushes = null;
  /* Enforce all configured restrictions for administrators. Set to `true` to enforce required status checks for repository administrators. Set to `null` to disable. */
  bool enforceAdmins = null;
  /* Enforces a linear commit Git history, which prevents anyone from pushing merge commits to a branch. Set to `true` to enforce a linear commit history. Set to `false` to disable a linear commit Git history. Your repository must allow squash merging or rebase merging before you can enable a linear commit history. Default: `false`. For more information, see \"[Requiring a linear commit history](https://help.github.com/github/administering-a-repository/requiring-a-linear-commit-history)\" in the GitHub Help documentation. */
  bool requiredLinearHistory = null;
  
  ReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviews requiredPullRequestReviews = null;
  
  ReposOwnerRepoBranchesBranchProtectionRequiredStatusChecks requiredStatusChecks = null;
  
  ReposOwnerRepoBranchesBranchProtectionRestrictions restrictions = null;

  InlineObject49({
    this.allowDeletions,
    this.allowForcePushes,
    this.enforceAdmins,
    this.requiredLinearHistory,
    this.requiredPullRequestReviews,
    this.requiredStatusChecks,
    this.restrictions,
  });

  @override
  String toString() {
    return 'InlineObject49[allowDeletions=$allowDeletions, allowForcePushes=$allowForcePushes, enforceAdmins=$enforceAdmins, requiredLinearHistory=$requiredLinearHistory, requiredPullRequestReviews=$requiredPullRequestReviews, requiredStatusChecks=$requiredStatusChecks, restrictions=$restrictions, ]';
  }

  InlineObject49.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    allowDeletions = json['allow_deletions'];
    allowForcePushes = json['allow_force_pushes'];
    enforceAdmins = json['enforce_admins'];
    requiredLinearHistory = json['required_linear_history'];
    requiredPullRequestReviews = (json['required_pull_request_reviews'] == null) ?
      null :
      ReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviews.fromJson(json['required_pull_request_reviews']);
    requiredStatusChecks = (json['required_status_checks'] == null) ?
      null :
      ReposOwnerRepoBranchesBranchProtectionRequiredStatusChecks.fromJson(json['required_status_checks']);
    restrictions = (json['restrictions'] == null) ?
      null :
      ReposOwnerRepoBranchesBranchProtectionRestrictions.fromJson(json['restrictions']);
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (allowDeletions != null)
      json['allow_deletions'] = allowDeletions;
      json['allow_force_pushes'] = allowForcePushes;
      json['enforce_admins'] = enforceAdmins;
    if (requiredLinearHistory != null)
      json['required_linear_history'] = requiredLinearHistory;
      json['required_pull_request_reviews'] = requiredPullRequestReviews;
      json['required_status_checks'] = requiredStatusChecks;
      json['restrictions'] = restrictions;
    return json;
  }

  static List<InlineObject49> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject49>() : json.map((value) => InlineObject49.fromJson(value)).toList();
  }

  static Map<String, InlineObject49> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject49>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject49.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject49-objects as value to a dart map
  static Map<String, List<InlineObject49>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject49>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject49.listFromJson(value);
       });
     }
     return map;
  }
}

