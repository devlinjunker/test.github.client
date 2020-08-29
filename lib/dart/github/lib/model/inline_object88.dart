part of openapi.api;

class InlineObject88 {
  /* The name of the label to add to the issue. Must contain at least one label. **Note:** Alternatively, you can pass a single label as a `string` or an `array` of labels directly, but GitHub recommends passing an object with the `labels` key. */
  List<String> labels = [];

  InlineObject88({
    this.labels,
  });

  @override
  String toString() {
    return 'InlineObject88[labels=$labels, ]';
  }

  InlineObject88.fromJson(Map<String, dynamic> json) {
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

  static List<InlineObject88> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject88>() : json.map((value) => InlineObject88.fromJson(value)).toList();
  }

  static Map<String, InlineObject88> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject88>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject88.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject88-objects as value to a dart map
  static Map<String, List<InlineObject88>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject88>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject88.listFromJson(value);
       });
     }
     return map;
  }
}

