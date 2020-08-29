part of openapi.api;

class InlineObject68 {
  
  String key = null;
  /* The name of the fully qualified reference (ie: `refs/heads/master`). If it doesn't start with 'refs' and have at least two slashes, it will be rejected. */
  String ref = null;
  /* The SHA1 value for this reference. */
  String sha = null;

  InlineObject68({
    this.key,
    this.ref,
    this.sha,
  });

  @override
  String toString() {
    return 'InlineObject68[key=$key, ref=$ref, sha=$sha, ]';
  }

  InlineObject68.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    key = json['key'];
    ref = json['ref'];
    sha = json['sha'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (key != null)
      json['key'] = key;
    if (ref != null)
      json['ref'] = ref;
    if (sha != null)
      json['sha'] = sha;
    return json;
  }

  static List<InlineObject68> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject68>() : json.map((value) => InlineObject68.fromJson(value)).toList();
  }

  static Map<String, InlineObject68> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject68>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject68.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject68-objects as value to a dart map
  static Map<String, List<InlineObject68>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject68>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject68.listFromJson(value);
       });
     }
     return map;
  }
}

