part of openapi.api;

class ShortBranch {
  
  CommitSearchResultItemCommitTree commit = null;
  
  String name = null;
  
  bool protected = null;
  
  BranchProtection protection = null;
  
  String protectionUrl = null;

  ShortBranch({
    this.commit,
    this.name,
    this.protected,
    this.protection,
    this.protectionUrl,
  });

  @override
  String toString() {
    return 'ShortBranch[commit=$commit, name=$name, protected=$protected, protection=$protection, protectionUrl=$protectionUrl, ]';
  }

  ShortBranch.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    commit = (json['commit'] == null) ?
      null :
      CommitSearchResultItemCommitTree.fromJson(json['commit']);
    name = json['name'];
    protected = json['protected'];
    protection = (json['protection'] == null) ?
      null :
      BranchProtection.fromJson(json['protection']);
    protectionUrl = json['protection_url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (commit != null)
      json['commit'] = commit;
    if (name != null)
      json['name'] = name;
    if (protected != null)
      json['protected'] = protected;
    if (protection != null)
      json['protection'] = protection;
    if (protectionUrl != null)
      json['protection_url'] = protectionUrl;
    return json;
  }

  static List<ShortBranch> listFromJson(List<dynamic> json) {
    return json == null ? List<ShortBranch>() : json.map((value) => ShortBranch.fromJson(value)).toList();
  }

  static Map<String, ShortBranch> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ShortBranch>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ShortBranch.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ShortBranch-objects as value to a dart map
  static Map<String, List<ShortBranch>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ShortBranch>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ShortBranch.listFromJson(value);
       });
     }
     return map;
  }
}

