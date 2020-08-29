part of openapi.api;

class ReposOwnerRepoCheckRunsOutputImages {
  /* The alternative text for the image. */
  String alt = null;
  /* A short image description. */
  String caption = null;
  /* The full URL of the image. */
  String imageUrl = null;

  ReposOwnerRepoCheckRunsOutputImages({
    this.alt,
    this.caption,
    this.imageUrl,
  });

  @override
  String toString() {
    return 'ReposOwnerRepoCheckRunsOutputImages[alt=$alt, caption=$caption, imageUrl=$imageUrl, ]';
  }

  ReposOwnerRepoCheckRunsOutputImages.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    alt = json['alt'];
    caption = json['caption'];
    imageUrl = json['image_url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (alt != null)
      json['alt'] = alt;
    if (caption != null)
      json['caption'] = caption;
    if (imageUrl != null)
      json['image_url'] = imageUrl;
    return json;
  }

  static List<ReposOwnerRepoCheckRunsOutputImages> listFromJson(List<dynamic> json) {
    return json == null ? List<ReposOwnerRepoCheckRunsOutputImages>() : json.map((value) => ReposOwnerRepoCheckRunsOutputImages.fromJson(value)).toList();
  }

  static Map<String, ReposOwnerRepoCheckRunsOutputImages> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ReposOwnerRepoCheckRunsOutputImages>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ReposOwnerRepoCheckRunsOutputImages.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ReposOwnerRepoCheckRunsOutputImages-objects as value to a dart map
  static Map<String, List<ReposOwnerRepoCheckRunsOutputImages>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ReposOwnerRepoCheckRunsOutputImages>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ReposOwnerRepoCheckRunsOutputImages.listFromJson(value);
       });
     }
     return map;
  }
}

