part of openapi.api;

class BranchWithProtectionLinks {
  
  String html = null;
  
  String self = null;

  BranchWithProtectionLinks({
    this.html,
    this.self,
  });

  @override
  String toString() {
    return 'BranchWithProtectionLinks[html=$html, self=$self, ]';
  }

  BranchWithProtectionLinks.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    html = json['html'];
    self = json['self'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (html != null)
      json['html'] = html;
    if (self != null)
      json['self'] = self;
    return json;
  }

  static List<BranchWithProtectionLinks> listFromJson(List<dynamic> json) {
    return json == null ? List<BranchWithProtectionLinks>() : json.map((value) => BranchWithProtectionLinks.fromJson(value)).toList();
  }

  static Map<String, BranchWithProtectionLinks> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, BranchWithProtectionLinks>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = BranchWithProtectionLinks.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of BranchWithProtectionLinks-objects as value to a dart map
  static Map<String, List<BranchWithProtectionLinks>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<BranchWithProtectionLinks>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = BranchWithProtectionLinks.listFromJson(value);
       });
     }
     return map;
  }
}

