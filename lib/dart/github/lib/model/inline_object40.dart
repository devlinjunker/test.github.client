part of openapi.api;

class InlineObject40 {
  /* The unique identifier of the column the card should be moved to */
  int columnId = null;
  /* The position of the card in a column */
  String position = null;

  InlineObject40({
    this.columnId,
    this.position,
  });

  @override
  String toString() {
    return 'InlineObject40[columnId=$columnId, position=$position, ]';
  }

  InlineObject40.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    columnId = json['column_id'];
    position = json['position'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (columnId != null)
      json['column_id'] = columnId;
    if (position != null)
      json['position'] = position;
    return json;
  }

  static List<InlineObject40> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject40>() : json.map((value) => InlineObject40.fromJson(value)).toList();
  }

  static Map<String, InlineObject40> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject40>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject40.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject40-objects as value to a dart map
  static Map<String, List<InlineObject40>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject40>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject40.listFromJson(value);
       });
     }
     return map;
  }
}

