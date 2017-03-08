// @flow

import T from 'i18n-react';
import * as ls from 'lib/local-storage';

const LANGUAGE_KEY = 'LANGUAGE_LS_KEY';
const DEFAULT_LANGUAGE = 'en';

export function set (lang: string) {
  ls.set(LANGUAGE_KEY, lang);
  T.setTexts(require(`./texts/${lang}.json`));
}

export function get (): string {
  const lang = ls.get(LANGUAGE_KEY);
  if (!lang || lang === 'undefined' || lang === 'null') {
    return DEFAULT_LANGUAGE;
  }

  return lang;
}

set(get());
