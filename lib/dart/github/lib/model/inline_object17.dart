part of openapi.api;

class InlineObject17 {
  /* Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get an organization public key](https://developer.github.com/v3/actions/secrets/#get-an-organization-public-key) endpoint. */
  String encryptedValue = null;
  /* ID of the key you used to encrypt the secret. */
  String keyId = null;
  /* An array of repository ids that can access the organization secret. You can only provide a list of repository ids when the `visibility` is set to `selected`. You can manage the list of selected repositories using the [List selected repositories for an organization secret](https://developer.github.com/v3/actions/secrets/#list-selected-repositories-for-an-organization-secret), [Set selected repositories for an organization secret](https://developer.github.com/v3/actions/secrets/#set-selected-repositories-for-an-organization-secret), and [Remove selected repository from an organization secret](https://developer.github.com/v3/actions/secrets/#remove-selected-repository-from-an-organization-secret) endpoints. */
  List<String> selectedRepositoryIds = [];
  /* Configures the access that repositories have to the organization secret. Can be one of:   \\- `all` - All repositories in an organization can access the secret.   \\- `private` - Private repositories in an organization can access the secret.   \\- `selected` - Only specific repositories can access the secret. */
  String visibility = null;
  //enum visibilityEnum {  all,  private,  selected,  };{

  InlineObject17({
    this.encryptedValue,
    this.keyId,
    this.selectedRepositoryIds,
    this.visibility,
  });

  @override
  String toString() {
    return 'InlineObject17[encryptedValue=$encryptedValue, keyId=$keyId, selectedRepositoryIds=$selectedRepositoryIds, visibility=$visibility, ]';
  }

  InlineObject17.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    encryptedValue = json['encrypted_value'];
    keyId = json['key_id'];
    selectedRepositoryIds = (json['selected_repository_ids'] == null) ?
      null :
      (json['selected_repository_ids'] as List).cast<String>();
    visibility = json['visibility'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (encryptedValue != null)
      json['encrypted_value'] = encryptedValue;
    if (keyId != null)
      json['key_id'] = keyId;
    if (selectedRepositoryIds != null)
      json['selected_repository_ids'] = selectedRepositoryIds;
    if (visibility != null)
      json['visibility'] = visibility;
    return json;
  }

  static List<InlineObject17> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject17>() : json.map((value) => InlineObject17.fromJson(value)).toList();
  }

  static Map<String, InlineObject17> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject17>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject17.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject17-objects as value to a dart map
  static Map<String, List<InlineObject17>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject17>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject17.listFromJson(value);
       });
     }
     return map;
  }
}

