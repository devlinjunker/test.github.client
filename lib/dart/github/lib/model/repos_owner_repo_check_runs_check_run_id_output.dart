part of openapi.api;

class ReposOwnerRepoCheckRunsCheckRunIdOutput {
  /* Adds information from your analysis to specific lines of code. Annotations are visible in GitHub's pull request UI. Annotations are visible in GitHub's pull request UI. The Checks API limits the number of annotations to a maximum of 50 per API request. To create more than 50 annotations, you have to make multiple requests to the [Update a check run](https://developer.github.com/v3/checks/runs/#update-a-check-run) endpoint. Each time you update the check run, annotations are appended to the list of annotations that already exist for the check run. For details about annotations in the UI, see \"[About status checks](https://help.github.com/articles/about-status-checks#checks)\". See the [`annotations` object](https://developer.github.com/v3/checks/runs/#annotations-object-1) description for details. */
  List<ReposOwnerRepoCheckRunsOutputAnnotations> annotations = [];
  /* Adds images to the output displayed in the GitHub pull request UI. See the [`images` object](https://developer.github.com/v3/checks/runs/#annotations-object-1) description for details. */
  List<ReposOwnerRepoCheckRunsOutputImages> images = [];
  /* Can contain Markdown. */
  String summary = null;
  /* Can contain Markdown. */
  String text = null;
  /* **Required**. */
  String title = null;

  ReposOwnerRepoCheckRunsCheckRunIdOutput({
    this.annotations,
    this.images,
    this.summary,
    this.text,
    this.title,
  });

  @override
  String toString() {
    return 'ReposOwnerRepoCheckRunsCheckRunIdOutput[annotations=$annotations, images=$images, summary=$summary, text=$text, title=$title, ]';
  }

  ReposOwnerRepoCheckRunsCheckRunIdOutput.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    annotations = (json['annotations'] == null) ?
      null :
      ReposOwnerRepoCheckRunsOutputAnnotations.listFromJson(json['annotations']);
    images = (json['images'] == null) ?
      null :
      ReposOwnerRepoCheckRunsOutputImages.listFromJson(json['images']);
    summary = json['summary'];
    text = json['text'];
    title = json['title'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (annotations != null)
      json['annotations'] = annotations;
    if (images != null)
      json['images'] = images;
    if (summary != null)
      json['summary'] = summary;
    if (text != null)
      json['text'] = text;
    if (title != null)
      json['title'] = title;
    return json;
  }

  static List<ReposOwnerRepoCheckRunsCheckRunIdOutput> listFromJson(List<dynamic> json) {
    return json == null ? List<ReposOwnerRepoCheckRunsCheckRunIdOutput>() : json.map((value) => ReposOwnerRepoCheckRunsCheckRunIdOutput.fromJson(value)).toList();
  }

  static Map<String, ReposOwnerRepoCheckRunsCheckRunIdOutput> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ReposOwnerRepoCheckRunsCheckRunIdOutput>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ReposOwnerRepoCheckRunsCheckRunIdOutput.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ReposOwnerRepoCheckRunsCheckRunIdOutput-objects as value to a dart map
  static Map<String, List<ReposOwnerRepoCheckRunsCheckRunIdOutput>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ReposOwnerRepoCheckRunsCheckRunIdOutput>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ReposOwnerRepoCheckRunsCheckRunIdOutput.listFromJson(value);
       });
     }
     return map;
  }
}

