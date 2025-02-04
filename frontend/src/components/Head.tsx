import NextHead from "next/head"

interface HeadProps {
  page: string;
  title: string;
  description: string;
}

export default function Head({page, description, title}: HeadProps) {
  return (
    <NextHead>
      <meta charSet='UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='description' content='' />
      <meta property='og:title' content={`${page} | ${title}`} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content='/assinatura.png' />
      <meta property='og:image:alt' content='' />
      <meta property='og:locale' content='pt_BR' />
      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://url.com' />
      <meta name='twitter:card' content='/assinatura.png' />
      <meta name='theme-color' content='#0099ff' />
      <link rel='canonical' href='https://url.com' />
      <link rel='icon' href='/assinatura.png' type='image/svg+xml' />
      <link rel='apple-touch-icon' href='/assinatura.png' />
      <link
         rel='manifest'
        crossOrigin='use-credentials'
        href='/manifest.json'
      />
      <title>
        {page} | {title}
      </title>
      <meta name='description' content={description} />
    </NextHead>
  )
}