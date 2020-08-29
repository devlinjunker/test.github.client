part of openapi.api;

class BranchShort {
  
  BranchShortCommit commit = null;
  
  String name = null;
  
  bool protected = null;

  BranchShort({
    this.commit,
    this.name,
    this.protected,
  });

  @override
  String toString() {
    return 'BranchShort[commit=$commit, name=$name, protected=$protected, ]';
  }

  BranchShort.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    commit = (json['commit'] == null) ?
      null :
      BranchShortCommit.fromJson(json['commit']);
    name = json['name'];
    protected = json['protected'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (commit != null)
      json['commit'] = commit;
    if (name != null)
      json['name'] = name;
    if (protected != null)
      json['protected'] = protected;
    return json;
  }

  static List<BranchShort> listFromJson(List<dynamic> json) {
    return json == null ? List<BranchShort>() : json.map((value) => BranchShort.fromJson(value)).toList();
  }

  static Map<String, BranchShort> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, BranchShort>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = BranchShort.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of BranchShort-objects as value to a dart map
  static Map<String, List<BranchShort>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<BranchShort>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = BranchShort.listFromJson(value);
       });
     }
     return map;
  }
}

