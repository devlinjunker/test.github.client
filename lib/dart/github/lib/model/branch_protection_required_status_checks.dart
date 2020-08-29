part of openapi.api;

class BranchProtectionRequiredStatusChecks {
  
  List<String> contexts = [];
  
  String contextsUrl = null;
  
  String enforcementLevel = null;
  
  String url = null;

  BranchProtectionRequiredStatusChecks({
    this.contexts,
    this.contextsUrl,
    this.enforcementLevel,
    this.url,
  });

  @override
  String toString() {
    return 'BranchProtectionRequiredStatusChecks[contexts=$contexts, contextsUrl=$contextsUrl, enforcementLevel=$enforcementLevel, url=$url, ]';
  }

  BranchProtectionRequiredStatusChecks.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    contexts = (json['contexts'] == null) ?
      null :
      (json['contexts'] as List).cast<String>();
    contextsUrl = json['contexts_url'];
    enforcementLevel = json['enforcement_level'];
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (contexts != null)
      json['contexts'] = contexts;
    if (contextsUrl != null)
      json['contexts_url'] = contextsUrl;
    if (enforcementLevel != null)
      json['enforcement_level'] = enforcementLevel;
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<BranchProtectionRequiredStatusChecks> listFromJson(List<dynamic> json) {
    return json == null ? List<BranchProtectionRequiredStatusChecks>() : json.map((value) => BranchProtectionRequiredStatusChecks.fromJson(value)).toList();
  }

  static Map<String, BranchProtectionRequiredStatusChecks> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, BranchProtectionRequiredStatusChecks>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = BranchProtectionRequiredStatusChecks.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of BranchProtectionRequiredStatusChecks-objects as value to a dart map
  static Map<String, List<BranchProtectionRequiredStatusChecks>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<BranchProtectionRequiredStatusChecks>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = BranchProtectionRequiredStatusChecks.listFromJson(value);
       });
     }
     return map;
  }
}

