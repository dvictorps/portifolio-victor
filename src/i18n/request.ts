import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

// Can be imported from a shared config
const locales = ['en', 'pt'];
const defaultLocale = 'en';

export default getRequestConfig(async () => {
  // Obtain locale from cookies, default to 'en'
  const cookieStore = await cookies(); // Await the promise
  let locale = cookieStore.get('NEXT_LOCALE')?.value || defaultLocale;

  // Validate that the locale is valid
  if (!locales.includes(locale)) {
    console.warn(`Locale "${locale}" from cookie/default is not supported, resetting to "${defaultLocale}".`);
    locale = defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
}); 