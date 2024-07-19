import Link from 'next/link'

export default function NotFound() {
  return (
    <main id="not-found">
      <h1>404</h1>
      <p>Cette page n&apos;existe pas...</p>
      <p>
        Retourner à l&apos;
        <Link href="/">accueil</Link>
      </p>
    </main>
  )
}
