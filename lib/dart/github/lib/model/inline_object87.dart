part of openapi.api;

class InlineObject87 {
  /* The names of the labels to add to the issue. You can pass an empty array to remove all labels. **Note:** Alternatively, you can pass a single label as a `string` or an `array` of labels directly, but GitHub recommends passing an object with the `labels` key. */
  List<String> labels = [];

  InlineObject87({
    this.labels,
  });

  @override
  String toString() {
    return 'InlineObject87[labels=$labels, ]';
  }

  InlineObject87.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    labels = (json['labels'] == null) ?
      null :
      (json['labels'] as List).cast<String>();
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (labels != null)
      json['labels'] = labels;
    return json;
  }

  static List<InlineObject87> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject87>() : json.map((value) => InlineObject87.fromJson(value)).toList();
  }

  static Map<String, InlineObject87> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject87>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject87.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject87-objects as value to a dart map
  static Map<String, List<InlineObject87>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject87>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject87.listFromJson(value);
       });
     }
     return map;
  }
}

