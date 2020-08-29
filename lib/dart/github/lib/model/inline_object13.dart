part of openapi.api;

class InlineObject13 {
  /* The repository context to use when creating references in `gfm` mode. */
  String context = null;
  /* The rendering mode. */
  String mode = "markdown";
  //enum modeEnum {  markdown,  gfm,  };{
  /* The Markdown text to render in HTML. */
  String text = null;

  InlineObject13({
    this.context,
    this.mode,
    this.text,
  });

  @override
  String toString() {
    return 'InlineObject13[context=$context, mode=$mode, text=$text, ]';
  }

  InlineObject13.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    context = json['context'];
    mode = json['mode'];
    text = json['text'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (context != null)
      json['context'] = context;
    if (mode != null)
      json['mode'] = mode;
    if (text != null)
      json['text'] = text;
    return json;
  }

  static List<InlineObject13> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject13>() : json.map((value) => InlineObject13.fromJson(value)).toList();
  }

  static Map<String, InlineObject13> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject13>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject13.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject13-objects as value to a dart map
  static Map<String, List<InlineObject13>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject13>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject13.listFromJson(value);
       });
     }
     return map;
  }
}

