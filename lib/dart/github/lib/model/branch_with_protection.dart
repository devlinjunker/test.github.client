part of openapi.api;

class BranchWithProtection {
  
  BranchWithProtectionLinks links = null;
  
  Commit commit = null;
  
  String name = null;
  
  String pattern = null;
  
  bool protected = null;
  
  BranchProtection protection = null;
  
  String protectionUrl = null;
  
  int requiredApprovingReviewCount = null;

  BranchWithProtection({
    this.links,
    this.commit,
    this.name,
    this.pattern,
    this.protected,
    this.protection,
    this.protectionUrl,
    this.requiredApprovingReviewCount,
  });

  @override
  String toString() {
    return 'BranchWithProtection[links=$links, commit=$commit, name=$name, pattern=$pattern, protected=$protected, protection=$protection, protectionUrl=$protectionUrl, requiredApprovingReviewCount=$requiredApprovingReviewCount, ]';
  }

  BranchWithProtection.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    links = (json['_links'] == null) ?
      null :
      BranchWithProtectionLinks.fromJson(json['_links']);
    commit = (json['commit'] == null) ?
      null :
      Commit.fromJson(json['commit']);
    name = json['name'];
    pattern = json['pattern'];
    protected = json['protected'];
    protection = (json['protection'] == null) ?
      null :
      BranchProtection.fromJson(json['protection']);
    protectionUrl = json['protection_url'];
    requiredApprovingReviewCount = json['required_approving_review_count'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (links != null)
      json['_links'] = links;
    if (commit != null)
      json['commit'] = commit;
    if (name != null)
      json['name'] = name;
    if (pattern != null)
      json['pattern'] = pattern;
    if (protected != null)
      json['protected'] = protected;
    if (protection != null)
      json['protection'] = protection;
    if (protectionUrl != null)
      json['protection_url'] = protectionUrl;
    if (requiredApprovingReviewCount != null)
      json['required_approving_review_count'] = requiredApprovingReviewCount;
    return json;
  }

  static List<BranchWithProtection> listFromJson(List<dynamic> json) {
    return json == null ? List<BranchWithProtection>() : json.map((value) => BranchWithProtection.fromJson(value)).toList();
  }

  static Map<String, BranchWithProtection> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, BranchWithProtection>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = BranchWithProtection.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of BranchWithProtection-objects as value to a dart map
  static Map<String, List<BranchWithProtection>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<BranchWithProtection>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = BranchWithProtection.listFromJson(value);
       });
     }
     return map;
  }
}

