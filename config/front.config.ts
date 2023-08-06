import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export const NEXT_CLIENT_ID_SPOTIFY = publicRuntimeConfig.NEXT_CLIENT_ID_SPOTIFY || '';
export const NEXT_CLIENT_SECRET_SPOTIFY = publicRuntimeConfig.NEXT_CLIENT_SECRET_SPOTIFY || '';
export const NEXT_JWT_SECRET = publicRuntimeConfig.NEXT_JWT_SECRET || '';
