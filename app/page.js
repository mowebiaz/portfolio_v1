import { HomeHero } from './components/HomeHero/HomeHero'
import { merienda } from './styles/fonts'
import './page.scss'

export default function Home() {
  return (
    <>
      <main id="home">
        <HomeHero />
        <section className="content">
          <p>This is my portfolio</p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu
            ullamcorper leo. Sed ac leo ut libero mattis blandit pellentesque ac
            elit. Donec fermentum tellus quis porta lobortis. Quisque
            ullamcorper nulla sed augue fermentum finibus. Quisque tempus, nibh
            vel tristique iaculis, eros lectus finibus leo, in fringilla magna
            turpis et dui. Etiam maximus velit dolor, eu laoreet quam
            scelerisque vitae. Nunc at eleifend eros. Nunc fringilla elit eget
            facilisis pretium. Ut ac eleifend enim, sed pharetra nisi. Vivamus
            mi ligula, dignissim nec blandit a, convallis in ipsum. Nulla
            imperdiet, felis sed congue consectetur, leo arcu lacinia augue, a
            venenatis diam orci vel est. Nam gravida purus non ligula pulvinar
            ultricies. Donec ipsum ipsum, finibus quis volutpat eu, elementum
            vitae metus. Sed congue nisl quis aliquam sollicitudin. Proin quis
            justo finibus, sodales ex sed, eleifend quam. Sed non orci nulla.
            Proin ex nisl, volutpat eu lacus eget, sagittis condimentum tortor.
            Cras nisi augue, pellentesque quis ipsum nec, eleifend tincidunt
            arcu. Curabitur sodales dictum augue quis placerat. Phasellus
            fringilla est in porttitor molestie. Aenean bibendum imperdiet
          </p>
        </section>
      </main>
    </>
  )
}
