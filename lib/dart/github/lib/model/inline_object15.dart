part of openapi.api;

class InlineObject15 {
  /* Whether to block all notifications from a thread. */
  bool ignored = false;

  InlineObject15({
    this.ignored,
  });

  @override
  String toString() {
    return 'InlineObject15[ignored=$ignored, ]';
  }

  InlineObject15.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    ignored = json['ignored'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (ignored != null)
      json['ignored'] = ignored;
    return json;
  }

  static List<InlineObject15> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject15>() : json.map((value) => InlineObject15.fromJson(value)).toList();
  }

  static Map<String, InlineObject15> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject15>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject15.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject15-objects as value to a dart map
  static Map<String, List<InlineObject15>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject15>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject15.listFromJson(value);
       });
     }
     return map;
  }
}

