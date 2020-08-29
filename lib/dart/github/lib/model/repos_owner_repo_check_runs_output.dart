part of openapi.api;

class ReposOwnerRepoCheckRunsOutput {
  /* Adds information from your analysis to specific lines of code. Annotations are visible on GitHub in the **Checks** and **Files changed** tab of the pull request. The Checks API limits the number of annotations to a maximum of 50 per API request. To create more than 50 annotations, you have to make multiple requests to the [Update a check run](https://developer.github.com/v3/checks/runs/#update-a-check-run) endpoint. Each time you update the check run, annotations are appended to the list of annotations that already exist for the check run. For details about how you can view annotations on GitHub, see \"[About status checks](https://help.github.com/articles/about-status-checks#checks)\". See the [`annotations` object](https://developer.github.com/v3/checks/runs/#annotations-object) description for details about how to use this parameter. */
  List<ReposOwnerRepoCheckRunsOutputAnnotations> annotations = [];
  /* Adds images to the output displayed in the GitHub pull request UI. See the [`images` object](https://developer.github.com/v3/checks/runs/#images-object) description for details. */
  List<ReposOwnerRepoCheckRunsOutputImages> images = [];
  /* The summary of the check run. This parameter supports Markdown. */
  String summary = null;
  /* The details of the check run. This parameter supports Markdown. */
  String text = null;
  /* The title of the check run. */
  String title = null;

  ReposOwnerRepoCheckRunsOutput({
    this.annotations,
    this.images,
    this.summary,
    this.text,
    this.title,
  });

  @override
  String toString() {
    return 'ReposOwnerRepoCheckRunsOutput[annotations=$annotations, images=$images, summary=$summary, text=$text, title=$title, ]';
  }

  ReposOwnerRepoCheckRunsOutput.fromJson(Map<String, dynamic> json) {
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

  static List<ReposOwnerRepoCheckRunsOutput> listFromJson(List<dynamic> json) {
    return json == null ? List<ReposOwnerRepoCheckRunsOutput>() : json.map((value) => ReposOwnerRepoCheckRunsOutput.fromJson(value)).toList();
  }

  static Map<String, ReposOwnerRepoCheckRunsOutput> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ReposOwnerRepoCheckRunsOutput>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ReposOwnerRepoCheckRunsOutput.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ReposOwnerRepoCheckRunsOutput-objects as value to a dart map
  static Map<String, List<ReposOwnerRepoCheckRunsOutput>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ReposOwnerRepoCheckRunsOutput>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ReposOwnerRepoCheckRunsOutput.listFromJson(value);
       });
     }
     return map;
  }
}

