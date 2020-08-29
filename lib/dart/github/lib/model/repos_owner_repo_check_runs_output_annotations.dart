part of openapi.api;

class ReposOwnerRepoCheckRunsOutputAnnotations {
  /* The level of the annotation. Can be one of `notice`, `warning`, or `failure`. */
  String annotationLevel = null;
  //enum annotationLevelEnum {  notice,  warning,  failure,  };{
  /* The end column of the annotation. Annotations only support `start_column` and `end_column` on the same line. Omit this parameter if `start_line` and `end_line` have different values. */
  int endColumn = null;
  /* The end line of the annotation. */
  int endLine = null;
  /* A short description of the feedback for these lines of code. The maximum size is 64 KB. */
  String message = null;
  /* The path of the file to add an annotation to. For example, `assets/css/main.css`. */
  String path = null;
  /* Details about this annotation. The maximum size is 64 KB. */
  String rawDetails = null;
  /* The start column of the annotation. Annotations only support `start_column` and `end_column` on the same line. Omit this parameter if `start_line` and `end_line` have different values. */
  int startColumn = null;
  /* The start line of the annotation. */
  int startLine = null;
  /* The title that represents the annotation. The maximum size is 255 characters. */
  String title = null;

  ReposOwnerRepoCheckRunsOutputAnnotations({
    this.annotationLevel,
    this.endColumn,
    this.endLine,
    this.message,
    this.path,
    this.rawDetails,
    this.startColumn,
    this.startLine,
    this.title,
  });

  @override
  String toString() {
    return 'ReposOwnerRepoCheckRunsOutputAnnotations[annotationLevel=$annotationLevel, endColumn=$endColumn, endLine=$endLine, message=$message, path=$path, rawDetails=$rawDetails, startColumn=$startColumn, startLine=$startLine, title=$title, ]';
  }

  ReposOwnerRepoCheckRunsOutputAnnotations.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    annotationLevel = json['annotation_level'];
    endColumn = json['end_column'];
    endLine = json['end_line'];
    message = json['message'];
    path = json['path'];
    rawDetails = json['raw_details'];
    startColumn = json['start_column'];
    startLine = json['start_line'];
    title = json['title'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (annotationLevel != null)
      json['annotation_level'] = annotationLevel;
    if (endColumn != null)
      json['end_column'] = endColumn;
    if (endLine != null)
      json['end_line'] = endLine;
    if (message != null)
      json['message'] = message;
    if (path != null)
      json['path'] = path;
    if (rawDetails != null)
      json['raw_details'] = rawDetails;
    if (startColumn != null)
      json['start_column'] = startColumn;
    if (startLine != null)
      json['start_line'] = startLine;
    if (title != null)
      json['title'] = title;
    return json;
  }

  static List<ReposOwnerRepoCheckRunsOutputAnnotations> listFromJson(List<dynamic> json) {
    return json == null ? List<ReposOwnerRepoCheckRunsOutputAnnotations>() : json.map((value) => ReposOwnerRepoCheckRunsOutputAnnotations.fromJson(value)).toList();
  }

  static Map<String, ReposOwnerRepoCheckRunsOutputAnnotations> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ReposOwnerRepoCheckRunsOutputAnnotations>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ReposOwnerRepoCheckRunsOutputAnnotations.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ReposOwnerRepoCheckRunsOutputAnnotations-objects as value to a dart map
  static Map<String, List<ReposOwnerRepoCheckRunsOutputAnnotations>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ReposOwnerRepoCheckRunsOutputAnnotations>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ReposOwnerRepoCheckRunsOutputAnnotations.listFromJson(value);
       });
     }
     return map;
  }
}

