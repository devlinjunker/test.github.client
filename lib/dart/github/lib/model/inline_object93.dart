part of openapi.api;

class InlineObject93 {
  /* The [hexadecimal color code](http://www.color-hex.com/) for the label, without the leading `#`. */
  String color = null;
  /* A short description of the label. */
  String description = null;
  /* The new name of the label. Emoji can be added to label names, using either native emoji or colon-style markup. For example, typing `:strawberry:` will render the emoji ![:strawberry:](https://github.githubassets.com/images/icons/emoji/unicode/1f353.png \":strawberry:\"). For a full list of available emoji and codes, see [emoji-cheat-sheet.com](http://emoji-cheat-sheet.com/). */
  String newName = null;

  InlineObject93({
    this.color,
    this.description,
    this.newName,
  });

  @override
  String toString() {
    return 'InlineObject93[color=$color, description=$description, newName=$newName, ]';
  }

  InlineObject93.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    color = json['color'];
    description = json['description'];
    newName = json['new_name'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (color != null)
      json['color'] = color;
    if (description != null)
      json['description'] = description;
    if (newName != null)
      json['new_name'] = newName;
    return json;
  }

  static List<InlineObject93> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject93>() : json.map((value) => InlineObject93.fromJson(value)).toList();
  }

  static Map<String, InlineObject93> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject93>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject93.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject93-objects as value to a dart map
  static Map<String, List<InlineObject93>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject93>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject93.listFromJson(value);
       });
     }
     return map;
  }
}

