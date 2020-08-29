part of openapi.api;

class InlineObject14 {
  /* Describes the last point that notifications were checked. */
  DateTime lastReadAt = null;
  /* Whether the notification has been read. */
  bool read = null;

  InlineObject14({
    this.lastReadAt,
    this.read,
  });

  @override
  String toString() {
    return 'InlineObject14[lastReadAt=$lastReadAt, read=$read, ]';
  }

  InlineObject14.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    lastReadAt = (json['last_read_at'] == null) ?
      null :
      DateTime.parse(json['last_read_at']);
    read = json['read'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (lastReadAt != null)
      json['last_read_at'] = lastReadAt == null ? null : lastReadAt.toUtc().toIso8601String();
    if (read != null)
      json['read'] = read;
    return json;
  }

  static List<InlineObject14> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject14>() : json.map((value) => InlineObject14.fromJson(value)).toList();
  }

  static Map<String, InlineObject14> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject14>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject14.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject14-objects as value to a dart map
  static Map<String, List<InlineObject14>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject14>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject14.listFromJson(value);
       });
     }
     return map;
  }
}

