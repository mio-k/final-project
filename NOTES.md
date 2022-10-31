## Edit credentials file

`EDITOR="code --wait" bin/rails credentials:edit`

```
// {
// 	"Version": "2012-10-17",
// 	"Id": "Policy1667157930319",
// 	"Statement": [
// 		{
// 			"Sid": "Stmt1667157926717",
// 			"Effect": "Allow",
// 			"Principal": {
// 				"AWS": "arn:aws:iam::045140646646:user/AWS-admin"
// 			},
// 			"Action": "s3:*",
// 			"Resource": "arn:aws:s3:::us-west-dogpod/*"
// 		}
// 	]
// }
```
