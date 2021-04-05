/* eslint-disable */
// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.

const awsmobile = {
    "aws_project_region": "eu-west-2",
    "aws_cognito_identity_pool_id": "eu-west-2:0d0e5938-bad1-404b-a024-c2d6047c4930",
    "aws_cognito_region": "eu-west-2",
    "aws_user_pools_id": "eu-west-2_N1uJOXyx1",
    "aws_user_pools_web_client_id": "6b9gujbgthibrjqapf4gqtc3e0",
    "oauth": {
        "domain": "5d7cl01ksw3s-staging.auth.eu-west-2.amazoncognito.com",
        "scope": [
            "phone",
            "email",
            "openid",
            "profile",
            "aws.cognito.signin.user.admin"
        ],
        "redirectSignIn": "https://staging-colleagues.belleviecare.co.uk/",
        "redirectSignOut": "https://staging-colleagues.belleviecare.co.uk/",
        "responseType": "code"
    },
    "federationTarget": "COGNITO_USER_POOLS",
    "aws_cloud_logic_custom": [
        {
            "name": "colleagues",
            "endpoint": "https://slzdx9uvk8.execute-api.eu-west-2.amazonaws.com/staging",
            "region": "eu-west-2"
        }
    ]
};


export default awsmobile;
