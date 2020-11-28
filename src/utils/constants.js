export const ENVIRONMENT_ID = 'master';
export const BETWEEN = 'Between';
export const AT_LEAST = 'At least';
export const NOT_MORE_THAN = 'Not more than';
export const BYTES = 'Bytes';
export const KB = 'KB';
export const MB = 'MB';
export const DRAFT = 'Draft';
export const PUBLISHED = 'Published';
export const ARCHIVED = 'Archived';
export const LOCATIONS = ['en-US'];

// App
export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

// Auth
export const COGNITO_CLIENT_ID = process.env.REACT_APP_COGNITO_CLIENT_ID;
export const COGNITO_DOMAIN = process.env.REACT_APP_COGNITO_DOMAIN;
export const COGNITO_REDIRECT_URI = process.env.REACT_APP_COGNITO_REDIRECT_URI;
export const COGNITO_RESPONSE_TYPE =
  process.env.REACT_APP_COGNITO_RESPONSE_TYPE;
export const COGNITO_SCOPE = process.env.REACT_APP_COGNITO_SCOPE;
export const LOGIN_URL = `${COGNITO_DOMAIN}/login?client_id=${COGNITO_CLIENT_ID}&response_type=${COGNITO_RESPONSE_TYPE}&scope=${COGNITO_SCOPE}&redirect_uri=${COGNITO_REDIRECT_URI}`;
