import jwt from 'jsonwebtoken';
import config from '@/config';
import { AuthToken, JoinUser } from '@/types';
import { TOKEN_TYPE } from '@/utils/constants';

import crypto from 'crypto';

const CIPHER_ALGORITHM = process.env.CIPHER_ALGORITHM as string;
const CIPHER_KEY = process.env.CIPHER_KEY as string;
const IV = process.env.IV as string;

export const verifyJWT = (token: string, type: AuthToken) => {
  return new Promise((resolve, reject) => {
    jwt.verify(
      token,
      type === TOKEN_TYPE.ACCESS ? config.jwtSecret : config.jwtRefreshSecret,
      (err, decoded) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(decoded);
      },
    );
  });
};

export const makeUserIcons = (users: JoinUser[]) => {
  const userIconList: JoinUser[] = users.slice(0, 3);
  return userIconList;
};

export const encrypt = (text: string): string => {
  const cipher = crypto.createCipheriv(CIPHER_ALGORITHM, CIPHER_KEY, IV);
  return cipher.update(text, 'utf8', 'hex') + cipher.final('hex');
};

export const decrypt = (text: string): string => {
  const decipher = crypto.createDecipheriv(CIPHER_ALGORITHM, CIPHER_KEY, IV);
  return decipher.update(text, 'hex', 'utf8') + decipher.final('utf8');
};

export const getNotNullDataInArray = (arr: any[]) => (property: string | number) => {
  return arr.filter((el) => {
    return el[property];
  });
};

export const isNumberTypeValue = (value: any): boolean => {
  const numberedValue = Number(value);
  if (!Number.isNaN(numberedValue)) {
    return true;
  }
  return false;
};
