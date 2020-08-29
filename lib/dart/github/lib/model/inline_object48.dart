part of openapi.api;

class InlineObject48 {
  /* Input keys and values configured in the workflow file. The maximum number of properties is 10. Any default properties configured in the workflow file will be used when `inputs` are omitted. */
  Map<String, String> inputs = {};
  /* The reference of the workflow run. The reference can be a branch, tag, or a commit SHA. */
  String ref = null;

  InlineObject48({
    this.inputs,
    this.ref,
  });

  @override
  String toString() {
    return 'InlineObject48[inputs=$inputs, ref=$ref, ]';
  }

  InlineObject48.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    inputs = (json['inputs'] == null) ?
      null :
      (json['inputs'] as Map).cast<String, String>();
    ref = json['ref'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (inputs != null)
      json['inputs'] = inputs;
    if (ref != null)
      json['ref'] = ref;
    return json;
  }

  static List<InlineObject48> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject48>() : json.map((value) => InlineObject48.fromJson(value)).toList();
  }

  static Map<String, InlineObject48> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject48>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject48.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject48-objects as value to a dart map
  static Map<String, List<InlineObject48>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject48>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject48.listFromJson(value);
       });
     }
     return map;
  }
}

