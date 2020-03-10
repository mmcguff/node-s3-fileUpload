const fs = require('fs');
const AWS = require('aws-sdk');
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});


const fileName = 'passport.wav';
const BUCKET_NAME = 'test-bucket-mcguffm';
const KEY_NAME = `${Date.now()}-${fileName}`;

const uploadFile = async (_fileName) => {
    // Read content from the file
    const fileContent = fs.readFileSync(_fileName);

    // Setting up S3 upload parameters
    const uploadParams = {
        Bucket: BUCKET_NAME,
        Key: `audio/${KEY_NAME}`, // File name you want to save as in S3
        Body: fileContent
    };

    // Uploading files to the bucket
    s3.upload(uploadParams, function(err, data) {
        if (err) {
            throw err;
        }
        console.log(`File uploaded successfully. ${data.Location}`);
    });

    const getSignedUrlParams = {
        Bucket: BUCKET_NAME,
        Key: `audio/${KEY_NAME}`
        //Expires: 60
    };

    const downloadUrl = s3.getSignedUrl('getObject', getSignedUrlParams);

    console.log(`Download Url: ${downloadUrl}`);
};

uploadFile(fileName);