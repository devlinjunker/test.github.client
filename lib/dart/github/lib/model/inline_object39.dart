part of openapi.api;

class InlineObject39 {
  /* Whether or not the card is archived */
  bool archived = null;
  /* The project card's note */
  String note = null;

  InlineObject39({
    this.archived,
    this.note,
  });

  @override
  String toString() {
    return 'InlineObject39[archived=$archived, note=$note, ]';
  }

  InlineObject39.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    archived = json['archived'];
    note = json['note'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (archived != null)
      json['archived'] = archived;
      json['note'] = note;
    return json;
  }

  static List<InlineObject39> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject39>() : json.map((value) => InlineObject39.fromJson(value)).toList();
  }

  static Map<String, InlineObject39> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject39>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject39.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject39-objects as value to a dart map
  static Map<String, List<InlineObject39>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject39>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject39.listFromJson(value);
       });
     }
     return map;
  }
}

