import xml2js from "xml2js";

export function uploadToS3(uploadParams, file) {
  // extract the URL and file upload params for s3
  const { url, file_key: fileKey, s3_upload_params: fields } = uploadParams;
  // create new form object to uplaod the file
  const formData = new FormData();
  // Set content type of the file
  // Please note: if content type and files content do not match file uplaod will fail.
  formData.append("Content-Type", "image/jpg");
  // Append S3 upload params to the form object.
  Object.entries(fields).forEach(([k, v]) => {
    formData.append(k, v);
  });
  // Append the file
  formData.append("file", file);

  // send request to S3 for the file upload.
  return fetch(url, {
    method: "POST",
    body: formData,
  })
    .then((resp) => resp.text())
    .then((awsResponse) => {
      // S3 returns its response in XML(yeah I know :D)
      return xml2js
        .parseStringPromise(awsResponse)
        .then((result) => {
          // if all goes well
          return result.PostResponse;
        })
        .catch((error) => {
          // Notify the user that file upload has failed.
          console.log("something went wrong, error:", error);
        });
    });
}
