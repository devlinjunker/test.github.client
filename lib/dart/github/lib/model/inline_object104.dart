part of openapi.api;

class InlineObject104 {
  /* The name of the branch you want your changes pulled into. This should be an existing branch on the current repository. You cannot update the base branch on a pull request to point to another repository. */
  String base = null;
  /* The contents of the pull request. */
  String body = null;
  /* Indicates whether [maintainers can modify](https://help.github.com/articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork/) the pull request. */
  bool maintainerCanModify = null;
  /* State of this Pull Request. Either `open` or `closed`. */
  String state = null;
  //enum stateEnum {  open,  closed,  };{
  /* The title of the pull request. */
  String title = null;

  InlineObject104({
    this.base,
    this.body,
    this.maintainerCanModify,
    this.state,
    this.title,
  });

  @override
  String toString() {
    return 'InlineObject104[base=$base, body=$body, maintainerCanModify=$maintainerCanModify, state=$state, title=$title, ]';
  }

  InlineObject104.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    base = json['base'];
    body = json['body'];
    maintainerCanModify = json['maintainer_can_modify'];
    state = json['state'];
    title = json['title'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (base != null)
      json['base'] = base;
    if (body != null)
      json['body'] = body;
    if (maintainerCanModify != null)
      json['maintainer_can_modify'] = maintainerCanModify;
    if (state != null)
      json['state'] = state;
    if (title != null)
      json['title'] = title;
    return json;
  }

  static List<InlineObject104> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject104>() : json.map((value) => InlineObject104.fromJson(value)).toList();
  }

  static Map<String, InlineObject104> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject104>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject104.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject104-objects as value to a dart map
  static Map<String, List<InlineObject104>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject104>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject104.listFromJson(value);
       });
     }
     return map;
  }
}

