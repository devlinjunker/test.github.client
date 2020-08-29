part of openapi.api;

class InlineObject97 {
  /* Describes the last point that notifications were checked. Anything updated since this time will not be marked as read. If you omit this parameter, all notifications are marked as read. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`. Default: The current timestamp. */
  String lastReadAt = null;

  InlineObject97({
    this.lastReadAt,
  });

  @override
  String toString() {
    return 'InlineObject97[lastReadAt=$lastReadAt, ]';
  }

  InlineObject97.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    lastReadAt = json['last_read_at'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (lastReadAt != null)
      json['last_read_at'] = lastReadAt;
    return json;
  }

  static List<InlineObject97> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject97>() : json.map((value) => InlineObject97.fromJson(value)).toList();
  }

  static Map<String, InlineObject97> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject97>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject97.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject97-objects as value to a dart map
  static Map<String, List<InlineObject97>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject97>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject97.listFromJson(value);
       });
     }
     return map;
  }
}

