part of openapi.api;

class InlineObject92 {
  /* The [hexadecimal color code](http://www.color-hex.com/) for the label, without the leading `#`. */
  String color = null;
  /* A short description of the label. */
  String description = null;
  /* The name of the label. Emoji can be added to label names, using either native emoji or colon-style markup. For example, typing `:strawberry:` will render the emoji ![:strawberry:](https://github.githubassets.com/images/icons/emoji/unicode/1f353.png \":strawberry:\"). For a full list of available emoji and codes, see [emoji-cheat-sheet.com](http://emoji-cheat-sheet.com/). */
  String name = null;

  InlineObject92({
    this.color,
    this.description,
    this.name,
  });

  @override
  String toString() {
    return 'InlineObject92[color=$color, description=$description, name=$name, ]';
  }

  InlineObject92.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    color = json['color'];
    description = json['description'];
    name = json['name'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (color != null)
      json['color'] = color;
    if (description != null)
      json['description'] = description;
    if (name != null)
      json['name'] = name;
    return json;
  }

  static List<InlineObject92> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject92>() : json.map((value) => InlineObject92.fromJson(value)).toList();
  }

  static Map<String, InlineObject92> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject92>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject92.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject92-objects as value to a dart map
  static Map<String, List<InlineObject92>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject92>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject92.listFromJson(value);
       });
     }
     return map;
  }
}

