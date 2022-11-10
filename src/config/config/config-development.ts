/**
 * Add your hosted dev URL here
 */
//const HOSTED_URL = 'https://dev.domain.com';
const HOSTED_URL = 'http://localhost:3000'; //'https://main.d2lj10328jr59a.amplifyapp.com';


const configDevelopment = {
  HOSTED_URL,
  MODE: 'DEVELOPMENT',
  REGION: 'us-east-1',
  REDIRECT_SIGN_IN: `${HOSTED_URL}/`,
  REDIRECT_SIGN_OUT: `${HOSTED_URL}/signout/`,
  AUTHENTICATION_TYPE: 'AWS_IAM' as const,

  /**
   * Add the details from the Pulumi output here, after running 'pulumi up'
   */
  USER_POOL_CLIENT_ID: "55f9h4kcr9nhjtuo0phsmegduj",
  USER_POOL_ID: "us-east-1_VjwavhTxj",
  IDENTITY_POOL_ID: "us-east-1:6275b645-653a-4d2e-a9d4-ff48e7fd277a",
  GRAPHQL_ENDPOINT: 'https://ufbxxufmwncnxdtwvx4kwdiiru.appsync-api.eu-west-1.amazonaws.com/graphql', // still in saas template not change though
};

export default configDevelopment;

