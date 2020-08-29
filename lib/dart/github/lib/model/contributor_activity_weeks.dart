part of openapi.api;

class ContributorActivityWeeks {
  
  int a = null;
  
  int c = null;
  
  int d = null;
  
  String w = null;

  ContributorActivityWeeks({
    this.a,
    this.c,
    this.d,
    this.w,
  });

  @override
  String toString() {
    return 'ContributorActivityWeeks[a=$a, c=$c, d=$d, w=$w, ]';
  }

  ContributorActivityWeeks.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    a = json['a'];
    c = json['c'];
    d = json['d'];
    w = json['w'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (a != null)
      json['a'] = a;
    if (c != null)
      json['c'] = c;
    if (d != null)
      json['d'] = d;
    if (w != null)
      json['w'] = w;
    return json;
  }

  static List<ContributorActivityWeeks> listFromJson(List<dynamic> json) {
    return json == null ? List<ContributorActivityWeeks>() : json.map((value) => ContributorActivityWeeks.fromJson(value)).toList();
  }

  static Map<String, ContributorActivityWeeks> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ContributorActivityWeeks>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ContributorActivityWeeks.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ContributorActivityWeeks-objects as value to a dart map
  static Map<String, List<ContributorActivityWeeks>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ContributorActivityWeeks>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ContributorActivityWeeks.listFromJson(value);
       });
     }
     return map;
  }
}

