part of openapi.api;

class InlineObject119 {
  /* Determines if all notifications should be blocked from this repository. */
  bool ignored = null;
  /* Determines if notifications should be received from this repository. */
  bool subscribed = null;

  InlineObject119({
    this.ignored,
    this.subscribed,
  });

  @override
  String toString() {
    return 'InlineObject119[ignored=$ignored, subscribed=$subscribed, ]';
  }

  InlineObject119.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    ignored = json['ignored'];
    subscribed = json['subscribed'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (ignored != null)
      json['ignored'] = ignored;
    if (subscribed != null)
      json['subscribed'] = subscribed;
    return json;
  }

  static List<InlineObject119> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject119>() : json.map((value) => InlineObject119.fromJson(value)).toList();
  }

  static Map<String, InlineObject119> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject119>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject119.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject119-objects as value to a dart map
  static Map<String, List<InlineObject119>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject119>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject119.listFromJson(value);
       });
     }
     return map;
  }
}

