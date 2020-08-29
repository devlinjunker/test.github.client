part of openapi.api;

class InlineObject95 {
  /* A description of the milestone. */
  String description = null;
  /* The milestone due date. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`. */
  String dueOn = null;
  /* The state of the milestone. Either `open` or `closed`. */
  String state = "open";
  //enum stateEnum {  open,  closed,  };{
  /* The title of the milestone. */
  String title = null;

  InlineObject95({
    this.description,
    this.dueOn,
    this.state,
    this.title,
  });

  @override
  String toString() {
    return 'InlineObject95[description=$description, dueOn=$dueOn, state=$state, title=$title, ]';
  }

  InlineObject95.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    description = json['description'];
    dueOn = json['due_on'];
    state = json['state'];
    title = json['title'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (description != null)
      json['description'] = description;
    if (dueOn != null)
      json['due_on'] = dueOn;
    if (state != null)
      json['state'] = state;
    if (title != null)
      json['title'] = title;
    return json;
  }

  static List<InlineObject95> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject95>() : json.map((value) => InlineObject95.fromJson(value)).toList();
  }

  static Map<String, InlineObject95> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject95>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject95.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject95-objects as value to a dart map
  static Map<String, List<InlineObject95>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject95>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject95.listFromJson(value);
       });
     }
     return map;
  }
}

