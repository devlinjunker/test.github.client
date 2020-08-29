part of openapi.api;

class InlineObject24 {
  
  List<String> exclude = [];
  /* Indicates whether attachments should be excluded from the migration (to reduce migration archive file size). */
  bool excludeAttachments = false;
  /* Indicates whether repositories should be locked (to prevent manipulation) while migrating data. */
  bool lockRepositories = false;
  /* A list of arrays indicating which repositories should be migrated. */
  List<String> repositories = [];

  InlineObject24({
    this.exclude,
    this.excludeAttachments,
    this.lockRepositories,
    this.repositories,
  });

  @override
  String toString() {
    return 'InlineObject24[exclude=$exclude, excludeAttachments=$excludeAttachments, lockRepositories=$lockRepositories, repositories=$repositories, ]';
  }

  InlineObject24.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    exclude = (json['exclude'] == null) ?
      null :
      (json['exclude'] as List).cast<String>();
    excludeAttachments = json['exclude_attachments'];
    lockRepositories = json['lock_repositories'];
    repositories = (json['repositories'] == null) ?
      null :
      (json['repositories'] as List).cast<String>();
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (exclude != null)
      json['exclude'] = exclude;
    if (excludeAttachments != null)
      json['exclude_attachments'] = excludeAttachments;
    if (lockRepositories != null)
      json['lock_repositories'] = lockRepositories;
    if (repositories != null)
      json['repositories'] = repositories;
    return json;
  }

  static List<InlineObject24> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject24>() : json.map((value) => InlineObject24.fromJson(value)).toList();
  }

  static Map<String, InlineObject24> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject24>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject24.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject24-objects as value to a dart map
  static Map<String, List<InlineObject24>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject24>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject24.listFromJson(value);
       });
     }
     return map;
  }
}

