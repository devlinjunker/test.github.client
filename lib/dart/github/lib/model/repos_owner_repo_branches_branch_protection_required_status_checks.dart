part of openapi.api;

class ReposOwnerRepoBranchesBranchProtectionRequiredStatusChecks {
  /* The list of status checks to require in order to merge into this branch */
  List<String> contexts = [];
  /* Require branches to be up to date before merging. */
  bool strict = null;

  ReposOwnerRepoBranchesBranchProtectionRequiredStatusChecks({
    this.contexts,
    this.strict,
  });

  @override
  String toString() {
    return 'ReposOwnerRepoBranchesBranchProtectionRequiredStatusChecks[contexts=$contexts, strict=$strict, ]';
  }

  ReposOwnerRepoBranchesBranchProtectionRequiredStatusChecks.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    contexts = (json['contexts'] == null) ?
      null :
      (json['contexts'] as List).cast<String>();
    strict = json['strict'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (contexts != null)
      json['contexts'] = contexts;
    if (strict != null)
      json['strict'] = strict;
    return json;
  }

  static List<ReposOwnerRepoBranchesBranchProtectionRequiredStatusChecks> listFromJson(List<dynamic> json) {
    return json == null ? List<ReposOwnerRepoBranchesBranchProtectionRequiredStatusChecks>() : json.map((value) => ReposOwnerRepoBranchesBranchProtectionRequiredStatusChecks.fromJson(value)).toList();
  }

  static Map<String, ReposOwnerRepoBranchesBranchProtectionRequiredStatusChecks> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ReposOwnerRepoBranchesBranchProtectionRequiredStatusChecks>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ReposOwnerRepoBranchesBranchProtectionRequiredStatusChecks.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ReposOwnerRepoBranchesBranchProtectionRequiredStatusChecks-objects as value to a dart map
  static Map<String, List<ReposOwnerRepoBranchesBranchProtectionRequiredStatusChecks>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ReposOwnerRepoBranchesBranchProtectionRequiredStatusChecks>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ReposOwnerRepoBranchesBranchProtectionRequiredStatusChecks.listFromJson(value);
       });
     }
     return map;
  }
}

