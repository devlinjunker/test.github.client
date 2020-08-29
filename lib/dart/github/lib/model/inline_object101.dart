part of openapi.api;

class InlineObject101 {
  /* The name of the branch you want the changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repository that requests a merge to a base of another repository. */
  String base = null;
  /* The contents of the pull request. */
  String body = null;
  /* Indicates whether the pull request is a draft. See \"[Draft Pull Requests](https://help.github.com/en/articles/about-pull-requests#draft-pull-requests)\" in the GitHub Help documentation to learn more. */
  bool draft = null;
  /* The name of the branch where your changes are implemented. For cross-repository pull requests in the same network, namespace `head` with a user like this: `username:branch`. */
  String head = null;
  
  int issue = null;
  /* Indicates whether [maintainers can modify](https://help.github.com/articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork/) the pull request. */
  bool maintainerCanModify = null;
  /* The title of the new pull request. */
  String title = null;

  InlineObject101({
    this.base,
    this.body,
    this.draft,
    this.head,
    this.issue,
    this.maintainerCanModify,
    this.title,
  });

  @override
  String toString() {
    return 'InlineObject101[base=$base, body=$body, draft=$draft, head=$head, issue=$issue, maintainerCanModify=$maintainerCanModify, title=$title, ]';
  }

  InlineObject101.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    base = json['base'];
    body = json['body'];
    draft = json['draft'];
    head = json['head'];
    issue = json['issue'];
    maintainerCanModify = json['maintainer_can_modify'];
    title = json['title'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (base != null)
      json['base'] = base;
    if (body != null)
      json['body'] = body;
    if (draft != null)
      json['draft'] = draft;
    if (head != null)
      json['head'] = head;
    if (issue != null)
      json['issue'] = issue;
    if (maintainerCanModify != null)
      json['maintainer_can_modify'] = maintainerCanModify;
    if (title != null)
      json['title'] = title;
    return json;
  }

  static List<InlineObject101> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject101>() : json.map((value) => InlineObject101.fromJson(value)).toList();
  }

  static Map<String, InlineObject101> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject101>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject101.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject101-objects as value to a dart map
  static Map<String, List<InlineObject101>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject101>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject101.listFromJson(value);
       });
     }
     return map;
  }
}

