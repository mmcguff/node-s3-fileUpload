# node-s3-fileUpload
This repo contains a basic implementation of s3 file upload and s3 getSignedUrl.  In other words, this allows you to upload a wav file and then generate a sharable link for download from s3.


# Getting Started

1.  Clone this repo.
2.  Create a `.env` in the root of your project. 
3.  Login to aws and go to IAM and either use your root credentials. (Not suitable for production) or create an IAM user with access to s3.
4.  Create an s3 bucket in aws also.  
5.  Take you IAM Access key and Secret Access key and insert them in your `.env` file like this:
```
AWS_ACCESS_KEY="access-key-goes-here"
AWS_SECRET_ACCESS_KEY="secret-access-key-goes-here"
```
6. `npm install` and `npm start` and watch the magic happen!  Feel free edit for learning. 
