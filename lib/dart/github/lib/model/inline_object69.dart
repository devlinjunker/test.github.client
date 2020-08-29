part of openapi.api;

class InlineObject69 {
  /* Indicates whether to force the update or to make sure the update is a fast-forward update. Leaving this out or setting it to `false` will make sure you're not overwriting work. */
  bool force = false;
  /* The SHA1 value to set this reference to */
  String sha = null;

  InlineObject69({
    this.force,
    this.sha,
  });

  @override
  String toString() {
    return 'InlineObject69[force=$force, sha=$sha, ]';
  }

  InlineObject69.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    force = json['force'];
    sha = json['sha'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (force != null)
      json['force'] = force;
    if (sha != null)
      json['sha'] = sha;
    return json;
  }

  static List<InlineObject69> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject69>() : json.map((value) => InlineObject69.fromJson(value)).toList();
  }

  static Map<String, InlineObject69> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject69>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject69.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject69-objects as value to a dart map
  static Map<String, List<InlineObject69>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject69>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject69.listFromJson(value);
       });
     }
     return map;
  }
}

