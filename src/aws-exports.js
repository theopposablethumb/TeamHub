/* eslint-disable */
// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.

const awsmobile = {
    "aws_project_region": "eu-west-2",
    "aws_cognito_identity_pool_id": "eu-west-2:96e65376-1915-44d2-b075-5f737a78f9de",
    "aws_cognito_region": "eu-west-2",
    "aws_user_pools_id": "eu-west-2_0kRHRARus",
    "aws_user_pools_web_client_id": "7shbgq6ai5jdr0s0obk10r7826",
    "oauth": {
        "domain": "5d7cl01ksw3s-dev.auth.eu-west-2.amazoncognito.com",
        "scope": [
            "phone",
            "email",
            "openid",
            "profile",
            "aws.cognito.signin.user.admin"
        ],
        "redirectSignIn": "http://localhost:3000/",
        "redirectSignOut": "http://localhost:3000/",
        "responseType": "code"
    },
    "federationTarget": "COGNITO_USER_POOLS",
    "aws_cloud_logic_custom": [
        {
            "name": "colleagues",
            "endpoint": "https://z8un72vpt1.execute-api.eu-west-2.amazonaws.com/dev",
            "region": "eu-west-2"
        }
    ]
};


export default awsmobile;
