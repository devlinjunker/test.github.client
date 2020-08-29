part of openapi.api;

class InlineObject51 {
  /* The list of status checks to require in order to merge into this branch */
  List<String> contexts = [];
  /* Require branches to be up to date before merging. */
  bool strict = null;

  InlineObject51({
    this.contexts,
    this.strict,
  });

  @override
  String toString() {
    return 'InlineObject51[contexts=$contexts, strict=$strict, ]';
  }

  InlineObject51.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    contexts = (json['contexts'] == null) ?
      null :
      (json['contexts'] as List).cast<String>();
    strict = json['strict'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (contexts != null)
      json['contexts'] = contexts;
    if (strict != null)
      json['strict'] = strict;
    return json;
  }

  static List<InlineObject51> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject51>() : json.map((value) => InlineObject51.fromJson(value)).toList();
  }

  static Map<String, InlineObject51> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject51>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject51.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject51-objects as value to a dart map
  static Map<String, List<InlineObject51>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject51>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject51.listFromJson(value);
       });
     }
     return map;
  }
}

